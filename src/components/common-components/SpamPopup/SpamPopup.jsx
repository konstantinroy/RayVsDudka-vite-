import React, { useState, useEffect } from "react";
import styles from "./SpamPopup.module.scss";
import MainWindowPhoto from "../../../assets/img/main-window-photo.jpg";

function SpamPopup() {
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
    <div
      className={`${styles.mainWindow}
      ${!popupShowed ? styles.block : styles.none}
      `}
    >
      {counter > 0 ? (
        <div className={styles.hint}>{counter}</div>
      ) : (
        <div className={styles.exitBtn} onClick={exitBtn}>
          X
        </div>
      )}
      <img src={MainWindowPhoto} alt="" />
      <div className={styles.mainWindowText}>
        <div className={styles.photoText}>
          <p>Константин Рай победитель сезона 2022 года!!!</p>
        </div>
      </div>
    </div>
  );
}

export default SpamPopup;
