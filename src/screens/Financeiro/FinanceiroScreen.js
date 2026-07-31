import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  ScrollView 
} from 'react-native';
import { TrendingUp, AlertCircle, QrCode, ArrowUpRight, DollarSign } from 'lucide-react-native';

import { styles } from './FinanceiroScreen.styles';
import { useFinanceiro } from './useFinanceiro';

export function FinanceiroScreen() {
  const { 
    filtroStatus, 
    setFiltroStatus, 
    transacoes, 
    resumo 
  } = useFinanceiro();

  const filtros = ['Todos', 'Pago', 'Pendente', 'Atrasado'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Caixa & Mensalidades</Text>
          <Text style={styles.subtitle}>Gestão financeira da praia</Text>
        </View>

        <TouchableOpacity style={styles.pixActionButton} activeOpacity={0.8}>
          <QrCode size={16} color="#0A0B0E" />
          <Text style={styles.pixActionText}>Cobrar PIX</Text>
        </TouchableOpacity>
      </View>

      {/* Cards de Métricas */}
      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <TrendingUp size={14} color="#34D399" />
            <Text style={styles.metricTitle}>Entradas (Mês)</Text>
          </View>
          <Text style={styles.metricValue}>{resumo.faturamentoMes}</Text>
        </View>

        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <AlertCircle size={14} color="#FACC15" />
            <Text style={styles.metricTitle}>A Receber</Text>
          </View>
          <Text style={[styles.metricValue, { color: '#FACC15' }]}>{resumo.pendente}</Text>
        </View>
      </View>

      {/* Filtros */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {filtros.map(item => (
          <TouchableOpacity 
            key={item}
            style={[styles.filterPill, filtroStatus === item && styles.filterPillActive]}
            onPress={() => setFiltroStatus(item)}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterText, filtroStatus === item && styles.filterTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Mensalidades / Transações */}
      <FlatList
        data={transacoes}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          let badgeStyle = styles.statusPago;
          let textStyle = styles.statusPagoText;

          if (item.status === 'Pendente') {
            badgeStyle = styles.statusPendente;
            textStyle = styles.statusPendenteText;
          } else if (item.status === 'Atrasado') {
            badgeStyle = styles.statusAtrasado;
            textStyle = styles.statusAtrasadoText;
          }

          return (
            <TouchableOpacity style={styles.card} activeOpacity={0.7}>
              <View style={styles.cardLeft}>
                <View style={styles.iconBox}>
                  <DollarSign size={20} color="#38BDF8" />
                </View>
                <View>
                  <Text style={styles.alunoName}>{item.aluno}</Text>
                  <Text style={styles.planoText}>{item.plano} • Venc: {item.vencimento}</Text>
                </View>
              </View>

              <View style={styles.cardRight}>
                <Text style={styles.valorText}>{item.valor}</Text>
                <View style={[styles.statusBadge, badgeStyle]}>
                  <Text style={textStyle}>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}