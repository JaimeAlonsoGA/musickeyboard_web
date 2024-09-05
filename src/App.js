import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Keyboard from './pages/Keyboard';
import { PropsContextProvider } from './providers/PropsProvider';
import { SoundContextProvider } from './providers/SoundProvider';
import { PositionContextProvider } from './providers/PositionProvider';
import { MediaQueryContextProvider } from './providers/MediaQueryProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <MediaQueryContextProvider>
      <ParallaxProvider>
        <PositionContextProvider>
          <SoundContextProvider>
            <PropsContextProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </PropsContextProvider>
          </SoundContextProvider>
        </PositionContextProvider>
      </ParallaxProvider>
    </MediaQueryContextProvider>
  )
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Keyboard />} />
  </Routes>
)


export default App;
