---
name: image-optimizer
description: Download an image from a URL, resize it to web-ready dimensions, and convert it to WebP. Saves the result to the project's public/images/ folder for local serving.
---

Download, resize, and convert an image from a URL to WebP format, saving it to the project's `public/images/` folder. Use this skill to bring stock images (Pexels, Unsplash, etc.) into the project locally instead of serving them from an external CDN at runtime.

## Arguments

Parse from the invocation args string: `<url> [output-name] [size-preset]`

- **url** (required): Full URL of the image to download
- **output-name** (optional): Base filename without extension. If omitted, derive from the URL — take the last path segment, strip the extension and any query string, and slugify (lowercase, replace non-alphanumeric characters with hyphens, collapse and trim hyphens)
- **size-preset** (optional): One of `hero`, `large`, `medium`, `thumb`, `full`. Defaults to `large`.

### Size presets

| Preset  | Max width | Typical use                     |
|---------|-----------|---------------------------------|
| `hero`  | 1920 px   | Full-bleed hero / background    |
| `large` | 1280 px   | Feature images, banners         |
| `medium`| 800 px    | Content images, cards           |
| `thumb` | 400 px    | Thumbnails, small cards         |
| `full`  | no resize | WebP conversion only            |

Resize uses `fit: 'inside'` — the image scales down proportionally to fit within the max-width without cropping or enlarging.

## Steps

### 1. Validate and prepare

Confirm a URL was provided. If not, print usage and stop:
```
Usage: /image-optimizer <url> [output-name] [size-preset]
Example: /image-optimizer https://images.pexels.com/photos/123/photo.jpg coffee-hero hero
```

Resolve the output name:
- If provided, use it as-is (slugify if it contains spaces or special characters)
- If omitted, extract from the URL path: take the filename portion, strip extension and query string, then slugify

Resolve the max width from the preset:
- `hero` → 1920, `large` → 1280, `medium` → 800, `thumb` → 400, `full` → null (skip resize)

### 2. Check for sharp

Run this PowerShell command from the project directory:
```powershell
node -e "require('sharp')" 2>$null; $LASTEXITCODE
```
If the exit code is non-zero, install sharp without prompting:
```powershell
npm install --save-dev sharp
```

### 3. Ensure output directory exists

```powershell
New-Item -ItemType Directory -Force -Path "public\images" | Out-Null
```

### 4. Download the image

```powershell
Invoke-WebRequest -Uri "<url>" -OutFile "_img_download_temp" -UseBasicParsing
```

If the download fails (non-200 status or network error), report the error, delete any partial temp file, and stop.

### 5. Write the processing script

Write the following content to `_img_process_temp.mjs`, substituting `OUTPUT_PATH` and `MAX_WIDTH` with the actual resolved values:

```js
import sharp from 'sharp';
import { statSync } from 'fs';

const input = '_img_download_temp';
const output = 'public/images/<output-name>.webp';
const maxWidth = <maxWidth>; // null for 'full' preset

async function run() {
  let pipeline = sharp(input, { failOn: 'none' });
  if (maxWidth !== null) {
    pipeline = pipeline.resize(maxWidth, null, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  const info = await pipeline.webp({ quality: 85 }).toFile(output);
  const { size } = statSync(output);
  console.log(JSON.stringify({
    width: info.width,
    height: info.height,
    fileSizeKB: Math.round(size / 1024),
  }));
}

run().catch(err => { console.error(err.message); process.exit(1); });
```

Then run it:
```powershell
node _img_process_temp.mjs
```

Capture the JSON output line to extract width, height, and fileSizeKB.

### 6. Clean up temp files

```powershell
Remove-Item -Force "_img_download_temp", "_img_process_temp.mjs" -ErrorAction SilentlyContinue
```

Always run this step, even if processing failed.

### 7. Report results

Tell the user:
- Saved file: `public/images/<output-name>.webp`
- Dimensions: `<width> × <height> px`
- File size: `<fileSizeKB> KB`
- How to use it in the app:
  ```jsx
  // Next.js Image component (recommended)
  import Image from 'next/image';
  <Image src="/images/<output-name>.webp" alt="..." width={<width>} height={<height>} />

  // Or as a plain img tag
  <img src="/images/<output-name>.webp" alt="..." />
  ```

## Error handling

- **Download fails**: Report HTTP status or error message, clean up temp file, stop.
- **sharp can't decode file**: The URL may not point to a supported image format. Report the sharp error, clean up, stop.
- **sharp not found after install**: Report and stop — manual intervention needed.
- On any error, always attempt the cleanup in step 6 before stopping.
