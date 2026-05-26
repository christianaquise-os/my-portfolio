"use client";

import { useState } from "react";

const translations = {
  en: {
    location: "Barcelona · 2026",
    heroPrefix: "Engineer by training, analyst by craft — I love untangling ",
    heroEmphasis: "complex operations",
    heroSuffix: " and making them measurably better.",
    description:
      "I'm an operational analyst based in Barcelona with a background in mechanical engineering. I've worked across enterprise SaaS, university operations, and B2B distribution — building dashboards, redesigning AI-driven processes, and turning raw data into decisions that actually move the numbers. Currently pursuing a Master in International Business at EAE Business School.",
    cvLabel: "Download my CV",
    quote:
      "\u201CIn God we trust. All others must bring data.\u201D",
    quoteAuthor: "— W. Edwards Deming",
    rolesHeader: "What I Am",
    roles: [
      {
        title: "Engineer",
        description:
          "Mechanical engineer by training (PUCP). I think in systems, trade-offs, and root causes — the kind of structured thinking that holds up when problems get messy.",
      },
      {
        title: "Analyst",
        description:
          "I turn messy operational and commercial data into clear, fact-based stories. Power BI, SQL, Python — whichever the question demands.",
      },
      {
        title: "Consultant",
        description:
          "I diagnose how operations actually run and drive measurable improvements — from SaaS deployments to AI-powered CX redesigns. Numbers, not opinions.",
      },
    ],
    contactHeader: "Elsewhere",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
  },
  es: {
    location: "Barcelona · 2026",
    heroPrefix: "Ingeniero de formación, analista por oficio — me encanta desentrañar ",
    heroEmphasis: "operaciones complejas",
    heroSuffix: " y mejorarlas de forma medible.",
    description:
      "Soy analista de operaciones en Barcelona con formación en ingeniería mecánica. He trabajado en SaaS empresarial, operaciones universitarias y distribución B2B — construyendo dashboards, rediseñando procesos con IA y convirtiendo datos en bruto en decisiones que realmente mueven los números. Actualmente curso un Máster en Negocios Internacionales en EAE Business School.",
    cvLabel: "Descargar mi CV",
    quote:
      "\u201CEn Dios confiamos. Los demás, que traigan datos.\u201D",
    quoteAuthor: "— W. Edwards Deming",
    rolesHeader: "Lo que soy",
    roles: [
      {
        title: "Ingeniero",
        description:
          "Ingeniero mecánico de formación (PUCP). Pienso en sistemas, compromisos y causas raíz — el tipo de razonamiento estructurado que aguanta cuando los problemas se complican.",
      },
      {
        title: "Analista",
        description:
          "Convierto datos operativos y comerciales desordenados en historias claras y basadas en hechos. Power BI, SQL, Python — la herramienta que pida la pregunta.",
      },
      {
        title: "Consultor",
        description:
          "Diagnostico cómo funcionan realmente las operaciones e impulso mejoras medibles — desde despliegues de SaaS hasta rediseños de CX con IA. Números, no opiniones.",
      },
    ],
    contactHeader: "También en",
    emailLabel: "Correo",
    linkedinLabel: "LinkedIn",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        {/* Language toggle */}
        <div
          className="reveal flex justify-end font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <button
            onClick={() => setLang("es")}
            className={
              lang === "es"
                ? "text-foreground"
                : "text-muted hover:text-foreground transition-colors"
            }
            aria-label="Cambiar a español"
          >
            ES
          </button>
          <span className="mx-2 text-muted">|</span>
          <button
            onClick={() => setLang("en")}
            className={
              lang === "en"
                ? "text-foreground"
                : "text-muted hover:text-foreground transition-colors"
            }
            aria-label="Switch to English"
          >
            ENG
          </button>
        </div>

        {/* Portrait + CV button on opposite corners */}
        <div
          className="reveal mt-8 flex flex-wrap items-center justify-between gap-4"
          style={{ animationDelay: "100ms" }}
        >
          <img
            src="/profile.jpg"
            alt="Christian Aquise"
            className="portrait h-28 w-28 rounded-full object-cover border border-border"
          />
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 border border-foreground px-6 py-3 text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
          >
            {t.cvLabel}
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Header meta */}
        <header
          className="reveal mt-8 flex items-baseline justify-between font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted"
          style={{ animationDelay: "200ms" }}
        >
          <span>Christian Aquise</span>
          <span>{t.location}</span>
        </header>

        {/* Hero */}
        <h1
          className="reveal mt-10 text-4xl md:text-5xl leading-[1.1] tracking-tight"
          style={{ animationDelay: "300ms" }}
        >
          {t.heroPrefix}
          <em>{t.heroEmphasis}</em>
          {t.heroSuffix}
        </h1>

        {/* Description */}
        <p
          className="reveal mt-10 text-lg leading-relaxed text-foreground/80"
          style={{ animationDelay: "400ms" }}
        >
          {t.description}
        </p>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "500ms" }}
        />

        {/* Quote */}
        <figure
          className="reveal text-center"
          style={{ animationDelay: "600ms" }}
        >
          <blockquote className="text-2xl md:text-3xl italic leading-snug">
            {t.quote}
          </blockquote>
          <figcaption className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            {t.quoteAuthor}
          </figcaption>
        </figure>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "700ms" }}
        />

        {/* Roles */}
        <section className="reveal" style={{ animationDelay: "800ms" }}>
          <div className="flex items-baseline justify-between font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            <span>{t.rolesHeader}</span>
            <span>03</span>
          </div>

          <ol className="mt-10 space-y-10">
            {t.roles.map((role, i) => (
              <Role
                key={i}
                n={String(i + 1).padStart(2, "0")}
                title={role.title}
                description={role.description}
              />
            ))}
          </ol>
        </section>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "900ms" }}
        />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: "1000ms" }}>
          <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            {t.contactHeader}
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-lg">
            <li>
              <a
                href="mailto:christian.aquise@gmail.com"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                {t.emailLabel}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christianaquise/"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                {t.linkedinLabel}
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