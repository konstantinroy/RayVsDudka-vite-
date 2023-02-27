import { VscColorMode } from 'react-icons/vsc';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./SettingsPage.module.scss";
import RayAvatar from "../../assets/img/GoldenBallMob.jpg";
import ToggleSwitchBtn from "./ToggleSwitchBtn/ToggleSwitchBtn"
import { changeTheme } from '../../store/actions/user';
import { getTheme } from '../../store/selectors/user';

function SettingsPage() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  console.log({
    theme
  })

  const onThemeChange = () => {
    dispatch(changeTheme());


  };

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
                  value={theme}
                  onChange={onThemeChange}
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
