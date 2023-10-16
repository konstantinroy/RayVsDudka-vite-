import { useState, useEffect, useCallback } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";

import BackToTopButton from "./../../common-components/BackToTopButton/BackToTopButton.jsx";
import AudiosArrayData from "./AudiosArray.jsx";
import AudioList from "./AudioList/index.jsx";
import styles from "./AudioPage.module.scss";
import CasseteAnimation from "./CasseteAnimation/CasseteAnimation.jsx";
// import AudioPagePhoto from "./img/AudioPagePhoto.jpg";

const filterAudios = (searchText, listOfAudios) => {
  if (!searchText) {
    return listOfAudios;
  }
  return listOfAudios.filter(({ audioName }) =>
    audioName.toLowerCase().includes(searchText.toLowerCase())
  );
};

const AudioPage = () => {
  const [sortType, setSortType] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  //// Массив всех аудио
  const [data, setData] = useState(AudiosArrayData);

  const [errorSnippet, setErrorSnippet] = useState(true);

  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredAudios = filterAudios(searchTerm, AudiosArrayData);
      setData(filteredAudios);
      if (data.length < 1) {
        setTimeout(() => {
          setErrorSnippet(false);
        }, 1000);
        setErrorText("По вашему запросу ничего не найдено");
      } else {
        setErrorSnippet(true);
        setErrorText("");
      }
    }, 0);

    return () => clearTimeout(Debounce);
  }, [searchTerm, errorText]);

  const onSortClick = useCallback((e) => {
    setSortType(e.target.value);

    setData((prevState) => {
      if (e.target.value === "asc") {
        return [...prevState.sort((prev, next) => next.id - prev.id)];
      }

      if (e.target.value === "desc") {
        return [...prevState.sort((prev, next) => prev.id - next.id)];
      }
    });
  }, []);

  console.log(errorText, 'errorText', data, 'data')

  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.audioHeading}>
          <div className={styles.pagePhotoBlock}>
            <CasseteAnimation />
            {/* <img className="audioPagePhoto" src={AudioPagePhoto} alt=""></img> */}
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Все аудио в одном месте</h1>
          </div>
        </div>

        <div className={styles.inputBlock}>
          <select name="sort" value={sortType} onChange={onSortClick}>
            <option value="asc">Сортировка: самые последние</option>
            <option value="desc">Сортировка: самые ранние</option>
          </select>
          <input
            // autoFocus
            // type="text"
            autoComplete="off"
            placeholder="Поиск по аудио"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {errorText ? (
          <div className={styles.errorText}>
            {errorSnippet ? (
              <PulseLoader className={styles.errorTetxSpinner} />
            ) : (
              errorText
            )}
          </div>
        ) : (
          <AudioList
            data={data}
            setData={setData}
            searchTerm={searchTerm}
            sortType={sortType}
          />
        )}
        <BackToTopButton />
      </div>

      <Footer />
    </>
  );
};

export default AudioPage;
