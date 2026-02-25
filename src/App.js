// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import CalendarView from './components/CalendarView';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Account from './components/Account';
import Share from './components/Share';

function App() {
  // 카카오 SDK 초기화 (여기에 본인의 JavaScript 키를 넣어야 합니다)
  useEffect(() => {
    const initKakao = () => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('fe5b853ee4dfb84262abab5fd0e8ef58');
      }
    } else {
      setTimeout(initKakao, 100); 
    }
  };

  initKakao();
  }, []);

  return (
    <div className="container">
      <Hero />
      <Invitation />
      <div className="divider"></div>
      <CalendarView />
      <div className="divider"></div>
      <Gallery />
      <div className="divider"></div>
      <Location />
      <div className="divider"></div>
      <Account />
      <Share />
      {/* <footer style={{ padding: '20px', textAlign: 'center', fontSize: '12px', color: '#888' }}>
        Copyright © 2026 순태 & 하나. All rights reserved.
      </footer> */}
    </div>
  );
}

export default App;