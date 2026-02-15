# Arquitetura e Padrões de Código

Documentação técnica sobre a estrutura, padrões e boas práticas utilizadas no projeto.

## 📐 Arquitetura Geral

```
┌─────────────────────────────────────────────────────┐
│                   APLICAÇÃO REACT                   │
├─────────────────────────────────────────────────────┤
│  App.tsx (Orquestrador)                             │
│  ├─ ErrorBoundary (Tratamento de Erros)           │
│  ├─ ThemeProvider (Tema claro/escuro)             │
│  ├─ TooltipProvider (Acessibilidade)              │
│  └─ Layout Principal                               │
│     ├─ Header (Navegação)                          │
│     ├─ Router (Rotas e Páginas)                   │
│     ├─ Footer (Rodapé)                            │
│     └─ WhatsAppButton (CTA Flutuante)             │
└─────────────────────────────────────────────────────┘
```

## 🗂️ Estrutura de Pastas

### `/components`
Componentes reutilizáveis que são usados em múltiplas páginas.

```
components/
├── Header.tsx           # Navegação principal (refatorado)
├── Footer.tsx          # Rodapé
├── ThemeToggle.tsx     # Alternador de tema
├── WhatsAppButton.tsx  # Botão flutuante
├── ErrorBoundary.tsx   # Boundary para erros
└── ui/                 # Componentes Shadcn/ui
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    └── ...
```

**Princípio:** Cada componente é independente e reutilizável.

### `/pages`
Cada página representa uma rota única da aplicação.

```
pages/
├── Home.tsx           # Página inicial
├── Sobre.tsx          # Informações do Instituto
├── Diretoria.tsx      # Equipe de liderança
├── Projetos.tsx       # Programas e projetos
├── Voluntarios.tsx    # Processo de voluntariado
├── Eventos.tsx        # Eventos anuais
├── ComoAjudar.tsx     # Consolidação voluntariado+doações
├── Contato.tsx        # Formulário de contato
├── Doar.tsx           # Página de doações
├── Transparencia.tsx  # Documentos públicos
├── Capacitacoes.tsx   # Programas de treinamento
├── Simposio.tsx       # Informações de simpósios
└── NotFound.tsx       # Página 404
```

**Princípio:** Uma página por rota, responsável por sua própria lógica.

### `/contexts`
Contextos globais para estado compartilhado.

```
contexts/
└── ThemeContext.tsx   # Gerenciamento de tema claro/escuro
```

**Uso:** `const { theme, toggleTheme } = useTheme();`

### `/hooks`
Hooks customizados para lógica reutilizável.

```
hooks/
├── useComposition.ts  # Composição de dados
├── useMobile.tsx      # Detecção de mobile
└── usePersistFn.ts    # Função persistente
```

### `/lib`
Funções utilitárias e helpers.

```
lib/
└── utils.ts           # Utilitários gerais (cn, etc)
```

## 🔄 Padrões de Código

### 1. **Componentes Funcionais com Hooks**

```typescript
// ✅ CORRETO
function Componente({ prop }: Props) {
  const [state, setState] = useState("");
  
  return <div>{state}</div>;
}

// ❌ EVITAR
class Componente extends React.Component { ... }
```

### 2. **Props com TypeScript**

```typescript
// ✅ Bem definido
interface ComponentProps {
  id: number;
  name: string;
  onAction?: () => void;
}

function Componente({ id, name, onAction }: ComponentProps) {
  // ...
}

// ❌ Evitar: sem tipos
function Componente(props) { ... }
```

### 3. **Composição sobre Herança**

```typescript
// ✅ CORRETO - Composição
function Header() {
  return (
    <div>
      <Logo />
      <Nav />
      <ThemeToggle />
    </div>
  );
}

// ❌ EVITAR - Herança
class HeaderBase extends React.Component { ... }
class SpecialHeader extends HeaderBase { ... }
```

### 4. **Constantes Centralizadas**

```typescript
// ✅ config.ts centralizado
export const ROUTES = {
  home: "/",
  sobre: "/sobre",
  // ...
};

// Uso
<Route path={ROUTES.home} component={Home} />

// ❌ EVITAR - Magic strings
<Route path="/" component={Home} />
<Route path="/sobre" component={Sobre} />
```

