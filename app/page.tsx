export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        {/* Portrait */}
        <div className="reveal" style={{ animationDelay: "0ms" }}>
          <img
            src="/profile.jpg"
            alt="Christian Aquise"
            className="portrait h-28 w-28 rounded-full object-cover border border-border"
          />
        </div>

        {/* Header meta */}
        <header
          className="reveal mt-8 flex items-baseline justify-between font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted"
          style={{ animationDelay: "100ms" }}
        >
          <span>Christian Aquise</span>
          <span>Barcelona · 2026</span>
        </header>

        {/* Hero */}
        <h1
          className="reveal mt-10 text-4xl md:text-5xl leading-[1.1] tracking-tight"
          style={{ animationDelay: "200ms" }}
        >
          Engineer by training, analyst by craft — I love untangling{" "}
          <em>complex operations</em> and making them measurably better.
        </h1>

        {/* Main description */}
        <p
          className="reveal mt-10 text-lg leading-relaxed text-foreground/80"
          style={{ animationDelay: "300ms" }}
        >
          I&apos;m an operational analyst based in Barcelona with a background
          in mechanical engineering. I&apos;ve worked across enterprise SaaS,
          university operations, and B2B distribution — building dashboards,
          redesigning AI-driven processes, and turning raw data into decisions
          that actually move the numbers. Currently pursuing a Master in
          International Business at EAE Business School.
        </p>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "400ms" }}
        />

        {/* Quote */}
        <figure
          className="reveal text-center"
          style={{ animationDelay: "500ms" }}
        >
          <blockquote className="text-2xl md:text-3xl italic leading-snug">
            &ldquo;In God we trust. All others must bring data.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            — W. Edwards Deming
          </figcaption>
        </figure>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "600ms" }}
        />

        {/* Three roles */}
        <section className="reveal" style={{ animationDelay: "700ms" }}>
          <div className="flex items-baseline justify-between font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            <span>What I Am</span>
            <span>03</span>
          </div>

          <ol className="mt-10 space-y-10">
            <Role
              n="01"
              title="Engineer"
              description="Mechanical engineer by training (PUCP). I think in systems, trade-offs, and root causes — the kind of structured thinking that holds up when problems get messy."
            />
            <Role
              n="02"
              title="Analyst"
              description="I turn messy operational and commercial data into clear, fact-based stories. Power BI, SQL, Python — whichever the question demands."
            />
            <Role
              n="03"
              title="Consultant"
              description="I diagnose how operations actually run and drive measurable improvements — from SaaS deployments to AI-powered CX redesigns. Numbers, not opinions."
            />
          </ol>
        </section>

        {/* CV button */}
        <a
          href="/cv.pdf"
          download
          className="reveal mt-16 inline-flex items-center gap-3 border border-foreground px-6 py-3 text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
          style={{ animationDelay: "800ms" }}
        >
          Download my CV
          <span aria-hidden>↓</span>
        </a>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "900ms" }}
        />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: "1000ms" }}>
          <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            Elsewhere
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-lg">
            <li>
              <a
                href="mailto:christian.aquise@gmail.com"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christianaquise/"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

function Role({
  n,
  title,
  description,
}: {
  n: string;
  title: string;
  description: string;
}) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-6 items-baseline">
      <span className="font-[family-name:var(--font-mono)] text-xs text-muted">
        {n}
      </span>
      <div>
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-base text-foreground/70 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
}