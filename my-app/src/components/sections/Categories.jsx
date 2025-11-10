export default function Categories() {
    const categories = [
        {
            name: "Luxury Wigs",
            desc: "Handcrafted human and synthetic wigs for every occasion.",
            img: "https://images.unsplash.com/photo-1663582816182-15cf69d87665?auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Braids & Extensions",
            desc: "Explore endless styles and textures with our quality braids.",
            img: "https://images.unsplash.com/photo-1648010035195-6b0a56e14667?auto=format&fit=crop&w=600&q=60",
        },
        {
            name: "Hair Oils & Care",
            desc: "Revitalize and nourish your hair with premium hair oils.",
            img: "https://images.unsplash.com/photo-1611073616241-108c02a5e77f?auto=format&fit=crop&w=600&q=60", // your provided Unsplash link for this category
        },
        {
            name: "Beauty Tools",
            desc: "Combs, brushes, and salon-grade tools for perfect styling.",
            img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=60",
        },
    ];

    return (
        <section className="w-full bg-amber-50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-12">
                    Explore Our Collections
                </h2>

                {/* Category Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 space-y-2 text-left">
                                <h3 className="text-lg font-semibold text-amber-800">
                                    {item.name}
                                </h3>
                                <p className="text-gray-700 text-sm">{item.desc}</p>
                                <button className="mt-3 text-sm font-semibold text-amber-700 hover:text-amber-800 transition">
                                    Shop Now →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
