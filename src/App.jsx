import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import SelectedFoodsTable from "./components/SelectedFoodsTable";
import InsulineInfoCard from "./components/InsulineInfoCard";
import InsulinDoseCalculator from "./components/InsulinDoseCalculator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const HomePage = () => (
    <>
      <SEO 
        title="Calculadora de Insulina"
        description="Calcula tu dosis de insulina de forma precisa y segura. Herramienta gratuita para personas con diabetes tipo 1 y 2."
        url="/"
      />
      <div className="container">
        <h1 className="app-title">Calculadora de Carbohidratos</h1>
        <div className="main-layout">
          <div className="main-content">
            <SelectedFoodsTable selectedFoods={selectedFoods} setSelectedFoods={setSelectedFoods} />
          </div>
          <div className="side-content">
            <InsulineInfoCard />
            <InsulinDoseCalculator foods={selectedFoods} />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
