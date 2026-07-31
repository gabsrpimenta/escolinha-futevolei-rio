import { useState } from 'react';

const AVISOS_MOCK = [
  {
    id: '1',
    titulo: 'Chuva Forte e Vento no Posto 9',
    mensagem: 'Treino das 07:00 suspenso temporariamente por razões de segurança. Atualizamos em breve!',
    data: 'Hoje, 06:15',
    tipo: 'alerta', // alerta, info, evento
    posto: 'Posto 9 — Ipanema',
  },
  {
    id: '2',
    titulo: 'Torneio Interno Pé na Areia 🏆',
    mensagem: 'Inscrições abertas para a etapa de duplas mistas no Posto 6. Garanta sua vaga com o Dudu.',
    data: 'Ontem',
    tipo: 'evento',
    posto: 'Geral',
  },
  {
    id: '3',
    titulo: 'Manutenção de Redes no Posto 6',
    mensagem: 'Troca das redes e marcação da quadra concluída. Aulas normais no período da tarde.',
    data: '28 Jul',
    tipo: 'info',
    posto: 'Posto 6 — Copacabana',
  },
];

export function useAvisos() {
  const [listaAvisos, setListaAvisos] = useState(AVISOS_MOCK);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaMensagem, setNovaMensagem] = useState('');
  const [novoTipo, setNovoTipo] = useState('alerta');

  const handleCriarAviso = () => {
    if (!novoTitulo.trim() || !novaMensagem.trim()) return;

    const novoAviso = {
      id: Date.now().toString(),
      titulo: novoTitulo,
      mensagem: novaMensagem,
      data: 'Agora',
      tipo: novoTipo,
      posto: 'Posto 9 — Ipanema',
    };

    setListaAvisos([novoAviso, ...listaAvisos]);
    setNovoTitulo('');
    setNovaMensagem('');
    setModalVisivel(false);
  };

  return {
    avisos: listaAvisos,
    totalAvisos: listaAvisos.length,
    modalVisivel,
    setModalVisivel,
    novoTitulo,
    setNovoTitulo,
    novaMensagem,
    setNovaMensagem,
    novoTipo,
    setNovoTipo,
    handleCriarAviso,
  };
}