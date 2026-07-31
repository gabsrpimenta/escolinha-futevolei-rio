import React from 'react';
import { 
  Search, 
  BarChart2, 
  CreditCard, 
  Plus, 
  QrCode, 
  ArrowLeftRight, 
  MoreHorizontal, 
  Home, 
  Users, 
  Calendar, 
  DollarSign, 
  Bell,
  MapPin
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0f14] text-white font-sans pb-28 antialiased select-none">
      <div className="max-w-md mx-auto px-4 pt-4 space-y-6">

        {/* 1. Header Topo (Perfil + Busca + Ícones Rápido) */}
        <header className="flex items-center justify-between gap-3 pt-2">
          {/* Avatar com badge */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-sky-500 p-[2px]">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-amber-400">
                RJ
              </div>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0e0f14]" />
          </div>

          {/* Barra de Pesquisa Estilo Revolut */}
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Pesquisar" 
              className="w-full bg-[#1c1d24] text-sm text-white placeholder-slate-400 pl-10 pr-4 py-2 rounded-full outline-none focus:ring-1 focus:ring-slate-700 transition"
            />
          </div>

          {/* Ícones do Canto Superior Direito */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-[#1c1d24] flex items-center justify-center text-slate-200 hover:text-white active:scale-95 transition">
              <BarChart2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1c1d24] flex items-center justify-center text-slate-200 hover:text-white active:scale-95 transition">
              <CreditCard size={18} />
            </button>
          </div>
        </header>

        {/* 2. Métrica Principal Centrada */}
        <div className="text-center pt-2 space-y-1">
          <p className="text-xs font-medium text-slate-400">Escolinha Pé na Areia • RJ</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-extrabold tracking-tight text-white">128</span>
            <span className="text-xl font-bold text-slate-300">alunos</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
            <MapPin size={12} className="text-amber-400" />
            <span>Posto 9 & Posto 6 • Copacabana / Ipanema</span>
          </div>
        </div>

        {/* 3. Botão Central de Seleção de Contexto */}
        <div className="flex justify-center pt-1">
          <button className="bg-[#1c1d24] border border-slate-800/60 text-slate-200 text-xs font-semibold px-5 py-2 rounded-full hover:bg-slate-800 transition">
            Visão Geral
          </button>
        </div>

        {/* 4. Ações Rápidas (Botões Redondos Revolut) */}
        <div className="grid grid-cols-4 gap-3 pt-2">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#1c1d24] border border-slate-800/80 flex items-center justify-center text-white group-active:scale-95 transition shadow-lg">
              <Plus size={22} strokeWidth={2.2} />
            </div>
            <span className="text-xs font-medium text-slate-300">Novo Aluno</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#1c1d24] border border-slate-800/80 flex items-center justify-center text-white group-active:scale-95 transition shadow-lg">
              <QrCode size={20} strokeWidth={2.2} />
            </div>
            <span className="text-xs font-medium text-slate-300">Cobrar PIX</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#1c1d24] border border-slate-800/80 flex items-center justify-center text-white group-active:scale-95 transition shadow-lg">
              <ArrowLeftRight size={20} strokeWidth={2.2} />
            </div>
            <span className="text-xs font-medium text-slate-300">Mudar Turma</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#1c1d24] border border-slate-800/80 flex items-center justify-center text-white group-active:scale-95 transition shadow-lg">
              <MoreHorizontal size={20} strokeWidth={2.2} />
            </div>
            <span className="text-xs font-medium text-slate-300">Mais</span>
          </button>
        </div>

        {/* 5. Card de Atividades / Aulas de Hoje (Estilo Revolut) */}
        <div className="bg-[#181920] border border-slate-800/60 rounded-3xl p-5 space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-sm font-bold text-white">Aulas de Hoje</h2>
            <span className="text-xs font-semibold text-sky-400 cursor-pointer">Ver tudo</span>
          </div>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  07:00
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">Posto 9 — Ipanema</p>
                  <p className="text-xs text-slate-400">Turma Avançado • Hoje, 07:00</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-emerald-400">6/8 vagas</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  08:30
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">Posto 6 — Copacabana</p>
                  <p className="text-xs text-slate-400">Turma Iniciante • Hoje, 08:30</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-amber-400">Lotado</span>
            </div>
          </div>
        </div>

        {/* 6. Card Secundário de Avisos */}
        <div className="bg-[#181920] border border-slate-800/60 rounded-3xl p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Mural de Avisos</span>
            <span className="text-xs text-amber-400 font-medium">1 novo</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Bell size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-white">Treino confirmado no Posto 9</p>
              <p className="text-[11px] text-slate-400">Condições ideais de vento e maré para hoje.</p>
            </div>
          </div>
        </div>

      </div>

      {/* 7. Bottom Navigation Bar Fixo (Estilo Mobile App Revolut) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0e0f14]/95 backdrop-blur-md border-t border-slate-800/80 px-6 py-2.5 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="flex flex-col items-center gap-1 text-white">
            <div className="w-10 h-8 rounded-xl bg-[#1c1d24] flex items-center justify-center">
              <Home size={18} />
            </div>
            <span className="text-[10px] font-medium">Home</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
            <div className="w-10 h-8 flex items-center justify-center">
              <Users size={18} />
            </div>
            <span className="text-[10px] font-medium">Alunos</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
            <div className="w-10 h-8 flex items-center justify-center">
              <Calendar size={18} />
            </div>
            <span className="text-[10px] font-medium">Turmas</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
            <div className="w-10 h-8 flex items-center justify-center">
              <DollarSign size={18} />
            </div>
            <span className="text-[10px] font-medium">Financeiro</span>
          </button>
        </div>
      </nav>
    </div>
  );
}