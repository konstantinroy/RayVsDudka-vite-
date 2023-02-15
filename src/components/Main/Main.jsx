import React, { useState, useEffect } from "react";
import MainWindowPhoto from "../../assets/img/main-window-photo.jpg";
import "./Main.css";
import Navbar from "./Header/Navbar.jsx";
import MainPhoto from "./MainPhoto/MainPhoto.jsx";
import Schedule from "./Schedule/Schedule.jsx";
import Results from "./Results/Results.jsx";
import Locations from "./Locations/Locations.jsx";
import Audio from "./Audio/Audio.jsx";
import Photos from "./Photos/Photos.jsx";
import Quotes from "./Quotes/Quotes.jsx";
import Footer from "./Footer/Footer.jsx";

function Main() {
  // const componentWillMount = () => {
  //   document.body.style.overflow = "hidden";
  // };
  // const componentWillUnmount = () => {
  //   document.body.style.overflow = "visible";
  // };

  // if (window) {
  //   componentWillMount();
  // }
  // if (!window) {
  //   componentWillUnmount();
  // }
  const [window, setWindow] = useState(true);
  const [counter, setCounter] = useState(5);

  const popupShowed = sessionStorage.getItem("popupShowed");

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const exitBtn = () => {
    setWindow(false);
    sessionStorage.setItem("popupShowed", false);
  };

  return (
    <div>
      <div className={!popupShowed ? "main-window block" : "main-window none"}>
        <img src={MainWindowPhoto} alt="" />
        {counter > 0 ? (
          <div className="hint">{counter}</div>
        ) : (
          <div>
            <button className="exit-btn block" onClick={exitBtn}>
              ×
            </button>
          </div>
        )}
        <div className="main-window_text">
          <div className="photo-text">
            <p>Константин Рай победитель сезона 2022 года!!!</p>
          </div>
        </div>
      </div>
      <Navbar />
      <MainPhoto />
      <Schedule />
      <Results />
      <Locations />
      <Audio />
      <Photos />
      <Quotes />
      <Footer />
    </div>
  );
}

export default Main;
