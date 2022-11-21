import "./intro.scss";
import { useEffect, useRef } from "react";
import { ArrowDownward, Facebook, LinkedIn, GitHub } from "@material-ui/icons";
import { init } from "ityped";
export default function Intro() {
  const job = useRef();
  useEffect(() => {
    init(job.current, {
      showCursor: false,
      strings: ["Reach me hungnguyenkhanh1905@gmail.com", "No pain, no gain"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets\avt.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Nguyen Khanh Hung</h1>
          <h3>
            !! <span ref={job}></span>
          </h3>
          <div className="iconSocial">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/hungnguyenkhanh1905/"
            >
              <Facebook className="icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hungnguyenkhanh/"
            >
              <LinkedIn className="icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Nguyen-Khanh-Hung"
            >
              <GitHub className="icon" />
            </a>
          </div>
          <div className="nav_resume">
            <a
              href="assets\CV-Front-end Developer Intern_NguyenKhanhHung.pdf"
              download="CV-Front-end Developer Intern_NguyenKhanhHung.pdf"
            >
              <button className="getResume">
                <span> Download CV</span>{" "}
                <i className="fa-solid fa-download icon"></i>
              </button>
            </a>
          </div>
          <a href="#portfolio">
            <ArrowDownward className="iconDown" />
          </a>
        </div>
      </div>
    </div>
  );
}
