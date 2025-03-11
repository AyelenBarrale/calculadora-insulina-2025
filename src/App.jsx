import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import SelectedFoodsTable from "./components/SelectedFoodsTable";
import InsulineInfoCard from "./components/InsulineInfoCard";
import InsulinDoseCalculator from "./components/InsulinDoseCalculator";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { MDXWrapper } from './components/MDXProvider';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const HomePage = () => (
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
  );

  return (
    <HelmetProvider>
      <MDXWrapper>
        <Router>
          <ScrollToTop />
          <div className="app">
            <Navbar />
            <main className="main-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </MDXWrapper>
    </HelmetProvider>
  );
}

export default App;
