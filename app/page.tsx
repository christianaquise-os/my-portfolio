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
          <span>Madrid · 2026</span>
        </header>

        {/* Hero */}
        <h1
          className="reveal mt-10 text-4xl md:text-5xl leading-[1.1] tracking-tight"
          style={{ animationDelay: "200ms" }}
        >
          Software engineer building{" "}
          <em>thoughtful, well-crafted</em> things on the web.
        </h1>

        {/* About — two paragraphs */}
        <div
          className="reveal mt-10 space-y-5 text-lg leading-relaxed text-foreground/80"
          style={{ animationDelay: "300ms" }}
        >
          <p>
            I'm a software engineer based in Madrid. I love taking messy ideas
            and turning them into clean, fast, well-designed products — the kind
            people actually enjoy using.
          </p>
          <p>
            I care about the small details: a snappy interface, an honest error
            message, an API that's easy to reason about. If you're working on
            something interesting, I'd love to hear about it.
          </p>
        </div>

        {/* CV button — prominent CTA */}
        <a
          href="/cv.pdf"
          download
          className="reveal mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-3 text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
          style={{ animationDelay: "400ms" }}
        >
          Download my CV
          <span aria-hidden>↓</span>
        </a>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "500ms" }}
        />

        {/* Selected work */}
        <section className="reveal" style={{ animationDelay: "600ms" }}>
          <div className="flex items-baseline justify-between font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            <span>Selected Work</span>
            <span>03</span>
          </div>

          <ol className="mt-10 space-y-12">
            <Project
              n="01"
              year="2025"
              title="Project name"
              description="One sentence about what it does and what made it interesting to build."
              stack="React · TypeScript · Postgres"
              href="https://github.com/christianaquise-os/project"
            />
            <Project
              n="02"
              year="2024"
              title="Project name"
              description="One sentence about what it does and what made it interesting to build."
              stack="Python · FastAPI"
              href="https://github.com/christianaquise-os/project"
            />
            <Project
              n="03"
              year="2024"
              title="Project name"
              description="One sentence about what it does and what made it interesting to build."
              stack="Next.js · Tailwind"
              href="https://github.com/christianaquise-os/project"
            />
          </ol>
        </section>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "700ms" }}
        />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: "800ms" }}>
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
                href="https://github.com/christianaquise-os"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                GitHub
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

function Project({
  n,
  year,
  title,
  description,
  stack,
  href,
}: {
  n: string;
  year: string;
  title: string;
  description: string;
  stack: string;
  href: string;
}) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] gap-x-6 items-baseline">
      <span className="font-mono text-xs text-muted">
        {n}
      </span>
      <div>
        <a
          href={href}
          className="text-xl underline decoration-transparent underline-offset-4 hover:decoration-foreground transition-all"
        >
          {title}
        </a>
        <p className="mt-1 text-sm leading-relaxed text-foreground/70">{description}</p>
        <p className="mt-1 font-mono text-xs text-muted">{stack}</p>
      </div>
      <span className="font-[family-name:var(--font-mono)] text-xs text-muted">{year}</span>
    </li>
  );
}
