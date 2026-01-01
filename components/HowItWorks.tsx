export default function HowItWorks() {
  return (
    <section className="px-6 py-24 bg-white">
      <h2 className="text-2xl font-medium text-center mb-16 text-slate-900">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Share Your Details",
            desc: "Tell us how to reach you.",
          },
          {
            title: "Pay for a Session",
            desc: "Secure one-time payment.",
          },
          {
            title: "Talk to a Listener",
            desc: "Private video conversation.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border bg-blue-50/40 hover:bg-blue-50 transition"
          >
            <div className="w-10 h-10 mb-5 rounded-full bg-blue-600/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
            </div>

            <h3 className="font-medium mb-2 text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
