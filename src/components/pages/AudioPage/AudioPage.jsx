import { useState, useEffect } from "react";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import BackToTopButton from "./../../CommonComponents/BackToTopButton/BackToTopButton.jsx";
import AudiosArrayData from "./AudiosArray.jsx";
import AudioList from "./AudioList.jsx";
import styles from "./AudioPage.module.scss";
import CasseteAnimation from "./CasseteAnimation/CasseteAnimation.jsx";
// import AudioPagePhoto from "./img/AudioPagePhoto.jpg";
import { useCallback } from "react";

const filterAudios = (searchText, listOfAudios) => {
  if (!searchText) {
    return listOfAudios;
  }
  return listOfAudios.filter(({ audio_name }) =>
    audio_name.toLowerCase().includes(searchText.toLowerCase())
  );
};

function AudioPage() {
  // Функция для того, чтобы на странице проигрывалась только одна аудио-дорожка одновременно
  document.addEventListener(
    "play",
    (event) => {
      const audios = [...document.getElementsByTagName("audio")];

      audios.forEach((audio) => audio !== event.target && audio.pause());
    },
    true
  );
  //////////////////////

  const [sortType, setSortType] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [audioList, setAudioList] = useState(AudiosArrayData);
  const [errorText, setErrorText] = useState("");

  useEffect(
    () => {
      const Debounce = setTimeout(() => {
        const filteredAudios = filterAudios(searchTerm, AudiosArrayData);
        setAudioList(filteredAudios);
        if (audioList.length < 1) {
          setErrorText("По вашему запросу ничего не найдено");
        } else {
          setErrorText("");
        }
      }, 0);

      return () => clearTimeout(Debounce);
    }
    // , [searchTerm, errorText]
  );

  const onSortClick = useCallback((e) => {
    setSortType(e.target.value);

    setAudioList((prevState) => {
      if (e.target.value === "asc") {
        return [...prevState.sort((prev, next) => next.id - prev.id)];
      }

      if (e.target.value === "desc") {
        return [...prevState.sort((prev, next) => prev.id - next.id)];
      }
    });
  }, []);

  return (
    <div>
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
          <input
            // autoFocus
            // type="text"
            autoComplete="off"
            placeholder="Поиск по аудио"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select name="sort" value={sortType} onChange={onSortClick}>
            <option value="asc">Сортировка: самые последние</option>
            <option value="desc">Сортировка: самые ранние</option>
          </select>
        </div>

        {errorText ? (
          <div className={styles.errorText}>{errorText}</div>
        ) : (
          <AudioList audioList={audioList} />
        )}
        <BackToTopButton />
      </div>

      <Footer />
    </div>
  );
}

export default AudioPage;
