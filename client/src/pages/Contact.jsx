import { useState } from "react";
import "./Contact.css";

const socialLinks = [
  { name: "Instagram", icon: "📸", handle: "@yathirai_infotech", url: "https://instagram.com/yathirai_infotech", color: "#E1306C" },
  { name: "Facebook", icon: "👤", handle: "Yathirai Infotech", url: "https://facebook.com/yathiraiinfotech", color: "#1877F2" },
  { name: "YouTube", icon: "▶️", handle: "@YathiraiInfotech", url: "https://youtube.com/@yathiraiinfotech", color: "#FF0000" },
  { name: "LinkedIn", icon: "💼", handle: "Yathirai Infotech", url: "https://linkedin.com/company/yathirai-infotech", color: "#0A66C2" },
  { name: "WhatsApp", icon: "💬", handle: "+91 XXXXX XXXXX", url: "https://wa.me/919999999999", color: "#25D366" },
];

const inquiryTypes = [
  "General Inquiry",
  "Course Enrollment",
  "Course Consultation",
  "Business Partnership",
  "Feedback",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiry: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Compose mailto link — directs to info@yathirai.in
    const subject = encodeURIComponent(`[${form.inquiry || "Inquiry"}] from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry Type: ${form.inquiry}\n\nMessage:\n${form.message}`
    );
    const mailtoLink = `mailto:info@yathirai.in?subject=${subject}&body=${body}`;

    // Simulate slight delay for animation
    await new Promise((r) => setTimeout(r, 1400));

    window.location.href = mailtoLink;
    setStatus("success");

    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", inquiry: "", message: "" });
    }, 4000);
  };

  return (
    <div className="contact page-enter">
      <section className="contact__header">
        <div className="contact__header-bg" />
        <span className="contact__tag">✉ Reach Out</span>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We'd love to hear from you — courses, queries or collaboration</p>
      </section>

      <section className="contact__main">
        <div className="contact__inner">
          {/* Contact Form */}
          <div className="contact__form-wrap">
            <div className="contact__form-header">
              <h2>Send a Message</h2>
              <p>Your message goes directly to <strong>info@yathirai.in</strong></p>
            </div>

            {status === "success" ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <div className="contact__mail-anim">
                    <span className="contact__envelope">✉️</span>
                    <div className="contact__mail-lines">
                      <div /><div /><div />
                    </div>
                  </div>
                </div>
                <h3>Message Sent! ✅</h3>
                <p>Your email client has opened. Send the email to complete your inquiry.</p>
                <p className="contact__success-email">info@yathirai.in</p>
              </div>
            ) : (
              <form className="contact__form glass-card" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="contact__field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="contact__field">
                    <label>Inquiry Type *</label>
                    <select name="inquiry" value={form.inquiry} onChange={handleChange} required>
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="contact__field">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-primary contact__submit ${status === "sending" ? "loading" : ""}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <><span className="contact__spinner" /> Sending...</>
                  ) : (
                    <>✉️ Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <h3>Get in Touch</h3>
              <div className="contact__info-items">
                <div className="contact__info-item">
                  <span>📧</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@yathirai.in">info@yathirai.in</a>
                  </div>
                </div>
                <div className="contact__info-item">
                  <span>📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="contact__info-item">
                  <span>🕐</span>
                  <div>
                    <strong>Office Hours</strong>
                    <p>Mon – Sat: 9 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__social-card glass-card">
              <h3>Follow Us</h3>
              <div className="contact__social-links">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    style={{ "--s-color": s.color }}
                  >
                    <span className="contact__social-icon">{s.icon}</span>
                    <div>
                      <strong>{s.name}</strong>
                      <span>{s.handle}</span>
                    </div>
                    <span className="contact__social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="contact__map glass-card">
        <div className="contact__map-placeholder">
          <span>🗺️</span>
          <p>Yathirai Infotech — Chennai, Tamil Nadu</p>
          <a
            href="https://maps.google.com/?q=Chennai,Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Open in Maps
          </a>
        </div>
      </section>
    </div>
  );
}
