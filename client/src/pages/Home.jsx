import { useEffect, useState } from "react";
import "./Home.css";

const techEmojis = ["🤖", "💻", "🧠", "⚙️", "🚀", "📡", "🔬", "💡", "🖥️", "📱", "🎮", "⚡", "🌐", "🔭", "🛸"];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "10+", label: "Courses Available" },
  { value: "5+", label: "Expert Mentors" },
  { value: "95%", label: "Placement Rate" },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`home page-enter`}>
      {/* Hero Section */}
      <section className="hero">
        {/* Floating tech objects */}
        <div className="hero__floaters">
          {techEmojis.map((emoji, i) => (
            <div
              key={i}
              className="hero__floater"
              style={{
                left: `${5 + (i * 6.5) % 90}%`,
                top: `${10 + (i * 13) % 75}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${5 + (i % 4)}s`,
                fontSize: `${1.2 + (i % 3) * 0.5}rem`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="hero__grid" />

        {/* Glowing orbs */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />

        {/* Center content */}
        <div className={`hero__content ${visible ? "visible" : ""}`}>
          <div className="hero__badge">
            <span>🎓</span> Skill Enhancement Platform
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--1">WELCOME TO</span>
            <span className="hero__title-line hero__title-line--2">YATHIRAI</span>
            <span className="hero__title-line hero__title-line--3">INFOTECH</span>
          </h1>

          <p className="hero__desc">
            Empowering the next generation of innovators through cutting-edge courses in
            <strong> Programming</strong>, <strong>AI</strong>, <strong>Robotics</strong>, and <strong>Creative Tech</strong>.
          </p>

          <div className="hero__cta">
            <button className="btn-primary hero__cta-btn" onClick={() => document.querySelector('[data-page="courses"]')?.click()}>
              🚀 Explore Courses
            </button>
            <button className="btn-outline hero__cta-btn" onClick={() => document.querySelector('[data-page="about"]')?.click()}>
              ◈ Who We Are
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="hero__scroll">
            <div className="hero__scroll-mouse">
              <div className="hero__scroll-dot" />
            </div>
            <span>Scroll to discover</span>
          </div>
        </div>

        {/* Orbiting ring decoration */}
        <div className="hero__orbit-container">
          <div className="hero__orbit-ring" />
          <div className="hero__orbit-dot hero__orbit-dot--1">🤖</div>
          <div className="hero__orbit-dot hero__orbit-dot--2">💡</div>
          <div className="hero__orbit-dot hero__orbit-dot--3">⚡</div>
        </div>
      </section>

      {/* Stats */}
      <section className="home__stats">
        {stats.map((s, i) => (
          <div key={i} className="home__stat glass-card" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            <div className="home__stat-value">{s.value}</div>
            <div className="home__stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Why us */}
      <section className="home__why">
        <div className="home__why-inner">
          <div className="home__why-text">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">We bridge the gap between learning and industry.</p>
            <ul className="home__why-list">
              {[
                { icon: "🎯", title: "Industry-Focused Curriculum", desc: "Courses designed with real-world applications in mind." },
                { icon: "👨‍🏫", title: "Expert Mentors", desc: "Learn from professionals actively working in their fields." },
                { icon: "🏆", title: "Project-Based Learning", desc: "Build a portfolio through hands-on projects." },
                { icon: "🌐", title: "Community Support", desc: "Join a thriving community of learners and creators." },
              ].map((item, i) => (
                <li key={i} className="home__why-item glass-card" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                  <span className="home__why-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="home__why-visual">
            <div className="home__visual-card glass-card">
              <div className="home__visual-ring" />
              <div className="home__visual-center">
                <span>🛡️</span>
                <strong>YATHIRAI</strong>
                <span>INFOTECH</span>
              </div>
              {["AI", "CODE", "DESIGN", "ROBOTICS"].map((tag, i) => (
                <div key={i} className={`home__visual-tag home__visual-tag--${i + 1}`}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="home__social">
        <h3>Find Us On</h3>
        <div className="home__social-links">
          {[
            { name: "Instagram", icon: "📸", url: "https://instagram.com/yathirai_infotech", color: "#E1306C" },
            { name: "Facebook", icon: "👤", url: "https://facebook.com/yathiraiinfotech", color: "#1877F2" },
            { name: "YouTube", icon: "▶️", url: "https://youtube.com/@yathiraiinfotech", color: "#FF0000" },
            { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/company/yathirai-infotech", color: "#0A66C2" },
            { name: "WhatsApp", icon: "💬", url: "https://wa.me/919999999999", color: "#25D366" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-btn glass-card"
              style={{ "--social-color": s.color }}
            >
              <span>{s.icon}</span>
              <span>{s.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="home__footer">
        <p>© 2025 Yathirai Infotech. All rights reserved.</p>
        <p>📧 info@yathirai.in</p>
      </footer>
    </div>
  );
}
