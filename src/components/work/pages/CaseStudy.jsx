import React, { useEffect, useRef } from "react";
import "./CaseStudy.css";

// ── Sample data — replace with props or route params ──────────────────────
const caseData = {
  tag: "Web Design · React · UI/UX",
  title: "Designing a Scalable Dashboard for TI Cycle India.",
  subtitle:
    "A user-friendly warranty registration and claim system for seamless customer experience.",
  heroImage: "https://placehold.co/1200x600/1a1a2e/ffffff?text=Project+Hero",
  client: "TI Cycle Inc.",
  role: "Lead UI/UX Designer & Frontend Dev",
  duration: "6 Months",
  year: "2023",
  overview:
    "FinVault approached us with a complex problem — their legacy dashboard had a 68% drop-off rate during onboarding. Users found the interface cluttered, unintuitive, and visually dated. We were tasked with a full redesign: from research to pixel-perfect delivery.",
  challenge:
    "The core challenge was reconciling data density with clarity. Financial dashboards need to surface lots of numbers, but the old design buried key metrics under nested menus. Users were overwhelmed. We needed to create a hierarchy that guided the eye without losing depth.",
  process: [
    {
      step: "01",
      color: "purple",
      title: "Discovery & Research",
      desc: "Conducted 14 user interviews, 3 competitor audits, and heatmap analysis of the existing product. Identified the top 5 pain points.",
    },
    {
      step: "02",
      color: "blue",
      title: "Information Architecture",
      desc: "Restructured navigation from 34 menu items to 8 primary actions. Created card-sorting workshops with real users.",
    },
    {
      step: "03",
      color: "teal",
      title: "Wireframing & Prototyping",
      desc: "Produced 60+ wireframes, 3 interactive prototypes. Ran 2 rounds of usability testing with 8 participants each.",
    },
    {
      step: "04",
      color: "coral",
      title: "Visual Design & Handoff",
      desc: "Built a full design system with 120+ components. Delivered a developer-ready Figma file with annotations.",
    },
  ],
  stats: [
    { value: "42%", label: "Retention Increase" },
    { value: "2×", label: "Faster Onboarding" },
    { value: "68→12%", label: "Drop-off Rate" },
    { value: "4.8★", label: "User Rating" },
  ],
  images: [
    "https://placehold.co/700x420/16213e/ffffff?text=Wireframes",
    "https://placehold.co/700x420/0f3460/ffffff?text=Design+System",
    "https://placehold.co/700x420/533483/ffffff?text=Final+UI",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Figma",
    "Storybook",
    "Tailwind CSS",
    "Recharts",
  ],
  testimonial: {
    quote:
      "The redesign completely transformed how our users experience the product. We saw results within the first week of launch.",
    name: "Priya Sharma",
    role: "CPO, FinVault Inc.",
    avatar: "PS",
  },
  nextProject: {
    title: "E-Commerce Mobile App",
    link: "/work/ecommerce-app",
    image: "https://placehold.co/600x300/0f3460/ffffff?text=Next+Project",
  },
};

// ── Component ──────────────────────────────────────────────────────────────
const CaseStudy = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cs-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="cs-page">
      {/* ── Hero ── */}
      <section className="cs-hero">
        <div className="cs-hero__bg" />
        <div className="cs-container">
          <span className="cs-tag">{caseData.tag}</span>
          <h1 className="cs-hero__title">{caseData.title}</h1>
          <p className="cs-hero__subtitle">{caseData.subtitle}</p>
          <div className="cs-hero__meta">
            {[
              ["Client", caseData.client],
              ["Role", caseData.role],
              ["Duration", caseData.duration],
              ["Year", caseData.year],
            ].map(([label, val]) => (
              <div key={label} className="cs-hero__meta-item">
                <span className="cs-meta-label">{label}</span>
                <span className="cs-meta-val">{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cs-hero__img-wrap">
          <img
            src={caseData.heroImage}
            alt="Project hero"
            className="cs-hero__img"
          />
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="cs-stats" ref={addRef}>
        <div className="cs-container cs-stats__grid">
          {caseData.stats.map((s) => (
            <div key={s.label} className="cs-stat-card cs-reveal">
              <span className="cs-stat-val">{s.value}</span>
              <span className="cs-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="cs-section" ref={addRef}>
        <div className="cs-container cs-two-col cs-reveal">
          <div className="cs-section__label">
            <span className="cs-pill cs-pill--purple">Overview</span>
          </div>
          <div>
            <h2 className="cs-section__title">The Big Picture</h2>
            <p className="cs-body">{caseData.overview}</p>
          </div>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="cs-section cs-section--dark" ref={addRef}>
        <div className="cs-container cs-two-col cs-reveal">
          <div className="cs-section__label">
            <span className="cs-pill cs-pill--coral">Challenge</span>
          </div>
          <div>
            <h2 className="cs-section__title cs-section__title--light">
              What We Were Up Against
            </h2>
            <p className="cs-body cs-body--light">{caseData.challenge}</p>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="cs-section" ref={addRef}>
        <div className="cs-container">
          <div className="cs-section__header cs-reveal">
            <span className="cs-pill cs-pill--blue">Process</span>
            <h2 className="cs-section__title">How We Got There</h2>
          </div>
          <div className="cs-process__grid">
            {caseData.process.map((p) => (
              <div
                key={p.step}
                className={`cs-process__card cs-process__card--${p.color} cs-reveal`}
                ref={addRef}
              >
                <span className="cs-process__step">{p.step}</span>
                <h3 className="cs-process__title">{p.title}</h3>
                <p className="cs-process__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="cs-section cs-gallery-section" ref={addRef}>
        <div className="cs-container">
          <div className="cs-gallery cs-reveal">
            {caseData.images.map((src, i) => (
              <div
                key={i}
                className={`cs-gallery__item cs-gallery__item--${i + 1}`}
              >
                <img src={src} alt={`Project screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="cs-section" ref={addRef}>
        <div className="cs-container">
          <div className="cs-section__header cs-reveal">
            <span className="cs-pill cs-pill--teal">Tech Stack</span>
            <h2 className="cs-section__title">Tools & Technologies</h2>
          </div>
          <div className="cs-tech__grid cs-reveal">
            {caseData.techStack.map((tech) => (
              <span key={tech} className="cs-tech__badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="cs-section cs-section--accent" ref={addRef}>
        <div className="cs-container">
          <blockquote className="cs-quote cs-reveal">
            <p className="cs-quote__text">"{caseData.testimonial.quote}"</p>
            <footer className="cs-quote__footer">
              <div className="cs-quote__avatar">
                {caseData.testimonial.avatar}
              </div>
              <div>
                <p className="cs-quote__name">{caseData.testimonial.name}</p>
                <p className="cs-quote__role">{caseData.testimonial.role}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="cs-next" ref={addRef}>
        <div className="cs-container">
          <p className="cs-next__eyebrow cs-reveal">Next Project</p>
          <a
            href={caseData.nextProject.link}
            className="cs-next__card cs-reveal"
          >
            <img
              src={caseData.nextProject.image}
              alt="Next project"
              className="cs-next__img"
            />
            <div className="cs-next__overlay">
              <h3 className="cs-next__title">{caseData.nextProject.title}</h3>
              <span className="cs-next__arrow">→</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
