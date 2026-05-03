export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Startup Finance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Know Exactly When Your{" "}
          <span className="text-[#58a6ff]">Runway Ends</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Model your burn rate, hiring plans, and revenue growth scenarios in real time.
          Stop guessing — start planning with confidence.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Mock dashboard preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#f85149]"></div>
            <div className="w-3 h-3 rounded-full bg-[#e3b341]"></div>
            <div className="w-3 h-3 rounded-full bg-[#3fb950]"></div>
            <span className="ml-2 text-xs text-[#6e7681]">runway-calculator.app</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
              <p className="text-xs text-[#6e7681] mb-1">Current Runway</p>
              <p className="text-2xl font-bold text-[#3fb950]">14 mo</p>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
              <p className="text-xs text-[#6e7681] mb-1">Monthly Burn</p>
              <p className="text-2xl font-bold text-[#f85149]">$42k</p>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
              <p className="text-xs text-[#6e7681] mb-1">Break-even</p>
              <p className="text-2xl font-bold text-[#58a6ff]">8 mo</p>
            </div>
          </div>
          <div className="h-24 flex items-end gap-1">
            {[90,82,74,68,60,52,46,38,30,24,16,8,2].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, backgroundColor: h > 30 ? "#3fb950" : h > 15 ? "#e3b341" : "#f85149", opacity: 0.8 }}
              ></div>
            ))}
          </div>
          <p className="text-xs text-[#6e7681] mt-2 text-center">Cash remaining over 13 months</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited runway scenarios",
              "Hiring plan modeling",
              "Revenue growth projections",
              "Exportable PDF reports",
              "Real-time burndown charts",
              "Investor-ready summaries"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. Secure checkout via Lemon Squeezy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">What inputs does the runway calculator use?</p>
            <p className="text-sm text-[#8b949e]">You enter your current cash balance, monthly expenses, planned hires, and expected revenue growth. The tool models multiple scenarios so you can see best, base, and worst-case runways side by side.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Can I share projections with investors?</p>
            <p className="text-sm text-[#8b949e]">Yes. Every scenario can be exported as a clean PDF report formatted for investor meetings and board decks.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">How do I cancel my subscription?</p>
            <p className="text-sm text-[#8b949e]">Cancel anytime from your billing portal — no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Runway Calculator. All rights reserved.
      </footer>
    </main>
  );
}
