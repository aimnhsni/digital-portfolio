import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  FlaskConical,
  Gauge,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Workflow
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Aiman Zazani",
  role: "Solution Engineer - Carbon, EAM Products",
  location: "Lenggeng, Negeri Sembilan",
  phone: "+6011-10154786",
  email: "aimanhasni114@gmail.com",
  linkedin: "https://linkedin.com/in/aimnhsni",
  website: "https://aimnhsni.dev",
  whatsapp: "https://wa.me/601110154786",
  headline:
    "Full-stack developer building enterprise SAP cloud products, integration services, automation workflows, and AI-assisted delivery systems.",
  focus:
    "Node.js, React, SAPUI5, SAP CAP, S/4HANA, BTP, AI workflows, test automation, and production support across global enterprise clients."
};

const metrics = [
  { label: "Enterprise product lines", value: "3", icon: Layers3 },
  { label: "Core stack areas", value: "8+", icon: Code2 },
  { label: "Certifications", value: "3", icon: BadgeCheck },
  { label: "Hackathon placement", value: "#1", icon: Trophy }
];

const skillGroups = [
  {
    name: "Frontend",
    icon: Code2,
    color: "teal",
    skills: ["ReactJS", "SAPUI5", "Typescript", "JavaScript", "HTML", "CSS", "Flutter"]
  },
  {
    name: "Backend & Cloud",
    icon: CloudCog,
    color: "amber",
    skills: ["Node.js", "SAP CAP", "Django", "REST APIs", "S/4HANA", "SAP BTP", "Docker"]
  },
  {
    name: "Data & Automation",
    icon: Workflow,
    color: "cobalt",
    skills: ["SQL", "Power Automate", "RPA", "Selenium", "Tosca", "Jest", "Postman"]
  },
  {
    name: "AI & Research",
    icon: BrainCircuit,
    color: "rose",
    skills: ["Generative AI", "TensorFlow", "Computer Vision", "Google Vision", "Voice AI Kit", "Robotics"]
  }
];

const skillRadarData = [
  { label: "SAP Core", value: 94 },
  { label: "Full Stack", value: 90 },
  { label: "Cloud Ops", value: 84 },
  { label: "AI Flow", value: 82 },
  { label: "Automation", value: 88 },
  { label: "Testing", value: 80 }
];

