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
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Diretoria from "./pages/Diretoria";
import Voluntarios from "./pages/Voluntarios";
import Projetos from "./pages/Projetos";
import Eventos from "./pages/Eventos";
import Doar from "./pages/Doar";
import ComoAjudar from "./pages/ComoAjudar";
import Contato from "./pages/Contato";
import Transparencia from "./pages/Transparencia";
import Capacitacoes from "./pages/Capacitacoes";
import Simposio from "./pages/Simposio";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/sobre"} component={Sobre} />
        <Route path={"/diretoria"} component={Diretoria} />
        <Route path={"/voluntarios"} component={Voluntarios} />
        <Route path={"/projetos"} component={Projetos} />
        <Route path={"/eventos"} component={Eventos} />
        <Route path={"/como-ajudar"} component={ComoAjudar} />
        <Route path={"/doar"} component={Doar} />
        <Route path={"/contato"} component={Contato} />
        <Route path={"/transparencia"} component={Transparencia} />
        <Route path={"/capacitacoes"} component={Capacitacoes} />
        <Route path={"/simposio"} component={Simposio} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={true}>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
