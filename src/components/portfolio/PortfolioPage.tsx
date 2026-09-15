"use client";

import { type ReactNode, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Globe2,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  SunMedium,
  TerminalSquare,
} from "lucide-react";

type Language = "es" | "en";

const profile = {
  name: "Francisco Trabucco",
  shortName: "Francisco",
  linkedin: "https://www.linkedin.com/in/francisco-trabucco/",
  github: "https://github.com/ftrabucco",
  email: "trabucco.francisco@gmail.com",
  resume: "/SDET_Francisco_Trabucco_CV_en.pdf",
  photo: "/francisco-trabucco.jpg",
};

const copy = {
  es: {
    nav: ["Sobre mi", "Skills", "Experiencia", "Proyectos", "Contacto"],
    resume: "CV",
    language: "Idioma",
    greeting: "Hola, soy",
    name: profile.name,
    title: "SDET y QA Automation para sistemas backend confiables.",
    description:
      "Tengo 7+ anos construyendo automatizacion de pruebas para APIs, microservicios y productos distribuidos. Trabajo con Java, RestAssured, Playwright, Postman/Newman, TypeScript, SQL y CI/CD para acelerar feedback y mejorar la confianza de cada release.",
    availability:
      "Abierto a oportunidades remotas como SDET, QA Automation Engineer o Quality Engineer.",
    viewResume: "Ver CV",
    contactMe: "Contactar",
    aboutTitle: "Sobre mi",
    about: [
      "Soy SDET y QA Automation Engineer con una base tecnica fuerte y una forma de trabajo muy orientada al producto. Me gusta entender como se comporta un sistema por dentro, detectar riesgos reales y transformar pruebas repetitivas en feedback confiable para el equipo.",
      "Mi experiencia esta especialmente enfocada en API testing, microservicios, frameworks de regresion, integracion con CI/CD y reporting claro. Trabajo cerca de equipos de backend y producto, combinando criterio de QA con desarrollo para que cada release llegue con mas visibilidad, trazabilidad y confianza.",
    ],
    skillsTitle: "Skills",
    experienceTitle: "Experiencia",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    contactText:
      "Si queres conversar sobre QA Automation, SDET o una oportunidad profesional, podemos conectar por LinkedIn.",
  },
  en: {
    nav: ["About", "Skills", "Experience", "Projects", "Contact"],
    resume: "Resume",
    language: "Language",
    greeting: "Hello, I am",
    name: profile.name,
    title: "SDET and QA Automation for reliable backend systems.",
    description:
      "I have 7+ years of experience building test automation for APIs, microservices and distributed products. I work with Java, RestAssured, Playwright, Postman/Newman, TypeScript, SQL and CI/CD to accelerate feedback and improve release confidence.",
    availability:
      "Open to remote opportunities as an SDET, QA Automation Engineer or Quality Engineer.",
    viewResume: "View resume",
    contactMe: "Contact",
    aboutTitle: "About",
    about: [
      "I am an SDET and QA Automation Engineer with a strong technical foundation and a product-oriented way of working. I enjoy understanding how systems behave internally, identifying real risks, and turning repetitive testing into reliable feedback for the team.",
      "My experience is especially focused on API testing, microservices, regression frameworks, CI/CD integration, and clear reporting. I work closely with backend and product teams, combining QA judgment with development skills so every release has better visibility, traceability, and confidence.",
    ],
    skillsTitle: "Skills",
    experienceTitle: "Experience",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    contactText:
      "If you want to talk about QA Automation, SDET or a professional opportunity, we can connect on LinkedIn.",
  },
};

const skills = [
  "Playwright",
  "RestAssured",
  "Selenium",
  "API Testing",
  "Java",
  "TypeScript",
  "JavaScript",
  "Python",
  "CI/CD",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Postman",
  "Newman",
  "Allure",
  "SQL",
  "Spring Boot",
  "Node.js",
  "JMeter",
  "Observability",
  "Test Strategy",
];

