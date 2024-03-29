import React from 'react';
import curriculum from "../../assets/PDF/Diego-rodriguez-cv.pdf";


const Header = () => {
 return (
  <header id="welcome-section">
     <div className="forest" />
     <div className="silhouette" />
     <div className="moon" />
     <div className="container">
       <h1>
        <span className="line"> Web developer</span>
       </h1>
       <div className="buttons">
          <a href="#projects">Portfolio</a>
          <a href={curriculum} target={"_blank"} download={"Diego Rodriguez"} className="cta" rel="noreferrer">
            Download CV
          </a>
        </div>
     </div>
  </header>
 );
}

export default Header;
