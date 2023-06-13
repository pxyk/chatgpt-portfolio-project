import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingpage">
      <h1 className="landingpage__title">Merhaba, Ben Mert Aytemiz</h1>
      <h2 className="landingpage__subtitle">
        Bir Frontend Developer'ım.
      </h2>
      <a href="#contact" className="landingpage__btn">İletişim</a>
    </div>
  );
}

export default LandingPage;
