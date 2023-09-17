import React from 'react';
import Header from './components/Header/Header';
import BannerHome from './components/Header/HomeContainer';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <BannerHome />
      <main>
        <Routes>
         < Route path="/" element={<Home />}/>
        </Routes>

      </main>
    </div>
  );
}
export default App;
