export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empower Your Look with <br /> Premium Hair Products
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover wigs, braids, and haircare essentials made for modern beauty.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium">
          Shop Now
        </button>
      </div>
    </section>
  );
}