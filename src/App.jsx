import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useStore } from './store/store';
import { Provider, useSelector } from 'react-redux';
import ScrollToTop from "../src/components/CommonComponents/ReactScrollToTop/ScrollToTop";
import Main from "../src/components/Main/Main.jsx";
import Results from "../src/components/ResultsPage/ResultsPage.jsx";
import Result2022Year from "../src/components/ResultsPage/Result2022Year/Result2022Year";
import LocationsPage from "../src/components/pages/LocationsPage/LocationsPage";
import AudioPage from "../src/components/AudioPage/AudioPage.jsx";
import PhotoPage from "../src/components/pages/PhotosPage/PhotosPage";
import QuotesPage from "../src/components/pages/QuotesPage/QuotesPage";
import EnterPage from "../src/components/EnterPage/EnterPage";
import SettingsPage from "../src/components/SettingsPage/SettingsPage"
import { getTheme } from './store/selectors/user';

const Links = () => {
  const theme = useSelector(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [ theme ])

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
  const store = useStore();

  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Links />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
