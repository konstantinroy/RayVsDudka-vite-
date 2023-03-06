import React, { useState, useMemo, useEffect } from "react";
import { RxCross2 } from 'react-icons/rx';
import { BsPencilFill } from "react-icons/bs";
import { TfiGame } from "react-icons/tfi";
import styles from "./AddResultComponent.module.scss";

function AddResultComponent() {
  const [dayInput, setDayInput] = useState("1");
  const [monthInput, setMonthInput] = useState("января");
  const [tourInput, setTourInput] = useState("1");
  const [dateText, setDateText] = useState("");
  const [visDateInputs, setVisDateInputs] = useState(true);

  const [matchResultArr, setMatchResultArr] = useState([]);

  const [dudaMainScoreInfo, setDudaMainScoreInfo] = useState(
    localStorage.setItem("dudkaScore", JSON.stringify("0"))
  );
  const [rayMainScoreInfo, setRayMainScoreInfo] = useState(
    localStorage.setItem("rayScore", JSON.stringify("0"))
  );

  const [dudaTeamInput, setDudaTeamInput] = useState("");
  const [rayTeamInput, setRayTeamInput] = useState("");
  const [dudaScoreInfo, setDudaScoreInfo] = useState(0);
  const [rayScoreInfo, setRayScoreInfo] = useState(0);

  const [dudaGoalQtyText, setDudaGoalQtyText] = useState(
    localStorage.setItem("dudkaGoalsQty", JSON.stringify("0"))
  );
  const [rayGoalQtyText, setRayGoalQtyText] = useState(
    localStorage.setItem("rayGoalsQty", JSON.stringify("0"))
  );

  const addTourDate = () => {
    const dateObj = {
      day: dayInput,
      month: monthInput,
      tour: tourInput,
    };
    setVisDateInputs(false);
    localStorage.setItem("date", JSON.stringify(dateObj));
    setDateText(JSON.parse(localStorage.getItem("date")));
  };

  useEffect(() => {
    setDateText(JSON.parse(localStorage.getItem("date")));
  }, []);

  useEffect(() => {
    if (localStorage.date) {
      setVisDateInputs(false);
    }
  }, []);

  const editTourDate = () => {
    setVisDateInputs(true);
  };

  useEffect(() => {
    if (localStorage.matches) {
      const matchesFromLocalStorage = JSON.parse(
        localStorage.getItem("matches")
      );

      setMatchResultArr(matchesFromLocalStorage);
    }
  }, []);

  const saveMatchResult = () => {
    const obj = {
      dudaTeam: dudaTeamInput,
      dudaScore: dudaScoreInfo,
      rayTeam: rayTeamInput,
      rayScore: rayScoreInfo,
    };
    setMatchResultArr((prevState) => {
      localStorage.setItem("matches", JSON.stringify([...prevState, obj]));
      return [...prevState, obj];
    });
    setDudaTeamInput("");
    setDudaScoreInfo(0);
    setRayScoreInfo(0);
    setRayTeamInput("");
  };

  const totalResult = matchResultArr.reduce(
    (acc, currValue) => {
      if (currValue.dudaScore > currValue.rayScore) {
        acc.dudka += 1;
        localStorage.setItem("dudkaScore", JSON.stringify(acc.dudka));
      }
      if (currValue.rayScore > currValue.dudaScore) {
        acc.ray += 1;
        localStorage.setItem("rayScore", JSON.stringify(acc.ray));
      }
      return acc;
    },
    {
      ray: 0,
      dudka: 0,
    }
  );

  useEffect(() => {
    setDudaMainScoreInfo(JSON.parse(localStorage.getItem("dudkaScore")));
  }, [totalResult]);
  useEffect(() => {
    setRayMainScoreInfo(JSON.parse(localStorage.getItem("rayScore")));
  }, [totalResult]);

  const matchResultList = useMemo(() => {
    return matchResultArr.map((item, i) => (
      <li key={i}>
        {item.dudaTeam} {item.dudaScore}-{item.rayScore} {item.rayTeam}
      </li>
    ));
  }, [matchResultArr]);

  const matchQty = matchResultArr.length;

  const dudaGoalsQty = matchResultArr.reduce(
    (acc, currValue) => {
      acc.dudka += Number(currValue.dudaScore);
      localStorage.setItem("dudkaGoalsQty", JSON.stringify(acc.dudka));
      return acc;
    },
    { dudka: 0 }
  );
  useEffect(() => {
    setDudaGoalQtyText(JSON.parse(localStorage.getItem("dudkaGoalsQty")));
  }, [dudaGoalsQty]);

  const rayGoalsQty = matchResultArr.reduce(
    (acc, currValue) => {
      acc.ray += Number(currValue.rayScore);
      localStorage.setItem("rayGoalsQty", JSON.stringify(acc.ray));
      return acc;
    },
    { ray: 0 }
  );
  useEffect(() => {
    setRayGoalQtyText(JSON.parse(localStorage.getItem("rayGoalsQty")));
  }, [rayGoalsQty]);

  const deleteAddMatchResBlock = () => {
    localStorage.removeItem('dudkaScore');
    localStorage.removeItem('rayScore');
    localStorage.removeItem('dudkaGoalsQty');
    localStorage.removeItem('rayGoalsQty');
    localStorage.removeItem('matches');
  }

  return (
    <div>
      <div className={styles.matchDayBlock}>
      <button className={styles.deleteMatchDayResult}
      onClick={deleteAddMatchResBlock}
      // onClick={deleteAddResBlock}
      ><RxCross2 /></button>
        {visDateInputs ? (
          <div className={styles.dateBlock}>
            <div className={styles.dateHeader}>
              <p className={styles.dateHeaderText}>
                Введите дату игрового дня и № тура:
              </p>
            </div>
            <div className={styles.dateForm}>
              <div className={styles.dateInputsBlock}>
                <div className={styles.dateSelect}>
                  <select
                    name="daySelect"
                    type="number"
                    value={dayInput}
                    onChange={(e) => setDayInput(e.target.value)}
                    placeholder="1"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div className={styles.dateSelect}>
                  <select
                    name="monthSelect"
                    onChange={(e) => {
                      setMonthInput(e.target.value);
                    }}
                  >
                    <option value="января">Январь</option>
                    <option value="февраля">Февраль</option>
                    <option value="марта">Март</option>
                    <option value="апреля">Апрель</option>
                    <option value="мая">Май</option>
                    <option value="июня">Июнь</option>
                    <option value="июля">Июль</option>
                    <option value="августа">Август</option>
                    <option value="сентября">Сентябрь</option>
                    <option value="октября">Октябрь</option>
                    <option value="ноября">Ноябрь</option>
                    <option value="декабря">Декабрь</option>
                  </select>
                </div>

                <div className={styles.dateInput}>
                  <input
                    name="input"
                    type="number"
                    min="0"
                    onChange={(e) => setTourInput(e.target.value)}
                    placeholder="№ тура"
                  />
                </div>
              </div>
              <div>
                <button
                  className={styles.saveMatchResultBtn}
                  onClick={addTourDate}
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.tourDateBlock}>
            <p className={styles.dateHeaderText}>
              {dateText.day} {dateText.month} ({dateText.tour} ТУР)
            </p>
            <div className={styles.editBtn}>
              <button onClick={editTourDate}>
                <BsPencilFill />
              </button>
            </div>
          </div>
        )}

        <h1 className={styles.matchScoreText}>
          Дудка {dudaMainScoreInfo}-{rayMainScoreInfo} Рай
        </h1>
        <div className={styles.resultList}>
          <div className={styles.resultsInputs}>
            <div className={styles.resultTeamInput}>
              <TfiGame className={styles.inputIcon} />
              <input
                className={styles.teamInput}
                name="input"
                type="text"
                value={dudaTeamInput}
                onChange={(e) => setDudaTeamInput(e.target.value)}
                placeholder="Команда"
              />
            </div>
            <div className={styles.scoreInputsBlock}>
              <div className={styles.resultScoreInput}>
                <input
                  name="input"
                  type="number"
                  min="0"
                  value={dudaScoreInfo}
                  onChange={(e) => setDudaScoreInfo(e.target.value)}
                  placeholder="0"
                />
              </div>
              <b>—</b>
              <div className={styles.resultScoreInput}>
                <input
                  name="input"
                  type="number"
                  min="0"
                  value={rayScoreInfo}
                  onChange={(e) => setRayScoreInfo(e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>
            <div className={styles.resultTeamInput}>
              <input
                className={styles.teamInput}
                name="input"
                type="text"
                value={rayTeamInput}
                onChange={(e) => setRayTeamInput(e.target.value)}
                placeholder="Команда"
              />
              <TfiGame className={styles.inputIcon} />
            </div>
          </div>

          <div>
            <button
              className={styles.saveMatchResultBtn}
              onClick={saveMatchResult}
            >
              Добавить
            </button>
          </div>

          <ul>{matchResultList}</ul>
          <h3 className={styles.mathesQuotes}>Количество матчей: {matchQty}</h3>
          <h3 className={styles.goalsQuotes}>
            Счёт голов: {dudaGoalQtyText}-{rayGoalQtyText}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AddResultComponent;
