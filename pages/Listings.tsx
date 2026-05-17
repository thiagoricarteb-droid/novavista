import React from 'react';
import { PageType } from '../types';
import { properties } from '../mockData';
import PropertyCard from '../components/PropertyCard';

interface ListingsProps {
    type: 'all' | 'rent' | 'buy';
    onNavigate: (page: PageType) => void;
}

const Listings: React.FC<ListingsProps> = ({ type, onNavigate }) => {
    let filteredProperties = properties;
    let title = "Todos os imóveis";
    let subtitle = "Encontre o imóvel perfeito para você";
    let bannerColor = "from-slate-100 to-slate-200";

    if (type === 'rent') {
        filteredProperties = properties.filter(p => p.category === 'Aluguel');
        title = "Imóveis para alugar";
        subtitle = "Encontre seu novo endereço com as melhores condições";
        bannerColor = "from-blue-50 to-indigo-50";
    } else if (type === 'buy') {
        filteredProperties = properties.filter(p => p.category === 'Venda');
        title = "Imóveis à venda";
        subtitle = "Realize o sonho da casa própria com a NovaVista";
        bannerColor = "from-amber-50 to-orange-50";
    }

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className={`bg-gradient-to-br ${bannerColor} py-16 text-center border-b-4 border-gold`}>
                <h1 className="text-4xl font-heading font-bold text-navy mb-3">{title}</h1>
                <p className="text-xl text-slate-600">{subtitle}</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                {/* Advanced Filters */}
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-10 border border-border-gray">
                    <h4 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                        <i className="fas fa-filter text-gold"></i> Filtros avançados
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <select className="w-full p-2.5 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold">
                            <option>Tipo</option>
                            <option>Apartamento</option>
                            <option>Casa</option>
                            <option>Comercial</option>
                        </select>
                        <select className="w-full p-2.5 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold">
                            <option>Bairro</option>
                            <option>Jardins</option>
                            <option>Moema</option>
                            <option>Pinheiros</option>
                        </select>
                        <select className="w-full p-2.5 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold">
                            <option>Quartos</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                        </select>
                        <select className="w-full p-2.5 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold">
                            <option>Vagas</option>
                            <option>1+</option>
                            <option>2+</option>
                        </select>
                        <input type="number" placeholder="Min R$" className="w-full p-2.5 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold" />
                        <input type="number" placeholder="Max R$" className="w-full p-2.5 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold" />
                    </div>
                    <div className="mt-6 flex gap-4">
                        <button className="bg-gold text-navy font-bold py-2 px-6 rounded-lg hover:bg-gold-dark transition-colors">
                            Aplicar filtros
                        </button>
                        <button className="bg-transparent border border-navy text-navy font-semibold py-2 px-6 rounded-lg hover:bg-slate-50 transition-colors">
                            Limpar
                        </button>
                    </div>
                </div>

                {/* Promo Banners */}
                {type === 'rent' && (
                    <div className="bg-gold text-navy p-6 rounded-2xl text-center mb-10 shadow-md">
                        <h3 className="text-xl font-bold mb-1 flex justify-center items-center gap-2">
                            <i className="fas fa-tag"></i> Primeiro aluguel com assessoria gratuita!
                        </h3>
                        <p className="opacity-90">Consultoria especializada para quem vai alugar pela primeira vez.</p>
                    </div>
                )}

                {type === 'buy' && (
                    <div className="bg-navy text-white p-6 rounded-2xl text-center mb-10 shadow-md">
                        <h3 className="text-xl font-bold mb-2 flex justify-center items-center gap-2">
                             <i className="fas fa-calculator text-gold"></i> Simulação de financiamento online
                        </h3>
                        <p className="opacity-80 mb-4">Faça uma simulação personalizada com nossos parceiros bancários.</p>
                        <button 
                            onClick={() => onNavigate('simulacao')}
                            className="bg-gold text-navy font-bold py-2 px-6 rounded-lg hover:bg-gold-dark transition-colors"
                        >
                            Simular agora
                        </button>
                    </div>
                )}

                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <p className="text-slate-600 font-medium"><strong>{filteredProperties.length}</strong> imóveis encontrados</p>
                    <select className="p-2 border border-border-gray rounded-lg text-sm focus:outline-none focus:border-gold bg-white">
                        <option>Ordenar por: Relevância</option>
                        <option>Menor preço</option>
                        <option>Maior preço</option>
                        <option>Maior área</option>
                    </select>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="bg-transparent border-2 border-navy text-navy font-bold py-3 px-8 rounded-lg hover:bg-navy hover:text-white transition-colors">
                        <i className="fas fa-plus mr-2"></i> Carregar mais imóveis
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Listings;