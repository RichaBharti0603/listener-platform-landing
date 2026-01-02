export default function SpeakerForm() {
  return (
    <section id="start" className="py-24">
      <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">
          Start a session
        </h3>

        <form className="space-y-4">
          <input
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            placeholder="Email or phone"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            className="w-full bg-primary text-white py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Continue to payment
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Your information is private and secure.
        </p>
      </div>
    </section>
  );
}
