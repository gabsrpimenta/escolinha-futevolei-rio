import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  ScrollView 
} from 'react-native';
import { MapPin, User, Plus } from 'lucide-react-native';

import { styles } from './TurmasScreen.styles';
import { useTurmas } from './useTurmas';

export function TurmasScreen() {
  const { 
    postoFiltro, 
    setPostoFiltro, 
    turmas, 
    totalTurmas 
  } = useTurmas();

  const postos = ['Todos', 'Posto 9', 'Posto 6', 'Barra'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Turmas & Arenas</Text>
          <Text style={styles.subtitle}>{totalTurmas} turmas ativas na praia</Text>
        </View>

        <TouchableOpacity style={styles.addFabButton} activeOpacity={0.8}>
          <Plus size={22} color="#0A0B0E" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Filtros por Posto / Praia */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {postos.map(posto => (
          <TouchableOpacity 
            key={posto}
            style={[styles.filterPill, postoFiltro === posto && styles.filterPillActive]}
            onPress={() => setPostoFiltro(posto)}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterText, postoFiltro === posto && styles.filterTextActive]}>
              {posto}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Turmas */}
      <FlatList
        data={turmas}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isLotado = item.vagasOcupadas >= item.vagasTotais;

          return (
            <TouchableOpacity style={styles.card} activeOpacity={0.7}>
              <View style={styles.cardHeader}>
                <View style={[styles.levelBadge, { backgroundColor: item.corBadge }]}>
                  <Text style={styles.levelBadgeText}>{item.nivel}</Text>
                </View>

                <View style={styles.vagasBadge}>
                  <View style={[
                    styles.vagasDot, 
                    { backgroundColor: isLotado ? '#EF4444' : '#34D399' }
                  ]} />
                  <Text style={styles.vagasText}>
                    {isLotado ? 'Lotado' : `${item.vagasOcupadas}/${item.vagasTotais} Vagas`}
                  </Text>
                </View>
              </View>

              <Text style={styles.timeText}>{item.horario}</Text>
              <Text style={styles.daysText}>{item.dias}</Text>

              <View style={styles.footer}>
                <View style={styles.infoRow}>
                  <MapPin size={14} color="#64748B" />
                  <Text style={styles.infoText}>{item.posto}</Text>
                </View>

                <View style={styles.infoRow}>
                  <User size={14} color="#64748B" />
                  <Text style={styles.infoText}>{item.professor}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}