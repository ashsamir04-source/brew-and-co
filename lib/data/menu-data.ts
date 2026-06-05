export type MenuCategory =
  | "Espresso Drinks"
  | "Cold Drinks"
  | "Pastries"
  | "Sandwiches";

export type MenuBadge = "Popular" | "House Favorite" | "New";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge?: MenuBadge;
  image: string;
}

export const menuItems: MenuItem[] = [
  // ── Espresso Drinks ───────────────────────────────────────
  {
    id: "espresso",
    category: "Espresso Drinks",
    name: "Espresso",
    description:
      "Classic double shot pulled to order. Intense crema with notes of dark chocolate and toasted walnut.",
    price: 3.5,
    image: "/images/espresso.webp",
  },
  {
    id: "cortado",
    category: "Espresso Drinks",
    name: "Cortado",
    description:
      "Equal parts ristretto and lightly steamed whole milk. No foam — just balance.",
    price: 4.5,
    image: "/images/cortado.webp",
  },
  {
    id: "caramel-flat-white",
    category: "Espresso Drinks",
    name: "Caramel Flat White",
    description:
      "Double ristretto over silky microfoamed oat milk with a slow caramel drizzle.",
    price: 6.5,
    badge: "Popular",
    image: "/images/caramel-flat-white.webp",
  },
  {
    id: "hazelnut-latte",
    category: "Espresso Drinks",
    name: "Hazelnut Latte",
    description:
      "Two shots of espresso with steamed oat milk and our house-made hazelnut syrup.",
    price: 7.0,
    image: "/images/hazelnut-latte.webp",
  },
  {
    id: "dirty-chai",
    category: "Espresso Drinks",
    name: "Dirty Chai",
    description:
      "Bold spiced chai concentrate pulled through a double shot of espresso. Warming and complex.",
    price: 7.5,
    badge: "House Favorite",
    image: "/images/dirty-chai.webp",
  },
  {
    id: "vanilla-americano",
    category: "Espresso Drinks",
    name: "Vanilla Americano",
    description:
      "Long black with a touch of house vanilla syrup. Clean and approachable.",
    price: 5.5,
    image: "/images/vanilla-americano.webp",
  },

  // ── Cold Drinks ───────────────────────────────────────────
  {
    id: "cold-brew",
    category: "Cold Drinks",
    name: "Cold Brew",
    description:
      "18-hour slow-steep Colombian blend. Smooth body, low acidity, best served straight or over ice.",
    price: 5.5,
    badge: "Popular",
    image: "/images/cold-brew.webp",
  },
  {
    id: "iced-caramel-latte",
    category: "Cold Drinks",
    name: "Iced Caramel Latte",
    description:
      "Espresso chilled over ice with oat milk and a generous swirl of salted caramel.",
    price: 7.0,
    image: "/images/iced-caramel-latte.webp",
  },
  {
    id: "matcha-latte",
    category: "Cold Drinks",
    name: "Matcha Latte",
    description:
      "Ceremonial-grade Japanese matcha whisked smooth with steamed oat milk and a drizzle of honey.",
    price: 7.0,
    badge: "House Favorite",
    image: "/images/matcha-latte.webp",
  },
  {
    id: "nutella-mudslide",
    category: "Cold Drinks",
    name: "Nutella Mudslide",
    description:
      "Espresso blended with hazelnut praline and dark chocolate. Finished with whipped cream and cocoa dust.",
    price: 12.0,
    badge: "New",
    image: "/images/nutella-mudslide.webp",
  },
  {
    id: "mango-passionfruit-iced-tea",
    category: "Cold Drinks",
    name: "Mango Passionfruit Iced Tea",
    description:
      "House-brewed hibiscus tea shaken with mango puree and fresh passionfruit. Served over crushed ice.",
    price: 6.0,
    image: "/images/mango-passionfruit-iced-tea.webp",
  },

  // ── Pastries ──────────────────────────────────────────────
  {
    id: "almond-croissant",
    category: "Pastries",
    name: "Almond Croissant",
    description:
      "Twice-baked with rich frangipane filling and a shower of toasted flaked almonds.",
    price: 5.5,
    badge: "House Favorite",
    image: "/images/almond-croissant.webp",
  },
  {
    id: "pain-au-chocolat",
    category: "Pastries",
    name: "Pain au Chocolat",
    description:
      "Forty-eight layers of laminated butter dough wrapped around two batons of Valrhona dark chocolate.",
    price: 5.0,
    image: "/images/pain-au-chocolat.webp",
  },
  {
    id: "banana-bread",
    category: "Pastries",
    name: "Banana Bread",
    description:
      "Dense, moist loaf with walnut pieces, warm spice, and a caramelised top. Made fresh each morning.",
    price: 4.5,
    badge: "Popular",
    image: "/images/banana-bread.webp",
  },
  {
    id: "cinnamon-morning-bun",
    category: "Pastries",
    name: "Cinnamon Morning Bun",
    description:
      "Laminated dough rolled with brown sugar, cinnamon, and citrus zest, then glazed with orange icing.",
    price: 6.0,
    image: "/images/cinnamon-morning-bun.webp",
  },
  {
    id: "blueberry-lemon-muffin",
    category: "Pastries",
    name: "Blueberry Lemon Muffin",
    description:
      "Bursting with seasonal blueberries and lifted with lemon zest. Crowned with a butter crumble top.",
    price: 4.0,
    image: "/images/blueberry-lemon-muffin.webp",
  },

  // ── Sandwiches ────────────────────────────────────────────
  {
    id: "turkey-avocado",
    category: "Sandwiches",
    name: "Turkey & Avocado on Sourdough",
    description:
      "Shaved turkey breast with smashed avocado, baby arugula, and whole-grain mustard on toasted sourdough.",
    price: 13.0,
    badge: "Popular",
    image: "/images/turkey-avocado.webp",
  },
  {
    id: "caprese-focaccia",
    category: "Sandwiches",
    name: "Caprese Focaccia",
    description:
      "Fresh buffalo mozzarella, heirloom tomato, and basil pesto pressed into house-baked rosemary focaccia.",
    price: 12.0,
    badge: "House Favorite",
    image: "/images/caprese-focaccia.webp",
  },
  {
    id: "smoked-salmon-bagel",
    category: "Sandwiches",
    name: "Smoked Salmon Bagel",
    description:
      "Scottish smoked salmon with whipped cream cheese, capers, red onion, and fresh dill on a sesame bagel.",
    price: 14.0,
    image: "/images/smoked-salmon-bagel.webp",
  },
  {
    id: "egg-gruyere-croissant",
    category: "Sandwiches",
    name: "Egg & Gruyère Croissant",
    description:
      "Soft scrambled eggs and melted Gruyère with chive butter tucked inside a warm, flaky croissant.",
    price: 11.0,
    badge: "Popular",
    image: "/images/egg-gruyere-croissant.webp",
  },
];

export const categories: MenuCategory[] = [
  "Espresso Drinks",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
];
