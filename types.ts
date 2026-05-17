export interface Property {
    id: number;
    title: string;
    type: 'Apartamento' | 'Casa' | 'Comercial' | 'Terreno';
    category: 'Venda' | 'Aluguel';
    location: string;
    bedrooms: number;
    parking: number;
    area: number;
    price: number;
    condoPrice?: number;
    image: string;
    badge?: string;
    isFeatured?: boolean;
}

export type PageType = 'home' | 'imoveis' | 'alugar' | 'comprar' | 'sobre' | 'contato' | 'simulacao';

export interface NavItem {
    id: PageType;
    label: string;
}