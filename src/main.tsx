import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { MotionConfig } from 'motion/react';
import '@fontsource/saira-condensed/700.css';
import '@fontsource/quattrocento-sans/400.css';
import '@fontsource/quattrocento-sans/700.css';
import '@/styles/global.css';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
);
