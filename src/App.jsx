import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../src/components/CommonComponents/ReactScrollToTop/ScrollToTop";
import Main from "../src/components/Main/Main.jsx";
import Results from "../src/components/ResultsPage/ResultsPage.jsx";
import Result2022Year from "../src/components/ResultsPage/Result2022Year/Result2022Year";
import LocationsPage from "../src/components/LocationsPage/LocationsPage.jsx";
import AudioPage from "../src/components/AudioPage/AudioPage.jsx";
import PhotoPage from "../src/components/PhotosPage/PhotosPage.jsx";
import QuotesPage from "../src/components/QuotesPage/QuotesPage.jsx";
import EnterPage from "../src/components/EnterPage/EnterPage";
import SettingsPage from "../src/components/SettingsPage/SettingsPage"

const Links = () => {
  return (
    <ScrollToTop>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/RayVSDudka-app" element={<Main />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results2022" element={<Result2022Year />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/account" element={<EnterPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      </ScrollToTop>
  )
}


function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || false
  );
  const click = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
    document.body.className = theme && "darkTheme"
  }, [theme])

  return (
    <div className="App">
      <HashRouter>
        <Links />
      </HashRouter>
    </div>
  );
}

export default App;
