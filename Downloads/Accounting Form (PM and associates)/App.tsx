
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Contact from './pages/Contact';

// Helper component to ensure navigation always starts at the top
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Helper component to handle the forced "Start at Home" logic on refresh
const RootRedirector: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This effect runs only once when the app mounts (initial load or refresh)
    // It forces the user back to the home page as requested.
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []); // Empty dependency array ensures this only runs on app initialization

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <RootRedirector />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all to Home to prevent route errors */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
