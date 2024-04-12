import React from "react";

import "../Constants/Css/Firstsection.css";
import { FaDownload } from "react-icons/fa";

import Logoimg from "../Constants/Images/logoimg.jpg";
import RishabhImg from "../Constants/Images/rishabh_img.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

export default function Firstsection() {
  return (
    <>
      <div id="main">
        <h7 className="wel">WELCOME TO MY WORLD</h7>
        <span className="dev">
          Hi, I'm{" "}
          <span className="dev_rish">
            Rishabh Ag <br></br>a{" "}
          </span>{" "}
          Developer.
        </span>
        <span className="para">
          I'm a software engineer dedicated to crafting elegant solutions
          through meticulous <br></br> coding and innovative problem-solving.
        </span>
        <hr className="hr1" />
        <hr className="hr2" />
        <hr className="hr3" />
        <hr className="hr4" />
        <hr className="hr5" />
        <hr className="hr6" />
        <hr className="hr7" />

        <div className="main_first">
          <div className="logo_img">
            <img src={Logoimg} alt="" className="imagelogo" />
          </div>
          <div className="navbar">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">PROJECTS</a>
            <a href="">SKILLS</a>
            <a href="">CONTACT</a>
          </div>
          <div className="resume_download">
            <button className="resume_download_but">
              <FaDownload size={30} color="white" />
            </button>
          </div>
        </div>

        <div className="photo_back">
          <img src={RishabhImg} alt="" className="rishabh" />
        </div>

        <span className="find">FIND WITH ME</span>
        <div className="find_div">
          <button className="git ic">
            <FaGithub size={25} color="green" />
          </button>
          <button className="linkedin ic">
            <FaLinkedin size={25} color="blue" />
          </button>
        </div>

        <span className="best">BEST SKILLS ON</span>
        <div className="best_div">
          <button className="m ic">
            <SiMongodb size={25} color="green" />
          </button>
          <button className="e ic">
            <SiExpress size={25} color="brown" />
          </button>
          <button className="r ic">
            <FaReact size={25} color="blue" />
          </button>
          <button className="n ic">
            <FaNodeJs size={25} color="green" />
          </button>
          <button className="j ic">
            <FaJava size={25} color="brown" />
          </button>
          <button className="a ic">
            <FaAndroid size={25} color="rgb(24, 24, 148)" />
          </button>
        </div>
      </div>
    </>
  );
}
