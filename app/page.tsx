export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        {/* Header with portrait */}
        <header
          className="reveal flex items-center justify-between gap-4"
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt="Christian Aquise"
              className="portrait h-12 w-12 rounded-full object-cover border border-border"
            />
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
              Christian Aquise
            </span>
          </div>
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            Madrid · 2026
          </span>
        </header>

        {/* Hero */}
        <h1
          className="reveal mt-16 text-4xl md:text-5xl leading-[1.1] tracking-tight"
          style={{ animationDelay: "100ms" }}
        >
          Software engineer building{" "}
          <em>thoughtful, well-crafted</em> things on the web.
        </h1>

        {/* About */}
        <p
          className="reveal mt-10 text-lg leading-relaxed text-foreground/80"
          style={{ animationDelay: "200ms" }}
        >
          A sentence or two about your background — where you've worked, what
          you've built, what you care about. Keep it human and specific.
        </p>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "300ms" }}
        />

        {/* Selected work */}
        <section className="reveal" style={{ animationDelay: "400ms" }}>
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
          style={{ animationDelay: "500ms" }}
        />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: "600ms" }}>
          <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            Elsewhere
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-lg">
            <li>
              <a
                href="mailto:your@email.com"
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
                href="https://linkedin.com/in/your-handle"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/cv.pdf"
                download
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                CV ↓
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
      <span className="font-[family-name:var(--font-mono)] text-xs text-muted">
        {n}
      </span>
      <div>
        <a
          href={href}
          className="text-xl underline decoration-transparent underline-offset-4 hover:decoration-foreground transition-all"
        >
          {title}
          <span className="ml-1 text-muted">↗</span>
        </a>
        <p className="mt-2 text-base text-foreground/70 leading-relaxed">
          {description}
        </p>
        <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-muted">
          {stack}
        </p>
      </div>
      <span className="font-[family-name:var(--font-mono)] text-xs text-muted">
        {year}
      </span>
    </li>
  );
}