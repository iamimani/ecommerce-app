export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-700">GlamTowers</h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-amber-700 transition">Home</a>
          <a href="#" className="hover:text-amber-700 transition">About</a>
          <a href="#" className="hover:text-amber-700 transition">Products</a>
          <a href="#" className="hover:text-amber-700 transition">Contact</a>
        </nav>

        {/* CTA */}
        <button className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition">
          Shop Now
        </button>
      </div>
    </header>
  );
}
