import "./intro.scss";
import { useEffect, useRef } from "react";
import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped";
export default function Intro() {
  const job = useRef();
  useEffect(() => {
    init(job.current, {
      showCursor: false,
      strings: ["Intern Front-end Developer", "No pain, no gain"],
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
          <a href="#portfolio">
            <ArrowDownward className="iconDown" />
          </a>
        </div>
      </div>
    </div>
  );
}
