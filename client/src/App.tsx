import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
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
import Doar from "./pages/Doar";
import Transparencia from "./pages/Transparencia";
import Capacitacoes from "./pages/Capacitacoes";
import Simposio from "./pages/Simposio";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/diretoria"} component={Diretoria} />
      <Route path={"/voluntarios"} component={Voluntarios} />
      <Route path={"/projetos"} component={Projetos} />
      <Route path={"/doar"} component={Doar} />
      <Route path={"/transparencia"} component={Transparencia} />
      <Route path={"/capacitacoes"} component={Capacitacoes} />
      <Route path={"/simposio"} component={Simposio} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
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
