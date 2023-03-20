import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import PageNotFoundPagePhoto from './img/PageNotFound.png'
import styles from './PageNotFound.module.scss'

function PageNotFound() {
    return (
        <>
            <Navbar />
            <div className={styles.pagePhoto}>
            <img src={PageNotFoundPagePhoto} alt='' />
            </div>
            <div className={styles.pageText}>
                <h1>Ой...такой страницы не существует</h1>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound
