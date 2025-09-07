import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full flex items-center justify-center z-50">
      <div className="w-full flex justify-between items-center p-4 bg-black/40 backdrop-blur-md">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-300">
          Halim Luman
        </h1>
        <Link
          href="/contact"
          className="text-xs md:text-sm border px-3 py-1 rounded-md hover:bg-gray-300 hover:text-black duration-500">
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
