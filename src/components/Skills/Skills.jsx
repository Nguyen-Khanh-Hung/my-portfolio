import "./skills.scss";
// import { CheckCircle } from "@material-ui/icons";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="left">
          <h3>Technical Skills</h3>
          <p> HTML, CSS, SCSS</p>
          <p>Bootstrap, Grid system</p>
          <p>Javascript, Jquery</p>
          <p>ReactJS</p>
          <p>Git, Gitbash</p>
          <p>Photoshop, AI, Figma</p>
        </div>
        <div className="right">
          <h3>Soft skills</h3>
          <p>English (read, basic communication)</p>
          <p>Teamwork</p>
          <p>Research</p>
          <p>Problem Solving</p>
          <p>Communication</p>
          <p>Analytical thinking</p>
        </div>
      </div>
    </div>
  );
}
