import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-16 text-center border-b-4 border-gold">
                <h1 className="text-4xl font-heading font-bold text-navy mb-3">Sobre a NovaVista</h1>
                <p className="text-xl text-slate-600">Excelência e credibilidade no mercado imobiliário</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                
                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-xl leading-relaxed text-slate-700">
                        Fundada em 2005, a NovaVista Imóveis construiu uma trajetória de solidez e confiança, sempre priorizando o relacionamento com clientes e a ética nos negócios.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { num: '5.000+', label: 'Imóveis negociados' },
                        { num: '4.800+', label: 'Clientes satisfeitos' },
                        { num: '20', label: 'Anos de mercado' },
                        { num: '45', label: 'Bairros atendidos' },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-gold">
                            <div className="text-4xl font-heading font-bold text-gold mb-2">{stat.num}</div>
                            <p className="text-navy font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Team */}
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">Nossa equipe de corretores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { name: 'Carlos Eduardo', role: 'Especialista em Luxo', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
                        { name: 'Ana Beatriz', role: 'Lançamentos', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974&auto=format&fit=crop' },
                        { name: 'Ricardo Mendes', role: 'Comercial', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop' },
                        { name: 'Juliana Costa', role: 'Financiamento', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop' },
                    ].map((member, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                            <div className="h-64 overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold text-navy">{member.name}</h4>
                                <p className="text-gold font-semibold text-sm mb-2">CRECI {12345 + idx}-SP</p>
                                <p className="text-slate-500 text-sm mb-4">{member.role}</p>
                                <button className="bg-[#25D366] text-white py-2 px-6 rounded-full text-sm font-bold flex items-center justify-center gap-2 mx-auto hover:bg-[#20bd5a] transition-colors">
                                    <i className="fab fa-whatsapp"></i> Contato
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values */}
                <div className="bg-light-gray rounded-3xl p-10 md:p-16">
                    <h3 className="text-2xl font-bold text-navy text-center mb-10">Missão, Visão e Valores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gold text-2xl shadow-sm">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Missão</h4>
                            <p className="text-slate-600">Realizar sonhos através de negócios imobiliários seguros e transparentes.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gold text-2xl shadow-sm">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Visão</h4>
                            <p className="text-slate-600">Ser referência em excelência e inovação no mercado imobiliário até 2030.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gold text-2xl shadow-sm">
                                <i className="fas fa-gem"></i>
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Valores</h4>
                            <p className="text-slate-600">Ética, transparência, compromisso e relacionamento duradouro.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;