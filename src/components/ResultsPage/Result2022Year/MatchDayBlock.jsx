import React, { useState } from "react";
import styles from './MatchDayBlock.module.scss'

function MatchDayBlock({ key, matchDay, match }) {
  const [buttonText, setButtonText] = React.useState("ᐯ");
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const onButtonClick = () => (
    !isArrowClicked ? setButtonText("ᐱ") : setButtonText("ᐯ"),
    setIsArrowClicked(!isArrowClicked)
  );

  return (
    <div className={styles.matchDayBlock}>
      <h2 className={styles.dateText}>
        {matchDay.day}-ое {matchDay.month} ({matchDay.tour} ТУР)
      </h2>
      <h1 className={styles.matchScoreText}>
        Дудка {matchDay.dudaMainScore}-{matchDay.rayMainScore} Рай
      </h1>
      <div className={styles.resultList}>
        <h3
          className={styles.viewResults}
          style={{
            maxHeight: !isArrowClicked ? "35vw" : "0",
            overflow: !isArrowClicked ? "visible" : "hidden",
            transition: !isArrowClicked ? "0.2s" : "0s",
          }}
        >
          Подробная информация
        </h3>
        <uL
          style={{
            maxHeight: !isArrowClicked ? "0" : "100vw",
            overflow: !isArrowClicked ? "hidden" : "visible",
            transition: !isArrowClicked ? "0.7s" : "0.2s",
          }}
        >
        {/* {
          Results2022Array.map((gameDay) => {
            return gameDay.matches.map((match) => {
              return <li>{match.team1Name} {match.team1Score}-{match.team2Score} {match.team1Name}</li>
            })
          })
        } */}
        {/* <li>{match.team1Name} {match.team1Score}-{match.team2Score} {match.team2Name}</li> */}
          <h3 className={styles.goalsQuotes}>
            Счёт голов: {matchDay.dudaGoalsQty}-{matchDay.rayGoalsQty}
          </h3>
        </uL>
        <button
          onClick={onButtonClick}
          style={{
            marginTop: !isArrowClicked ? "0" : "2vw",
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default MatchDayBlock;
