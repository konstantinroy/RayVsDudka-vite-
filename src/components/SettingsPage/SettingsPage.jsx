import { useState, useEffect } from "react";
import { VscColorMode } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./SettingsPage.module.scss";
import RayAvatar from "../../assets/img/GoldenBallMob.jpg";
import ToggleSwitchBtn from "./ToggleSwitchBtn/ToggleSwitchBtn";
import { changeTheme } from "../../store/actions/user";
import { getTheme } from "../../store/selectors/user";

function SettingsPage() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  console.log(theme);

  const onThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>Аккаунт</h1>
        </div>
        <div className={styles.userInfoBlock}>
          <div className={styles.userMainInfo}>
            <div className={styles.userPhoto}>
              <img src={RayAvatar} alt="" />
            </div>
            <div className={styles.userInfo}>
              <h2>KonstantinRay</h2>
              <p>Чемпион фифы сезона 2022 года, король удачи и сын фифы...</p>
            </div>
          </div>

          <div className={styles.settingsBlock}>
            <h2>Настройки</h2>
            <div className={styles.themeBlock}>
              <div className={styles.themeInfo}>
                <div className={styles.themeIcon}>
                  <VscColorMode />
                </div>
                <div className={styles.themeText}>
                  <p>Цветовая тема: {theme === "dark" ? "Dark" : "Light"}</p>
                </div>
              </div>
              <div className={styles.themeToggleBtn}>
                <ToggleSwitchBtn value={theme} onChange={onThemeChange} />
              </div>
            </div>
            <div className={styles.settingsChapter}>
              <p>Логин:</p>
              <p className={styles.nameText}>KonstantinRay</p>
            </div>
            <div className={styles.settingsChapter}>
              <p>Имя:</p>
              <p className={styles.nameText}>Константин</p>
            </div>
            <div className={styles.settingsChapter}>
            <p>Фамилия:</p>
            <p className={styles.nameText}>Рой</p>
            </div>
            <div className={styles.settingsChapter}>
            <p>Email:</p>
            <p className={styles.nameText}>konstantin.roy9977@gmail.com</p>
            </div>
            <div className={styles.settingsChapter}>
            <p>Телефон:</p>
            <p className={styles.nameText}>8-964-921-07-07</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SettingsPage;
