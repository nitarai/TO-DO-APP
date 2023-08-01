import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ButtonComponent from './components/Button';
import Title from './Title';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ButtonComponent />
    <Title />
  </React.StrictMode>
);
