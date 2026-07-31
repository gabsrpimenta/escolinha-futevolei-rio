import React, { useState } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Animated
} from 'react-native';
import { 
  Sun, 
  Users, 
  CheckCircle2, 
  Plus, 
  MessageSquare, 
  QrCode, 
  Home, 
  Calendar, 
  DollarSign, 
  Flame 
} from 'lucide-react-native';

import { styles } from './App.styles';
import { useHomeAnimations } from './useHomeAnimations';
import { AlunosScreen } from './src/screens/Alunos/AlunosScreen';
import { TurmasScreen } from './src/screens/Turmas/TurmasScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const {
    fadeHeader,
    fadeHero,
    slideHero,
    fadeActions,
    slideActions,
    fadeCards,
    slideCards,
  } = useHomeAnimations();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0E" />
      
      {activeTab === 'home' && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Animated.View style={[styles.header, { opacity: fadeHeader }]}>
            <View style={styles.profileSection}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>PA</Text>
              </View>
              <View>
                <Text style={styles.greetingText}>Bom dia, Gabriel 👋</Text>
                <Text style={styles.schoolName}>Escolinha Pé na Areia • RJ</Text>
              </View>
            </View>

            <View style={styles.weatherBadge}>
              <Sun size={14} color="#FACC15" />
              <Text style={styles.weatherText}>28°C</Text>
            </View>
          </Animated.View>

          {/* Hero Card */}
          <Animated.View 
            style={[
              styles.heroCard, 
              { opacity: fadeHero, transform: [{ translateY: slideHero }] }
            ]}
          >
            <View style={styles.heroHeader}>
              <View style={styles.liveTag}>
                <View style={styles.liveDot} />
                <Text style={styles.liveTagText}>PRÓXIMO TREINO</Text>
              </View>
              <Text style={styles.heroTime}>07:00 - 08:30</Text>
            </View>

            <Text style={styles.heroTitle}>Posto 9 — Ipanema</Text>
            <Text style={styles.heroSubtitle}>Turma Avançado • 6/8 Alunos Confirmados</Text>

            <View style={styles.heroFooter}>
              <TouchableOpacity style={styles.primaryActionButton} activeOpacity={0.8}>
                <CheckCircle2 size={16} color="#0A0B0E" strokeWidth={2.5} />
                <Text style={styles.primaryActionText}>Abrir Lista de Chamada</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Ações Rápidas */}
          <Animated.View style={{ opacity: fadeActions, transform: [{ translateY: slideActions }] }}>
            <Text style={styles.sectionCategory}>AÇÕES RÁPIDAS</Text>
            <View style={styles.actionsGrid}>
              <TouchableOpacity style={styles.actionItem} activeOpacity={0.7} onPress={() => setActiveTab('alunos')}>
                <View style={[styles.actionCircle, { backgroundColor: '#0284C7' }]}>
                  <Users size={22} color="#FFFFFF" />
                </View>
                <Text style={styles.actionLabel}>Chamada</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionItem} activeOpacity={0.7} onPress={() => setActiveTab('alunos')}>
                <View style={styles.actionCircle}>
                  <Plus size={22} color="#FACC15" />
                </View>
                <Text style={styles.actionLabel}>Matricular</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionItem} activeOpacity={0.7}>
                <View style={styles.actionCircle}>
                  <MessageSquare size={20} color="#E2E8F0" />
                </View>
                <Text style={styles.actionLabel}>Aviso Praia</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionItem} activeOpacity={0.7}>
                <View style={styles.actionCircle}>
                  <QrCode size={20} color="#E2E8F0" />
                </View>
                <Text style={styles.actionLabel}>Cobrar PIX</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Grade de Aulas */}
          <Animated.View style={[styles.cardContainer, { opacity: fadeCards, transform: [{ translateY: slideCards }] }]}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderTitleRow}>
                <Flame size={18} color="#FACC15" />
                <Text style={styles.cardTitle}>Aulas de Hoje na Praia</Text>
              </View>
              <TouchableOpacity activeOpacity={0.6} onPress={() => setActiveTab('turmas')}>
                <Text style={styles.cardLink}>Ver Grade</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.courtItem}>
              <View style={styles.courtBadge}>
                <Text style={styles.courtBadgeText}>P9</Text>
              </View>
              <View style={styles.courtInfo}>
                <Text style={styles.courtName}>Posto 9 — Ipanema</Text>
                <Text style={styles.courtDetails}>07:00 • Avançado • Prof. Dudu</Text>
              </View>
              <View style={styles.tagSuccess}>
                <Text style={styles.tagSuccessText}>6/8 Vagas</Text>
              </View>
            </View>

            <View style={styles.courtItem}>
              <View style={[styles.courtBadge, { backgroundColor: 'rgba(250, 204, 21, 0.15)' }]}>
                <Text style={[styles.courtBadgeText, { color: '#FACC15' }]}>P6</Text>
              </View>
              <View style={styles.courtInfo}>
                <Text style={styles.courtName}>Posto 6 — Copacabana</Text>
                <Text style={styles.courtDetails}>08:30 • Iniciante • Prof. Pedrinho</Text>
              </View>
              <View style={styles.tagWarning}>
                <Text style={styles.tagWarningText}>Lotado</Text>
              </View>
            </View>
          </Animated.View>
        </ScrollView>
      )}

      {activeTab === 'alunos' && <AlunosScreen />}
      {activeTab === 'turmas' && <TurmasScreen />}

      {/* Menu Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => setActiveTab('home')}>
          <View style={activeTab === 'home' ? styles.navActiveBox : null}>
            <Home size={18} color={activeTab === 'home' ? '#00D2FF' : '#64748B'} />
          </View>
          <Text style={activeTab === 'home' ? styles.navActiveText : styles.navText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => setActiveTab('alunos')}>
          <View style={activeTab === 'alunos' ? styles.navActiveBox : null}>
            <Users size={18} color={activeTab === 'alunos' ? '#00D2FF' : '#64748B'} />
          </View>
          <Text style={activeTab === 'alunos' ? styles.navActiveText : styles.navText}>Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => setActiveTab('turmas')}>
          <View style={activeTab === 'turmas' ? styles.navActiveBox : null}>
            <Calendar size={18} color={activeTab === 'turmas' ? '#00D2FF' : '#64748B'} />
          </View>
          <Text style={activeTab === 'turmas' ? styles.navActiveText : styles.navText}>Turmas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <DollarSign size={18} color="#64748B" />
          <Text style={styles.navText}>Caixa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}