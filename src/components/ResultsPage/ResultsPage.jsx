import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import styles from "./ResultsPage.module.scss";
import SeasonTable from "./SeasonTable2023/SeasonTable2023.jsx";
import ResultsArray from "./ResultsArray.jsx";
import MatchDayBlock from "./MatchDayBlock.jsx";
// import ResultsPagePhoto from "../../assets/img/ResultsPage-photo.jpg";
import FifaTextAnimation from "./FifaTextAnimation/FifaTextAnimation.jsx";
import AddResultComponent from "./AddResultComponent/AddResultComponent.jsx";
import textCardPhoto from "./img/preSeasonImg.jpg";

function ResultsPage() {
  const [addMatchResVis, setAddMatchResVis] = useState(
    localStorage.getItem("addMatchResWindow") || false
  );
  const [deleteAddMatchResBlock, setDeleteAddMatchResBlock] = useState(true);
  const [addResultBtnVis, setAddResultBtnVis] = useState(true);
  const addResultComp = () => {
    localStorage.setItem("addMatchResWindow", JSON.stringify(true));
    setAddResultBtnVis(false);
  };
  const deleteAddResBlock = () => {
    localStorage.removeItem("addMatchResWindow");
    setAddMatchResVis(localStorage.getItem("addMatchResWindow"));
  }
  useEffect(() => {
    setAddMatchResVis(localStorage.getItem("addMatchResWindow"));
  }, [addResultComp]);

  

  console.log(addMatchResVis)

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

        {addMatchResVis ? (
          <div className={styles.resultsBlock}>
            <AddResultComponent deleteMatchResBlock={() => setDeleteAddMatchResBlock(false)} />
          </div>
        ) : (
          <button className={styles.addResultBtn} onClick={addResultComp}>
            +
          </button>
        )}

        {ResultsArray.map((data) => {
          return <MatchDayBlock key={data.tour} data={data} />;
        })}

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
