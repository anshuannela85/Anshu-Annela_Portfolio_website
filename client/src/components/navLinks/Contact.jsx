import React from "react";
import gitHubIcon from "../../assets/icons8-github-32.png";
import linkedInIcon from "../../assets/icons8-linkedin-48.png";

function Contact() {
  return (
    <div>
      <div>
        <h2 className="side-hdng">Contact</h2>
      </div>
      <div className="content-box">
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center ">
          <a href="https://www.linkedin.com/in/anshu-annela-7bb486386"
          target="_blank" 
            rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" className="w-24 h-auto"/>
          </a>
          <a href="https://github.com/anshuannela85"
          target="_blank" 
            rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHUB" className="w-24 h-auto"/>
          </a>
        </div>
        <div className="lst-spc">
          <div>
            <p><span className="font-bold">mail: </span>anshuannela85@gmail.com</p>
            
          </div>
          <div>
            <p><span className="font-bold">Ph.No: </span>+1 (475) 374-1606</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
