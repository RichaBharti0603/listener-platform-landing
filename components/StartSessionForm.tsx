"use client";

export default function StartSessionForm() {
  return (
    <section id="start" className="px-6 py-28 bg-white">
      <h2 className="text-2xl font-medium text-center mb-4 text-slate-900">
        Start Your Session
      </h2>

      <p className="text-center text-sm text-slate-600 mb-12">
        Your information is private and used only to connect you with a listener.
      </p>

      <form className="max-w-md mx-auto space-y-6 bg-blue-50 p-10 rounded-2xl border shadow-sm">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="flex items-start text-xs text-slate-600">
          <input type="checkbox" className="mt-1 mr-2 accent-blue-600" />
          I agree to the Terms & Privacy Policy
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-md"
        >
          Proceed to Payment
        </button>
      </form>
    </section>
  );
}
