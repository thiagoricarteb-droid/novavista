import React from 'react';
import { PageType } from '../types';

interface FooterProps {
    onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-navy text-slate-200 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                
                {/* Brand Column */}
                <div className="flex flex-col">
                    <div className="text-3xl font-heading font-bold text-white mb-4">
                        🏠 Nova<span className="text-gold">Vista</span>
                    </div>
                    <p className="mb-6 leading-relaxed opacity-90">
                        Realizando sonhos e negócios imobiliários desde 2005. Mais de 5.000 imóveis comercializados com segurança e transparência.
                    </p>
                    <div className="flex gap-4 mb-6">
                        {['instagram', 'facebook-f', 'linkedin-in', 'youtube'].map((icon) => (
                            <a key={icon} href="#" className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300">
                                <i className={`fab fa-${icon}`}></i>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-slate-700/50 px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                            <i className="fas fa-check-circle text-gold"></i> CRECI-SP 12345
                        </span>
                        <span className="bg-slate-700/50 px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                            <i className="fas fa-building text-gold"></i> SECOVI
                        </span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white text-xl font-heading font-bold mb-6">Links Rápidos</h4>
                    <ul className="space-y-3">
                        <li><button onClick={() => onNavigate('imoveis')} className="hover:text-gold transition-colors">Todos os imóveis</button></li>
                        <li><button onClick={() => onNavigate('alugar')} className="hover:text-gold transition-colors">Imóveis para alugar</button></li>
                        <li><button onClick={() => onNavigate('comprar')} className="hover:text-gold transition-colors">Imóveis para comprar</button></li>
                        <li><button onClick={() => onNavigate('sobre')} className="hover:text-gold transition-colors">Sobre nós</button></li>
                        <li><button onClick={() => onNavigate('simulacao')} className="hover:text-gold transition-colors">Simular financiamento</button></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white text-xl font-heading font-bold mb-6">Contato</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <i className="fab fa-whatsapp text-gold w-5"></i>
                            <span>(11) 99999-9999</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="far fa-envelope text-gold w-5"></i>
                            <span>contato@novavista.com.br</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-map-marker-alt text-gold w-5 mt-1"></i>
                            <span>Av. Brigadeiro Faria Lima, 1500<br/>São Paulo/SP</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="far fa-clock text-gold w-5"></i>
                            <span>Seg-Sex 9h-19h | Sáb 9h-13h</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center text-sm opacity-60">
                <p>&copy; 2025 NovaVista Imóveis · Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;