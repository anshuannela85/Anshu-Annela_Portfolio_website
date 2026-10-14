import React from "react";
import myImage from "../../assets/image.png";
// import projectImage from '../assets/attendance-tracker.png'; // Uncomment when you have the image

const PROJECTS_DATA = [
  {
    id: "HR-Management-System",
    title: "HR Management System",
    description:
      "Developed a comprehensive HRMS for employee, attendance, payroll, and leave management. Designed and implemented scalable RESTful APIs for seamless frontend-backend communication.Built responsive and reusable UI components, improving usability across multiple modules.",
    tech: ["Java","Spring Boot","PostgreSQL,", "Express.js, ", "React.js, ", "Node.js, ", "JWT Auth"],
   
  },
  {
    id: "Job World",
    title: "JOB-WORLD – Job Search Platform",
    description:
      "Developed a full-stack job search and recruitment platform enabling employers to post jobs and candidates to discover and apply for opportunities. Built interactive dashboards for recruiters and administrators to monitor job postings, applications, and hiring activity.Designed and implemented RESTful APIs connecting frontend applications with backend services for job management, user profiles, and application workflows.",
    tech: ["Java","Spring Boot","PostgreSQL,", "Express.js, ", "React.js, ", "Node.js, ", "JWT Auth"],
   
  }
];

function ProfessionalProjects() {
  return (
    <div className="">
      <div>
        <h2 className="side-hdng">Professional Projects</h2>
      </div>

      <div className="content-box ">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="project-card">
            

            <div className="project-details">
              {/* Title */}
              <h3 className="side-hdng2">{project.title}</h3>

              {/* Tech Stack Tags */}
              <div className="content-box">
                <div className="tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="flex-row side-hdng2 inline-block my-8 mx-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Description */}
                <p>{project.description}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalProjects;
