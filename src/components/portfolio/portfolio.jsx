import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        <li className="active">Landing page</li>
        <li>Music app</li>
        <li>Restaurant page</li>
        <li>Ecommerce page</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Banking app</h3>
        </div>
      </div>
    </div>
  );
}
