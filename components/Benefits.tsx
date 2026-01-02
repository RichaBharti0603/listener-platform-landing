export default function Benefits() {
  return (
    <section className="bg-softbg py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-textdark mb-6 leading-snug">
            A space designed for comfort, not judgment
          </h2>

          <p className="text-slate-600 mb-8 max-w-md">
            This is not therapy. It’s simply a human conversation — calm,
            respectful, and on your terms.
          </p>

          <ul className="space-y-5">
            {[
              "Speak freely without being interrupted",
              "No diagnosis, labels, or pressure to explain",
              "Stay anonymous if that feels safer",
              "Pay only when you choose to talk",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-1 text-secondary text-lg">✔</span>
                <span className="text-slate-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image side */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/secondimage.png"
            alt="Calm supportive conversation"
            className="
              w-full
              max-w-sm
              md:max-w-md
              rounded-3xl
              shadow-lg
              opacity-95
            "
          />
        </div>

      </div>
    </section>
  );
}
