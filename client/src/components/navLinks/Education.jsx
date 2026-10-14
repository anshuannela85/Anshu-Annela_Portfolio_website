import React from "react";

const Education_Data = [
  {
    id: "M.P",
    sv: "Master of Science in Computer and Information Sciences",
    cv: "Computer & Information Science",
    cg: "8.57",
    dv: "2026",
    cl: "Sacred Heart University, Connecticut, USA",
  },
  {
    id: "B.P",
    cv: "Bachelor of Science in Computer Science",
    cg: "7.47",
    dv: "2024",
    cl: "Osmania University, Hyderabad, India.",
  },
];

function Education() {
  return (
    <div className="">
      <div>
        <h2 className="side-hdng">Education</h2>
      </div>

      <div className="content-box">
        {Education_Data.map((group) => (
          <div key={group.id}>
            {group.cl ? (
              <p>
                <span className="side-hdng2">College: </span>
                {group.cl}
              </p>
            ) : (
              <p>
                <span className="side-hdng2">School: </span>
                {group.sc}
              </p>
            )}
            <div className="content-box my-4">
              
              {group.sv && (
                <p>
                  <span className="side-hdng2">Specialization: </span>
                  {group.sv}
                </p>
              )}
              <p>
                <span className="side-hdng2">Course: </span>
                {group.cv}
              </p>
              <div>
                <p>
                  <span className="side-hdng2">Duration: </span>
                  {group.dv}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
