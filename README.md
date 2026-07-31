# 🏖️ Escolinha Pé na Areia — App de Gestão de Futevôlei (Rio de Janeiro)

> **Status do Projeto:** 🚧 *Em Desenvolvimento Activo (Fase de MVP concluída / Próximo passo: Backend & Autenticação)*

Um aplicativo móvel desenvolvido em **React Native / Expo** focado na gestão simplificada e moderna de escolinhas de futevôlei nas praias do Rio de Janeiro. Permite controlar turmas por posto, presenças, mensalidades, cobranças via PIX e avisos rápidos de maré/tempo.

---

## 📱 Funcionalidades & Telas do App

O projeto conta com 5 abas principais na barra de navegação inferior:

1. 🏠 **Início (Dashboard):** Visão geral do dia, próximo treino com indicador *live*, condições do tempo e atalhos de ações rápidas.
2. 👥 **Alunos:** Lista de atletas matriculados, busca por nome, filtro por nível (Iniciante/Avançado) e modal de cadastro.
3. 📅 **Turmas:** Grade de horários e dias por arena/posto da praia (Posto 9, Posto 6, Barra), com indicador visual de vagas e lotação.
4. 💰 **Caixa:** Métricas financeiras (entradas do mês e valores a receber), status de pagamento das mensalidades e geração de cobrança PIX.
5. 🔔 **Avisos:** Central de recados rápidos da praia para envio de alertas de chuva/vento, torneios e informativos gerais.

---

## 🏗️ Arquitetura e Organização do Código

O projeto segue uma arquitetura limpa em 3 camadas por módulo (`src/screens/`):

```text
src/screens/Alunos/
├── AlunosScreen.js       # 1. Camada de UI (Componente React Native)
├── AlunosScreen.styles.js # 2. Camada de Estilos (StyleSheet encapsulado)
└── useAlunos.js          # 3. Camada de Lógica (Custom Hook com estados e regras)
