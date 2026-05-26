"use client";

import { useState } from "react";

const translations = {
  en: {
    location: "Barcelona · 2026",
    heroPrefix: "I love untangling ",
    heroEmphasis: "complex business problems",
    heroSuffix: " and turning them into measurable outcomes.",
    description:
      "I'm an analyst and business consultant based in Barcelona, with a background in mechanical engineering. I've worked across enterprise SaaS, university operations, and B2B distribution — building dashboards, redesigning AI-driven processes, and turning raw data into decisions that actually move the numbers. Currently pursuing a Master in International Business at EAE Business School.",
    cvLabel: "Download my CV",
    cvHref: "/cv_eng.pdf",
    quote: "\u201CIn God we trust. All others must bring data.\u201D",
    quoteAuthor: "— W. Edwards Deming",
    rolesHeader: "What I Am",
    roles: [
      {
        title: "Engineering Analyst",
        description:
          "I diagnose how systems and operations actually run — translating them into Power BI dashboards, SQL queries, and Python models that surface insights leadership can act on.",
      },
      {
        title: "Sales Developer",
        description:
          "B2B sales and SaaS presales. I bridge product teams and enterprise clients, turning technical capability into commercial outcomes — from lead generation to closed deals.",
      },
      {
        title: "Business Strategy Consultant",
        description:
          "I help businesses make sharper strategic calls. Structured diagnostics, fact-based recommendations, cross-functional alignment — the work that turns operational chaos into competitive edge.",
      },
    ],
    contactHeader: "Elsewhere",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  es: {
    location: "Barcelona · 2026",
    heroPrefix: "Me encanta desentrañar ",
    heroEmphasis: "problemas empresariales complejos",
    heroSuffix: " y convertirlos en resultados medibles.",
    description:
      "Soy analista y consultor de negocio en Barcelona, con formación en ingeniería mecánica. He trabajado en SaaS empresarial, operaciones universitarias y distribución B2B — construyendo dashboards, rediseñando procesos con IA y convirtiendo datos en bruto en decisiones que realmente mueven los números. Actualmente curso un Máster en Negocios Internacionales en EAE Business School.",
    cvLabel: "Descargar mi CV",
    cvHref: "/cv_es.pdf",
    quote: "\u201CEn Dios confiamos. Los demás, que traigan datos.\u201D",
    quoteAuthor: "— W. Edwards Deming",
    rolesHeader: "Lo que soy",
    roles: [
      {
        title: "Analista de Ingeniería",
        description:
          "Diagnostico cómo funcionan realmente los sistemas y las operaciones — traduciéndolos a dashboards de Power BI, consultas SQL y modelos en Python que revelan información accionable para la dirección.",
      },
      {
        title: "Desarrollador Comercial",
        description:
          "Ventas B2B y presales de SaaS. Hago de puente entre equipos de producto y clientes corporativos, convirtiendo capacidad técnica en resultados comerciales — desde la generación de leads hasta el cierre.",
      },
      {
        title: "Consultor de Estrategia Empresarial",
        description:
          "Ayudo a las empresas a tomar decisiones estratégicas más afiladas. Diagnósticos estructurados, recomendaciones basadas en hechos, alineación interfuncional — el trabajo que convierte el caos operativo en ventaja competitiva.",
      },
    ],
    contactHeader: "También en",
    emailLabel: "Correo",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
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
            href={t.cvHref}
            download
            className="inline-flex items-center gap-3 border border-foreground px-6 py-3 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
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
          className="reveal mt-10 text-3xl leading-[1.2] tracking-tight"
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
          <blockquote className="text-3xl italic leading-snug">
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
            <li>
              <a
                href="https://github.com/christianaquise-os"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
              >
                {t.githubLabel}
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
        <h3 className="text-lg italic">{title}</h3>
        <p className="mt-2 text-lg text-foreground/70 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
}