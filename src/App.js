import React, { useState } from 'react';
import './App.css';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      <main className="rounded container mt-5 mb-3 px-4 py-3">
        {renderPage(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;