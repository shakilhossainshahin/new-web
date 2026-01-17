
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIConsultant from './pages/AIConsultant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-consultant" element={<AIConsultant />} />
          {/* Fallback route for demo */}
          <Route path="*" element={<Home />} />
        </Routes>
        
        {/* Footer */}
        <footer className="py-12 glass border-t border-cyan-500/10 mt-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-futuristic font-bold text-cyan-400 tracking-tighter neon-text mb-2">
                SHADHIN BANGLA
              </h2>
              <p className="text-gray-500 text-sm font-futuristic">THE FUTURE OF TRAVEL & CONSULTANCY</p>
            </div>
            
            <div className="flex space-x-6 text-xl text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
            
            <p className="text-gray-600 text-xs font-mono">
              &copy; 2025 SHADHIN BANGLA INTERSTELLAR. ALL SYSTEMS GO.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
