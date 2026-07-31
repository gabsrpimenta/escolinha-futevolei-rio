import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  ScrollView 
} from 'react-native';
import { Search, Plus, UserCheck } from 'lucide-react-native';

import { styles } from './AlunosScreen.styles';
import { useAlunos } from './useAlunos';

export function AlunosScreen() {
  const { 
    busca, 
    setBusca, 
    nivelFiltro, 
    setNivelFiltro, 
    alunos, 
    totalAlunos 
  } = useAlunos();

  const niveis = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Atletas & Alunos</Text>
          <Text style={styles.subtitle}>{totalAlunos} alunos matriculados</Text>
        </View>

        <TouchableOpacity style={styles.addFabButton} activeOpacity={0.8}>
          <Plus size={22} color="#0A0B0E" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Campo de Busca */}
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

      {/* Filtros por Nível */}
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

      {/* Lista de Alunos */}
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
    </View>
  );
}