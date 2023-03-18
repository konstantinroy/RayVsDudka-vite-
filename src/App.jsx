import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useStore } from './store/store';
import { Provider, useSelector } from 'react-redux';
import Main from "../src/components/pages/Main/Main";
import Results from "../src/components/pages/ResultsPage/ResultsPage.jsx";
import Result2022Year from "../src/components/pages/ResultsPage/Result2022Year/Result2022Year";
import LocationsPage from "../src/components/pages/LocationsPage/LocationsPage";
import AudioPage from "../src/components/pages/AudioPage/AudioPage";
import PhotoPage from "../src/components/pages/PhotosPage/PhotosPage";
import QuotesPage from "../src/components/pages/QuotesPage/QuotesPage";
import EnterPage from "../src/components/pages/EnterPage/EnterPage";
import SettingsPage from "../src/components/pages/SettingsPage/SettingsPage"
import { getTheme } from './store/selectors/user';

const Links = () => {
  const theme = useSelector(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [ theme ])

  return (
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
