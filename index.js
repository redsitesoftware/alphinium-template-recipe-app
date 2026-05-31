import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import App from './App';

if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.setAttribute('id', 'yumai-scroll-fix');
  style.textContent = `
    html, body {
      background: #FFFBF0;
      height: auto !important;
      min-height: 100%;
      overflow-y: auto !important;
      color: #1C1917;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    #root {
      min-height: 100vh;
    }
    * {
      box-sizing: border-box;
    }
  `;
  document.head.appendChild(style);
}

registerRootComponent(App);
