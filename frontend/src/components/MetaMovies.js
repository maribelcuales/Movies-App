import MetaCard from "./MetaCard.js";
import "./MetaHeader.js";
import MetaHeader from "./MetaHeader.js";
import MetaReviews from "./MetaReviews.js";
import "./metaStyles.css";

const MetaMovies = () => {
  return (
    <div>
      <MetaHeader /> 
      <div className="banner" id="banner">
        <div className="content">
          <h2>Meta Movie Reviews</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#" className="btn">
            Movie List
          </a>
        </div>
      </div>
      <MetaReviews />
      <MetaCard />
    </div>
  );
};

export default MetaMovies;
