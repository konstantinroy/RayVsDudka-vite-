import React, { useState } from 'react';

import styles from './Footer.module.scss';
import AppStoreIcon from './img/AppStoreIcon.png';
import GooglePlayIcon from './img/GooglePlayIcon.png';

function Footer() {
  const [company, setCompany] = useState(true);
  const [support, setSupport] = useState(true);
  const [rules, setRules] = useState(true);
  const showLinks = (state, setState) => {
    setState(!state);
  };
  const openPopupBtn = (state) => {
    return state ? '▼' : '▲';
  };
  return (
    <div className={styles.mainBlock}>
      <div className={styles.linksBox}>
        <div
          className={styles.linksBlock}
          onClick={() => showLinks(company, setCompany)}
        >
          <div className={styles.linksBlockHeading}>
            <h1>Компания</h1>
            <button>{openPopupBtn(company)}</button>
          </div>
          <div
            className={`${styles.linksList}
            ${company ? styles.hidden : styles.visible}
            `}
          >
            <a href="/">
              <p>О нас</p>
            </a>
            <a href="/">
              <p>Блог</p>
            </a>
            <a href="/">
              <p>Карьера</p>
            </a>
            <a href="/">
              <p>Медиа о нас</p>
            </a>
            <a href="/">
              <p>White paper</p>
            </a>
          </div>
        </div>

        <div
          className={styles.linksBlock}
          onClick={() => showLinks(support, setSupport)}
        >
          <div className={styles.linksBlockHeading}>
            <h1>Поддержка</h1>
            <button>{openPopupBtn(support)}</button>
          </div>
          <div
            className={`${styles.linksList}
            ${support ? styles.hidden : styles.visible}
            `}
          >
            <a href="/">
              <p>Контакты</p>
            </a>
            <a href="/">
              <p>Партёрская программа</p>
            </a>
          </div>
        </div>

        <div
          className={styles.linksBlock}
          onClick={() => showLinks(rules, setRules)}
        >
          <div className={styles.linksBlockHeading}>
            <h1>Правила</h1>
            <button>{openPopupBtn(rules)}</button>
          </div>
          <div
            className={`${styles.linksList}
            ${rules ? styles.hidden : styles.visible}
            `}
          >
            <a href="/">
              <p>Пользовательские соглашения</p>
            </a>
            <a href="/">
              <p>Политика использования данных</p>
            </a>
            <a href="/">
              <p>Политика cookies</p>
            </a>
          </div>
        </div>
        <div className={`${styles.linksBlock} ${styles.mobImgLinks}`}>
          <a href="/">
            <img src={AppStoreIcon} alt="" />
          </a>
          <a href="/">
            <img src={GooglePlayIcon} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.footerCapText}>© Ray vs Dudka 2022</div>
    </div>
  );
}

export default Footer;
