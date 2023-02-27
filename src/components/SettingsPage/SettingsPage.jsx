import { VscColorMode } from 'react-icons/vsc';
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./SettingsPage.module.scss";
import RayAvatar from "../../assets/img/GoldenBallMob.jpg";
import ToggleSwitchBtn from "./ToggleSwitchBtn/ToggleSwitchBtn"


function SettingsPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>Настройки</h1>
        </div>
        <div className={styles.userInfoBlock}>
          <div className={styles.userPhoto}>
            <img src={RayAvatar} alt="" />
          </div>
          <div className={styles.userInfo}>
            <h2>Константин Рай</h2>
            <p>Чемпион фифы сезона 2022 года, король удачи и сын фифы...</p>
          </div>
        </div>

        <div className={styles.settingsBlock}>
          <div className={styles.settingsChapter}>
          <div className={styles.chapterInfo}>
            <div className={styles.chapterIcon}>
                <VscColorMode />
            </div>
            <div className={styles.chapterText}>
                <p>Изменить цветовую тему</p>
            </div>
            </div>
            <div className={styles.chapterMakingChanges}>
                <ToggleSwitchBtn 
                // onClick={changeTheme}
                 />
            </div>
          </div>
          <div className={styles.settingsChapter}></div>
          <div className={styles.settingsChapter}></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SettingsPage;
