# 🏖️ Diretrizes do Projeto: Escolinha Pé na Areia (React Native / Expo)

Este documento estabelece os padrões de código, arquitetura, design e convenções de Git para agentes e assistentes de Inteligência Artificial que trabalham neste repositório.

---

## 🎨 1. Guia de Estilo & Identidade Visual (Design System)

O app utiliza um tema **Dark Mode praiano premium**, focado em alto contraste e boa leitura sob luz solar.

* **Background Principal:** `#0A0B0E` (Preto/Grafite profundo)
* **Superfícies / Cards:** `#14161F` (Cinza escuro com tom azulado)
* **Bordas / Divisores:** `#1E2230`
* **Cor Primária / Destaque 1:** `#FACC15` (Amarelo areia/sol)
* **Cor Secundária / Destaque 2:** `#0284C7` / `#38BDF8` (Azul oceano)
* **Status Sucesso:** `#34D399` (Verde)
* **Status Erro / Alerta:** `#EF4444` (Vermelho)
* **Texto Principal:** `#FFFFFF`
* **Texto Secundário / Muted:** `#64748B` / `#94A3B8`
* **Ícones:** Sempre usar a biblioteca `lucide-react-native`.

---

## 🏗️ 2. Arquitetura e Padrão de Código (3 Camadas por Módulo)

Cada funcionalidade/tela dentro de `src/screens/` DEVE ser estritamente dividida em 3 arquivos:

1. **`NomeScreen.js` (Interface / UI):**
   * Apenas componentes React Native (`View`, `Text`, `TouchableOpacity`, `FlatList`, `Modal`).
   * Importa o Custom Hook de lógica e os estilos encapsulados.
   * Não deve ter lógica de negócios pesada nem hooks locais desnecessários.

2. **`NomeScreen.styles.js` (Estilos):**
   * Exporta um objeto `styles` gerado via `StyleSheet.create`.
   * Centraliza todas as propriedades de layout e design.

3. **`useNome.js` (Custom Hook / Lógica):**
   * Concentra todo o estado (`useState`), computações (`useMemo`), efeitos (`useEffect`) e funções de manipuladores (`handlers`).
   * Retorna um objeto limpo com dados e funções necessários para a tela.

---

## 💻 3. Convenções de Código e Tecnologias

* **Framework:** React Native com Expo (JavaScript ES6+).
* **Sem TypeScript por enquanto:** Manter código limpo em `.js` / `.jsx`.
* **Componentes Funcionais:** Usar sempre `export function NomeComponente()`.
* **Bordas Arredondadas:** Utilizar `borderRadius` elevado (14 a 24px) para cards e botões.
* **Componentes Nativos:** Priorizar componentes performáticos do React Native (ex: `FlatList` com `keyExtractor` em vez de `.map()` em listas longas).

---

## 🛠️ 4. Comandos de Terminal & Git

* **Iniciar Projeto:** `npx expo start`
* **Instalar Pacote:** `npm install <pacote>`
* **Fluxo de Branches:** `feature/nome-da-feature`
* **Workflow do Git:**
  1. Trabalhar na branch da feature.
  2. Testar e commitar.
  3. Fazer `git pull origin main --rebase` antes do merge.
  4. Mergear na `main` quando a funcionalidade estiver concluída.

---

## 📌 5. Status Atual do Projeto (MVP Concluído)

- [x] Home / Dashboard (`App.js` com animações)
- [x] Gestão de Alunos (`src/screens/Alunos/`)
- [x] Turmas & Arenas (`src/screens/Turmas/`)
- [x] Financeiro & Caixa (`src/screens/Financeiro/`)
- [x] Central de Avisos (`src/screens/Avisos/`)
- [ ] *Próximo:* Configuração do React Navigation (Stack/Tabs)
- [ ] *Próximo:* Integração com Supabase / Firebase