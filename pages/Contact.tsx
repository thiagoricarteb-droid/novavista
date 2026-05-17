import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen">
             <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-16 text-center border-b-4 border-gold">
                <h1 className="text-4xl font-heading font-bold text-navy mb-3">Fale com a NovaVista</h1>
                <p className="text-xl text-slate-600">Estamos prontos para atender você</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-navy mb-6">Informações de contato</h3>
                        <div className="space-y-6 text-lg text-slate-700 mb-8">
                            <p className="flex items-center gap-4">
                                <i className="fab fa-whatsapp text-2xl text-gold w-8"></i>
                                <span className="font-bold text-navy">(11) 99999-9999</span>
                            </p>
                            <p className="flex items-center gap-4">
                                <i className="far fa-envelope text-2xl text-gold w-8"></i>
                                <span>contato@novavista.com.br</span>
                            </p>
                            <p className="flex items-center gap-4">
                                <i className="fas fa-map-marker-alt text-2xl text-gold w-8"></i>
                                <span>Av. Brigadeiro Faria Lima, 1500 - São Paulo/SP</span>
                            </p>
                            <p className="flex items-center gap-4">
                                <i className="far fa-clock text-2xl text-gold w-8"></i>
                                <span>Seg a Sex: 9h-19h | Sáb: 9h-13h</span>
                            </p>
                        </div>
                        <button 
                            className="bg-gold text-navy font-bold py-3 px-8 rounded-lg text-lg hover:bg-gold-dark transition-all flex items-center gap-3 shadow-lg"
                            onClick={() => alert('Abrindo WhatsApp...')}
                        >
                            <i className="fab fa-whatsapp text-xl"></i> Chamar no WhatsApp
                        </button>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-border-gray">
                        <h3 className="text-2xl font-bold text-navy mb-6">Envie uma mensagem</h3>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }}>
                            <div>
                                <label className="block text-navy font-semibold mb-1">Nome completo</label>
                                <input type="text" required className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label className="block text-navy font-semibold mb-1">E-mail</label>
                                <input type="email" required className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="seu@email.com" />
                            </div>
                            <div>
                                <label className="block text-navy font-semibold mb-1">Telefone</label>
                                <input type="tel" className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="(11) 99999-9999" />
                            </div>
                            <div>
                                <label className="block text-navy font-semibold mb-1">Interesse</label>
                                <select className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold transition-colors bg-white">
                                    <option>Comprar</option>
                                    <option>Alugar</option>
                                    <option>Vender</option>
                                    <option>Avaliação</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-navy font-semibold mb-1">Mensagem</label>
                                <textarea rows={4} required className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="Olá, gostaria de mais informações..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-navy text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                                Enviar mensagem
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.449447953476!2d-46.6368523!3d-23.5613544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f4c8f8c1%3A0x8b9f8f8f8f8f8f8f!2sAv.%20Brigadeiro%20Faria%20Lima%2C%201500%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;