import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import QuickPortfolio from './components/QuickPortfolio';
import Secret from './components/Secret';

import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
          </Route>
        </Routes>
    </>
  );
}

export default App;
