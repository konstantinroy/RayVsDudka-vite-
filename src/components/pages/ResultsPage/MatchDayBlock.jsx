import { useState } from "react";
import styles from "./MatchDayBlock.module.scss";

const MatchDayBlock = ({ data }) => {
  const [buttonText, setButtonText] = useState("ᐯ");
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const onButtonClick = () => {
    !isArrowClicked ? setButtonText("ᐱ") : setButtonText("ᐯ");
    setIsArrowClicked(!isArrowClicked);
  };

  return (
    <div className={styles.matchDayBlock}>
      <h2 className={styles.dateText}>
        {data.day}-ое {data.month} ({data.tour} ТУР)
      </h2>
      <h1 className={styles.matchScoreText}>
        Дудка {data.dudaMainScore}-{data.rayMainScore} Рай
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
        <ul
          style={{
            maxHeight: !isArrowClicked ? "0" : "200vw",
            overflow: !isArrowClicked ? "hidden" : "visible",
            transition: !isArrowClicked ? "0.7s" : "0.2s",
          }}
        >
          {data.matches.map((match) => {
            return (
              <li>
                {match.team1Name} {match.team1Score}-{match.team2Score}{" "}
                {match.team2Name}
              </li>
            );
          })}
          <div className={styles.additionalInfo}>
            <h3>Кол-во матчей: {data.matchesQty}</h3>
            <h3>
              Счёт голов: {data.dudaGoalsQty}-{data.rayGoalsQty}
            </h3>
          </div>
        </ul>
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
};

export default MatchDayBlock;
