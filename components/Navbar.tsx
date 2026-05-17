import React, { useState } from 'react';
import { PageType, NavItem } from '../types';

interface NavbarProps {
    activePage: PageType;
    onNavigate: (page: PageType) => void;
}

const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'imoveis', label: 'Imóveis' },
    { id: 'alugar', label: 'Alugar' },
    { id: 'comprar', label: 'Comprar' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
];

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNav = (page: PageType) => {
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-sm py-4 px-6 md:px-12 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
                <a 
                    href="#home" 
                    onClick={(e) => { e.preventDefault(); handleNav('home'); }} 
                    className="flex items-center gap-2 text-2xl font-heading font-bold text-navy"
                >
                    <span>🏠</span> Nova<span className="text-gold font-normal">Vista</span>
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-navy text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Desktop & Mobile Menu */}
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center gap-6 mt-4 md:mt-0 transition-all`}>
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none w-full md:w-auto text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={`#${item.id}`}
                                    onClick={(e) => { e.preventDefault(); handleNav(item.id); }}
                                    className={`text-base font-medium transition-colors border-b-2 pb-1 ${
                                        activePage === item.id 
                                        ? 'text-navy border-gold' 
                                        : 'text-slate-600 border-transparent hover:text-navy hover:border-gold'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="md:hidden">
                            <a 
                                href="#simulacao"
                                onClick={(e) => { e.preventDefault(); handleNav('simulacao'); }}
                                className={`text-base font-medium transition-colors border-b-2 pb-1 ${activePage === 'simulacao' ? 'text-navy border-gold' : 'text-slate-600 border-transparent'}`}
                            >
                                Simulação
                            </a>
                        </li>
                    </ul>
                    <button 
                        onClick={() => handleNav('simulacao')}
                        className="hidden md:inline-flex bg-gold text-navy font-heading font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-gold-dark hover:scale-105 transition-all items-center gap-2"
                    >
                        <i className="fas fa-calculator"></i> Simular
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;