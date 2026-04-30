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
import AdminPage from "./pages/Admin";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return null;
}

// Layout completo — detecta /admin para esconder nav/footer
function AppLayout() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        <ScrollToTop />
        <Route path="/admin" component={AdminPage} />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <Switch>
          <Route path={ROUTES.home} component={Home} />
          <Route path={ROUTES.sobre} component={Sobre} />
          <Route path={ROUTES.diretoria} component={Diretoria} />
          <Route path={ROUTES.voluntarios} component={Voluntarios} />
          <Route path={ROUTES.projetos} component={Projetos} />
          <Route path={ROUTES.projetoDetalhe} component={ProjetoDetalhe} />
          <Route path={ROUTES.eventos} component={Eventos} />
          <Route path={ROUTES.comoAjudar} component={ComoAjudar} />
          <Route path={ROUTES.contato} component={Contato} />
          <Route path={ROUTES.transparencia} component={Transparencia} />
          <Route path={ROUTES.capacitacoes} component={Capacitacoes} />
          <Route path={ROUTES.simposio} component={Simposio} />
          <Route path={ROUTES.notFound} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={true}>
        <TooltipProvider>
          <AppLayout />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
