import React from 'react';
import Header from './components/Header/Header';
import BannerHome from './components/Header/HomeContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/APropos/APropos';
import ErrorPage from './error-page';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerHome />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Apropos />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
