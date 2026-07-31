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
  listContent: {
    paddingBottom: 100,
    gap: 14,
  },
  card: {
    backgroundColor: '#14161F',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagAlerta: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  tagAlertaText: {
    color: '#EF4444',
    fontSize: 11,
    fontWeight: '700',
  },
  tagEvento: {
    backgroundColor: 'rgba(250, 204, 21, 0.15)',
  },
  tagEventoText: {
    color: '#FACC15',
    fontSize: 11,
    fontWeight: '700',
  },
  tagInfo: {
    backgroundColor: 'rgba(2, 132, 199, 0.15)',
  },
  tagInfoText: {
    color: '#38BDF8',
    fontSize: 11,
    fontWeight: '700',
  },
  dateText: {
    color: '#64748B',
    fontSize: 11,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardMessage: {
    color: '#94A3B8',
    fontSize: 12,
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#1E2230',
  },
  postoText: {
    color: '#64748B',
    fontSize: 11,
  },
  whatsappLink: {
    color: '#34D399',
    fontSize: 12,
    fontWeight: '700',
  },

  // Modal Estilos
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#14161F',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  inputLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10,
  },
  modalInput: {
    backgroundColor: '#0A0B0E',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    color: '#FFFFFF',
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  textArea: {
    height: 80,
    paddingTop: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  optionChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#0A0B0E',
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  optionChipActive: {
    backgroundColor: '#0284C7',
    borderColor: '#38BDF8',
  },
  optionChipText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '600',
  },
  optionChipTextActive: {
    color: '#FFFFFF',
  },
  modalButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1E2230',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FACC15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#0A0B0E',
    fontSize: 13,
    fontWeight: '700',
  },
});