import { useState, useMemo } from 'react';

const INITIAL_ALUNOS = [
  { id: '1', nome: 'Lucas Silveira', nivel: 'Avançado', posto: 'Posto 9 — Ipanema', presenca: '92%', statusFinanceiro: 'Em dia', avatar: 'LS' },
  { id: '2', nome: 'Mariana Costa', nivel: 'Iniciante', posto: 'Posto 6 — Copacabana', presenca: '85%', statusFinanceiro: 'Pendente', avatar: 'MC' },
  { id: '3', nome: 'Rodrigo Avelar', nivel: 'Intermediário', posto: 'Posto 9 — Ipanema', presenca: '78%', statusFinanceiro: 'Em dia', avatar: 'RA' },
  { id: '4', nome: 'Beatriz Lima', nivel: 'Iniciante', posto: 'Posto 6 — Copacabana', presenca: '95%', statusFinanceiro: 'Em dia', avatar: 'BL' },
];

export function useAlunos() {
  const [listaAlunos, setListaAlunos] = useState(INITIAL_ALUNOS);
  const [busca, setBusca] = useState('');
  const [nivelFiltro, setNivelFiltro] = useState('Todos');

  // Estados do Modal
  const [modalVisivel, setModalVisivel] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  const [novoNivel, setNovoNivel] = useState('Iniciante');
  const [novoPosto, setNovoPosto] = useState('Posto 9 — Ipanema');

  const alunosFiltrados = useMemo(() => {
    return listaAlunos.filter(aluno => {
      const bateComBusca = aluno.nome.toLowerCase().includes(busca.toLowerCase());
      const bateComNivel = nivelFiltro === 'Todos' || aluno.nivel === nivelFiltro;
      return bateComBusca && bateComNivel;
    });
  }, [listaAlunos, busca, nivelFiltro]);

  const handleAdicionarAluno = () => {
    if (!novoNome.trim()) return;

    const iniciais = novoNome
      .trim()
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const novoAluno = {
      id: Date.now().toString(),
      nome: novoNome,
      nivel: novoNivel,
      posto: novoPosto,
      presenca: '100%',
      statusFinanceiro: 'Em dia',
      avatar: iniciais || 'AL',
    };

    setListaAlunos([novoAluno, ...listaAlunos]);
    setNovoNome('');
    setModalVisivel(false);
  };

  return {
    busca,
    setBusca,
    nivelFiltro,
    setNivelFiltro,
    alunos: alunosFiltrados,
    totalAlunos: listaAlunos.length,
    modalVisivel,
    setModalVisivel,
    novoNome,
    setNovoNome,
    novoNivel,
    setNovoNivel,
    novoPosto,
    setNovoPosto,
    handleAdicionarAluno,
  };
}