import "./metaStyles.css";

const MetaHeader = () => {
  return (
    <div className="header">
      <a href="#" className="logo">Movies<span>.</span></a>
      <ul className="navigation">
        <li><a href="#banner">Home</a></li>
        <li><a href="#movies">Movie Reviews</a></li>
        <li><a href="#add-review">Add Movie Review</a></li>
      </ul>
    </div>
  );
};

export default MetaHeader;
