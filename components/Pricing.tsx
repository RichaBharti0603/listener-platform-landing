export default function Pricing() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-sky-50 to-white text-center">
      <h2 className="text-2xl font-medium mb-12 text-slate-900">
        Simple, Pay-Per-Session Pricing
      </h2>

      <div className="max-w-sm mx-auto bg-white border rounded-2xl p-10 shadow-sm">
        <p className="text-4xl font-semibold text-blue-600 mb-2">
          ₹299
        </p>
        <p className="text-slate-600 mb-8">
          30-minute one-on-one session
        </p>

        <ul className="text-sm text-slate-600 space-y-3 mb-10 text-left">
          <li>✓ Private video call</li>
          <li>✓ No subscription</li>
          <li>✓ Pay only when needed</li>
        </ul>

        <a
          href="#start"
          className="inline-block w-full bg-blue-600 text-white py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition"
        >
          Start Now
        </a>
      </div>
    </section>
  );
}
