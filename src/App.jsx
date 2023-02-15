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
      </Routes>
      </ScrollToTop>
  )
}


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Links />
      </HashRouter>
    </div>
  );
}

export default App;
