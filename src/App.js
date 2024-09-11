import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PropsContextProvider } from './providers/PropsProvider';
import { SoundContextProvider } from './providers/SoundProvider';
import { PositionContextProvider } from './providers/PositionProvider';
import { MediaQueryContextProvider } from './providers/MediaQueryProvider';
import Main from './pages/Keyboard';

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
  </Routes>
)


export default App;
