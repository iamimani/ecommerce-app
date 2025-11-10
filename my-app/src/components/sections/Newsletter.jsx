export default function Newsletter() {
  return (
    <section className="w-full bg-amber-700 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6 space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Get 10% Off Your First Purchase
        </h2>
        <p className="text-amber-100 max-w-2xl mx-auto">
          Join our GlamTowers Beauty family and be the first to receive exclusive offers, 
          new arrivals, and beauty tips straight to your inbox.
        </p>

        {/* Email Input */}
        <form className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-lg w-full sm:w-2/3 text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
