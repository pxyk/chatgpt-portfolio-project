import React, { useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={showButton ? "back-to-top show" : "back-to-top"}>
      <button className="back-to-top__button" onClick={handleClick}>
        ∧
      </button>
    </div>
  );
};

export default BackToTop;