### 5. **Separação de Responsabilidades**

```typescript
// ✅ CORRETO - Componentes pequenos e focados
function NavLink({ label, path, isActive }: Props) {
  return <Link href={path}>...</Link>;
}

function DesktopNav({ items, location }: Props) {
  return (
    <nav>
      {items.map(item => (
        <NavLink 
          key={item.path} 
          label={item.name} 
          path={item.path}
          isActive={location === item.path}
        />
      ))}
    </nav>
  );
}

// ❌ EVITAR - Tudo em um componente
function Header() {
  // ... 200 linhas de código
}
```

## 📝 Padrão de Comentários

### Comentários de Seção

```typescript
// ============================================================================
// COMPONENTE: NomeDoComponente
// ============================================================================
// Descrição breve do que o componente faz
```

### Comentários de Função

```typescript
/**
 * Interface para props do componente
 * @param id - ID único do item
 * @param label - Texto a ser exibido
 * @param onClick - Função ao clicar
 */
interface ButtonProps {
  id: string;
  label: string;
  onClick: () => void;
}
```

### Comentários Inline

```typescript
// Use apenas para lógica complexa ou não óbvia
const result = data.filter(item => 
  // Filtra apenas itens ativos e com permissão
  item.active && item.permissions.includes(USER_ROLE)
);
```

## 🔗 Fluxo de Roteamento

```
App.tsx
└─ Router()
   ├─ Route: "/" → Home
   ├─ Route: "/sobre" → Sobre
   ├─ Route: "/projetos" → Projetos
   ├─ Route: "/voluntarios" → Voluntarios
   ├─ Route: "/contato" → Contato
   └─ Route: "*" → NotFound
```

## 🎨 Sistema de Temas

### Implementação

1. **ThemeContext** - Gerencia estado do tema
2. **CSS Variables** - Define cores conforme tema
3. **ThemeToggle** - Botão para mudar tema
4. **localStorage** - Persiste preferência

### Modo Claro (Padrão)

```css
:root {
  --primary: oklch(0.623 0.214 259.815); /* Azul */
  --secondary: oklch(0.65 0.2 33.3);     /* Laranja */
  --accent: oklch(0.82 0.18 95.6);       /* Amarelo */
}
```

### Modo Escuro

```css
.dark {
  --foreground: #ffffff;           /* Texto branco */
  --background: oklch(0.141 0.005 285.823); /* Fundo escuro */
}
```

## 📊 Fluxo de Estado

### Global (Contextos)

```
ThemeContext
├─ theme: "light" | "dark"
├─ toggleTheme: () => void
└─ switchable: boolean
```

### Local (useState)

```typescript
// Em componentes
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [formData, setFormData] = useState({});
```

## 🔄 Ciclo de Vida Comum

```typescript
// 1. Renderização inicial
function Component({ props }: Props) {
  // 2. Definir estado
  const [state, setState] = useState(initialValue);
  
  // 3. Efeitos colaterais
  useEffect(() => {
    // Executado após render
    return () => {
      // Limpeza antes do desmontar
    };
  }, [dependencies]);
  
  // 4. Renderizar UI
  return <div>{state}</div>;
}
```

## ✅ Checklist de Qualidade

- [ ] Props tem tipos TypeScript definidos
- [ ] Componentes têm comentário de seção
- [ ] Não há magic strings (usar constantes)
- [ ] Estado desnecessário é evitado
- [ ] Não há props drilling excessivo
- [ ] Acessibilidade é considerada (aria-labels)
- [ ] Responsividade está testada
- [ ] Sem console.log em produção

## 🚀 Performance

### Code Splitting

```typescript
// Páginas são importadas normalmente
// Vite faz split automático ao build
import Home from "./pages/Home";
```

### Lazy Loading de Componentes

```typescript
// Para componentes pesados
const HeavyComponent = React.lazy(() => import("./Heavy"));
```

## 🔐 Segurança

- ✅ Sanitização de inputs
- ✅ Proteção contra XSS via React
- ✅ HTTPS para produção
- ✅ Ambiente variables para dados sensíveis

## 📚 Referências

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Wouter Router](https://github.com/molefrog/wouter)
