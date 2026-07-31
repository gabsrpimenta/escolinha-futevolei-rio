import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  Modal, 
  TextInput 
} from 'react-native';
import { Bell, Plus, CloudRain, Trophy, Info } from 'lucide-react-native';

import { styles } from './AvisosScreen.styles';
import { useAvisos } from './useAvisos';

export function AvisosScreen() {
  const {
    avisos,
    totalAvisos,
    modalVisivel,
    setModalVisivel,
    novoTitulo,
    setNovoTitulo,
    novaMensagem,
    setNovaMensagem,
    novoTipo,
    setNovoTipo,
    handleCriarAviso,
  } = useAvisos();

  const tiposDisponiveis = [
    { key: 'alerta', label: 'Alerta / Chuva' },
    { key: 'evento', label: 'Evento / Torneio' },
    { key: 'info', label: 'Informativo' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Avisos da Praia</Text>
          <Text style={styles.subtitle}>{totalAvisos} comunicados recentes</Text>
        </View>

        <TouchableOpacity 
          style={styles.addFabButton} 
          activeOpacity={0.8}
          onPress={() => setModalVisivel(true)}
        >
          <Plus size={22} color="#0A0B0E" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Lista de Avisos */}
      <FlatList
        data={avisos}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          let tagStyle = styles.tagInfo;
          let textStyle = styles.tagInfoText;
          let IconComp = Info;

          if (item.tipo === 'alerta') {
            tagStyle = styles.tagAlerta;
            textStyle = styles.tagAlertaText;
            IconComp = CloudRain;
          } else if (item.tipo === 'evento') {
            tagStyle = styles.tagEvento;
            textStyle = styles.tagEventoText;
            IconComp = Trophy;
          }

          return (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={[styles.tagBadge, tagStyle]}>
                  <IconComp size={12} color={textStyle.color} />
                  <Text style={textStyle}>
                    {item.tipo === 'alerta' ? 'Tempo / Alerta' : item.tipo === 'evento' ? 'Evento' : 'Informativo'}
                  </Text>
                </View>
                <Text style={styles.dateText}>{item.data}</Text>
              </View>

              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardMessage}>{item.mensagem}</Text>

              <View style={styles.cardFooter}>
                <Text style={styles.postoText}>📍 {item.posto}</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.whatsappLink}>Disparar WhatsApp 💬</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      {/* Modal para Novo Aviso */}
      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Novo Aviso da Praia</Text>

            <Text style={styles.inputLabel}>Título do Comunicado</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Ex: Treino suspenso por chuva"
              placeholderTextColor="#64748B"
              value={novoTitulo}
              onChangeText={setNovoTitulo}
            />

            <Text style={styles.inputLabel}>Tipo de Mensagem</Text>
            <View style={styles.optionsRow}>
              {tiposDisponiveis.map(t => (
                <TouchableOpacity
                  key={t.key}
                  style={[styles.optionChip, novoTipo === t.key && styles.optionChipActive]}
                  onPress={() => setNovoTipo(t.key)}
                >
                  <Text style={[styles.optionChipText, novoTipo === t.key && styles.optionChipTextActive]}>
                    {t.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.inputLabel}>Mensagem</Text>
            <TextInput
              style={[styles.modalInput, styles.textArea]}
              placeholder="Escreva a mensagem para os alunos..."
              placeholderTextColor="#64748B"
              multiline
              numberOfLines={3}
              value={novaMensagem}
              onChangeText={setNovaMensagem}
            />

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleCriarAviso}
              >
                <Text style={styles.saveButtonText}>Publicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}