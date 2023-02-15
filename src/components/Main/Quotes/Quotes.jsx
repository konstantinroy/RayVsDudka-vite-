import React from 'react'
import { Link } from 'react-router-dom';
import quotesMobPhoto from '../../../assets/img/QuotesMobPhoto.jpg'
import quotesPcPhoto from '../../../assets/img/QuotesPcPhoto.jpg'
import styles from '../Quotes/Quotes.module.scss'

function Quotes() {
    return (
        <Link to="/quotes"><div className={styles.quotesPhotoBlock}>
            <img className={styles.quotesPcPhoto} src={quotesPcPhoto} alt='' ></img>
            <img className={styles.quotesMobPhoto} src={quotesMobPhoto} alt='' ></img>
            <p className={styles.quotesText}>Лучшие цитаты<br />
            Рая и Дудки</p>
        </div></Link>
    )
}

export default Quotes