const experiences = [
  {
    company: "Rizing Sdn Bhd - Wipro Ltd Subsidiary",
    place: "Kuala Lumpur / Remote",
    role: "Solution Engineer - Carbon, EAM Products",
    period: "May 2023 - Current",
    type: "Product Engineering",
    icon: CloudCog,
    tags: ["SAP S/4HANA", "Oracle Primavera P6", "REST", "Power Automate", "SAPUI5", "Node.js"],
    summary:
      "Builds integration and production-grade service capabilities for operational asset management products.",
    wins: [
      "Designed synchronization between SAP S/4HANA and Oracle Primavera P6 for project management data.",
      "Built secure RESTful services in S/4HANA and resolved production issues for clients including Woodside Energy and BC Hydro.",
      "Created AI-assisted Power Automate workflows for documentation handling in operational assets."
    ]
  },
  {
    company: "Rizing Sdn Bhd - Wipro Ltd Subsidiary",
    place: "Kuala Lumpur / Remote",
    role: "Product Technical Analyst - LifeCycle Pricing",
    period: "May 2023 - Current",
    type: "Retail Pricing",
    icon: Gauge,
    tags: ["SAP CAR", "CAP", "ReactJS", "Typescript", "Node.js", "MTA"],
    summary:
      "Develops retail price management software used to compare, create, and manage pricing across US retailers.",
    wins: [
      "Migrated legacy services into SAP Cloud Application Programming framework for adaptable client delivery.",
      "Configured CAR table backed applications and deployment setup for Development, QA, and Production.",
      "Shipped user stories and bug fixes across monthly sprint cycles with functional teams."
    ]
  },
  {
    company: "Rizing Sdn Bhd - Wipro Ltd Subsidiary",
    place: "Kuala Lumpur / Remote",
    role: "Product Technical Analyst - Learning Management System",
    period: "May 2023 - Current",
    type: "HCM Extension",
    icon: GraduationCap,
    tags: ["SAP SuccessFactors", "SAP HCM", "BTP", "SAPUI5", "Node.js", "ReactJS"],
    summary:
      "Co-developed a custom learning management extension for SAP SuccessFactors and HCM ecosystems.",
    wins: [
      "Delivered frontend and backend fixes across SAPUI5 and Node.js services.",
      "Worked with Scotiabank of Canada functional teams to translate requirements into product behavior.",
      "Configured SAP BTP cloud environments for software-as-a-service deployment needs."
    ]
  },
  {
    company: "Capgemini Services Sdn Bhd",
    place: "Ampang, Kuala Lumpur",
    role: "Software Engineer - AML Transaction Monitoring System, UOB",
    period: "June 2022 - May 2023",
    type: "Automation Testing",
    icon: ShieldCheck,
    tags: ["Selenium", "JUnit", "Tosca", "SQL", "Postman", "Regression"],
    summary:
      "Automated regression and integration testing workflows for banking transaction monitoring systems.",
    wins: [
      "Scripted Selenium, JUnit, and Tosca workflows for System Integration Testing.",
      "Set up Postman token services for API testing and validation.",
      "Created SQL scripts to retrieve source data and verify transaction behavior."
    ]
  },
  {
    company: "Ontario Tech University",
    place: "Oshawa, Canada",
    role: "Machine Learning Researcher - Internship",
    period: "Nov 2021 - Mar 2022",
    type: "AI Research",
    icon: FlaskConical,
    tags: ["TensorFlow", "Docker", "Node.js", "Computer Vision", "Raspberry Pi", "Robotics"],
    summary:
      "Built machine learning and robotics prototypes for plant disease detection and human-robot interaction research.",
    wins: [
      "Developed a deep learning pipeline to classify grape leaf disease with a focus on Esca disease.",
      "Built a Node.js web application to surface model predictions in a usable demo.",
      "Implemented robotic dog movement and smart-environment features using Raspberry Pi, Google Vision, and Voice AI Kit."
    ],
    link: "https://aimnhsni.github.io/esca-detection/"
  }
];

const certifications = [
  { name: "WEGA AI Advanced", issuer: "Wipro", date: "Mar 2026", icon: Sparkles },
  { name: "SAP Certified Associate - Backend Developer", issuer: "SAP", date: "Sep 2025", icon: CloudCog },
  { name: "Automation Specialist Level 2", issuer: "Tricentis", date: "Sep 2022", icon: Bot }
];

const education = [
  {
    title: "BSc (Hons) Computer Science - Intelligent Machine",
    school: "Universiti Kebangsaan Malaysia",
    period: "2018 - 2021",
    details: "Machine learning, computer vision, Java algorithms, web programming, databases, analytics, and decision support systems.",
    highlights: ["Canada-ASEAN SEED recipient", "Dean's List"]
  },
  {
    title: "Canada-ASEAN SEED Visiting Researcher",
    school: "Ontario Tech University",
    period: "2021",
    details: "Developed UN Sustainable Development Goals research involving machine learning and social robot development.",
    highlights: ["International research exchange", "Human-robot interaction"]
  },
  {
    title: "Full-stack Flutter Developer",
    school: "CHIPTA 2021 Hackathon, MAMPU",
    period: "2021",
    details: "Built a functional application prototype with SA Lab team members for the IPT category.",
    highlights: ["1st place IPT category"]
  }
];

