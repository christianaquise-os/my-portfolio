"use client";

import { useState } from "react";

const translations = {
  en: {
    location: "Barcelona · 2026",
    heroPrefix: "I love untangling ",
    heroEmphasis: "complex business problems",
    heroSuffix: " and turning them into measurable outcomes.",
    description:
      "I'm an analyst and business consultant based in Barcelona, with a background in engineering. I've worked across enterprise SaaS, university operations, and B2B distribution — building dashboards, redesigning AI-driven processes, and turning raw data into decisions that actually move the numbers. Currently pursuing a Master in International Business at EAE Business School.",
    cvLabel: "Download my CV",
    cvHref: "/cv_eng.pdf",
    cvDownloadName: "CV-Christian-Aquise-ENG.pdf",
    quote: "\u201CWhat gets measured gets managed.\u201D",
    quoteAuthor: "— Peter Drucker",
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
    skillsHeader: "Skills",
    skills: [
      "Power BI",
      "SQL",
      "Python",
      "Excel",
      "AI / APIs",
      "SaaS Presales",
      "B2B Sales",
      "Agile Project Management",
      "Strategic Problem-Solving",
      "Cross-Cultural Communication",
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
      "Soy analista y consultor de negocio en Barcelona, con formación en ingeniería. He trabajado en SaaS empresarial, operaciones universitarias y distribución B2B — construyendo dashboards, rediseñando procesos con IA y convirtiendo datos en bruto en decisiones que realmente mueven los números. Actualmente curso un Máster en Negocios Internacionales en EAE Business School.",
    cvLabel: "Descargar mi CV",
    cvHref: "/cv_es.pdf",
    cvDownloadName: "CV-Christian-Aquise-ES.pdf",
    quote: "\u201CLo que se mide, se gestiona.\u201D",
    quoteAuthor: "— Peter Drucker",
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
    skillsHeader: "Habilidades",
    skills: [
      "Power BI",
      "SQL",
      "Python",
      "Excel",
      "AI / APIs",
      "Preventa SaaS",
      "Ventas B2B",
      "Gestión Ágil de Proyectos",
      "Resolución Estratégica",
      "Comunicación Intercultural",
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

        {/* Portrait + CV button */}
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
            download={t.cvDownloadName}
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

        {/* Quote */}
        <figure
          className="reveal mt-10 border-l border-border pl-5"
          style={{ animationDelay: "500ms" }}
        >
          <blockquote className="text-lg italic text-foreground/70">
            {t.quote}
          </blockquote>
          <figcaption className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            {t.quoteAuthor}
          </figcaption>
        </figure>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "600ms" }}
        />

        {/* Roles */}
        <section className="reveal" style={{ animationDelay: "700ms" }}>
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
          style={{ animationDelay: "800ms" }}
        />

        {/* Skills */}
        <section className="reveal" style={{ animationDelay: "900ms" }}>
          <div className="flex items-baseline justify-between font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            <span>{t.skillsHeader}</span>
            <span>{String(t.skills.length).padStart(2, "0")}</span>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.1em]">
            {t.skills.map((skill) => (
              <li
                key={skill}
                className="text-foreground/30 font-normal hover:text-foreground hover:font-semibold transition-all duration-300 cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <hr
          className="reveal my-16 border-t border-border"
          style={{ animationDelay: "1000ms" }}
        />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: "1100ms" }}>
          <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted">
            {t.contactHeader}
          </div>
          <ul className="mt-6 flex flex-wrap items-center gap-x-6">
            <li>
              <a
                href="mailto:christian.aquise@gmail.com"
                aria-label={t.emailLabel}
                className="block text-muted hover:text-foreground transition-colors"
              >
                <EmailIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christianaquise/"
                aria-label={t.linkedinLabel}
                className="block text-muted hover:text-foreground transition-colors"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/christianaquise-os"
                aria-label={t.githubLabel}
                className="block text-muted hover:text-foreground transition-colors"
              >
                <GitHubIcon />
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

function EmailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V9.5h2.5V18zm-1.25-9.7a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V9.5h2.4v1.2h.04c.33-.63 1.14-1.3 2.36-1.3 2.5 0 3 1.65 3 3.8V18z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}