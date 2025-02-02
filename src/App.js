import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import QuickPortfolio from './components/QuickPortfolio';
import Secret from './components/Secret';
import MobileGameboy from './components/MobileGameboy';

import './App.scss';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/ >} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="quick-portfolio" element={<QuickPortfolio />} />
            <Route path="secret" element={<Secret />} />
            <Route path="gameboy" element={<MobileGameboy />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
