import React from "react";
import "./Fourthseccss/edu.css";

export default function Education() {
  return (
    <div className="edu">
      <div className="hs me">
        <br />
        <br />
        <span className="hs_head hed">Higher Secondary</span>
        <div className="twe">
          <span className="he">Intermediate</span>
          <br />
          <span className="date">2019-2020</span>
          <hr />
          <p className="fr">
            St. Andrews Sr. Sec. School
            Agra, UP{" "}
          </p>
        </div>
        <div className="te">
        <span className="he">High School</span>
          <br />
          <span className="date">2017-2018</span>
          <hr />
          <p className="fr">
            St. Andrews Sr. Sec. School
            Agra, UP{" "}
          </p>
        </div>
        <button className="twelve"></button>
        <button className="ten"></button>
        <hr className="hs_hr" />
      </div>




      <div className="post me">
        <br />
        <br />
        <span className="post_head hed">Graduation</span>
        <div className="twe">
          <span className="he">Bachelors of Technology (CSE)</span>
          <br />
          <span className="date">2020-2024</span>
          <hr />
          <p className="fr">
            GLA University, Mathura UP{" "}
          </p>
        </div>
        <button className="grd"></button>
        <hr className="hs_hr" />
      </div>


      <div className="post me">
        <br />
        <br />
        <span className="post_head hed">Post Graduation</span>
        {/* <div className="twe">
          <span className="he">Bachelors of Technology</span>
          <br />
          <span className="date">2020-2024</span>
          <hr />
          <p className="fr">
            GLA University, Mathura UP{" "}
          </p>
        </div> */}
        <button className="pst"></button>
        <hr className="hs_hr" />
      </div>


    </div>
  );
}
