import './App.css'
import img_felipe from './assets/img/port01.png'
import img_js from './assets/img/skills/js.png'
import img_java from './assets/img/skills/java.png'
import img_csharp from './assets/img/skills/csharp.png'
import img_html from './assets/img/skills/html.png'
import img_css from './assets/img/skills/css.png'
import img_sql from './assets/img/skills/sql.png'
import img_python from './assets/img/skills/python.png'
import img_brown from './assets/img/brown.png'

const skills = [
  { img: img_js, name: 'JavaScript' },
  { img: img_java, name: 'Java' },
  { img: img_csharp, name: 'C#' },
  { img: img_html, name: 'HTML5' },
  { img: img_css, name: 'CSS3' },
  { img: img_sql, name: 'SQL' },
  { img: img_python, name: 'Python' },
]

function App() {
  return (
    <>
      {/* Background mesh */}
      <div className="bg-mesh" aria-hidden="true" />

      {/* ===== NAVBAR ===== */}
      <nav className="navbar" role="navigation" aria-label="Navegação principal">
        <span className="navbar-logo">Felipe.dev</span>
        <ul className="navbar-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>


      {/* ===== HERO ===== */}
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              Disponível para projetos
            </div>

            <h1 className="hero-title" id="hero-title">
              Olá, eu sou<br />
              <span className="hero-title-gradient">Felipe Souza</span>
            </h1>

            <p className="hero-subtitle">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais
              incríveis — do front-end ao back-end, do web ao game dev.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="btn-primary">
                ✉ Entre em contato
              </a>
              <a href="#sobre" className="btn-outline">
                Conheça meu trabalho
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">3+</span>
                <span className="stat-label">Anos de experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">7+</span>
                <span className="stat-label">Tecnologias</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2</span>
                <span className="stat-label">Formações</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-bg" aria-hidden="true" />
            <div className="hero-image-card">
              <img src={img_felipe} alt="Foto de perfil de Felipe Souza" />
            </div>
            <div className="hero-image-badge">
              <strong>Felipe Souza</strong>
              <span>Full Stack &amp; Game Dev</span>
            </div>
          </div>
        </section>

        {/* ===== SOBRE ===== */}
        <div className="divider" aria-hidden="true" />

        <section className="section" id="sobre" aria-labelledby="about-title">
          <div className="section-header">
            <span className="section-tag">Sobre mim</span>
            <h2 className="section-title" id="about-title">
              Quem sou <span>eu</span>
            </h2>
            <p className="section-desc">
              Conheça minha trajetória, formação e as áreas em que me especializo.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image-card">
                <img src={img_brown} alt="Felipe Souza" />
              </div>
              <div className="about-image-decoration" aria-hidden="true" />
            </div>

            <div className="about-content">
              <p className="about-bio">
                Olá! Sou <strong>Felipe Souza Lima da Silva</strong>, formado em{' '}
                <strong>Game Design e Programação de Jogos Digitais</strong> e em{' '}
                <strong>Informática</strong>. Atualmente, estou cursando{' '}
                <strong>Análise e Desenvolvimento de Sistemas</strong>, aprimorando
                meus conhecimentos em programação e tecnologia. Sou apaixonado por
                desenvolver soluções criativas e estou sempre buscando aprender e
                evoluir profissionalmente.
              </p>

              <div className="about-education">
                <div className="edu-card">
                  <div className="edu-icon">🎮</div>
                  <h3>Game Dev</h3>
                  <ul>
                    <li>Unity &amp; Unreal Engine</li>
                    <li>C# para jogos</li>
                    <li>Game Design</li>
                    <li>Mecânicas &amp; sistemas</li>
                    <li>Modelagem 3D</li>
                    <li>Arte 2D</li>
                    <li>Multiplayer</li>
                  </ul>
                </div>

                <div className="edu-card">
                  <div className="edu-icon">💻</div>
                  <h3>Full Stack</h3>
                  <ul>
                    <li>Desenvolvimento web</li>
                    <li>Aplicativos desktop</li>
                    <li>Bancos de dados</li>
                    <li>Algoritmos</li>
                    <li>Redes e servidores</li>
                    <li>Suporte técnico</li>
                    <li>Testes de software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <div className="divider" aria-hidden="true" />

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-header">
            <span className="section-tag">Tecnologias</span>
            <h2 className="section-title" id="skills-title">
              Minhas <span>Skills</span>
            </h2>
            <p className="section-desc">
              Ferramentas e linguagens que domino para construir soluções completas.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.img} alt={`Ícone de ${skill.name}`} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTATO ===== */}
        <div className="divider" aria-hidden="true" />

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="section-header">
            <span className="section-tag">Contato</span>
            <h2 className="section-title" id="contact-title">
              Vamos <span>trabalhar juntos?</span>
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="contact-card">
              <p>
                Estou aberto a novas oportunidades, freelas e colaborações.
                Fique à vontade para entrar em contato!
              </p>
              <div className="contact-links">
                <a
                  href="mailto:felipesouzacrd09@gmail.com"
                  className="contact-btn"
                  aria-label="Enviar email para Felipe"
                >
                  ✉ Email
                </a>
                <a
                  href="https://github.com/CaponeCrD09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  aria-label="GitHub de Felipe Souza"
                >
                  ⌥ GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  aria-label="LinkedIn de Felipe Souza"
                >
                  ↗ LinkedIn
                </a>
                <a
                  href="https://wa.me/5516996298814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  aria-label="WhatsApp de Felipe Souza"
                >
                  📱 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>
          Feito com ❤ por <span>Felipe Souza</span> &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}

export default App
