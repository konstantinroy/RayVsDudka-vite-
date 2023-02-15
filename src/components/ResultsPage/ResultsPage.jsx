import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import styles from "./ResultsPage.module.scss";
import SeasonTable from "./SeasonTable2023/SeasonTable2023.jsx";
// import ResultsPagePhoto from "../../assets/img/ResultsPage-photo.jpg";
import FifaTextAnimation from "./FifaTextAnimation/FifaTextAnimation.jsx";
import AddResultComponent from "./AddResultComponent/AddResultComponent.jsx";
import textCardPhoto from "./img/preSeasonImg.jpg";

function ResultsPage() {
  const [buttonText1, setButtonText1] = React.useState("ᐯ");
  const [buttonText2, setButtonText2] = React.useState("ᐯ");

  const [isArrowClicked1, setIsArrowClicked1] = useState(false);
  const [isArrowClicked2, setIsArrowClicked2] = useState(false);

  const onButtonClick1 = () => (
    !isArrowClicked2 ? setButtonText1("ᐱ") : setButtonText1("ᐯ"),
    setIsArrowClicked1(!isArrowClicked1)
  );

  const onButtonClick2 = () => (
    !isArrowClicked2 ? setButtonText2("ᐱ") : setButtonText2("ᐯ"),
    setIsArrowClicked2(!isArrowClicked2)
  );

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.sheduleHeading}>
          <div className={styles.pagePhotoBlock}>
            {/* <img
              className={styles.shedulePagePhoto}
              src={ResultsPagePhoto}
              alt=""
            ></img> */}
            <FifaTextAnimation />
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>
              Расписание и результаты всех матчей 2023-го года
            </h1>
          </div>
        </div>

        <div className={styles.seasonTableBlock}>
          <h1>Актуальная таблица</h1>
          <SeasonTable />
        </div>

        <div className={styles.resultsHeader}>
          <h1>Результаты всех туров сезона</h1>
        </div>

        <div className={styles.resultsBlock}>
        <AddResultComponent />

        <div className={styles.matchDayBlock}>
            <h2 className={styles.dateText}>31-ое января (2 ТУР)</h2>
            <h1 className={styles.matchScoreText}>Дудка 2-5 Рай</h1>
            <div className={styles.resultList}>
              <h3
                className={styles.viewResults}
                style={{
                  maxHeight: !isArrowClicked2 ? "100vw" : "0",
                  overflow: !isArrowClicked2 ? "visible" : "hidden",
                  transition: !isArrowClicked2 ? "0.2s" : "0s",
                }}
              >
                Подробная информация
              </h3>
              <uL
                style={{
                  maxHeight: !isArrowClicked2 ? "0" : "150vw",
                  overflow: !isArrowClicked2 ? "hidden" : "visible",
                  transition: !isArrowClicked2 ? "0.7s" : "0.2s",
                }}
              >
                <li>Бавария 1-2 ПСЖ</li>
                <li>ПСЖ 0-3 МС</li>
                <li>Челси 4-3 Тоттенхэм</li>
                <li>Реал 1-0 Барселона</li>
                <li>Бразилия 1-4 Англия</li>
                <li>Атлетико 2-5 Бавария</li>
                <li>МЮ 0-2 Ливерпуль</li>
                <h3 className={styles.mathesQuotes}>Количество матчей: 7</h3>
                <h3 className={styles.goalsQuotes}>Счёт голов: 9-19</h3>
              </uL>
              <button
                onClick={onButtonClick2}
                style={{
                  marginTop: !isArrowClicked2 ? "0" : "2vw",
                }}
              >
                {buttonText2}
              </button>
            </div>
          </div>

          <div className={styles.matchDayBlock}>
            <h2 className={styles.dateText}>4-ое января (1 ТУР)</h2>
            <h1 className={styles.matchScoreText}>Дудка 5-12 Рай</h1>
            <div className={styles.resultList}>
              <h3
                className={styles.viewResults}
                style={{
                  maxHeight: !isArrowClicked1 ? "100vw" : "0",
                  overflow: !isArrowClicked1 ? "visible" : "hidden",
                  transition: !isArrowClicked1 ? "0.2s" : "0s",
                }}
              >
                Подробная информация
              </h3>
              <uL
                style={{
                  maxHeight: !isArrowClicked1 ? "0" : "150vw",
                  overflow: !isArrowClicked1 ? "hidden" : "visible",
                  transition: !isArrowClicked1 ? "0.7s" : "0.2s",
                }}
              >
                <li>Бавария 1-0 ПСЖ</li>
                <li>Челси 1-2 МС</li>
                <li>ПСЖ 3-1 Ливерпуль</li>
                <li>Франция 3-2 Англия</li>
                <li>Реал 1-3 Барселона</li>
                <li>ПСЖ 2-2 Бавария (3-1 по пенальти)</li>
                <li>Атлетико 0-1 Реал</li>
                <li>Барселона 0-3 Тоттенхэм</li>
                <li>Бавария 1-3 МС</li>
                <li>ПСЖ 0-2 Бавария</li>
                <li>Португалия 2-1 Франция</li>
                <li>ПСЖ 2-4 Тоттенхэм</li>
                <li>МЮ 0-1 Челси</li>
                <li>Бавария 0-3 ПСЖ</li>
                <li>Реал 4-5 Барселона</li>
                <li>Италия 1-3 Португалия</li>
                <li>ПСЖ 3-4 Тоттенхэм</li>
                <h3 className={styles.mathesQuotes}>Количество матчей: 17</h3>
                <h3 className={styles.goalsQuotes}>Счёт голов: 24-40</h3>
              </uL>
              <button
                onClick={onButtonClick1}
                style={{
                  marginTop: !isArrowClicked1 ? "0" : "2vw",
                }}
              >
                {buttonText1}
              </button>
            </div>
          </div>
          
        </div>

        <div className={styles.prevSeasonCard}>
          <Link to="/results2022">
            <div>
              <div className={styles.prevCardBlock}>
                <img src={textCardPhoto} alt="" />
              </div>
              <div className={styles.textBlock}>
                <h1>Сезон 2022 победитель: </h1>
                <h2>Константин Рай</h2>
                <div className={styles.resultTxt}>
                  <p>Результаты всех матчей сезона</p>
                  <h3 className={styles.resultTxtArrow}>⟶</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResultsPage;
