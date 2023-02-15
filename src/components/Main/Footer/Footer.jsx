import React, { useState } from "react";
import styles from "../Footer/Footer.module.scss";
import AppStoreIcon from "../../../assets/img/AppStoreIcon.png";
import GooglePlayIcon from "../../../assets/img/GooglePlayIcon.png";

function Footer() {
  const [buttonText1, setButtonText1] = React.useState("▼");
  const [buttonText2, setButtonText2] = React.useState("▼");
  const [buttonText3, setButtonText3] = React.useState("▼");
  const [isArrowClicked1, setIsArrowClicked1] = useState(false);
  const [isArrowClicked2, setIsArrowClicked2] = useState(false);
  const [isArrowClicked3, setIsArrowClicked3] = useState(false);

  const onButtonClick1 = () => (
    !isArrowClicked1 ? setButtonText1("▲") : setButtonText1("▼"),
    setIsArrowClicked1(!isArrowClicked1)
  );
  const onButtonClick2 = () => (
    !isArrowClicked2 ? setButtonText2("▲") : setButtonText2("▼"),
    setIsArrowClicked2(!isArrowClicked2)
  );
  const onButtonClick3 = () => (
    !isArrowClicked3 ? setButtonText3("▲") : setButtonText3("▼"),
    setIsArrowClicked3(!isArrowClicked3)
  );

  return (
    <div className={styles.footerBlockStyles}>
      <div className={styles.mainBlockPC}>
        <div className={styles.linksPCBlock}>
          <h1>Компания</h1>
          <ul className={styles.linksPC}>
            <li>
              <a href="/">О нас</a>
            </li>
            <li>
              <a href="/">Блог</a>
            </li>
            <li>
              <a href="/">Карьера</a>
            </li>
            <li>
              <a href="/">Медиа о нас</a>
            </li>
            <li>
              <a href="/">White paper</a>
            </li>
          </ul>
        </div>

        <div className={styles.linksPCBlock}>
          <h1>Поддержка</h1>
          <ul className={styles.linksPC}>
            <li>
              <a href="/">Контакты</a>
            </li>
            <li>
              <a href="/">Партёрская программа</a>
            </li>
          </ul>
        </div>

        <div className={styles.linksPCBlock}>
          <h1>Правила</h1>
          <ul className={styles.linksPC}>
            <li>
              <a href="/">Пользовательские соглашения</a>
            </li>
            <li>
              <a href="/">Политика использования данных</a>
            </li>
            <li>
              <a href="/">Политика cookies</a>
            </li>
          </ul>
        </div>

        <div className={styles.icons}>
          <a href="/">
            <img src={AppStoreIcon} alt=""></img>
          </a>
          <a href="/">
            <img src={GooglePlayIcon} alt=""></img>
          </a>
        </div>
      </div>

      <div className={styles.mainBlockMOB}>
        <div className={styles.linksBlockMOB__box}>
          <div className={styles.linksBlockMOB}>
            <div className={styles.heading} onClick={onButtonClick1}>
              <h1>Компания</h1>
              <button>{buttonText1}</button>
            </div>
            <div
              style={{
                maxHeight: !isArrowClicked1 ? "0" : "35vw",
                overflow: !isArrowClicked1 ? "hidden" : "visible",
                transition: !isArrowClicked1 ? "0.7s" : "0.2s",
              }}
            >
              <ul className={styles.linksMOB}>
                <li>
                  <a href="/">О нас</a>
                </li>
                <li>
                  <a href="/">Блог</a>
                </li>
                <li>
                  <a href="/">Карьера</a>
                </li>
                <li>
                  <a href="/">Медиа о нас</a>
                </li>
                <li>
                  <a href="/">White paper</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.linksBlockMOB}>
            <div className={styles.heading} onClick={onButtonClick2}>
              <h1>Поодержка</h1>
              <button>{buttonText2}</button>
            </div>
            <div
              style={{
                maxHeight: !isArrowClicked2 ? "0" : "35vw",
                overflow: !isArrowClicked2 ? "hidden" : "visible",
                transition: !isArrowClicked2 ? "0.7s" : "0.2s",
              }}
            >
              <ul className={styles.linksMOB}>
                <li>
                  <a href="/">Контакты</a>
                </li>
                <li>
                  <a href="/">Партёрская программа</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.linksBlockMOB}>
            <div className={styles.heading} onClick={onButtonClick3}>
              <h1>Правила</h1>
              <button>{buttonText3}</button>
            </div>
            <div
              style={{
                maxHeight: !isArrowClicked3 ? "0" : "35vw",
                overflow: !isArrowClicked3 ? "hidden" : "visible",
                transition: !isArrowClicked3 ? "0.7s" : "0.2s",
              }}
            >
              <ul className={styles.linksMOB}>
                <li>
                  <a href="/">Пользовательские соглашения</a>
                </li>
                <li>
                  <a href="/">Политика использования данных</a>
                </li>
                <li>
                  <a href="/">Политика cookies</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.icons}>
            <a href="/">
              <img src={AppStoreIcon} alt=""></img>
            </a>
            <a href="/">
              <img src={GooglePlayIcon} alt=""></img>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerCapText}>© Ray vs Dudka 2022</div>
    </div>
  );
}

export default Footer;
