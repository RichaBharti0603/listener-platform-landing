export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <h3 className="text-3xl font-semibold text-center mb-12">
        How it works
      </h3>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          ["Register", "Tell us when you want to talk"],
          ["Pay Securely", "Pay per session, no subscription"],
          ["Talk Freely", "Video or audio, your choice"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-white rounded-2xl p-6 shadow hover:-translate-y-1 transition"
          >
            <h4 className="font-semibold mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
