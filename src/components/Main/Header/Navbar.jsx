import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import styles from "./Navbar.module.scss";
import FifaIcon from "../../../assets/img/Fifa.png";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.burgerBtn} onClick={updateMenu}>
          {!isMenuClicked ? <AiOutlineMenu /> : <RxCross2 />}
        </div>
        <div className={styles.logoBlock}>
          <Link to="/main">RayVsDudka</Link>
        </div>
        
        <div
          className={`${styles.linksBlock}
        ${isMenuClicked ? styles.visible : ""}`}
        >
          <div className={styles.pages}>
            <div className={styles.fifaIcon}>
              <img src={FifaIcon} alt=""></img>
            </div>
            <Link to="/results">Результаты</Link>
            <Link to="/locations">Локации</Link>
            <Link to="/audio">Аудио</Link>
            <Link to="/photo">Фоточки</Link>
            <Link to="/quotes">Цитаты</Link>
          </div>
          <div className={styles.enterBtn}>
            <Link to="/account">
              <button className="login-button">ВХОД / РЕГИСТРАЦИЯ</button>
            </Link>
          </div>
        </div>
        
        {isMenuClicked && <div className={styles.blackoutContentBlock}></div>}
        <div className={styles.accountMobBtn}>
          <Link to="/settings">
            <MdAccountCircle />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
