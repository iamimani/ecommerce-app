export default function Stats() {
  const stats = [
    { number: "5+", label: "Years of Beauty Expertise" },
    { number: "20K+", label: "Happy Clients" },
    { number: "500+", label: "Premium Wigs & Braids" },
    { number: "15+", label: "Beauty Awards" },
  ];

  return (
    <section className="w-full bg-amber-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
              {item.number}
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
