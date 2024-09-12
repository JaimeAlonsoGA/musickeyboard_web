import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PropsContextProvider } from './providers/PropsProvider';
import { SoundContextProvider } from './providers/SoundProvider';
import { PositionContextProvider } from './providers/PositionProvider';
import { MediaQueryContextProvider } from './providers/MediaQueryProvider';
import Main from './pages/Keyboard';
import HookPage from './pages/Hook';

const App = () => {
  return (
    <ProvidersWrapper>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProvidersWrapper>
  )
}

const ProvidersWrapper = ({ children }) => (
  <MediaQueryContextProvider>
    <PositionContextProvider>
      <SoundContextProvider>
        <PropsContextProvider>
          {children}
        </PropsContextProvider>
      </SoundContextProvider>
    </PositionContextProvider>
  </MediaQueryContextProvider>
)

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/freqchart" element={<HookPage />} />
  </Routes>
)

export default App;
