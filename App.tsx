import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import About from './pages/About';
import Contact from './pages/Contact';
import Simulation from './pages/Simulation';
import { PageType } from './types';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<PageType>('home');

    const handleNavigate = (page: PageType) => {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Render Page based on state
    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <Home onNavigate={handleNavigate} />;
            case 'imoveis':
                return <Listings type="all" onNavigate={handleNavigate} />;
            case 'alugar':
                return <Listings type="rent" onNavigate={handleNavigate} />;
            case 'comprar':
                return <Listings type="buy" onNavigate={handleNavigate} />;
            case 'sobre':
                return <About />;
            case 'contato':
                return <Contact />;
            case 'simulacao':
                return <Simulation />;
            default:
                return <Home onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="font-sans text-slate-700 bg-white">
            <Navbar activePage={activePage} onNavigate={handleNavigate} />
            
            <main>
                {renderPage()}
            </main>

            <Footer onNavigate={handleNavigate} />

            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noreferrer"
                className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-50 hover:scale-110 transition-transform hover:bg-[#20bd5a]"
                title="Fale conosco no WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default App;