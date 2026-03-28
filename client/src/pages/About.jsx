import { useState, useEffect, useRef } from "react";
import "./About.css";

// ========================================================
// 🖼️ HOW TO ADD IMAGES TO THE GALLERY:
// 1. Place your images in: client/public/gallery/
// 2. Name them: photo1.jpg, photo2.jpg, etc.
// 3. Add them to the `galleryImages` array below.
// ========================================================
const galleryImages = [
  { src: "/gallery/photo1.jpg", caption: "Team Training Session" },
  { src: "/gallery/photo2.jpg", caption: "Robotics Workshop" },
  { src: "/gallery/photo3.jpg", caption: "AI Bootcamp 2024" },
  { src: "/gallery/photo4.jpg", caption: "Coding Marathon" },
  { src: "/gallery/photo5.jpg", caption: "Student Showcase" },
  // ✅ Add more images here:
  // { src: "/gallery/photo6.jpg", caption: "Your caption here" },
];

const team = [
  { name: "Founder & CEO", role: "Vision & Strategy", icon: "🎯", desc: "Passionate about bridging the skill gap through technology education." },
  { name: "Lead Instructor", role: "Programming & AI", icon: "💻", desc: "Industry expert with 8+ years in software development and AI." },
  { name: "Creative Director", role: "Design & Content", icon: "🎨", desc: "Award-winning designer driving creativity and visual excellence." },
];

const milestones = [
  { year: "2022", event: "Yathirai Infotech Founded", icon: "🚀" },
  { year: "2023", event: "Launched First Coding Bootcamp", icon: "💻" },
  { year: "2024", event: "Expanded to AI & Robotics", icon: "🤖" },
  { year: "2025", event: "500+ Students Trained", icon: "🏆" },
];

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setActiveSlide(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
  };

  return (
    <div className="about page-enter">
      {/* Header */}
      <section className="about__header">
        <div className="about__header-bg" />
        <div className="about__header-content">
          <span className="about__tag">◈ Who We Are</span>
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">Our story, mission and the people behind Yathirai Infotech</p>
        </div>
      </section>

      {/* Mission */}
      <section className="about__mission">
        <div className="about__mission-inner">
          <div className="about__mission-visual glass-card">
            <div className="about__mission-icon">🛡️</div>
            <h3>YATHIRAI INFOTECH</h3>
            <p>Shaping Tomorrow's Innovators Today</p>
            <div className="about__mission-stats">
              <div><strong>2022</strong><span>Founded</span></div>
              <div><strong>Chennai</strong><span>HQ</span></div>
              <div><strong>500+</strong><span>Alumni</span></div>
            </div>
          </div>
          <div className="about__mission-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Yathirai Infotech was born from a simple but powerful idea — that every student deserves access to world-class skill training in emerging technologies.
            </p>
            <p>
              Founded in 2022 and headquartered in Chennai, we began with a small group of passionate educators and industry experts who believed in the transformative power of technology education.
            </p>
            <p>
              Today, we're proud to have trained 500+ students across domains like Programming, Artificial Intelligence, Robotics, Graphic Design, and Content Creation — empowering them to build careers that matter.
            </p>
            <div className="about__mission-values">
              {["Innovation 🔬", "Excellence 🏆", "Community 🌐", "Impact 💡"].map((v, i) => (
                <span key={i} className="about__value-chip">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="about__gallery">
        <div className="about__gallery-inner">
          <h2 className="section-title" style={{ textAlign: "center" }}>Our Moments</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>Memories from workshops, bootcamps & events</p>

          <div className="about__carousel">
            <div className="about__carousel-track">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`about__carousel-slide ${i === activeSlide ? "active" : i === (activeSlide + 1) % galleryImages.length ? "next" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Placeholder shown if image not found */}
                  <div className="about__img-placeholder" style={{ display: "none" }}>
                    <span>🖼️</span>
                    <p>Add your photo here</p>
                    <small>Place images in /public/gallery/</small>
                  </div>
                  <div className="about__carousel-caption">{img.caption}</div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button className="about__carousel-btn about__carousel-btn--prev" onClick={() => goTo((activeSlide - 1 + galleryImages.length) % galleryImages.length)}>‹</button>
            <button className="about__carousel-btn about__carousel-btn--next" onClick={() => goTo((activeSlide + 1) % galleryImages.length)}>›</button>

            {/* Dots */}
            <div className="about__carousel-dots">
              {galleryImages.map((_, i) => (
                <button key={i} className={`about__dot ${i === activeSlide ? "active" : ""}`} onClick={() => goTo(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about__timeline">
        <div className="about__timeline-inner">
          <h2 className="section-title" style={{ textAlign: "center" }}>Our Journey</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>Milestones that define us</p>
          <div className="about__timeline-track">
            {milestones.map((m, i) => (
              <div key={i} className={`about__milestone glass-card ${i % 2 === 0 ? "left" : "right"}`} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="about__milestone-icon">{m.icon}</div>
                <div className="about__milestone-content">
                  <strong>{m.year}</strong>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
            <div className="about__timeline-line" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about__team">
        <div className="about__team-inner">
          <h2 className="section-title" style={{ textAlign: "center" }}>Our Team</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>The experts powering your growth</p>
          <div className="about__team-grid">
            {team.map((member, i) => (
              <div key={i} className="about__team-card glass-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="about__team-avatar">{member.icon}</div>
                <h3>{member.name}</h3>
                <span className="about__team-role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
