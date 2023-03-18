import React from "react";
import Navbar from "../../Main/Header/Navbar.jsx";
import Footer from "../../Main/Footer/Footer";
import SeasonTable from "./SeasonTable2022/SeasonTable2022";
import styles from "./Result2022Year.module.scss";
import Results2022Array from "./Results2022Array.jsx";
import MatchDayBlock from "./MatchDayBlock.jsx";

function Result2022Year() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.sheduleHeading}>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Итоги сезона 2022 года</h1>
          </div>
        </div>

        <div className={styles.winnerBlock}>
          <h1>Константин Рай победитель сезона 2022!</h1>
        </div>

        <div className={styles.seasonTableBlock}>
          <h1>Итоговая таблица</h1>
          <SeasonTable />
        </div>

        <div className={styles.resultsHeader}>
          <h1>Результаты всех туров сезона</h1>
        </div>

        {Results2022Array.map((data) => {
          return <MatchDayBlock key={data.tour} data={data} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Result2022Year;
