import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import favicon from './assets/logo.png';

// Set the browser tab favicon to the bundled logo
const setFavicon = (url) => {
  const head = document.getElementsByTagName('head')[0];
  let link = head.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
  }
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = url;
  head.appendChild(link);
};
setFavicon(favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
