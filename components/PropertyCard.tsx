import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border-gray hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group">
            {property.badge && (
                <span className="absolute top-4 right-4 bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold z-10 shadow-sm">
                    {property.badge}
                </span>
            )}
            <button className="absolute top-4 left-4 bg-white w-10 h-10 rounded-full flex items-center justify-center text-navy text-lg z-10 hover:bg-gold hover:text-white transition-colors shadow-sm">
                <i className="far fa-heart"></i>
            </button>
            
            <div className="relative overflow-hidden h-64">
                <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <h4 className="text-xl font-heading font-bold text-navy mb-2 line-clamp-1">{property.title}</h4>
                <p className="text-slate-500 mb-4 flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-gold"></i> {property.location}, SP
                </p>
                
                <div className="flex items-center gap-4 text-slate-600 text-sm mb-4">
                    {property.bedrooms > 0 && (
                        <span className="flex items-center gap-1" title="Quartos">
                            <i className="fas fa-bed"></i> {property.bedrooms}
                        </span>
                    )}
                    <span className="flex items-center gap-1" title="Vagas">
                        <i className="fas fa-car"></i> {property.parking}
                    </span>
                    <span className="flex items-center gap-1" title="Área">
                        <i className="fas fa-arrows-alt"></i> {property.area}m²
                    </span>
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-2xl font-bold text-navy">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.price)}
                    </span>
                    {property.condoPrice !== undefined && property.condoPrice > 0 && (
                        <small className="text-slate-400 text-sm">
                            + {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.condoPrice)} cond.
                        </small>
                    )}
                </div>

                <button className="w-full bg-transparent border-2 border-navy text-navy font-semibold py-2 rounded-lg hover:bg-navy hover:text-white transition-colors duration-200">
                    Ver detalhes
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;