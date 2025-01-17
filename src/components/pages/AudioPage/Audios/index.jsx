import { useEffect, useRef } from 'react';
import { BsMusicNote } from 'react-icons/bs';
// import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";
import MusicWaves from '../MusicWaves/index';
import styles from './styles.module.scss';

const Index = ({
  id,
  data,
  setCurrentAudio,
  activeAudio,
  setActiveAudio,
  setPlayBtnClickQty,
  seekBarProgress,
  playPauseBtnState,
  setPlayPauseBtnState,
  audioName,
  audioAuthor,
  audioImage,
  audioLink,
  audioProgress,
  setBottomAudioPopup,
  wavesState,
  setWavesState,
  setFullScreenAudioPopup,
}) => {

  //// Реф играющего аудио
  const audioElem = useRef();

  //// Функция включения аудио
  const playAudio = () => {
    let click = 0;
    // audioElem.current.currentTime = 0;
    if (click === 0) {
      audioElem.current.play();

      audioElem.current.volume =
        JSON.parse(localStorage.getItem('volume')) ||
        localStorage.setItem('volume', JSON.stringify('1'));

      setCurrentAudio(audioElem.current);
      setPlayPauseBtnState(true);

      const activeAudioId = data.find((audio) => {
        return audio.id === id;
      });

      setActiveAudio({
        ...activeAudioId,
        active: true,
      });

      setBottomAudioPopup(true);
      setWavesState(true);
      if (activeAudio.active && activeAudio.id === id) {
        click++;
      }
      setPlayBtnClickQty(click);
    }
    if (click !== 0) {
      setFullScreenAudioPopup(true);
    }
  };

  //// Ширина экрана
  const pageWidth = document.documentElement.scrollWidth;

  //// Функция для укорачивания названия аудио
  const shortAudioName =
    audioName.length > 35
      ? audioName.substring(0, 35 - 3) + '...'
      : audioName;

  const adaptiveAudioName = pageWidth < 480 ? shortAudioName : audioName;

  return (
    <>
      <div className={styles.audioPlayer} onClick={playAudio}>
        <div
          style={{
            backgroundColor:
              activeAudio.id === id && activeAudio.active ? '#9191916e' : '',
          }}
          className={styles.audioBlock}
        >
          {/* <div className={styles.playPauseBtn}>
            {active && wavesState && playPauseBtnState ? (
              <FaPause onClick={pauseAudio} />
            ) : (
              <FaPlay onClick={playAudio} />
            )}
          </div> */}
          <div className={styles.audioPicture}>
            {audioImage !== '' ?
              <img className={styles.audioIamge} src={audioImage} alt="" /> :
              <BsMusicNote />}
            {activeAudio.id === id && activeAudio.active && (
              <MusicWaves
                wavesState={wavesState}
                playPauseBtnState={playPauseBtnState}
                audioProgress={audioProgress}
              />
            )}
          </div>
          <div className={styles.audioInfoContainer}>
            <div className={styles.audioInfo}>
              <div className={styles.audioName}>{adaptiveAudioName}</div>
              <div className={styles.authorName}>{audioAuthor}</div>
            </div>
            <div className={styles.audioDuration}>2:11</div>
          </div>
        </div>
        <audio
          id="audio"
          src={audioLink}
          ref={audioElem}
          onTimeUpdate={seekBarProgress}
        ></audio>
      </div>
    </>
  );
};

export default Index;