const projects = [
  {
    title: "SAP S/4HANA to Oracle Primavera P6 Integration",
    category: "Enterprise Integration",
    status: "Production-facing",
    icon: Database,
    description:
      "Project management data synchronization for plant management entities with resilient REST service design and operational data consistency."
  },
  {
    title: "AI Workflow for Operational Assets",
    category: "AI Automation",
    status: "Workflow system",
    icon: Bot,
    description:
      "Documentation handling automation using Microsoft Power Automate and generative AI tooling to reduce repetitive delivery effort."
  },
  {
    title: "Esca Disease Detection",
    category: "Machine Learning",
    status: "Research demo",
    icon: BrainCircuit,
    description:
      "Computer vision pipeline and web demo for grape leaf disease classification using TensorFlow, Docker, and Node.js.",
    link: "https://aimnhsni.github.io/esca-detection/"
  }
];

const deliveredProjects = [
  {
    title: "Credence PR",
    type: "Brand / Web Experience",
    url: "https://credence-pr.vercel.app",
    description: "A delivered public-facing web project for Credence PR, built as a polished live Vercel deployment."
  },
  {
    title: "Republic of Jersey",
    type: "Institutional Web Experience",
    url: "https://republic-of-jersey.vercel.app",
    description: "A structured web experience showcasing content architecture, presentation, and responsive interface delivery."
  },
  {
    title: "My Walimatulurus",
    type: "Event / Invitation Platform",
    url: "https://my-walimatulurus.vercel.app",
    description: "A modern event-focused web app for wedding invitation presentation and guest-facing information."
  }
];

