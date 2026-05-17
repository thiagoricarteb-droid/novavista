import React from 'react';
import { PageType } from '../types';
import { properties } from '../mockData';
import PropertyCard from '../components/PropertyCard';

interface HomeProps {
    onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <section 
                className="relative min-h-[85vh] flex items-center px-6 md:px-12 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `linear-gradient(115deg, rgba(30,43,79,0.9) 0%, rgba(30,43,79,0.6) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1974&auto=format&fit=crop')`
                }}
            >
                <div className="max-w-3xl text-white z-10 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                        Encontre o lar dos seus sonhos com a NovaVista
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-95 font-light">
                        Há 20 anos transformando sonhos em endereços. Mais de 5.000 famílias realizadas.
                    </p>
                    <button 
                        onClick={() => onNavigate('imoveis')}
                        className="bg-gold text-navy font-heading font-bold py-4 px-8 rounded-lg text-lg hover:bg-gold-dark hover:scale-105 transition-all shadow-[0_6px_20px_rgba(212,175,55,0.4)] flex items-center gap-3 w-fit"
                    >
                        <i className="fas fa-search"></i> Ver imóveis disponíveis
                    </button>
                </div>
            </section>

            {/* Quick Search */}
            <div className="px-6 md:px-12 -mt-16 relative z-20 mb-20">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold text-navy mb-4">Busque seu imóvel</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <select className="w-full p-3 border border-border-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white">
                            <option>Tipo de imóvel</option>
                            <option>Apartamento</option>
                            <option>Casa</option>
                            <option>Comercial</option>
                            <option>Terreno</option>
                        </select>
                        <select className="w-full p-3 border border-border-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white">
                            <option>Cidade/Bairro</option>
                            <option>Jardins</option>
                            <option>Moema</option>
                            <option>Pinheiros</option>
                        </select>
                        <select className="w-full p-3 border border-border-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white">
                            <option>Faixa de preço</option>
                            <option>Até R$ 500 mil</option>
                            <option>R$ 500k - R$ 1M</option>
                            <option>Acima de R$ 1M</option>
                        </select>
                        <button 
                            onClick={() => onNavigate('imoveis')}
                            className="bg-gold text-navy font-bold rounded-lg hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 h-[50px] md:h-auto"
                        >
                            <i className="fas fa-search"></i> Buscar
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Properties */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy relative inline-block">
                        Imóveis em destaque
                        <span className="block h-1 w-20 bg-gold mt-2 rounded"></span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>

            {/* Services */}
            <div className="bg-light-gray py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Nossos serviços</h2>
                        <p className="text-slate-600 text-lg">Soluções completas para sua jornada imobiliária</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-transparent hover:border-gold transition-all group">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
                                <i className="fas fa-handshake text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Compra e Venda</h3>
                            <p className="text-slate-600">Assessoria completa jurídica e comercial para comprar ou vender seu imóvel com total segurança.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-transparent hover:border-gold transition-all group">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
                                <i className="fas fa-key text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Aluguel</h3>
                            <p className="text-slate-600">Gestão de locação residencial e comercial com agilidade na análise e garantias facilitadas.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-transparent hover:border-gold transition-all group">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
                                <i className="fas fa-chart-line text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Avaliação Gratuita</h3>
                            <p className="text-slate-600">Descubra o valor real do seu patrimônio com nossa análise de mercado baseada em dados.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Teaser */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
                            Sobre a NovaVista
                            <span className="block h-1 w-20 bg-gold mt-2 rounded"></span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Fundada em 2005, a NovaVista Imóveis já ajudou mais de 5.000 famílias a realizarem o sonho da casa própria e empresas a encontrarem o ponto comercial ideal.
                        </p>
                        <p className="text-lg text-slate-600 mb-8">
                            Nossa missão é oferecer as melhores oportunidades com transparência, ética e expertise de mercado incomparável na região.
                        </p>
                        <button 
                            onClick={() => onNavigate('sobre')}
                            className="bg-transparent border-2 border-navy text-navy font-bold py-3 px-8 rounded-lg hover:bg-navy hover:text-white transition-all flex items-center gap-2 w-fit"
                        >
                            Conheça nossa história
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0 hidden md:block"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974&auto=format&fit=crop" 
                            alt="Equipe NovaVista" 
                            className="relative z-10 w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;