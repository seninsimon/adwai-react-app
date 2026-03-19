import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CareAssistPage from './pages/CareAssistPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-outfit">
        <Header />
        <main className="grow pt-[100px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careassist" element={<CareAssistPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
