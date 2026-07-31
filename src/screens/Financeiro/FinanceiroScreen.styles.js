import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0E',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  subtitle: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 2,
  },
  pixActionButton: {
    backgroundColor: '#FACC15',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },
  pixActionText: {
    color: '#0A0B0E',
    fontSize: 12,
    fontWeight: '800',
  },

  // Cards de Métricas
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#14161F',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  metricTitle: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '600',
  },
  metricValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  // Filtros
  filterScroll: {
    marginBottom: 16,
    maxHeight: 36,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#14161F',
    borderWidth: 1,
    borderColor: '#1E2230',
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: '#0284C7',
    borderColor: '#38BDF8',
  },
  filterText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },

  // Lista de Transações
  listContent: {
    paddingBottom: 100,
    gap: 12,
  },
  card: {
    backgroundColor: '#14161F',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E2230',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1E2230',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alunoName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  planoText: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 2,
  },
  cardRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  valorText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  statusPago: {
    backgroundColor: 'rgba(52, 211, 153, 0.12)',
  },
  statusPagoText: {
    color: '#34D399',
    fontSize: 10,
    fontWeight: '700',
  },
  statusPendente: {
    backgroundColor: 'rgba(250, 204, 21, 0.12)',
  },
  statusPendenteText: {
    color: '#FACC15',
    fontSize: 10,
    fontWeight: '700',
  },
  statusAtrasado: {
    backgroundColor: 'rgba(239, 68, 68, 0.12)',
  },
  statusAtrasadoText: {
    color: '#EF4444',
    fontSize: 10,
    fontWeight: '700',
  },
});