import { useState } from 'react';

import styles from './MatchDayBlock.module.scss';

const MatchDayBlock = ({ data }) => {
  const [buttonText, setButtonText] = useState('ᐯ');
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const onButtonClick = () => {
    !isArrowClicked ? setButtonText('ᐱ') : setButtonText('ᐯ');
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
          className={`${styles.detInfoText}
          ${isArrowClicked ? styles.detInfoTextHidden : ''}
          `}
        >
          Подробная информация
        </h3>
        <ul
          className={`${
            isArrowClicked ? styles.resultsVisible : styles.resultsHidden
          }`}
        >
          {data.matches.map((match) => {
            return (
              <li>
                {match.team1Name} {match.team1Score}-{match.team2Score}{' '}
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
          className={`${
            isArrowClicked ? styles.buttonClicked : styles.buttonUnclicked
          }`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MatchDayBlock;
