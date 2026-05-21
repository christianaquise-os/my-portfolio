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

        {/* Main description */}
        <p
          className="reveal mt-10 text-lg leading-relaxed text-foreground/80"
          style={{ animationDelay: "300ms" }}
        >
          I&apos;m a software engineer based in Madrid. I love taking messy
          ideas and turning them into clean, fast, well-designed products.
          I care about the small details: a snappy interface, an honest error
          message, an API that&apos;s easy to reason about.
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
            &ldquo;Perfection is achieved, not when there is nothing more to
            add, but when there is nothing left to take away.&rdquo;
          </blockquote>
          <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            — Antoine de Saint-Exupéry
          </figcaption>
        </figure>
      </div>
    </main>
  );
}