import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="aboutme" class="aboutme">
      <div className="container">
        <h2 className="aboutme__title">About Me</h2>
        <p className="aboutme__text">
          Merhaba! Ben Mert Aytemiz. Benim için önemli olan, her zaman Frontend
          developer olarak daha ileri gitmek ve her projede en iyi çözümleri
          sunmaktır. Kendimi geliştirmeye her zaman açığım ve elimden gelenin en
          iyisini yapmak için her zaman çaba gösteriyorum. Süper güçlerim
          arasında HTML, CSS, JavaScript ve React yer alıyor ve yaratıcılığı ve
          teknolojiyi bir araya getirerek projelerimi hayata geçiriyorum. Ben,
          size kendimi tanıtmak için karanlık bir şehirdeki kimliğimi açık
          edeceğim. Gotham'ın kahramanı Batman değilim ama yine de merak
          ediyorsanız, okumaya devam edin!
        </p>
        <div className="aboutme__info">
          <div className="aboutme__info-item">
            <div className="aboutme__label">Name:</div>
            <div className="aboutme__text--info">Mert Aytemiz</div>
          </div>
          <div className="aboutme__info-item">
            <div className="aboutme__label">Email:</div>
            <div className="aboutme__text--info">mertaytemiz@example.com</div>
          </div>
          <div className="aboutme__info-item">
            <div className="aboutme__label">Date of birth:</div>
            <div className="aboutme__text--info">01/01/1990</div>
          </div>
          <div className="aboutme__info-item">
            <div className="aboutme__label">From:</div>
            <div className="aboutme__text--info">Istanbul, Turkey</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
