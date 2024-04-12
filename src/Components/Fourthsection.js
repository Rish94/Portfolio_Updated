import React, { useState } from "react";

import "../Constants/Css/Fourthsection.css";
import Education from "./FourthSections_myres/Education";

import Professionalskills from "./FourthSections_myres/Professionalskills";

export default function Fourthsection() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <br />
      <div className="fourth_main">
        <span className="comp">Fresher</span>
        <br />
        <span className="myp">My Resume</span>
        <br></br>
        <br></br>
        <div className="fourth_doing">
          <div className="fourth_but">
            <button
              className={`education fbut ${
                activeButton === "education" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("education")}
            >
              Education
            </button>
            <button
              className={`professionalskills fbut ${
                activeButton === "professionalskills" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("professionalskills")}
            >
              {" "}
              Professional Skills
            </button>
            <button
              className={`experience fbut ${
                activeButton === "experience" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("experience")}
            >
              {" "}
              Experience
            </button>
            <button
              className={`interview fbut ${
                activeButton === "interview" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("interview")}
            >
              Interview
            </button>
          </div>
        </div>
        <div className="fs_main">
          <div className="fs">
            <div className={activeButton === 'education' ? "education_sec" : "hide" }>
                <Education/>
            </div>
            <div className={activeButton === 'professionalskills' ? "professional_sec" : "hide" }>
            <Professionalskills/>
            </div>
            <div className={activeButton === 'experience' ? "experience_sec " : "hide" }>
                Experience
            </div>
            <div className={activeButton === 'interview' ? "interview_sec " : "hide" }>
                Interview
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
