function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-slate-200 pb-4">
      <h4 className="font-medium text-slate-800 mb-2">
        {question}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">
        {answer}
      </p>
    </div>
  );
}

export default function AnyQuestions() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/questions-image.png"
            alt="Calm thoughtful person"
            className="max-w-sm w-full rounded-3xl shadow-lg"
          />
        </div>

        {/* Questions */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-textdark mb-8">
            You might be wondering…
          </h2>

          <div className="space-y-6">
            <FAQItem
              question="Is this therapy?"
              answer="No. This is not therapy or counseling. It’s a space for open conversation with a trained listener — no diagnosis, no treatment."
            />

            <FAQItem
              question="Will I be judged or analyzed?"
              answer="Never. Listeners are here to listen, not interpret, label, or fix you."
            />

            <FAQItem
              question="Are my conversations private?"
              answer="Yes. Conversations are private and not shared. You control how much you want to say."
            />

            <FAQItem
              question="Who are the listeners?"
              answer="Listeners are carefully onboarded individuals trained in empathetic listening and emotional boundaries."
            />

            <FAQItem
              question="Do I have to commit to multiple sessions?"
              answer="No commitment. You pay per session and talk only when you feel the need."
            />
          </div>
        </div>

      </div>
    </section>
  );
}
