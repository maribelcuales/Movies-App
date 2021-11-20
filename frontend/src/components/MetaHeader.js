import React, {useState, useEffect} from 'react';  
import "./metaStyles.css";

const MetaHeader = () => {
  const [scrolled, setScrolled] = useState(false); 

  const handleScroll= () => {
    if(window.scrollY > 0) {
      setScrolled(true); 
    } else {
      setScrolled(false); 
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });  

  let navbar = ['header']; 
    if(scrolled) {
      navbar.push('sticky');  
    }

  return (
    <div className={navbar.join(" ")} id="header">
      <a href="#" className="logo">
        Movies<span>.</span>
      </a>
      <ul className="navigation">
        <li>
          <a href="#banner">Home</a>
        </li>
        <li>
          <a href="#movies">Movie Reviews</a>
        </li>
        <li>
          <a href="#add-review">Add Movie Review</a>
        </li>
      </ul>
    </div>
  );
};


export default MetaHeader;
