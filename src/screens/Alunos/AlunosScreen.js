import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  ScrollView,
  Modal
} from 'react-native';
import { Search, Plus } from 'lucide-react-native';

import { styles } from './AlunosScreen.styles';
import { useAlunos } from './useAlunos';

export function AlunosScreen() {
  const { 
    busca, 
    setBusca, 
    nivelFiltro, 
    setNivelFiltro, 
    alunos, 
    totalAlunos,
    modalVisivel,
    setModalVisivel,
    novoNome,
    setNovoNome,
    novoNivel,
    setNovoNivel,
    novoPosto,
    setNovoPosto,
    handleAdicionarAluno,
  } = useAlunos();

  const niveis = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];
  const opcoesNiveis = ['Iniciante', 'Intermediário', 'Avançado'];
  const opcoesPostos = ['Posto 9 — Ipanema', 'Posto 6 — Copacabana'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Atletas & Alunos</Text>
          <Text style={styles.subtitle}>{totalAlunos} alunos matriculados</Text>
        </View>

        <TouchableOpacity 
          style={styles.addFabButton} 
          activeOpacity={0.8}
          onPress={() => setModalVisivel(true)}
        >
          <Plus size={22} color="#0A0B0E" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Busca */}
      <View style={styles.searchContainer}>
        <Search size={16} color="#64748B" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar por nome..."
          placeholderTextColor="#64748B"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* Filtros */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {niveis.map(nivel => (
          <TouchableOpacity 
            key={nivel}
            style={[styles.filterPill, nivelFiltro === nivel && styles.filterPillActive]}
            onPress={() => setNivelFiltro(nivel)}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterText, nivelFiltro === nivel && styles.filterTextActive]}>
              {nivel}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista */}
      <FlatList
        data={alunos}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <View style={styles.cardLeft}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.avatar}</Text>
              </View>
              <View>
                <Text style={styles.studentName}>{item.nome}</Text>
                <Text style={styles.studentInfo}>{item.nivel} • {item.posto}</Text>
              </View>
            </View>

            <View style={styles.cardRight}>
              <View style={item.statusFinanceiro === 'Em dia' ? styles.badgeSuccess : styles.badgeWarning}>
                <Text style={item.statusFinanceiro === 'Em dia' ? styles.badgeSuccessText : styles.badgeWarningText}>
                  {item.statusFinanceiro}
                </Text>
              </View>
              <Text style={styles.presenceText}>{item.presenca} presença</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal de Novo Aluno */}
      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Matricular Novo Atleta</Text>

            <Text style={styles.inputLabel}>Nome Completo</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Ex: João da Silva"
              placeholderTextColor="#64748B"
              value={novoNome}
              onChangeText={setNovoNome}
            />

            <Text style={styles.inputLabel}>Nível de Jogo</Text>
            <View style={styles.optionsRow}>
              {opcoesNiveis.map(n => (
                <TouchableOpacity
                  key={n}
                  style={[styles.optionChip, novoNivel === n && styles.optionChipActive]}
                  onPress={() => setNovoNivel(n)}
                >
                  <Text style={[styles.optionChipText, novoNivel === n && styles.optionChipTextActive]}>
                    {n}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.inputLabel}>Praia / Arena principal</Text>
            <View style={styles.optionsRow}>
              {opcoesPostos.map(p => (
                <TouchableOpacity
                  key={p}
                  style={[styles.optionChip, novoPosto === p && styles.optionChipActive]}
                  onPress={() => setNovoPosto(p)}
                >
                  <Text style={[styles.optionChipText, novoPosto === p && styles.optionChipTextActive]}>
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleAdicionarAluno}
              >
                <Text style={styles.saveButtonText}>Matricular</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}