const experience = [
  {
    role: "QA Automation / SDET",
    company: "IncluIT",
    period: "2022 - Presente",
    detail:
      "Modernizacion de suites de regresion API migrando Postman/Newman hacia frameworks Java + RestAssured. Trabajo con clientes reutilizables, configuracion compartida, assertions estructuradas, reporting con Allure e integracion con pipelines CI/CD.",
  },
  {
    role: "QA Automation Engineer",
    company: "Cognizant",
    period: "2021 - 2022",
    detail:
      "Automatizacion de pruebas con Python, Selenium y pytest, soporte a procesos CI/CD con Azure Repos, Azure Pipelines y Test Plans, y validaciones API e integraciones sobre microservicios.",
  },
  {
    role: "QA Automation Engineer",
    company: "Globant",
    period: "2020 - 2021",
    detail:
      "Automatizacion mobile para iOS y Android usando Java, Appium, Maven, TestNG y Cucumber. Ejecucion de suites smoke, sanity y regresion integradas con Jenkins y flujos de trabajo Git.",
  },
  {
    role: "QA Analyst",
    company: "Vates",
    period: "2019 - 2020",
    detail:
      "Diseno y ejecucion de casos de prueba para aplicaciones web, testing exploratorio, funcional, regresion y end-to-end, con validacion de datos en PL/SQL y gestion de trabajo en Jira.",
  },
];

const projects = [
  {
    title: "Personal Finance App",
    description:
      "Aplicacion propia para gestionar ingresos, gastos, tarjetas, proyecciones y salud financiera.",
    stack: "Next.js, TypeScript, APIs, UX",
  },
  {
    title: "Automation Framework",
    description:
      "Base reusable para regresion API con clientes tipados, configuracion por ambiente, assertions estructuradas y reportes accionables.",
    stack: "Java, RestAssured, Allure, Jenkins",
  },
  {
    title: "Release Quality Checks",
    description:
      "Validaciones automaticas para ambientes, configuracion y smoke tests posteriores al despliegue.",
    stack: "CI/CD, AWS, Smoke testing",
  },
];

