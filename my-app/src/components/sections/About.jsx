export default function About() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1608600927239-e968bee5e0f9?auto=format&fit=crop&w=600&q=60"
            alt="Natural hair styling"
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700">
            We Create Beauty with Passion and Precision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-amber-700">GlamTowers Beauty</span>, 
            we believe every strand tells a story. From premium human hair wigs 
            to synthetic braids and nourishing care products, we’re redefining 
            what beauty means — authenticity, confidence, and style. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to help every woman feel radiant in her natural power. 
            Whether you're styling for everyday elegance or bold creativity, 
            GlamTowers ensures unmatched quality and comfort in every look.
          </p>
          <button className="bg-amber-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
