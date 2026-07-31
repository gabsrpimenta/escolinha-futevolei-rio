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
  addFabButton: {
    backgroundColor: '#FACC15',
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  listContent: {
    paddingBottom: 100,
    gap: 14,
  },
  card: {
    backgroundColor: '#14161F',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  levelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  levelBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  vagasBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#1E2230',
  },
  vagasDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  vagasText: {
    color: '#CBD5E1',
    fontSize: 11,
    fontWeight: '600',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  daysText: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1E2230',
    paddingTop: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    color: '#94A3B8',
    fontSize: 12,
  },
});