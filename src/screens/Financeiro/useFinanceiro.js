import { useState, useMemo } from 'react';

const TRANSACOES_MOCK = [
  { id: '1', aluno: 'Lucas Silveira', plano: 'Mensal • 3x/semana', valor: 'R$ 280,00', vencimento: '05/Jul', status: 'Pago', metodo: 'PIX' },
  { id: '2', aluno: 'Mariana Costa', plano: 'Mensal • 2x/semana', valor: 'R$ 220,00', vencimento: '10/Jul', status: 'Pendente', metodo: 'PIX' },
  { id: '3', aluno: 'Rodrigo Avelar', plano: 'Trimestral • 3x/semana', valor: 'R$ 750,00', vencimento: '01/Jul', status: 'Pago', metodo: 'Cartão' },
  { id: '4', aluno: 'Beatriz Lima', plano: 'Mensal • 2x/semana', valor: 'R$ 220,00', vencimento: '12/Jul', status: 'Atrasado', metodo: 'PIX' },
  { id: '5', aluno: 'Gabriel Souza', plano: 'Avulso • 1 Treino', valor: 'R$ 60,00', vencimento: '31/Jul', status: 'Pago', metodo: 'PIX' },
];

export function useFinanceiro() {
  const [filtroStatus, setFiltroStatus] = useState('Todos');

  const transacoesFiltradas = useMemo(() => {
    return TRANSACOES_MOCK.filter(t => {
      if (filtroStatus === 'Todos') return true;
      return t.status.toLowerCase() === filtroStatus.toLowerCase();
    });
  }, [filtroStatus]);

  const resumo = {
    faturamentoMes: 'R$ 8.480,00',
    pendente: 'R$ 440,00',
    taxaAdimplencia: '88%',
  };

  return {
    filtroStatus,
    setFiltroStatus,
    transacoes: transacoesFiltradas,
    resumo,
    totalTransacoes: TRANSACOES_MOCK.length,
  };
}