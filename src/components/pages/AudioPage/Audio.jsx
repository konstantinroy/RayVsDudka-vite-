import styles from './Audio.module.scss';

const Audio = ({ audioName, audioLink }) => {
  return (
    <div className={styles.audioBlock}>
      <h2 className={styles.audioName}>{audioName}</h2>
      <audio src={audioLink} controls="controls"></audio>
    </div>
  );
};

export default Audio;
