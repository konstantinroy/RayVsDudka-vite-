import { useEffect, useState } from "react";
import FullScreenAudioPopup from "../FullScreenAudioPopup/index";
import BottomAudioPopup from "../BottomAudioPopup/index";
import Audios from "../Audios/index";
import styles from "./styles.module.scss";

const AudioList = ({ data, setData, sortType }) => {
  const audios = [...document.getElementsByTagName("audio")];

  //// Функция для того, чтобы на странице проигрывалась только одна аудио-дорожка одновременно
  document.addEventListener(
    "play",
    (event) => {
      audios.forEach((audio) => audio !== event.target && audio.pause());
    },
    true
  );
  ////

  //// Объект играющего аудио
  const [activeAudio, setActiveAudio] = useState({});

  //// Аудио, играющее в данный момент
  const [currentAudio, setCurrentAudio] = useState(null);

  //// Состояние для отслеживания прогресса играющего аудио
  const [audioProgress, setAudioProgress] = useState(null);

  //// Состояние для того чтобы при повторном клике на аудио открывался полноэкранный аудиоплеер
  const [playBtnClickQty, setPlayBtnClickQty] = useState(0);

  //// Состояние для изменения кнопки с Play на Pause
  const [playPauseBtnState, setPlayPauseBtnState] = useState(false);

  //// Эффект волн нижнего попапа при проигрывании аудио
  const [wavesState, setWavesState] = useState(false);

  //// Длительность активного аудио
  const [audioDuration, setAudioDuration] = useState("");

  //// Сколько времени уже играет аудио
  const [audioСurrentTime, setAudioСurrentTime] = useState("");

  //// Видимость полноэкранного аудиоплеера
  const [fullScreenAudioPopup, setFullScreenAudioPopup] = useState(false);

  //// Видимость нижнего popup-аудиоплеера
  const [bottomAudioPopup, setBottomAudioPopup] = useState(false);

  //// Функция перемотки аудио и его прогресса
  const seekBarProgress = (e) => {
    const { value } = e.target;
    const duration = currentAudio.duration;
    const ct = currentAudio.currentTime;
    setAudioСurrentTime(Math.ceil(ct));

    setAudioProgress(Math.ceil((ct / duration) * 100));

    const audioMinutesDuration = Math.floor(duration / 60);
    const audioSecondsDuration = Math.round(
      currentAudio.duration - audioMinutesDuration * 60
    );
    setAudioDuration(audioMinutesDuration + ":" + audioSecondsDuration);
  };

  //// Автоматический переход к следующему аудио
  useEffect(() => {
    if (audioProgress === 100) {
      if (activeAudio.id !== data.length) {
        const activeAudioId = data.find((audio) => {
          return sortType === "asc"
            ? audio.id === activeAudio.id - 1
            : audio.id === activeAudio.id + 1;
        });
        currentAudio.src = activeAudioId.audioLink;
        currentAudio.play();
        setActiveAudio({
          ...activeAudioId,
          active: true,
        });
        setPlayPauseBtnState(true);
      }
    }
  }, [audioProgress]);

  //// Функции для сортировки аудио по автору, возвращают true или false
  const sortedByDudka = data.every((audio) => {
    return audio.audioAuthor === 'Никита Дудка'
  })
  const sortedByRay = data.every((audio) => {
    return audio.audioAuthor === 'Константин Рай'
  })

  return (
    <>
      {sortedByDudka || sortedByRay ? <div className={styles.authorAudioQtyText}>
        От автора "{activeAudio.audioAuthor}" найдено {data.length} аудио
      </div> : ""}
      <div className={styles.audioContainer}>
        {data.map((audio) => {
          return (
            <Audios
              key={audio.id}
              id={audio.id}
              data={data}
              setData={setData}
              currentAudio={currentAudio}
              setCurrentAudio={setCurrentAudio}
              activeAudio={activeAudio}
              setActiveAudio={setActiveAudio}
              playBtnClickQty={playBtnClickQty}
              setPlayBtnClickQty={setPlayBtnClickQty}
              seekBarProgress={seekBarProgress}
              playPauseBtnState={playPauseBtnState}
              setPlayPauseBtnState={setPlayPauseBtnState}
              audioName={audio.audioName}
              audioAuthor={audio.audioAuthor}
              audioImage={audio.audioImage}
              audioLink={audio.audioLink}
              audioProgress={audioProgress}
              wavesState={wavesState}
              setWavesState={setWavesState}
              setBottomAudioPopup={setBottomAudioPopup}
              setFullScreenAudioPopup={setFullScreenAudioPopup}
            />
          );
        })}
      </div>

      {fullScreenAudioPopup && (
        <FullScreenAudioPopup
          data={data}
          setData={setData}
          playPauseBtnState={playPauseBtnState}
          setPlayPauseBtnState={setPlayPauseBtnState}
          currentAudio={currentAudio}
          activeAudio={activeAudio}
          setActiveAudio={setActiveAudio}
          setPlayBtnClickQty={setPlayBtnClickQty}
          audioProgress={audioProgress}
          seekBarProgress={seekBarProgress}
          audioDuration={audioDuration}
          audioСurrentTime={audioСurrentTime}
          setBottomAudioPopup={setBottomAudioPopup}
          wavesState={wavesState}
          setWavesState={setWavesState}
          fullScreenAudioPopup={fullScreenAudioPopup}
          setFullScreenAudioPopup={setFullScreenAudioPopup}
        />
      )}

      <BottomAudioPopup
        activeAudio={activeAudio}
        playPauseBtnState={playPauseBtnState}
        setPlayBtnClickQty={setPlayBtnClickQty}
        bottomAudioPopup={bottomAudioPopup}
        audioProgress={audioProgress}
        wavesState={wavesState}
        setFullScreenAudioPopup={setFullScreenAudioPopup}
      />
    </>
  );
};

export default AudioList;
