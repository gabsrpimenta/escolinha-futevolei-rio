import { useState, useMemo } from 'react';

const INITIAL_TURMAS = [
  {
    id: '1',
    horario: '07:00 - 08:30',
    dias: 'Seg • Qua • Sex',
    nivel: 'Avançado',
    posto: 'Posto 9 — Ipanema',
    professor: 'Prof. Dudu',
    vagasOcupadas: 6,
    vagasTotais: 8,
    corBadge: '#0284C7',
  },
  {
    id: '2',
    horario: '08:30 - 10:00',
    dias: 'Ter • Qui',
    nivel: 'Iniciante',
    posto: 'Posto 6 — Copacabana',
    professor: 'Prof. Pedrinho',
    vagasOcupadas: 8,
    vagasTotais: 8,
    corBadge: '#FACC15',
  },
  {
    id: '3',
    horario: '17:00 - 18:30',
    dias: 'Seg • Qua',
    nivel: 'Intermediário',
    posto: 'Posto 9 — Ipanema',
    professor: 'Prof. Dudu',
    vagasOcupadas: 4,
    vagasTotais: 8,
    corBadge: '#34D399',
  },
  {
    id: '4',
    horario: '08:00 - 09:30',
    dias: 'Sáb • Dom',
    nivel: 'Iniciante',
    posto: 'Praia da Barra — P3',
    professor: 'Prof. Gabi',
    vagasOcupadas: 5,
    vagasTotais: 10,
    corBadge: '#A855F7',
  },
];

export function useTurmas() {
  const [listaTurmas] = useState(INITIAL_TURMAS);
  const [postoFiltro, setPostoFiltro] = useState('Todos');

  const turmasFiltradas = useMemo(() => {
    return listaTurmas.filter(turma => {
      return postoFiltro === 'Todos' || turma.posto.toLowerCase().includes(postoFiltro.toLowerCase());
    });
  }, [listaTurmas, postoFiltro]);

  return {
    postoFiltro,
    setPostoFiltro,
    turmas: turmasFiltradas,
    totalTurmas: listaTurmas.length,
  };
}