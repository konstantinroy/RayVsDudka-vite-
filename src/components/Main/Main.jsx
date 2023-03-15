import styles from "./Main.module.scss";
// import SpamPopup from "../CommonComponents/SpamPopup/SpamPopup";
import Navbar from "./Header/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import PcMainPhoto from "./img/PcMainPhoto.jpg";
import MobMainPhoto from "./img/MobMainPhoto.jpg";
import GoldenBallPc from "./img/1. GoldenBallPc.jpg";
import GoldenBallMob from "./img/1. GoldenBallMob.jpg";
import ResultsPcPhoto from "./img/2. ResultsPcPhoto.jpg";
import ResultsMobPhoto from "./img/2. ResultsMobPhoto.jpg";
import LocationPcPhoto from "./img/3. LocationPcPhoto.jpg";
import LocationMobPhoto from "./img/3. LocationMobPhoto.jpg";
import AudioPcPhoto from "./img/4. AudioPcPhoto.jpg";
import AudioMobPhoto from "./img/4. AudioMobPhoto.jpg";
import PhotosPcPhoto from "./img/5. PhotosPcPhoto.jpg";
import PhotosMobPhoto from "./img/5. PhotosMobPhoto.jpg";
import QuotesPcPhoto from "./img/6. QuotesPcPhoto.jpg";
import QuotesMobPhoto from "./img/6. QuotesMobPhoto.jpg";

function Main() {
  return (
    <>
      <Navbar />
      <div className={styles.mainBlock}>
        <div className={`${styles.photoBlock} ${styles.mainPhotoBlock}`}>
          <img className={styles.pcPhoto} src={PcMainPhoto} alt="" />
          <img
            className={`${styles.mobPhoto} ${styles.mainMobPhoto}`}
            src={MobMainPhoto}
            alt=""
          />
          <p className={styles.mainPhotoTextOne}>Величайшее</p>
          <p className={styles.mainPhotoTextTwo}>противостояние</p>
          <p className={styles.mainPhotoTextThree}>в истории</p>
          <p className={styles.mainPhotoTextFour}>спорта</p>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.pcPhoto} src={GoldenBallPc} alt="" />
          <img className={styles.mobPhoto} src={GoldenBallMob} alt="" />
          <p className={styles.photoText}>Расписание ближайших туров</p>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.pcPhoto} src={ResultsPcPhoto} alt="" />
          <img className={styles.mobPhoto} src={ResultsMobPhoto} alt="" />
          <p className={styles.photoText}>
            Результаты
            <br /> всех матчей
            <br /> сезона
          </p>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.pcPhoto} src={LocationPcPhoto} alt="" />
          <img className={styles.mobPhoto} src={LocationMobPhoto} alt="" />
          <p className={styles.photoText}>Места проведения каток</p>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.pcPhoto} src={AudioPcPhoto} alt="" />
          <img className={styles.mobPhoto} src={AudioMobPhoto} alt="" />
          <p className={styles.photoText}>
            Все аудио
            <br /> в одном
            <br /> месте
          </p>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.pcPhoto} src={PhotosPcPhoto} alt="" />
          <img className={styles.mobPhoto} src={PhotosMobPhoto} alt="" />
          <p className={styles.photoText}>
            Лучшие
            <br /> фоточки
            <br /> за всё время
          </p>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.pcPhoto} src={QuotesPcPhoto} alt="" />
          <img className={styles.mobPhoto} src={QuotesMobPhoto} alt="" />
          <p className={styles.photoText}>
            Лучшие
            <br /> цитаты
            <br /> Рая и Дудки
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
