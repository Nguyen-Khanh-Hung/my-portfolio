import PortfolioList from "../PortfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { landingPage, music, Restaurant, ecommerce } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("landing");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "landing":
        setData(landingPage);
        break;
      case "music":
        setData(music);
        break;
      case "restaurant":
        setData(Restaurant);
        break;
      case "ecommerce":
        setData(ecommerce);
        break;
      default:
        setData(landingPage);
    }
  }, [selected]);
  const list = [
    {
      id: "landing",
      title: "Landing page",
    },
    {
      id: "music",
      title: "Music app",
    },
    {
      id: "restaurant",
      title: "Restaurant page",
    },
    {
      id: "ecommerce",
      title: "Ecommerce page",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Project</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="item"
            key={d.id}
            href={d.href}
          >
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
