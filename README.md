# Instituto Fonte das Águas - Website

Um site moderno e responsivo para o Instituto Fonte das Águas, uma ONG dedicada a transformar vidas no Bairro Industrial de Aracaju através de educação, saúde, esporte e proteção de crianças e famílias.

## 📋 Visão Geral

Este projeto é uma aplicação web completa que apresenta:
- Informações institucionais sobre o Instituto
- 11 projetos estruturados em 4 programas principais
- Sistema de voluntariado com 6 etapas
- Integração de doações via PIX
- Formulários de contato com WhatsApp
- Sistema de tema claro/escuro
- Navegação intuitiva e responsiva

## 🛠️ Stack Técnico

- **Frontend Framework:** React 18+ com TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Roteamento:** Wouter
- **Componentes UI:** Shadcn/ui
- **Ícones:** Lucide React
- **Build Tool:** Vite
- **Notificações:** Sonner
- **QR Code:** QRCode.react

## 📁 Estrutura do Projeto

```
client/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx       # Barra de navegação principal
│   │   ├── Footer.tsx       # Rodapé com informações
│   │   ├── ThemeToggle.tsx  # Alternador de tema
│   │   ├── WhatsAppButton.tsx
│   │   ├── ErrorBoundary.tsx
│   │   └── ui/              # Componentes Shadcn/ui
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Diretoria.tsx
│   │   ├── Projetos.tsx
│   │   ├── Voluntarios.tsx
│   │   ├── Eventos.tsx
│   │   ├── ComoAjudar.tsx
│   │   ├── Contato.tsx
│   │   ├── Doar.tsx
│   │   ├── Transparencia.tsx
│   │   ├── Capacitacoes.tsx
│   │   ├── Simposio.tsx
│   │   └── NotFound.tsx
│   ├── contexts/            # Contextos globais
│   │   └── ThemeContext.tsx # Gerenciamento de tema
│   ├── hooks/               # Hooks customizados
│   ├── lib/                 # Utilitários
│   ├── const.ts             # Constantes globais
│   ├── index.css            # Estilos globais
│   ├── App.tsx              # Configuração principal
│   └── main.tsx             # Entry point
├── index.html               # HTML principal
└── vite.config.ts          # Configuração Vite
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clonar repositório
git clone <repo-url>
cd instituto-fonte-das-aguas

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📱 Funcionalidades Principais

### 1. **Navegação Inteligente**
- Menu responsivo com dropdown para seções institucionais
- 12 páginas acessíveis
- Indicador de página ativa

### 2. **Sistema de Tema**
- Alternância entre tema claro e escuro
- Persistência em localStorage
- Botão ThemeToggle no header

### 3. **Páginas do Instituto**
- **Home:** Hero section com impacto e números
- **Sobre:** História, missão, visão e valores
- **Diretoria:** Equipe de liderança com 6 membros
- **Projetos:** 11 projetos em 4 programas + 2 especializações
- **Voluntários:** 6 etapas do processo de voluntariado
- **Eventos:** Eventos anuais do Instituto
- **Como Ajudar:** Consolidação de voluntariado e doações
- **Doações:** PIX com geração de QR Code
- **Contato:** Formulário com integração WhatsApp
- **Transparência:** Documentos e informações públicas
- **Capacitações:** Programas de treinamento
- **Simpósio:** Informações sobre simpósios

### 4. **Integração de Contato**
- WhatsApp: wa.me URLs
- Google Maps: Localização
- Instagram: Links para redes sociais
- Email: Mailto links

### 5. **SEO Otimizado**
- Meta tags completas
- Open Graph para compartilhamento social
- Twitter Cards
- Linguagem: pt-BR

## 🎨 Sistema de Cores

**Modo Claro:**
- Primary: Azul vibrante (oklch)
- Secondary: Laranja caloroso (oklch)
- Accent: Amarelo alegre (oklch)

**Modo Escuro:**
- Fundo escuro com texto branco
- Melhor contraste visual
- Cores suavizadas

## 📊 Números de Impacto

- ~40 Voluntários
- ~50 Famílias assistidas
- 67 Crianças/Adolescentes
- 300+ Vidas impactadas
- 4 toneladas de alimentos
- 40 Exames de saúde
- 80% Taxa de retenção
- 11 Projetos ativos

## 🏛️ Informações de Contato

- **Telefone:** (79) 9 9143-9647
- **WhatsApp:** 5579996402118
- **Endereço:** Rua Adezinho da Costa Pinto, 149, Bairro Industrial, Aracaju - SE, CEP: 49065-010
- **PIX:** 52250050000120
- **Instagram:** @instituto.fontedasaguas

## 👥 Diretoria

- **Presidente:** Felipe Rocha
- **Vice-Presidente:** Diogo Rian
- **1º Tesoureiro:** Kelly Furtuoso
- **2º Tesoureiro:** Rick Vieira
- **1º Secretária:** Katiane Furtuoso
- **2º Secretário:** Dayvisson Fontes

## 🔧 Scripts Disponíveis

```bash
pnpm dev       # Iniciar servidor de desenvolvimento
pnpm build     # Build para produção
pnpm preview   # Preview do build
pnpm lint      # Verificar erros de lint
```

## 📦 Dependências Principais

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "wouter": "^3.7.1",
  "tailwindcss": "^4.1.0",
  "shadcn-ui": "componentes customizados",
  "lucide-react": "ícones",
  "sonner": "notificações",
  "qrcode.react": "geração de QR codes"
}
```

## 🎯 Boas Práticas

### Componentes
- Componentes funcionais com hooks
- Props bem definidas com TypeScript
- Composição sobre herança

### Styling
- Tailwind CSS para utilitários
- CSS-in-JS quando necessário
- Consistência visual através de classes

### Roteamento
- Wouter para roteamento simples
- Componentes lazy loading onde possível

### Performance
- Code splitting automático
- Lazy loading de imagens
- Otimização de assets

## 🐛 Tratamento de Erros

- ErrorBoundary para capturar erros React
- Try-catch em funções assíncronas
- Página 404 customizada

## ♿ Acessibilidade

- ARIA labels em elementos interativos
- Contraste adequado de cores
- Navegação por teclado suportada
- Alt text em imagens

## 📝 Licença

Desenvolvido para o Instituto Fonte das Águas.

## 🤝 Contribuições

Para sugestões ou melhorias, entre em contato através do email institucional ou WhatsApp.

---

**Instituto Fonte das Águas**  
Promovendo dignidade humana e justiça social no Bairro Industrial, Aracaju - SE
