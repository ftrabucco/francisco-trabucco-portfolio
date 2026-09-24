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
  toptal: "https://www.toptal.com/developers/resume/francisco-trabucco#aPVd8W",
};

const repositories = {
  personalFinanceFrontend: "https://github.com/ftrabucco/personal-finance-frontend",
  personalFinanceApi: "https://github.com/ftrabucco/personal-finance-api-nodeJS",
  personalFinanceTests: "https://github.com/ftrabucco/personal-finance-test-automation",
  playwrightTypeScript: "https://github.com/ftrabucco/playwright-typescript-automation-template",
  playwrightJava: "https://github.com/ftrabucco/playwright-java-automation-template",
  restAssured: "https://github.com/ftrabucco/restassured-template",
};

const copy = {
  es: {
    nav: ["Sobre mí", "Skills", "Experiencia", "Proyectos", "Contacto"],
    resume: "CV",
    language: "Idioma",
    greeting: "Hola, soy",
    name: profile.name,
    title: "SDET y QA Automation para aplicaciones confiables.",
    description:
      "Tengo 7+ años construyendo automatización de pruebas para APIs, microservicios y productos distribuidos. Trabajo con Java, RestAssured, Playwright, Postman/Newman, TypeScript, SQL y CI/CD para acelerar feedback y mejorar la confianza de cada release.",
    availability:
      "Abierto a oportunidades remotas como SDET, QA Automation Engineer o Quality Engineer.",
    viewResume: "Ver CV",
    contactMe: "Contactar",
    aboutTitle: "Sobre mí",
    about: [
      "Soy SDET y QA Automation Engineer con una base técnica fuerte y una forma de trabajo muy orientada al producto. Me gusta entender cómo se comporta un sistema por dentro, detectar riesgos reales y transformar pruebas repetitivas en feedback confiable para el equipo.",
      "Mi experiencia está especialmente enfocada en API testing, microservicios, frameworks de regresión, integración con CI/CD y reporting claro. Trabajo cerca de equipos de backend y producto, combinando criterio de QA con desarrollo para que cada release llegue con más visibilidad, trazabilidad y confianza.",
    ],
    skillsTitle: "Skills",
    experienceTitle: "Experiencia",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    contactText:
      "Si querés conversar sobre QA Automation, SDET o una oportunidad profesional, podemos conectar por LinkedIn.",
    experience: [
      {
        role: "QA Automation / SDET",
        company: "IncluIT",
        period: "2022 - Presente",
        detail:
          "Modernización de suites de regresión API migrando Postman/Newman hacia frameworks Java + RestAssured. Trabajo con clientes reutilizables, configuración compartida, assertions estructuradas, reporting con Allure e integración con pipelines CI/CD.",
      },
      {
        role: "QA Automation Engineer",
        company: "Cognizant",
        period: "2021 - 2022",
        detail:
          "Automatización de pruebas con Python, Selenium y pytest, soporte a procesos CI/CD con Azure Repos, Azure Pipelines y Test Plans, y validaciones API e integraciones sobre microservicios.",
      },
      {
        role: "QA Automation Engineer",
        company: "Globant",
        period: "2020 - 2021",
        detail:
          "Automatización mobile para iOS y Android usando Java, Appium, Maven, TestNG y Cucumber. Ejecución de suites smoke, sanity y regresión integradas con Jenkins y flujos de trabajo Git.",
      },
      {
        role: "QA Analyst",
        company: "Vates",
        period: "2019 - 2020",
        detail:
          "Diseño y ejecución de casos de prueba para aplicaciones web, testing exploratorio, funcional, regresión y end-to-end, con validación de datos en PL/SQL y gestión de trabajo en Jira.",
      },
    ],
    projects: [
      {
        title: "Personal Finance App & Quality Platform",
        description:
          "Producto full-stack con frontend, API, ambiente dedicado de staging y una estrategia de calidad que cubre contratos, UI, flujos críticos y pruebas destructivas controladas.",
        stack: "Next.js, Node.js, Playwright, Staging, API Testing, CI/CD",
        links: [
          { label: "Frontend", url: repositories.personalFinanceFrontend },
          { label: "API", url: repositories.personalFinanceApi },
          { label: "Tests", url: repositories.personalFinanceTests },
        ],
      },
      {
        title: "Playwright TypeScript Template",
        description:
          "Template E2E reutilizable con fixtures tipadas, Page Objects, ejecución cross-browser, evidencias de fallos y quality gates automatizados.",
        stack: "Playwright, TypeScript, Faker, GitHub Actions",
        links: [{ label: "Repositorio", url: repositories.playwrightTypeScript }],
      },
      {
        title: "Playwright Java Framework",
        description:
          "Framework UI con sesiones aisladas, ejecución paralela, Page y Component Objects, trazas, screenshots y reportes Allure.",
        stack: "Java, Playwright, JUnit 5, Maven, Allure",
        links: [{ label: "Repositorio", url: repositories.playwrightJava }],
      },
      {
        title: "REST API Testing Framework",
        description:
          "Framework para regresión de APIs con clientes por dominio, configuración multiambiente, autenticación JWT, datos dinámicos y limpieza automática.",
        stack: "Java, RestAssured, JUnit 5, Allure",
        links: [{ label: "Repositorio", url: repositories.restAssured }],
      },
    ],
  },
  en: {
    nav: ["About", "Skills", "Experience", "Projects", "Contact"],
    resume: "Resume",
    language: "Language",
    greeting: "Hello, I am",
    name: profile.name,
    title: "SDET and QA Automation for reliable applications.",
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
    experience: [
      {
        role: "QA Automation / SDET",
        company: "IncluIT",
        period: "2022 - Present",
        detail:
          "Modernized API regression suites by migrating Postman/Newman collections into Java + RestAssured frameworks. I work with reusable clients, shared configuration, structured assertions, Allure reporting, and CI/CD pipeline integration.",
      },
      {
        role: "QA Automation Engineer",
        company: "Cognizant",
        period: "2021 - 2022",
        detail:
          "Built test automation with Python, Selenium, and pytest, supported CI/CD processes with Azure Repos, Azure Pipelines, and Test Plans, and validated APIs and integrations across microservices.",
      },
      {
        role: "QA Automation Engineer",
        company: "Globant",
        period: "2020 - 2021",
        detail:
          "Worked on mobile automation for iOS and Android using Java, Appium, Maven, TestNG, and Cucumber. Executed smoke, sanity, and regression suites integrated with Jenkins and Git workflows.",
      },
      {
        role: "QA Analyst",
        company: "Vates",
        period: "2019 - 2020",
        detail:
          "Designed and executed test cases for web applications, including exploratory, functional, regression, and end-to-end testing, with PL/SQL data validation and Jira-based workflow management.",
      },
    ],
    projects: [
      {
        title: "Personal Finance App & Quality Platform",
        description:
          "A full-stack product with frontend, API, a dedicated staging environment, and a quality strategy covering contracts, UI, critical journeys, and controlled destructive tests.",
        stack: "Next.js, Node.js, Playwright, Staging, API Testing, CI/CD",
        links: [
          { label: "Frontend", url: repositories.personalFinanceFrontend },
          { label: "API", url: repositories.personalFinanceApi },
          { label: "Tests", url: repositories.personalFinanceTests },
        ],
      },
      {
        title: "Playwright TypeScript Template",
        description:
          "Reusable E2E template with typed fixtures, Page Objects, cross-browser execution, failure evidence, and automated quality gates.",
        stack: "Playwright, TypeScript, Faker, GitHub Actions",
        links: [{ label: "Repository", url: repositories.playwrightTypeScript }],
      },
      {
        title: "Playwright Java Framework",
        description:
          "UI automation framework with isolated sessions, parallel execution, Page and Component Objects, traces, screenshots, and Allure reports.",
        stack: "Java, Playwright, JUnit 5, Maven, Allure",
        links: [{ label: "Repository", url: repositories.playwrightJava }],
      },
      {
        title: "REST API Testing Framework",
        description:
          "API regression framework with domain clients, multi-environment configuration, JWT authentication, dynamic data, and automatic cleanup.",
        stack: "Java, RestAssured, JUnit 5, Allure",
        links: [{ label: "Repository", url: repositories.restAssured }],
      },
    ],
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

export function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("en");
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
            {t.experience.map((item) => (
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
          <div className="grid gap-4 md:grid-cols-2">
            {t.projects.map((project) => (
              <article key={project.title} className="portfolio-card flex min-h-80 flex-col rounded-md border border-slate-700 bg-slate-950/55 p-6">
                <h2 className="text-xl font-bold text-slate-100">{project.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                <p className="mt-6 font-mono text-sm text-amber-300">{project.stack}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-600 px-4 font-mono text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <SectionTitle icon={<Mail className="h-5 w-5" />} title={t.contactTitle} />
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_180px]">
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
            <div className="justify-self-start lg:justify-self-end">
              <ToptalBadge />
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

function ToptalBadge() {
  return (
    <a
      href={profile.toptal}
      target="_blank"
      rel="noreferrer"
      className="portfolio-toptal-shell"
      aria-label="Top 3% Talent, vetted by Toptal. Open Francisco Trabucco's Toptal profile"
    >
      <span className="portfolio-toptal-card">
        <svg width="54" viewBox="0 0 60 17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="m20.85 6.38 6.06-.89 2.72-5.49 2.71 5.49 6.06.89-4.39 4.28 1.04 6.03-5.42-2.85-5.43 2.85 1.04-6.03zm33.06 7.17 1.85-.27.82-1.67.83 1.67 1.84.27-1.33 1.31.31 1.83-1.65-.87-1.66.87.32-1.83zm-3.38-3.01-3.61-.52-1.61-3.26-1.62 3.26-3.6.52 2.6 2.55-.61 3.59 3.23-1.69 3.21 1.69-.61-3.59zm-45.19 3.01-1.85-.27-.82-1.67-.83 1.67-1.84.27 1.33 1.31-.31 1.83 1.65-.87 1.65.87-.31-1.83zm3.38-3.01 3.61-.52 1.61-3.26 1.61 3.26 3.61.52-2.6 2.55.61 3.59-3.23-1.69-3.22 1.69.62-3.59z"
            fill="currentColor"
          />
        </svg>
        <strong>TOP 3% TALENT</strong>
        <span className="portfolio-toptal-divider" />
        <span className="portfolio-toptal-vetted">Vetted by</span>
        <svg viewBox="0 0 108 30" width="88" xmlns="http://www.w3.org/2000/svg" aria-label="Toptal">
          <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
            <path d="m8.11 0 6.71 6.7c.05.05.09.1.15.15l5.85 5.85-9.51 9.46 4.35 4.36-2.91 2.89-6.66-6.66c-.08-.07-.16-.15-.24-.23l-5.85-5.84 9.48-9.43-4.32-4.31zm4.25 10.5c-.09-.02-.18-.02-.26 0-.09.03-.16.07-.32.22l-5.41 5.39c-.16.16-.2.23-.22.31-.03.09-.03.18 0 .26.02.09.07.17.22.32l1.72 1.72c.15.15.22.19.31.22.09.02.17.02.26 0 .09-.03.16-.07.31-.22l5.41-5.39c.16-.15.2-.23.23-.31.02-.09.02-.17 0-.26s-.07-.16-.22-.31l-1.72-1.72c-.15-.16-.23-.2-.31-.23z" />
            <path d="m62.65 7.76c2.11 0 3.91.82 5.34 2.4 1.46 1.53 2.19 3.64 2.18 6.26 0 2.56-.75 4.8-2.24 6.38-1.47 1.57-3.34 2.37-5.58 2.37-1.93-.01-3.68-.7-4.84-1.89l-.16-.17-.01 6.75-3.82-.01v-.28l.04-21.61h3.8l-.01 2.64c1.25-1.41 3.26-2.84 5.3-2.84zm24.45.06c2.18 0 3.68.49 4.84 1.44 1.11.92 1.7 2.56 1.75 4.29v.26l-.02 11.14h-3.87v-.46c0-.48 0-.97 0-1.47-1.12 1.55-2.68 2.3-4.76 2.3-1.65 0-3.05-.5-4.07-1.43-1.03-.94-1.58-2.23-1.58-3.73.02-2.83 2.02-4.79 5.52-5.4l.27-.05 4.64-.73v-.37c0-.78-.23-1.72-.69-2.11-.47-.4-1.04-.73-2.03-.73-2.73 0-3.29 2.01-3.32 3.02v.09l-3.42.04c0-1.49.69-3.42 2.08-4.63 1.12-.97 2.75-1.42 4.33-1.47h.3zm-14.98-4.36h3.81l-.01 4.56h3.53v3.18l-3.54-.01-.01 8.54c0 .94.19 1.56.6 1.85.43.3 1.3.02 1.3.02l.34 3.32s-1.2.31-1.96.31c-.99 0-1.84-.25-2.49-.75-1.06-.8-1.6-2.2-1.6-4.17l.02-9.12-3.19-3.19 3.2.01zm-22.46 6.8c1.1 1.13 2.41 3.14 2.4 6.26-.01 3.11-1.32 5.11-2.41 6.24-1.5 1.54-3.54 2.42-5.59 2.42-.08 0-.16 0-.25-.01-2.19-.01-4.13-.79-5.75-2.33-1.63-1.55-2.46-3.68-2.46-6.36s.84-4.82 2.47-6.36c1.62-1.53 3.55-2.3 5.75-2.3 2.17-.07 4.29.83 5.84 2.44zm-8.81-7.04v3.77l-7.36.01.02 17.97-3.97-.01v-.34l.03-17.63h-7.51l.01-3.77zm54.68.25 3.42.01v.09l-.03 21.38-3.42-.01v-.1zm-5.71 13.58-3.81.64c-1.86.32-2.72 1.04-2.73 2.3-.01 1.15.81 1.92 2.09 1.99h.16.02c2.44 0 4.17-1.9 4.26-4.67l.01-.22zm-46.02-5.84c-1.28 0-2.39.49-3.29 1.47-.88.96-1.33 2.24-1.33 3.81 0 1.58.45 2.86 1.33 3.82.89.98 2 1.47 3.28 1.48 1.3 0 2.42-.49 3.31-1.47.9-.98 1.35-2.26 1.36-3.81.01-1.56-.45-2.84-1.35-3.82s-2.01-1.48-3.31-1.48zm17.94.12h-.02c-1.28 0-2.34.46-3.24 1.43-.9.94-1.35 2.16-1.36 3.63 0 1.49.45 2.83 1.35 3.8.92.95 1.98 1.42 3.25 1.42 1.29 0 2.38-.48 3.25-1.41.91-.97 1.35-2.3 1.36-3.79 0-1.48-.46-2.7-1.34-3.63-.87-.96-1.96-1.45-3.25-1.45z" />
          </g>
        </svg>
        <span className="portfolio-toptal-action">Hire me</span>
      </span>
    </a>
  );
}
