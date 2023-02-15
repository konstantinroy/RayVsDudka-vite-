import React from "react";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import styles from "./QuotesPage.module.scss";
import QuotesPagePhoto from "../../assets/img/QuotesPagePhoto.jpg";
import QuotesArray from "./QuotesArray.jsx";

function QuotesPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.quotesHeading}>
          <div className={styles.pagePhotoBlock}>
            <img
              className={styles.quotesPagePhoto}
              src={QuotesPagePhoto}
              alt=""
            ></img>
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Лучшие цитаты Рая и Дудки</h1>
          </div>
        </div>

        
          {QuotesArray.map((item) => {
            return (
              <div className={styles.quotesBlock}>
                <div>{item.quote}</div>
                <div className={styles.quoteAuthor}>© {item.author}{item.date}</div>
              </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
}

export default QuotesPage;
