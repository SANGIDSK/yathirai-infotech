import { useState } from "react";
import "./Courses.css";

// ========================================================
// ✏️ HOW TO ADD/EDIT COURSES:
// 1. To add a new domain: add a new object to `domains` array
// 2. To add courses within a domain: add to the `courses` array
// 3. To edit what users learn: edit the `topics` array in each course
// ========================================================
const domains = [
  {
    id: "coding",
    title: "Coding",
    icon: "💻",
    color: "#6a0dad",
    glowColor: "rgba(106,13,173,0.5)",
    description: "Master programming from fundamentals to advanced topics",
    courses: [
      {
        id: "python",
        name: "Python",
        icon: "🐍",
        level: "Beginner to Advanced",
        duration: "3 Months",
        topics: [
          "Python Syntax & Data Types",
          "Functions, Modules & OOP",
          "File Handling & Exceptions",
          "Libraries: NumPy, Pandas, Matplotlib",
          "Web Scraping with BeautifulSoup",
          "Mini Projects & Capstone",
        ],
      },
      {
        id: "java",
        name: "Java",
        icon: "☕",
        level: "Beginner to Intermediate",
        duration: "3 Months",
        topics: [
          "Java Basics & OOP Concepts",
          "Collections Framework",
          "Exception Handling",
          "JDBC & Database Connectivity",
          "Spring Boot Basics",
          "REST API Development",
        ],
      },
      {
        id: "c",
        name: "C / C++",
        icon: "⚙️",
        level: "Beginner",
        duration: "2 Months",
        topics: [
          "C Programming Fundamentals",
          "Pointers & Memory Management",
          "Data Structures in C",
          "C++ OOP Concepts",
          "STL (Standard Template Library)",
          "System-Level Programming",
        ],
      },
      {
        id: "web",
        name: "Web Dev",
        icon: "🌐",
        level: "Beginner to Advanced",
        duration: "4 Months",
        topics: [
          "HTML5, CSS3 & Responsive Design",
          "JavaScript & ES6+",
          "React.js Framework",
          "Node.js & Express",
          "MongoDB & REST APIs",
          "Full Stack Project Deployment",
        ],
      },
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    icon: "🎬",
    color: "#cc44cc",
    glowColor: "rgba(204,68,204,0.5)",
    description: "Build a powerful online presence through creative content",
    courses: [
      {
        id: "youtube",
        name: "YouTube",
        icon: "▶️",
        level: "Beginner",
        duration: "2 Months",
        topics: [
          "Channel Setup & Branding",
          "Scripting & Storyboarding",
          "Video Recording & Lighting",
          "Editing with DaVinci Resolve",
          "SEO & YouTube Algorithm",
          "Monetization Strategies",
        ],
      },
      {
        id: "instagram",
        name: "Instagram / Reels",
        icon: "📸",
        level: "Beginner",
        duration: "6 Weeks",
        topics: [
          "Content Strategy & Niche Selection",
          "Reels & Stories Creation",
          "Hashtag & Caption Mastery",
          "Photography Tips for Mobile",
          "Brand Collaboration Guide",
          "Analytics & Growth Hacking",
        ],
      },
      {
        id: "copywriting",
        name: "Copywriting",
        icon: "✍️",
        level: "Beginner to Intermediate",
        duration: "6 Weeks",
        topics: [
          "Fundamentals of Persuasive Writing",
          "Headlines & Hook Writing",
          "Email Marketing Copy",
          "Ad Copywriting (Google/Meta)",
          "Long-form Content & Blogs",
          "Portfolio Building",
        ],
      },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    icon: "🎨",
    color: "#dd55ee",
    glowColor: "rgba(221,85,238,0.5)",
    description: "Craft visuals that communicate, persuade and inspire",
    courses: [
      {
        id: "photoshop",
        name: "Photoshop",
        icon: "🖼️",
        level: "Beginner to Advanced",
        duration: "2 Months",
        topics: [
          "Workspace & Layer Mastery",
          "Selection & Masking Tools",
          "Photo Retouching & Editing",
          "Digital Illustration",
          "Poster & Banner Design",
          "Batch Processing & Export",
        ],
      },
      {
        id: "illustrator",
        name: "Illustrator",
        icon: "✏️",
        level: "Beginner",
        duration: "6 Weeks",
        topics: [
          "Vector Graphics Fundamentals",
          "Pen Tool & Bezier Curves",
          "Logo & Icon Design",
          "Typography & Color Theory",
          "Infographic Design",
          "Print & Web Asset Export",
        ],
      },
      {
        id: "canva",
        name: "Canva Pro",
        icon: "🎭",
        level: "Beginner",
        duration: "4 Weeks",
        topics: [
          "Canva Interface & Templates",
          "Brand Kit Setup",
          "Social Media Design",
          "Presentation Design",
          "Video & Animation in Canva",
          "Client-Ready Deliverables",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Robotics",
    icon: "🤖",
    color: "#9d3fff",
    glowColor: "rgba(157,63,255,0.5)",
    description: "Step into the future with AI, ML and Robotics",
    courses: [
      {
        id: "ml",
        name: "Machine Learning",
        icon: "🧠",
        level: "Intermediate",
        duration: "3 Months",
        topics: [
          "ML Fundamentals & Math Basics",
          "Supervised & Unsupervised Learning",
          "Scikit-learn & Model Training",
          "Feature Engineering",
          "Model Evaluation & Tuning",
          "Real-World ML Projects",
        ],
      },
      {
        id: "genai",
        name: "Generative AI",
        icon: "✨",
        level: "Beginner to Intermediate",
        duration: "6 Weeks",
        topics: [
          "Introduction to LLMs & GPT",
          "Prompt Engineering Mastery",
          "AI Image Generation (Midjourney, DALL-E)",
          "Building AI Apps with APIs",
          "RAG & Vector Databases",
          "AI Business Applications",
        ],
      },
      {
        id: "robotics",
        name: "Robotics",
        icon: "🦾",
        level: "Beginner to Intermediate",
        duration: "3 Months",
        topics: [
          "Arduino & Raspberry Pi Basics",
          "Sensors & Actuators",
          "Line Follower & Obstacle Robots",
          "Robot Programming with Python",
          "ROS (Robot Operating System) Intro",
          "Capstone: Build Your Own Bot",
        ],
      },
    ],
  },
];

export default function Courses() {
  const [activeDomain, setActiveDomain] = useState(null);
  const [activeCourse, setActiveCourse] = useState(null);

  const selectedDomain = domains.find((d) => d.id === activeDomain);
  const selectedCourse = selectedDomain?.courses.find((c) => c.id === activeCourse);

  const handleDomainClick = (domainId) => {
    setActiveDomain(activeDomain === domainId ? null : domainId);
    setActiveCourse(null);
  };

  return (
    <div className="courses page-enter">
      <section className="courses__header">
        <div className="courses__header-bg" />
        <span className="courses__tag">⚡ Learn & Grow</span>
        <h1 className="section-title">Our Courses</h1>
        <p className="section-subtitle">Choose your domain and unlock your potential</p>
      </section>

      {/* Domain Tiles */}
      <section className="courses__domains">
        <div className="courses__domains-grid">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className={`courses__domain-tile glass-card ${activeDomain === domain.id ? "active" : ""}`}
              style={{ "--domain-color": domain.color, "--domain-glow": domain.glowColor }}
              onClick={() => handleDomainClick(domain.id)}
            >
              <div className="courses__domain-icon">{domain.icon}</div>
              <h3 className="courses__domain-title">{domain.title}</h3>
              <p className="courses__domain-desc">{domain.description}</p>
              <div className="courses__domain-count">{domain.courses.length} courses</div>
              <div className="courses__domain-arrow">{activeDomain === domain.id ? "▲" : "▼"}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Course List */}
      {activeDomain && selectedDomain && (
        <section className="courses__list" key={activeDomain}>
          <div className="courses__list-inner">
            <h2 className="courses__list-title">
              {selectedDomain.icon} {selectedDomain.title} Courses
            </h2>
            <div className="courses__list-grid">
              {selectedDomain.courses.map((course) => (
                <div
                  key={course.id}
                  className={`courses__course-card glass-card ${activeCourse === course.id ? "active" : ""}`}
                  onClick={() => setActiveCourse(activeCourse === course.id ? null : course.id)}
                >
                  <div className="courses__course-icon">{course.icon}</div>
                  <div className="courses__course-info">
                    <h3>{course.name}</h3>
                    <div className="courses__course-meta">
                      <span>📊 {course.level}</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                  </div>
                  <span className="courses__course-toggle">{activeCourse === course.id ? "▲" : "▼"}</span>
                </div>
              ))}
            </div>

            {/* Course Detail */}
            {activeCourse && selectedCourse && (
              <div className="courses__detail glass-card">
                <div className="courses__detail-header">
                  <span className="courses__detail-icon">{selectedCourse.icon}</span>
                  <div>
                    <h2>{selectedCourse.name}</h2>
                    <div className="courses__detail-meta">
                      <span>📊 {selectedCourse.level}</span>
                      <span>⏱️ {selectedCourse.duration}</span>
                    </div>
                  </div>
                </div>
                <h4 className="courses__detail-label">What You'll Learn</h4>
                <ul className="courses__topics">
                  {selectedCourse.topics.map((topic, i) => (
                    <li key={i} className="courses__topic" style={{ animationDelay: `${i * 0.08}s` }}>
                      <span className="courses__topic-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary courses__enroll-btn">
                  📩 Enroll Now
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="courses__cta">
        <div className="courses__cta-card glass-card">
          <h2>Can't decide? Let us guide you!</h2>
          <p>Book a free consultation with our experts and find the right course for your goals.</p>
          <a href="mailto:info@yathirai.in?subject=Course Consultation" className="btn-primary">
            📧 Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
