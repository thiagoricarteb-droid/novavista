import React, { useState } from 'react';

const Simulation: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);

    const handleSimulate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const valor = parseFloat(formData.get('valorImovel') as string || '500000');
        const entrada = parseFloat(formData.get('entrada') as string || '100000');
        const prazo = parseInt(formData.get('prazo') as string || '20');

        const valorFinanciado = valor - entrada;
        const taxaAnual = 0.09; // 9%
        const taxaMensal = taxaAnual / 12;
        const meses = prazo * 12;
        
        const parcela = (valorFinanciado * taxaMensal * Math.pow(1 + taxaMensal, meses)) / (Math.pow(1 + taxaMensal, meses) - 1);
        
        if (!isNaN(parcela) && isFinite(parcela)) {
            setResult(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parcela));
        }
    };

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-16 text-center border-b-4 border-gold">
                <h1 className="text-4xl font-heading font-bold text-navy mb-3">Simulação de Financiamento</h1>
                <p className="text-xl text-slate-600">Descubra as melhores condições para o seu imóvel</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-border-gray">
                        <form onSubmit={handleSimulate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-navy font-bold mb-2">Nome completo *</label>
                                <input type="text" required className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold" />
                            </div>
                            <div>
                                <label className="block text-navy font-bold mb-2">Telefone (WhatsApp) *</label>
                                <input type="tel" required className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold" />
                            </div>
                            <div>
                                <label className="block text-navy font-bold mb-2">E-mail *</label>
                                <input type="email" required className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold" />
                            </div>
                            
                            <div className="border-t border-gray-100 my-2 md:col-span-2"></div>

                            <div>
                                <label className="block text-navy font-bold mb-2">Valor do imóvel (R$)</label>
                                <input name="valorImovel" type="number" defaultValue={500000} className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold" />
                            </div>
                            <div>
                                <label className="block text-navy font-bold mb-2">Valor de entrada (R$)</label>
                                <input name="entrada" type="number" defaultValue={100000} className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold" />
                            </div>
                            <div>
                                <label className="block text-navy font-bold mb-2">Prazo (anos)</label>
                                <select name="prazo" className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold bg-white">
                                    <option value="10">10 anos</option>
                                    <option value="15">15 anos</option>
                                    <option value="20" selected>20 anos</option>
                                    <option value="25">25 anos</option>
                                    <option value="30">30 anos</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-navy font-bold mb-2">Renda familiar (R$)</label>
                                <input type="number" className="w-full p-3 border-2 border-border-gray rounded-lg focus:outline-none focus:border-gold" />
                            </div>

                            <div className="md:col-span-2 flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                                <input type="checkbox" id="autoriza" className="w-5 h-5 text-gold focus:ring-gold rounded border-gray-300" />
                                <label htmlFor="autoriza" className="text-sm text-navy font-medium cursor-pointer">Autorizo contato via WhatsApp para receber ofertas personalizadas.</label>
                            </div>

                            <button type="submit" className="md:col-span-2 bg-gold text-navy font-heading font-bold text-lg py-4 rounded-lg hover:bg-gold-dark hover:scale-[1.01] transition-all shadow-lg flex justify-center items-center gap-2">
                                <i className="fas fa-calculator"></i> Calcular Parcelas
                            </button>
                        </form>

                        {result && (
                            <div className="mt-8 bg-navy p-8 rounded-2xl text-center animate-fade-in-up">
                                <h4 className="text-gold font-bold text-lg mb-2">Resultado Estimado</h4>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{result} <span className="text-base font-normal text-slate-400">/ mês</span></p>
                                <p className="text-slate-400 text-sm">* Simulação aproximada sujeita a análise de crédito e variação de taxas.</p>
                            </div>
                        )}
                    </div>

                    {/* Partners */}
                    <div className="mt-12 text-center">
                        <h4 className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-6">Nossos parceiros bancários</h4>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                             <div className="text-2xl font-bold text-navy flex items-center gap-2"><i className="fas fa-university"></i> Caixa</div>
                             <div className="text-2xl font-bold text-navy flex items-center gap-2"><i className="fas fa-university"></i> Itaú</div>
                             <div className="text-2xl font-bold text-navy flex items-center gap-2"><i className="fas fa-university"></i> Bradesco</div>
                             <div className="text-2xl font-bold text-navy flex items-center gap-2"><i className="fas fa-university"></i> Santander</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulation;