import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import FifaIcon from '../../../assets/img/Fifa.png'

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <div className="pcMenu">
        <div className="logo__block">
        <Link to="/main">RayVsDudka</Link> 
        </div>
        <div className="wrapper">
          <ul className="PClinks">
          <Link to="/results">Результаты</Link>
          <Link to="/locations">Локации</Link>
          <Link to="/audio">Аудио</Link>
          <Link to="/photo">Фоточки</Link>
          <Link to="/quotes">Цитаты</Link>
          </ul>
          <div className="buttons">
          <Link to="/account"><button className="login-button">ВХОД / РЕГИСТРАЦИЯ</button></Link>
            {/* <button className="sign-up-button">РЕГИСТРАЦИЯ</button> */}
          </div>
        </div>
      </div>

      <div className="mobileMenu">
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div className="logo__block"><Link to="/main">RayVsDudka</Link></div>
        </nav>
        <div className={menu_class}>
        <div className="fifa-icon"><img src={FifaIcon} alt=""></img></div>
        <Link to="/results">Результаты</Link>
        <Link to="/locations">Локации</Link>
        <Link to="/audio">Аудио</Link>
        <Link to="/photo">Фоточки</Link>
        <Link to="/quotes">Цитаты</Link>
          <div className="registrButtons">
          <Link to="/account">ВХОД</Link>
          {/* <Link to="/">РЕГИСТРАЦИЯ</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
