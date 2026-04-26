import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { ROUTES } from "./config";

// ============================================================================
// IMPORTAÇÕES DE PÁGINAS
// ============================================================================
// Todas as páginas da aplicação são importadas aqui de forma centralizada

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Diretoria from "./pages/Diretoria";
import Voluntarios from "./pages/Voluntarios";
import Projetos from "./pages/Projetos";
import ProjetoDetalhe from "./pages/ProjetoDetalhe";
import Eventos from "./pages/Eventos";
import ComoAjudar from "./pages/ComoAjudar";
import Contato from "./pages/Contato";
import Transparencia from "./pages/Transparencia";
import Capacitacoes from "./pages/Capacitacoes";
import Simposio from "./pages/Simposio";

// ============================================================================
// COMPONENTE: ScrollToTop
// ============================================================================
// Faz scroll para o topo da página quando a rota muda

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

// ============================================================================
// COMPONENTE: Router
// ============================================================================
// Define todas as rotas disponíveis na aplicação

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Rota: Home */}
        <Route path={ROUTES.home} component={Home} />

        {/* Rota: Sobre */}
        <Route path={ROUTES.sobre} component={Sobre} />

        {/* Rota: Diretoria */}
        <Route path={ROUTES.diretoria} component={Diretoria} />

        {/* Rota: Voluntários */}
        <Route path={ROUTES.voluntarios} component={Voluntarios} />

        {/* Rota: Projetos */}
        <Route path={ROUTES.projetos} component={Projetos} />

        {/* Rota: Detalhes do Projeto */}
        <Route path={ROUTES.projetoDetalhe} component={ProjetoDetalhe} />

        {/* Rota: Eventos */}
        <Route path={ROUTES.eventos} component={Eventos} />

        {/* Rota: Como Ajudar */}
        <Route path={ROUTES.comoAjudar} component={ComoAjudar} />

        {/* Rota: Contato */}
        <Route path={ROUTES.contato} component={Contato} />

        {/* Rota: Transparência */}
        <Route path={ROUTES.transparencia} component={Transparencia} />

        {/* Rota: Capacitações */}
        <Route path={ROUTES.capacitacoes} component={Capacitacoes} />

        {/* Rota: Simpósio */}
        <Route path={ROUTES.simposio} component={Simposio} />

        {/* Rota: 404 */}
        <Route path={ROUTES.notFound} component={NotFound} />

        {/* Fallback para rotas não encontradas */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// ============================================================================
// COMPONENTE: App
// ============================================================================
// Componente principal da aplicação que orquestra todos os providers
// e estrutura de layout

function App() {
  return (
    <ErrorBoundary>
      {/* Provider de Tema - Permite alternar entre claro e escuro */}
      <ThemeProvider defaultTheme="light" switchable={true}>
        {/* Provider de Tooltips - Para dicas e acessibilidade */}
        <TooltipProvider>
          {/* Layout principal com flex para sticky footer */}
          <div className="flex flex-col min-h-screen">
            {/* Cabeçalho com navegação */}
            <Header />

            {/* Conteúdo principal que cresce para preencher espaço disponível */}
            <main className="flex-1">
              <Router />
            </main>

            {/* Rodapé que fica ao fundo */}
            <Footer />

            {/* Botão flutuante de WhatsApp */}
            <WhatsAppButton />
          </div>

          {/* Toaster para notificações */}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
