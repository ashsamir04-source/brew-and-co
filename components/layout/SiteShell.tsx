"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReserveTableModal from "@/components/ui/ReserveTableModal";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function handleOpen() {
      setIsModalOpen(true);
    }
    window.addEventListener("brew:open-modal", handleOpen);
    return () => window.removeEventListener("brew:open-modal", handleOpen);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ReserveTableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
