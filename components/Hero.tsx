import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-slate-900">
            Someone Is Here to Listen
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
            Talk anonymously with a trained listener in a private, one-on-one
            video session. No judgment. No advice. Just listening.
          </p>

          <a
            href="#start"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-sm"
          >
            Start a Session
          </a>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-2xl opacity-60" />
          <Image
            src="/hero-listener.jpg"
            alt="A calm, supportive conversation"
            width={520}
            height={520}
            className="relative rounded-3xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
