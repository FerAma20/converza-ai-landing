import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Capabilities from './components/Capabilities.jsx';
import Showcase from './components/Showcase.jsx';
import Industries from './components/Industries.jsx';
import ApiSection from './components/ApiSection.jsx';
import Process from './components/Process.jsx';
import Pricing from './components/Pricing.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import DemoModal from './components/DemoModal.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Capabilities />
      <Showcase />
      <Industries />
      <ApiSection />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
      <DemoModal />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}
