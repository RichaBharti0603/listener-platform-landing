export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-slate-600">

        {/* Brand */}
        <div>
          <img
            src="/logo.png"
            alt="Platform logo"
            className="h-10 mb-4"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            A safe space for honest conversation.
            No judgment. No pressure. Just listening.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-medium text-slate-800 mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Reassurance */}
        <div>
          <h4 className="font-medium text-slate-800 mb-3">Your safety matters</h4>
          <p className="text-sm leading-relaxed">
            Conversations are private. Payments are secure.
            You decide how and when you talk.
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-slate-500 pb-6">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}
