import React, {useState, useRef} from 'react';
import { RxCross2 } from 'react-icons/rx';
import { CSSTransition } from 'react-transition-group';

import styles from './FinalResultsWindow.module.scss';
import './CSSTransition.scss';

function FinalResultsWindow({
  setVisFinalResults,
  visDateInputs,
  dateText,
  dudaMainScoreInfo,
  rayMainScoreInfo,
  matchResultList,
  matchQty,
  dudaGoalQtyText,
  rayGoalQtyText,
}) {
  const [copyTextPopupSt, setCopyTextPopupSt] = useState(false);
  const resultsText = useRef(null);
  
  const exitPopupButton = () => {
    setVisFinalResults(false);
  };
  const copyText = () => {
    setCopyTextPopupSt(true);
    navigator.clipboard.writeText(resultsText.current.innerText);
  };
  if (copyTextPopupSt) {
    setTimeout(() => setCopyTextPopupSt(false), 3500);
  }
  return (
    <div className={styles.finalResultsPopup}>
      <div className={styles.textWindow}>
        <button className={styles.exitPopupBtn} onClick={exitPopupButton}>
          <RxCross2 />
        </button>
        <div className={styles.resultsTextBlock}>
          <p ref={resultsText} >
          Дата:<br />
            {!visDateInputs && (
              <>
                {dateText.day} {dateText.month} ({dateText.tour} ТУР)
              </>
            )}
            <br />
            <br />
            Общий счёт:<br />
            Дудка {dudaMainScoreInfo}-{rayMainScoreInfo} Рай <br />
            <br />
            Матчи:<br />
            {matchResultList}
            <br />
            Количество матчей: {matchQty}
            <br />
            Счёт голов: {dudaGoalQtyText}-{rayGoalQtyText}
          </p>
        </div>
        <CSSTransition
          in={copyTextPopupSt}
          timeout={100}
          classNames="alert"
          unmountOnExit
        >
          <div className={styles.copyTextPopup}>
          Результат игрового дня скопирован в буфер обмена
          </div>
        </CSSTransition>
        <div className={styles.copyTextBtn}>
          <button className={styles.componentBtn}
            onClick={copyText}
          >Скопировать</button>
        </div>
      </div>
    </div>
  );
}

export default FinalResultsWindow;
