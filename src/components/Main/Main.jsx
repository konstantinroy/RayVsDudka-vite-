import styles from "./Main.module.scss";
import SpamPopup from "../CommonComponents/SpamPopup/SpamPopup";
import Navbar from "./Header/Navbar.jsx";
import MainPhoto from "./MainPhoto/MainPhoto.jsx";
import Schedule from "./Schedule/Schedule.jsx";
import Results from "./Results/Results.jsx";
import Locations from "./Locations/Locations.jsx";
import Audio from "./Audio/Audio.jsx";
import Photos from "./Photos/Photos.jsx";
import Quotes from "./Quotes/Quotes.jsx";
import Footer from "./Footer/Footer.jsx";

function Main() {
  return (
    <div className={styles.mainBlock}>
    <SpamPopup />
      <Navbar />
      <MainPhoto />
      <Schedule />
      <Results />
      <Locations />
      <Audio />
      <Photos />
      <Quotes />
      <Footer />
    </div>
  );
}

export default Main;
