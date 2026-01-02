export default function Hero() {
  return (
   <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-[#f5f7fb]">
  <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
        You don’t have to go through it alone.
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-xl">
        Talk to a real listener. No judgement. No pressure. Just someone who listens
        when you need it the most.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
          Book a Session
        </button>

        <button className="px-8 py-3 bg-white text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition">
          How it Works
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="/hero-listener.jpg"
        alt="Listening support"
        className="w-full max-w-md rounded-2xl shadow-lg"
      />
    </div>

  </div>
</section>

  );
}
