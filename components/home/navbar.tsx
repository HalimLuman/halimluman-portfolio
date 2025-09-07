import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 lg:px-12 h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-wide">
          <span className="text-amber-600">Halim</span>Luman
        </Link>

        {/* Hamburger Menu */}
        <button
          className="p-2 rounded-md hover:bg-white/5 transition"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
