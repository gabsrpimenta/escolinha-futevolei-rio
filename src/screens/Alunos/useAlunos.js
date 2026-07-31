import { useState, useMemo } from 'react';

const ALUNOS_MOCK = [
  {
    id: '1',
    nome: 'Lucas Silveira',
    nivel: 'Avançado',
    posto: 'Posto 9 — Ipanema',
    presenca: '92%',
    statusFinanceiro: 'Em dia',
    avatar: 'LS'
  },
  {
    id: '2',
    nome: 'Mariana Costa',
    nivel: 'Iniciante',
    posto: 'Posto 6 — Copacabana',
    presenca: '85%',
    statusFinanceiro: 'Pendente',
    avatar: 'MC'
  },
  {
    id: '3',
    nome: 'Rodrigo Avelar',
    nivel: 'Intermediário',
    posto: 'Posto 9 — Ipanema',
    presenca: '78%',
    statusFinanceiro: 'Em dia',
    avatar: 'RA'
  },
  {
    id: '4',
    nome: 'Beatriz Lima',
    nivel: 'Iniciante',
    posto: 'Posto 6 — Copacabana',
    presenca: '95%',
    statusFinanceiro: 'Em dia',
    avatar: 'BL'
  },
];

export function useAlunos() {
  const [busca, setBusca] = useState('');
  const [nivelFiltro, setNivelFiltro] = useState('Todos');

  const alunosFiltrados = useMemo(() => {
    return ALUNOS_MOCK.filter(aluno => {
      const bateComBusca = aluno.nome.toLowerCase().includes(busca.toLowerCase());
      const bateComNivel = nivelFiltro === 'Todos' || aluno.nivel === nivelFiltro;
      return bateComBusca && bateComNivel;
    });
  }, [busca, nivelFiltro]);

  return {
    busca,
    setBusca,
    nivelFiltro,
    setNivelFiltro,
    alunos: alunosFiltrados,
    totalAlunos: ALUNOS_MOCK.length,
  };
}