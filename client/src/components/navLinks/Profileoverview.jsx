import React from "react";

const PROFILE_HIGHLIGHTS = [
  {
    id: "intro",
    text: "Results-driven Full Stack Software Engineer with hands-on experience developing scalable web applications using <b>JavaScript, React, Node.js, Java, Spring Boot,  Angular,  Python, Postgres SQL and MySQL</b> Skilled in designing RESTful APIs, building responsive user interfaces, implementing secure authentication, and optimizing application performance.",
  },
  {
    id: "amazon",
    text: "Experienced working in Agile environments with expertise in software development, debugging, testing, database management, and cloud-ready deployments. Passionate about developing high-quality, scalable software solutions and continuously learning modern technologies.",
  },
  {
    id: "frontend",
    text: "Specialized in building responsive, <b>single-page applications (SPA)</b> & multi-page applications (MPA) using <b>React.js and Hooks</b>, translating complex requirements into user-friendly interfaces.",
  },
  {
    id: "backend",
    text: "Extensive work on Backend Development using <b>Node.js and Express</b>, architecting secure RESTful APIs. Skilled in designing normalized schemas for <b>PostgreSQL</b> and flexible document structures for <b>MongoDB</b>.",
  },
  {
    id: "security",
    text: "Implemented robust authentication systems featuring <b>Google OAuth integration</b> alongside secure local login strategies (using <b>bcrypt</b> for hashing and <b>JWT</b> for session management).",
  },
  {
    id: "sdlc",
    text: "Strong understanding of the <b>software development lifecycle (SDLC)</b> and version control using <b>Git/GitHub</b>, with hands-on experience deploying applications to cloud platforms.",
  },
  {
    id: "closing",
    text: "Proven ability to handle <b>end-to-end development</b>: from database modeling (SQL & NoSQL) and API integration to frontend implementation and system optimization.",
  },
];

function ProfileOverview() {
  return (
    <div>
      <h2 className="side-hdng">Profile Overview</h2>
      <div className="content-box">
        <ul className="lst-spc">
          {PROFILE_HIGHLIGHTS.map((item) => (
            <li
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.text }}
              className="inline-html"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileOverview;
