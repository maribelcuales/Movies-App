import "./metaStyles.css";
import Cinema from "./cinemaFrontage.jpg";

const MetaReviews = () => {
  return (
    <div className="reviews" id="reviews">
      <div className="row">
        <div className="col50">
          <h2 className="titleText">
            <span>M</span>ovie Reviews
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col50">
          <div className="imgBx">
            <img src={Cinema} alt="Cinema Frontage"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaReviews;
