import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Read from './Read';
import Login from './Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { createBrowserHistory } from 'history'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/read/:date" element={<Read />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
