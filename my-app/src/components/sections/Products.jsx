export default function Products() {
    const products = [
        {
            name: "Royal Lace Front Wig",
            desc: "100% human hair with a natural hairline and silky finish.",
            price: "$189",
            img: "https://images.unsplash.com/photo-1605180427725-95e306fc0e9a?auto=format&fit=crop&w=600&q=60", // new wig image
        },
        {
            name: "Braids & Extensions",
            desc: "Explore endless styles and textures with our quality braids.",
            price: "$20",
            img: "https://images.unsplash.com/photo-1648010035195-6b0a56e14667?auto=format&fit=crop&w=600&q=60", // updated braids image
        },
        {
            name: "Argan Glow Hair Oil",
            desc: "Nourish and revitalize dull hair with premium Argan extracts.",
            price: "$39",
            img: "https://images.unsplash.com/photo-1748639582818-391e2849beca?auto=format&fit=crop&w=600&q=60",
        },
        {
            name: "Silk Edge Brush Set",
            desc: "Perfect edges every time with our luxury tool kit.",
            price: "$25",
            img: "https://images.unsplash.com/photo-1736753365978-0b5090f90095?auto=format&fit=crop&w=600&q=60",
        },
    ];

    return (
        <section className="w-full bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-12">
                    Featured Products
                </h2>

                {/* Product Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className="bg-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6 space-y-2 text-left">
                                <h3 className="text-lg font-semibold text-amber-800">
                                    {item.name}
                                </h3>
                                <p className="text-gray-700 text-sm">{item.desc}</p>
                                <p className="text-amber-700 font-semibold text-lg mt-2">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
