import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';
import Missions from './pages/Missions/Missions';
import More from './pages/More/More';
import Wallet from './pages/Wallet/Wallet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="wallet" element={<Wallet/>} />
            <Route path="friends" element={<Friends/>}/>
            <Route path="missions" element={<Missions/>}/>
            <Route path="more" element={<More/>}/>
          </Route>  
      </Routes>    
      <Routes>
          <Route path="/react-dashboard" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="/react-dashboard/wallet" element={<Wallet/>} />
            <Route path="/react-dashboard/friends" element={<Friends/>}/>
            <Route path="/react-dashboard/missions" element={<Missions/>}/>
            <Route path="/react-dashboard/more" element={<More/>}/>
          </Route>  
      </Routes>   
      </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