export function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("es");
  const [bright, setBright] = useState(false);

  const t = copy[language];
  const navLinks = [
    { id: "sobre-mi", label: t.nav[0] },
    { id: "skills", label: t.nav[1] },
    { id: "experiencia", label: t.nav[2] },
    { id: "proyectos", label: t.nav[3] },
    { id: "contacto", label: t.nav[4] },
  ];

  const qualityLines =
    language === "es"
      ? [
          "risk.scan('critical paths')",
          "api.contracts.validate()",
          "e2e.cover(userJourneys)",
          "deploy.smokeChecks()",
        ]
      : [
          "risk.scan('critical paths')",
          "api.contracts.validate()",
          "e2e.cover(userJourneys)",
          "deploy.smokeChecks()",
        ];

  return (
    <main
      className="portfolio-shell relative min-h-screen overflow-x-hidden text-slate-100"
      data-theme={bright ? "light" : "dark"}
      style={{ backgroundColor: bright ? "#f4f8fb" : "#081120" }}
      onPointerMove={(event) => {
        event.currentTarget.style.setProperty("--portfolio-x", `${event.clientX}px`);
        event.currentTarget.style.setProperty("--portfolio-y", `${event.clientY}px`);
      }}
    >
      <div className="portfolio-spotlight pointer-events-none fixed inset-0" />
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: bright
              ? "linear-gradient(135deg, rgba(14,165,233,.16), rgba(20,184,166,.1) 42%, rgba(245,158,11,.1))"
              : "radial-gradient(circle at 18% 18%, rgba(14,165,233,.2), transparent 34%), linear-gradient(135deg, #081120 0%, #101a34 54%, #111827 100%)",
          }}
        />
        <div className="absolute left-4 top-28 hidden h-[78vh] w-px bg-cyan-300/25 lg:block" />
        <div className="absolute bottom-10 right-6 hidden rotate-180 text-xs tracking-[.28em] text-slate-400 [writing-mode:vertical-rl] lg:block">
          linkedin.com/in/francisco-trabucco
        </div>
        <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-35" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a
            href="#top"
            className="portfolio-reveal font-mono text-2xl font-semibold italic text-cyan-300"
            aria-label="Ir al inicio"
          >
            {profile.shortName}
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              className="hidden h-10 items-center gap-2 rounded-md border border-cyan-300 px-4 font-mono text-sm text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950 sm:flex"
            >
              <Download className="h-4 w-4" />
              {t.resume}
            </a>
            <button
              type="button"
              onClick={() => setBright((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-md border border-slate-500/60 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label={bright ? "Activar modo oscuro" : "Activar modo claro"}
              aria-pressed={bright}
            >
              {bright ? <Moon className="h-5 w-5" /> : <SunMedium className="h-5 w-5" />}
            </button>
            <div className="hidden h-10 items-center gap-2 rounded-full border border-slate-500/70 px-4 text-sm font-semibold text-cyan-300 sm:flex">
              <Code2 className="h-4 w-4" />
              QA / SDET
            </div>
            <div
              className="flex rounded-md border border-cyan-300 p-1 font-mono text-sm font-semibold text-cyan-300"
              aria-label={t.language}
            >
              {(["es", "en"] as Language[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`h-8 rounded px-3 transition ${
                    language === item
                      ? "bg-cyan-300 text-slate-950"
                      : "hover:bg-cyan-300/10"
                  }`}
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section
          id="top"
          className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-14 pt-10 lg:grid-cols-[64px_minmax(0,1fr)] lg:px-8"
        >
          <aside className="hidden flex-col items-center gap-6 self-end pb-16 text-slate-400 lg:flex">
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition hover:text-cyan-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={profile.github} aria-label="GitHub" className="transition hover:text-cyan-300">
              <Code2 className="h-6 w-6" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-cyan-300">
              <Mail className="h-6 w-6" />
            </a>
          </aside>

          <div className="max-w-6xl">
            <p className="portfolio-reveal mb-8 font-mono text-lg text-cyan-300">{t.greeting}</p>
            <h1 className="portfolio-reveal text-4xl font-black leading-[1.02] tracking-normal text-slate-100 sm:text-7xl lg:text-8xl">
              {t.name}.
              <span className="mt-4 block text-slate-400">{t.title}</span>
            </h1>
            <p className="portfolio-reveal mt-8 max-w-3xl text-base font-semibold leading-7 text-slate-400 sm:text-lg sm:leading-8 [animation-delay:120ms]">
              {t.description}
            </p>
            <p className="portfolio-reveal mt-7 font-mono text-base leading-7 text-cyan-300 [animation-delay:220ms]">
              {t.availability}
            </p>
            <div className="portfolio-reveal mt-8 flex flex-wrap gap-4 sm:mt-12 [animation-delay:320ms]">
              <a
                href={profile.resume}
                className="inline-flex h-12 items-center gap-2 rounded-md border-2 border-cyan-300 px-6 font-mono text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
              >
                {t.viewResume}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-emerald-400 px-6 font-mono text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                GitHub
                <Code2 className="h-4 w-4" />
              </a>
            </div>

            <div className="portfolio-reveal mt-12 max-w-2xl rounded-md border border-slate-700/80 bg-slate-950/60 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur [animation-delay:420ms]">
              <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2 font-mono text-sm text-cyan-300">
                  <TerminalSquare className="h-4 w-4" />
                  quality.pipeline
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="min-h-[180px] space-y-3 font-mono text-sm leading-7 text-slate-300">
                {qualityLines.map((line) => (
                  <p key={line}>
                    <span className="mr-3 text-slate-600">$</span>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="sobre-mi" className="border-y border-slate-800 bg-slate-950 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <SectionTitle icon={<Sparkles className="h-5 w-5" />} title={t.aboutTitle} />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="max-w-4xl space-y-6 text-xl font-semibold leading-9 text-slate-300">
              {t.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="portfolio-photo-frame justify-self-start lg:justify-self-end">
              <img
                src={profile.photo}
                alt="Francisco Trabucco"
                className="h-full w-full rounded-md object-cover object-[50%_34%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#0b1528] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <SectionTitle icon={<CheckCircle2 className="h-5 w-5" />} title={t.skillsTitle} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-md border border-slate-700 bg-slate-950/55 px-4 py-4 font-mono text-sm font-semibold text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-slate-950 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <SectionTitle icon={<BriefcaseBusiness className="h-5 w-5" />} title={t.experienceTitle} />
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="portfolio-card rounded-md border border-slate-700 bg-slate-900/50 p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-slate-100">{item.role}</h2>
                    <p className="mt-1 font-mono text-sm text-slate-400">{item.company}</p>
                  </div>
                  <span className="font-mono text-sm text-cyan-300">{item.period}</span>
                </div>
                <p className="leading-7 text-slate-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-[#0b1528] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <SectionTitle icon={<Globe2 className="h-5 w-5" />} title={t.projectsTitle} />
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="portfolio-card rounded-md border border-slate-700 bg-slate-950/55 p-6">
                <h2 className="text-xl font-bold text-slate-100">{project.title}</h2>
                <p className="mt-4 min-h-28 leading-7 text-slate-400">{project.description}</p>
                <p className="mt-6 font-mono text-sm text-amber-300">{project.stack}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <SectionTitle icon={<Mail className="h-5 w-5" />} title={t.contactTitle} />
          <div>
            <p className="max-w-3xl text-xl font-semibold leading-9 text-slate-300">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-cyan-300 px-6 font-mono text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-slate-600 px-6 font-mono text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                {profile.email}
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
      {icon}
      {title}
    </div>
  );
}