const filters = ["All", "SAP", "AI", "Automation", "Frontend", "Cloud"];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [query, setQuery] = useState("");

  const filteredExperiences = useMemo(() => {
    const q = query.trim().toLowerCase();
    return experiences.filter((item) => {
      const haystack = [item.role, item.company, item.type, item.summary, ...item.tags, ...item.wins]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const matchesFilter =
        activeFilter === "All" ||
        haystack.includes(activeFilter.toLowerCase()) ||
        (activeFilter === "Cloud" && haystack.includes("btp")) ||
        (activeFilter === "Frontend" && (haystack.includes("react") || haystack.includes("sapui5")));
      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  const featuredProject = projects.find((project) => project.title.includes("S/4HANA"));

  return (
    <main className="app-shell">
      <Hero />

      <section className="dashboard-grid" id="about" aria-label="Portfolio dashboard">
        <aside className="profile-panel panel">
          <div className="avatar">AZ</div>
          <p className="eyebrow">Available for high-impact engineering teams</p>
          <h2>{profile.name}</h2>
          <p>{profile.focus}</p>
          <div className="quick-links" aria-label="Contact links">
            <a href={`mailto:${profile.email}`} aria-label="Email Aiman">
              <Mail size={18} />
            </a>
            <a href={profile.whatsapp} aria-label="Whatsapp Aiman">
              <Phone size={18} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
            <a href={profile.website} aria-label="Portfolio website">
              <Globe2 size={18} />
            </a>
          </div>
          <div className="location">
            <MapPin size={16} />
            <span>{profile.location}</span>
          </div>
        </aside>

        <section className="command-panel panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Career command center</p>
              <h2>Experience explorer</h2>
            </div>
            <TerminalSquare size={26} />
          </div>
          <div className="search-row">
            <Search size={18} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search SAP, AI, automation, React..."
              aria-label="Search experience"
            />
          </div>
          <div className="filter-row" aria-label="Experience filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="experience-layout">
            <div className="experience-list">
              {filteredExperiences.map((item) => {
                const Icon = item.icon;
                const selected = selectedExperience.role === item.role && selectedExperience.company === item.company;
                return (
                  <button
                    className={`experience-tab ${selected ? "selected" : ""}`}
                    key={`${item.company}-${item.role}`}
                    onClick={() => setSelectedExperience(item)}
                    type="button"
                  >
                    <Icon size={18} />
                    <span>
                      <strong>{item.type}</strong>
                      <small>{item.period}</small>
                    </span>
                    <ChevronRight size={16} />
                  </button>
                );
              })}
            </div>
            <ExperienceCard experience={filteredExperiences.includes(selectedExperience) ? selectedExperience : filteredExperiences[0]} />
          </div>
        </section>

        <section className="metrics-panel panel">
          <p className="eyebrow">Signal snapshot</p>
          <div className="metric-grid">
            {metrics.map(({ label, value, icon: Icon }) => (
              <div className="metric" key={label}>
                <Icon size={20} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Stack presentation</p>
          <h2>Skills as an operating dashboard</h2>
          <p>
            A practical blend of enterprise software delivery, cloud integration, automated testing,
            and AI experimentation.
          </p>
        </div>
        <div className="skills-showcase">
          <RadarGraph data={skillRadarData} />
          <div className="skill-dashboard">
            {skillGroups.map((group, index) => (
              <SkillCard group={group} index={index} key={group.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="projects">
        <div className="section-heading compact">
          <p className="eyebrow">Selected systems</p>
          <h2>Enterprise-grade builds with research instincts</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <Icon size={22} />
                  <span>{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.category}</span>
                  {project.link ? (
                    <a href={project.link} aria-label={`Open ${project.title}`}>
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <CheckCircle2 size={18} />
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="delivered-showcase">
          <div className="section-heading compact">
            <p className="eyebrow">Delivered links</p>
            <h2>Live projects developed and deployed</h2>
          </div>
          <div className="delivered-grid">
            {deliveredProjects.map((project) => (
              <a className="delivered-card" href={project.url} key={project.url} target="_blank" rel="noreferrer">
                <div className="delivered-icon">
                  <Globe2 size={22} />
                </div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>
                  Open live project
                  <ExternalLink size={18} />
                </strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading compact">
          <p className="eyebrow">Credentials and foundation</p>
          <h2>Certified, shipped, and research-tested</h2>
        </div>
        <div className="two-column">
          <div className="panel timeline-panel">
            <h3>Certifications</h3>
            {certifications.map(({ name, issuer, date, icon: Icon }) => (
              <div className="timeline-item" key={name}>
                <Icon size={18} />
                <div>
                  <strong>{name}</strong>
                  <span>{issuer} - {date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="panel education-panel">
            <h3>Education and activities</h3>
            {education.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.school}</p>
                <small>{item.details}</small>
                <div>
                  {item.highlights.map((highlight) => (
                    <em key={highlight}>{highlight}</em>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-panel">
        <div>
          <p className="eyebrow">Next deployment</p>
          <h2>Need a developer who can speak product, platform, and production?</h2>
          <p>
            Aiman brings SAP enterprise context, full-stack delivery, automation discipline,
            and AI experimentation into one practical engineering profile.
          </p>
        </div>
        <a className="cta-button" href={`mailto:${profile.email}`}>
          Start a conversation
          <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );

  function Hero() {
    const handleHeroPointerMove = (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3);
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3);
      event.currentTarget.style.setProperty("--hero-x", x);
      event.currentTarget.style.setProperty("--hero-y", y);
    };

    const resetHeroPointer = (event) => {
      event.currentTarget.style.setProperty("--hero-x", "0");
      event.currentTarget.style.setProperty("--hero-y", "0");
    };

    return (
      <section
        className="hero"
        aria-label="Aiman Zazani portfolio hero"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroPointer}
      >
        <div className="hero-media" />
        <nav className="top-nav" aria-label="Primary navigation">
          <a className="brand-mark" href="#" aria-label="Back to top">
            AIMAN ZAZANI<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Experience</a>
            <a href={profile.linkedin} ><Linkedin size={18} /></a>
          </div>
        </nav>
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot" />
            <span>SAP Full Stack Engineer</span>
          </div>
          <h1 className="hero-title">
            <span>Building</span>
            <span className="accent-word">Enterprise</span>
            <span>Solutions.</span>
          </h1>
          <p className="hero-copy">
            I build scalable SAP ecosystems, AI-powered workflows and modern cloud applications.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={`mailto:${profile.email}`}>
              Contact me
              <Mail size={18} />
            </a>
            {/* <a className="secondary-action" href={featuredProject?.link || profile.website}>
              View ML demo
              <ExternalLink size={18} />
            </a> */}
          </div>
        </div>
        <div className="hero-widget" aria-label="Live profile highlights">
          <div>
            <span>Primary mode</span>
            <strong>Enterprise full-stack</strong>
          </div>
          <div>
            <span>Current stack</span>
            <strong>Node.js / SAPUI5 / React / CAP</strong>
          </div>
          <div>
            <span>Delivery style</span>
            <strong>Secure, scalable, documented</strong>
          </div>
        </div>
      </section>
    );
  }
}

function ExperienceCard({ experience }) {
  if (!experience) {
    return (
      <article className="experience-card empty">
        <p>No matching experience. Try a broader search.</p>
      </article>
    );
  }

  return (
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <span>{experience.period}</span>
          <h3>{experience.role}</h3>
          <p>{experience.company}</p>
        </div>
        {experience.link && (
          <a href={experience.link} aria-label={`Open ${experience.role} project link`}>
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      <p>{experience.summary}</p>
      <div className="tag-row">
        {experience.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ul>
        {experience.wins.map((win) => (
          <li key={win}>
            <CheckCircle2 size={16} />
            <span>{win}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RadarGraph({ data }) {
  const size = 360;
  const center = size / 2;
  const radius = 122;
  const levels = [0.25, 0.5, 0.75, 1];
  const pointFor = (index, scale = 1) => {
    const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
    return {
      x: center + Math.cos(angle) * radius * scale,
      y: center + Math.sin(angle) * radius * scale
    };
  };
  const polygon = (scale) =>
    data.map((_, index) => {
      const point = pointFor(index, scale);
      return `${point.x},${point.y}`;
    }).join(" ");
  const skillShape = data.map((item, index) => {
    const point = pointFor(index, item.value / 100);
    return `${point.x},${point.y}`;
  }).join(" ");

  return (
    <article className="radar-panel panel" aria-label="Skill radar dashboard">
      <div className="radar-copy">
        <p className="eyebrow">Capability radar</p>
        <h3>Enterprise delivery profile</h3>
        <p>SAP product engineering, cloud services, AI workflows, and automation depth in one operating view.</p>
      </div>
      <div className="radar-wrap">
        <svg viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Radar chart of Aiman's skill strengths">
          <defs>
            <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14d7ee" stopOpacity="0.56" />
              <stop offset="100%" stopColor="#2f7dff" stopOpacity="0.32" />
            </linearGradient>
          </defs>
          {levels.map((level) => (
            <polygon className="radar-grid" points={polygon(level)} key={level} />
          ))}
          {data.map((_, index) => {
            const point = pointFor(index, 1);
            return <line className="radar-axis" x1={center} y1={center} x2={point.x} y2={point.y} key={index} />;
          })}
          <polygon className="radar-shape" points={skillShape} />
          {data.map((item, index) => {
            const point = pointFor(index, item.value / 100);
            const label = pointFor(index, 1.24);
            return (
              <g key={item.label}>
                <circle className="radar-node" cx={point.x} cy={point.y} r="5" />
                <text
                  className="radar-label"
                  x={label.x}
                  y={label.y}
                  textAnchor={Math.abs(label.x - center) < 10 ? "middle" : label.x > center ? "start" : "end"}
                  dominantBaseline="middle"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="radar-stats">
        {data.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function SkillCard({ group, index }) {
  const Icon = group.icon;
  const completion = 82 + index * 4;

  return (
    <article className={`skill-card ${group.color}`}>
      <div className="skill-orbit" style={{ "--completion": `${completion}%` }}>
        <Icon size={25} />
      </div>
      <div>
        <span>{completion}% operating fluency</span>
        <h3>{group.name}</h3>
      </div>
      <div className="skill-chip-grid">
        {group.skills.map((skill) => (
          <button type="button" key={skill} title={`${skill} capability`}>
            {skill}
          </button>
        ))}
      </div>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
