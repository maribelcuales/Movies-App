import "./metaStyles.css";
//import StarWars from "./star-wars-cameron-venti.jpg";
import Cinema from "./cinemaFrontage.jpg";

const MetaCard = () => {
  return (
    <div className="movieCard" id="movieCard">
      <div className="title">
        <h2 className="titleText">
          Movie <span>L</span>ist
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="cardContent">
        <div className="box">
          <div className="imgBx">
            <img src={Cinema} alt="Star Wars Photo by Cameron Venti on Unsplash" />
          </div>
          <div className="text">
            <h3>Action</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={Cinema} alt="Star Wars Photo by Cameron Venti on Unsplash" />
          </div>
          <div className="text">
            <h3>Drama</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={Cinema} alt="Star Wars Photo by Cameron Venti on Unsplash" />
          </div>
          <div className="text">
            <h3>Adventure</h3>
          </div>
        </div>
      </div>
      <div className="title">
        <a href="#" className="btn">View All</a>
      </div>
    </div>
  );
};

export default MetaCard;
