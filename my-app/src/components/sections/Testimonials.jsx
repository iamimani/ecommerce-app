export default function Testimonials() {
    const testimonials = [
        {
            name: "Michelle O.",
            role: "Model & Influencer",
            text: "GlamTowers completely transformed my look. Their lace wigs are unbelievably natural — I get compliments every day!",
            img: "https://images.unsplash.com/photo-1579036788571-f23b1318789e?auto=format&fit=crop&w=600&q=60",
        },

        {
            name: "Sandra K.",
            role: "Hair Stylist",
            text: "I only use GlamTowers products in my salon. The quality of their braids and oils keeps my clients glowing and happy.",
            img: "https://plus.unsplash.com/premium_photo-1664048712505-17696076685a?auto=format&fit=crop&w=600&q=60",
        },

        {
            name: "Faith M.",
            role: "Customer",
            text: "My experience was amazing. The packaging, the feel, the texture — everything screams premium!",
            img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
        },
    ];

    return (
        <section className="w-full bg-amber-50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-12">
                    What Our Clients Say
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-amber-100"
                                />
                                <p className="text-gray-700 italic text-sm md:text-base">
                                    “{item.text}”
                                </p>
                                <div>
                                    <h4 className="font-semibold text-amber-800">{item.name}</h4>
                                    <p className="text-gray-600 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
