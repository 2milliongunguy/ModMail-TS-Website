export default function Home() {
  const features = [
    { icon: "✉️", title: "Private ticket threads", desc: "Each DM spawns a private channel visible only to your staff — no noise in public channels." },
    { icon: "🏷️", title: "Custom categories", desc: "Route tickets by type — ban appeals, reports, support — with auto-assignment rules." },
    { icon: "⚡", title: "Instant staff pings", desc: "Staff are notified the moment a new ticket opens. Response times drop dramatically." },
    { icon: "📝", title: "Saved replies", desc: "Maintain a library of canned responses. Fire them with a slash command in seconds." },
    { icon: "📋", title: "Ticket transcripts", desc: "Every closed ticket is automatically logged with a full exportable transcript." },
    { icon: "🔒", title: "Role-based access", desc: "Fine-grained permissions per category. Control exactly who sees and replies to what." },
    { icon: "👁️", title: "All-in-one solution", desc: "The ModmailTS has a logviewer included within the repository, which helps you seeing tickets." },
    { icon: "⚙️", title: "Highly customizable", desc: "Configure every message, embed color, and even the bot's name and avatar to fit your server's style." },
    { icon: "💻", title: "Open source & free", desc: "ModMailTS is completely free to use and open source. No hidden fees or paid tiers for core features." },
  ];

  const steps = [
    { n: "01", title: "Invite the bot", desc: 'Click "Add to Discord" and grant ModMail the permissions it needs on your server.' },
    { n: "02", title: "Run /setup", desc: "A single command walks you through configuring channels, categories, and staff roles." },
    { n: "03", title: "Users DM the bot", desc: "Anyone sends the bot a DM — a private ticket thread is created instantly for your team." },
    { n: "04", title: "Reply & close", desc: "Staff reply in the thread. Run /close when done. Transcript is saved automatically." },
  ];

  const faqs = [
    { q: "Is ModMail free?", a: "Yes — completely. ModMail is open source and free to use via our hosted version, or you can self-host it yourself. No paid tiers for core functionality." },
    { q: "Do users need to be in my server to open a ticket?", a: "By default, yes. You can optionally allow anyone to DM the bot, which is useful for ban appeals from removed members." },
    { q: "Where are ticket transcripts stored?", a: "Transcripts are stored securely and are accessible only to your server's staff. You can also configure an automatic log channel where every closed ticket is posted." },
    { q: "Can I run ModMail on multiple servers?", a: "Our hosted version supports one server per instance. Self-hosters can run as many instances as their infrastructure supports." },
    { q: "Can I customize the bot's messages and branding?", a: "Yes. Bot name, avatar, embed colors, and every message the bot sends — including opening messages and close confirmations — are fully configurable." },
  ];

  return (
    <>
      <div className="bg-[#080c12] text-white min-h-screen">

        <nav className="sticky top-0 z-50 border-b border-white/6 backdrop-blur-md bg-[#080c12]/85">
          <div className="max-w-270 mx-auto px-6 h-14 flex items-center justify-between">

            <div className="flex items-center gap-2">
              <span className="font-mono-jb font-semibold text-[0.95rem] text-white tracking-tight">ModmailTS</span>
            </div>

            <div className="flex items-center gap-7">
              {[["#features", "Features"], ["#how-it-works", "How it works"], ["#faq", "FAQ"], ["https://docs.modmail.dev", "Docs"]].map(([href, label]) => (
                <a key={label} href={href} className="text-white/45 text-sm font-medium hover:text-white/90 transition-colors duration-150">
                  {label}
                </a>
              ))}
              <a
                href="#"
                className="font-mono-jb h-8.5 px-4 rounded-[7px] bg-[#2c83d4] text-white text-[0.78rem] font-semibold flex items-center tracking-wide hover:opacity-85 hover:-translate-y-px transition-all duration-150"
              >
                Add to Discord →
              </a>
            </div>

          </div>
        </nav>

        <section className="graph-bg relative min-h-[88vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-1"
            style={{ background: "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(44,131,212,0.13) 0%, transparent 70%)" }}
          />

          <div className="max-w-270 mx-auto px-6 pt-32 pb-24 relative z-1 w-full text-center">

            <h1 className="text-[clamp(2.4rem,5.5vw,3.75rem)] font-bold tracking-[-0.04em] leading-[1.08] mb-6 text-white">
              Modmail for Discord,<br />
              <span className="text-[#2c83d4]">done right.</span>
            </h1>

            <p className="text-[1.05rem] text-white/45 leading-relaxed max-w-130 mx-auto mb-10 font-light">
              A new version of the modmail bot, rewritten in typescript, opensourced and free.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="#"
                className="font-mono-jb h-11.5 px-6 rounded-[9px] bg-[#2c83d4] text-white text-sm font-semibold inline-flex items-center gap-2 tracking-wide hover:opacity-85 hover:-translate-y-px transition-all duration-150"
              >
                Add to Discord
              </a>
              <a
                href="https://github.com/2milliongunguy/Modmail-TS"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-jb h-11.5 px-5 rounded-[9px] border border-white/12 text-white/60 text-sm font-medium inline-flex items-center gap-2 tracking-wide hover:border-white/30 hover:text-white transition-all bg-white/5 backdrop-blur-xl hover:bg-white/10 duration-150"
              >
                GitHub
              </a>
            </div>

          </div>
        </section>

        <section id="features" className="py-28 px-6 border-t border-white/6">
          <div className="max-w-270 mx-auto">

            <div className="mb-12">
              <span className="font-mono-jb text-[0.72rem] font-semibold text-[#2c83d4] tracking-widest uppercase">Features</span>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] mt-2 leading-tight">
                Built for how moderation<br />actually works.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/6 rounded-xl overflow-hidden">
              {features.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  className={[
                    "p-7 bg-white/2.5 hover:bg-[#2c83d4]/4 hover:border-[#2c83d4]/25 hover:-translate-y-0.5 transition-all duration-200",
                    i % 3 !== 2 ? "border-r border-white/6" : "",
                    i < 3 ? "border-b border-white/6" : "",
                  ].join(" ")}
                >
                  <div className="text-2xl mb-4">{icon}</div>
                  <h3 className="font-semibold text-[0.95rem] text-white tracking-tight mb-2">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-normal">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section id="how-it-works" className="py-28 px-6 border-t border-white/6 bg-white/1.2">
          <div className="max-w-270 mx-auto">

            <div className="mb-14">
              <span className="font-mono-jb text-[0.72rem] font-semibold text-[#2c83d4] tracking-widest uppercase">How it works</span>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] mt-2 leading-tight">
                From zero to running<br />in under a minute.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map(({ n, title, desc }) => (
                <div key={n}>
                  <div className="font-mono-jb text-[0.7rem] font-semibold text-[#2c83d4] tracking-wider mb-4">{n}</div>
                  <h3 className="font-semibold text-[0.95rem] text-white tracking-tight mb-2">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-normal">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section id="faq" className="py-28 px-6 border-t border-white/6">
          <div className="max-w-170 mx-auto">

            <div className="mb-12">
              <span className="font-mono-jb text-[0.72rem] font-semibold text-[#2c83d4] tracking-widest uppercase">FAQ</span>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] mt-2 leading-tight">
                Common questions
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="rounded-xl border border-white/7 overflow-hidden bg-white/2 transition-colors duration-200 cursor-pointer"
                >
                  <summary className="px-5 py-4 flex justify-between items-center gap-3 select-none list-none">
                    <span className="font-medium text-[0.9rem] text-white/85">{q}</span>
                    <span className="faq-plus text-[#2c83d4] text-xl leading-none shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3.5 text-white/40 text-sm leading-relaxed border-t border-white/5">
                    {a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        <section className="px-6 pt-8 pb-28 border-t border-white/6">
          <div className="max-w-270 mx-auto">
            <div className="rounded-2xl border border-[#2c83d4]/20 bg-[#2c83d4]/5 py-16 px-8 text-center">
              <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold tracking-[-0.03em] mb-3 leading-tight">
                Ready to improve your<br />community's support?
              </h2>
              <p className="text-white/40 text-[0.95rem] mb-8 font-normal">
                Join 12,000+ servers already using ModMail. Free, always.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="#"
                  className="font-mono-jb h-11.5 px-6 rounded-[9px] bg-[#2c83d4] text-white text-sm font-semibold inline-flex items-center gap-2 tracking-wide hover:opacity-85 hover:-translate-y-px transition-all duration-150"
                >
                  Add to Discord →
                </a>
                <a
                  href="https://github.com/2milliongunguy/Modmail-TS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-jb h-11.5 px-5 rounded-[9px] border border-white/12 text-white/60 text-sm font-medium inline-flex items-center gap-2 tracking-wide hover:border-white/30 hover:text-white transition-all duration-150"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/6 py-6 px-6 bg-black/20">
          <div className="max-w-270 mx-auto flex justify-between items-center flex-wrap gap-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono-jb font-semibold text-[0.82rem] text-white/70">ModmailTS</span>
            </div>
            <div className="flex gap-6">
              {[{ name: "Docs", href: "#" }, { name: "GitHub", href: "https://github.com/2milliongunguy/Modmail-TS" }, { name: "Support Server", href: "https://discord.gg/D7EWNn6AJJ" }, { name: "Privacy", href: "#" }].map((l) => (
                <a key={l.name} href={l.href} className="text-[0.78rem] text-white/25 hover:text-white/50 transition-colors duration-150 font-normal">
                  {l.name}
                </a>
              ))}
            </div>
            <span className="font-mono-jb text-[0.72rem] text-white/20">© 2026 ModMail</span>
          </div>
        </footer>

      </div>
    </>
  );
}