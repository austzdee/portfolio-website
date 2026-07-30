import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['C#', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'LINQ'],
  'Data & cloud': ['SQL Server', 'PostgreSQL', 'Azure', 'GitHub Actions', 'Vercel'],
  Practices: ['OOP', 'SOLID', 'Service-layer architecture', 'Integration testing', 'Accessibility'],
}

const projects = [
  {
    title: 'StockSync',
    label: 'Featured full-stack platform',
    summary:
      'An inventory management platform for products, warehouses, stock operations, reporting and audit visibility. Built around secure APIs, validated workflows and production-focused engineering.',
    highlights: [
      'Role-based JWT authentication and refresh-token security',
      'Stock transfers, reservations, low-stock reporting and audit logs',
      'React accessibility improvements and reusable design-system components',
      'ASP.NET Core integration and validation test coverage',
    ],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server', 'Azure'],
    source: 'https://github.com/austzdee/StockSync',
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
    source: 'https://github.com/austzdee/WorkoutTrackerApi',
    live: 'https://workout-tracker-client-seven.vercel.app',
  },
]

function App() {
  return (
    <div className="site-shell">
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
            <p className="eyebrow">Software developer · Manchester, UK</p>
            <h1>I build dependable full-stack software for real operational workflows.</h1>
            <p className="hero-summary">
              I develop accessible React and TypeScript interfaces backed by secure ASP.NET Core APIs, relational data and automated testing.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">Explore my work</a>
              <a className="button secondary" href="mailto:austzdee@gmail.com">Contact me</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Current engineering focus">
            <span>Current focus</span>
            <strong>React + TypeScript</strong>
            <strong>C# + ASP.NET Core</strong>
            <strong>SQL + Azure</strong>
            <p>From interface design and API architecture to validation, testing and cloud deployment.</p>
          </aside>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects designed beyond the tutorial stage.</h2>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
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
                    <a href={project.source} target="_blank" rel="noreferrer">View source <ArrowUpRight size={17} /></a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live application <ArrowUpRight size={17} /></a>}
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
            <p>I am a UK-based software developer focused on maintainable web applications and practical business systems.</p>
            <p>My background in high-volume operations and customer service informs how I approach software: clarify the problem, protect critical workflows, make failures visible and build for the people using the system.</p>
            <p>I completed an Advanced Diploma in Software Development covering C#, SQL, Azure and .NET, supported by front-end web development training and continued project-led learning.</p>
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
          <h2>Let’s discuss software, support or product engineering opportunities.</h2>
          <div className="contact-links">
            <a href="mailto:austzdee@gmail.com"><Mail size={19} /> austzdee@gmail.com</a>
            <a href="https://github.com/austzdee" target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
            <a href="https://www.linkedin.com/in/daniel-okafor" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
            <span><MapPin size={19} /> Manchester, United Kingdom</span>
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
