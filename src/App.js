import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Keyboard from './pages/Keyboard';
import { PropsContextProvider } from './providers/PropsProvider';
import { SoundContextProvider } from './providers/SoundProvider';
import { PositionContextProvider } from './providers/PositionProvider';
import { MediaQueryContextProvider } from './providers/MediaQueryProvider';

const App = () => {
  return (
    <MediaQueryContextProvider>
      <PositionContextProvider>
        <SoundContextProvider>
          <PropsContextProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </PropsContextProvider>
        </SoundContextProvider>
      </PositionContextProvider>
    </MediaQueryContextProvider>
  )
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Keyboard />} />
  </Routes>
)


export default App;
