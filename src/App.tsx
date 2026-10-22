import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['C#', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'LINQ'],
  'Data & cloud': ['SQL Server', 'PostgreSQL', 'Azure', 'GitHub Actions', 'Vercel'],
  Practices: ['OOP', 'SOLID', 'Service-layer architecture', 'Integration testing', 'Accessibility'],
}

const projects = [
  {
    title: 'StockSync',
    label: 'Featured project · Deployed application',
    summary:
      'An inventory management platform for products, warehouses, stock operations, reporting and audit visibility. Built around secure APIs, validated workflows and production-focused engineering.',
    highlights: [
      'Role-based JWT authentication and refresh-token security',
      'Stock transfers, reservations, low-stock reporting and audit logs',
      'React accessibility improvements and reusable design-system components',
      'ASP.NET Core integration and validation test coverage',
    ],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server', 'Azure'],
    links: [
      { label: 'View source', href: 'https://github.com/austzdee/StockSync' },
      { label: 'Live application', href: 'https://white-field-06b923110.7.azurestaticapps.net' },
    ],
  },
  {
    title: 'Cinema Reservation System',
    label: 'Cinema operations platform · In active development',
    summary:
      'Building a full-stack cinema administration and reservation platform. Current functionality covers secured movie management and screening schedules, while customer booking flows remain in development.',
    highlights: [
      'Role-restricted JWT authentication and admin workflows',
      'TMDB movie search and import alongside movie management',
      'Showtime creation, editing, cancellation and filtering',
      'ASP.NET Core API contracts, validation and integration tests',
    ],
    stack: ['C#', 'ASP.NET Core', 'EF Core', 'React', 'TypeScript', 'JWT'],
    links: [
      { label: 'Explore repository', href: 'https://github.com/austzdee/CinemaReservationSystem' },
    ],
  },
  {
    title: 'Workout Tracker',
    label: 'Full-stack fitness application',
    summary:
      'A secure fitness platform that lets users create workout plans, manage exercises and review activity through a responsive, user-scoped application.',
    highlights: [
      'JWT authentication and protected user workflows',
      'Workout-plan and exercise CRUD with ownership controls',
      'Responsive React and TypeScript interface',
      'Cloud deployment with PostgreSQL-backed persistence',
    ],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS'],
    links: [
      { label: 'Frontend source', href: 'https://github.com/austzdee/workout-tracker-client' },
      { label: 'Backend source', href: 'https://github.com/austzdee/WorkoutTrackerApi' },
      { label: 'Live application', href: 'https://workout-tracker-client-seven.vercel.app' },
    ],
  },
  {
    title: 'Danito Café',
    label: 'Modernised front-end project',
    summary:
      'A responsive multi-page café website modernised with a Tailwind CSS v4 design system, automated production builds and GitHub Pages deployment validation.',
    highlights: [
      'Reusable coffee, cream and gold design tokens across five static pages',
      'Responsive navigation, product grids, forms and hospitality-focused content',
      'Interactive FAQ behaviour and client-side contact-form validation',
      'Tailwind CLI production build with automated GitHub Actions verification',
    ],
    stack: ['HTML5', 'JavaScript', 'Tailwind CSS', 'GitHub Actions'],
    links: [
      { label: 'View source', href: 'https://github.com/austzdee/dannitoCafe' },
      { label: 'Live website', href: 'https://austzdee.github.io/dannitoCafe/' },
    ],
  },
]

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Daniel Okafor, home">
          DO<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Manchester, UK</p>
            <h1>Software Engineer building secure .NET APIs and modern React applications.</h1>
            <p className="hero-summary">
              I work across C#, ASP.NET Core, React and TypeScript, turning business requirements into usable products. My portfolio combines commercial web development experience with deployed systems, automated testing and ongoing architectural learning.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">Explore my work</a>
              <a className="button secondary" href={`${import.meta.env.BASE_URL}assets/docs/Dannie.pdf`} download>
                Download CV <Download size={17} aria-hidden="true" />
              </a>
              <a className="button secondary" href="mailto:austzdee@gmail.com">Contact me</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Current engineering focus">
            <span>Core engineering stack</span>
            <strong>React + TypeScript</strong>
            <strong>C# + ASP.NET Core</strong>
            <strong>SQL + Azure</strong>
            <p>From interface design and API architecture to validation, testing and cloud deployment.</p>
          </aside>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Selected projects: practical systems, engineering decisions and working software.</h2>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number" aria-hidden="true">0{index + 1}</div>
                <div className="project-content">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul>
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="tags" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label} <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Technical delivery shaped by operational experience.</h2>
          </div>
          <div className="about-copy">
            <p>I am a Manchester-based Software Engineer with commercial experience delivering responsive web interfaces, improving usability and collaborating on application development. I specialise in the Microsoft .NET stack and React/TypeScript.</p>
            <p>At Obligate Solutions (February 2025–March 2026), I worked on React, JavaScript, WordPress and Firebase projects, collaborating across requirements, implementation, testing and deployment. Previous work in high-volume operations strengthened my approach to reliability, communication and user-centred delivery.</p>
            <p>I earned an Advanced Diploma in Software Development (Distinction, 2026). Through projects such as StockSync and Cinema Reservation System, I practise API design, authentication, database modelling, SOLID principles and integration testing.</p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>A balanced full-stack toolkit.</h2>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items]) => (
              <article key={group}>
                <h3>{group}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Looking for a software engineer with hands-on .NET and React experience?</h2>
          <div className="contact-links">
            <a href="mailto:austzdee@gmail.com"><Mail size={19} aria-hidden="true" /> austzdee@gmail.com</a>
            <a href="https://github.com/austzdee" target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/daniel-okafor" target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" /> LinkedIn</a>
            <span><MapPin size={19} aria-hidden="true" /> Manchester, United Kingdom</span>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Daniel Okafor</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
