import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import AccueilHome from './pages/AccueilHome';
import ScrollToTop from './components/ScrollToTop';
// import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop/>

    <div className='sitewrapper'>
      <Header  />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/test" element={<AccueilHome />} />
        </Routes>
      </main>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
