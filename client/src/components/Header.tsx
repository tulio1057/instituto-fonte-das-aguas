import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Projetos", path: "/projetos" },
  { name: "Voluntários", path: "/voluntarios" },
  { name: "Diretoria", path: "/diretoria" },
  { name: "Transparência", path: "/transparencia" },
  { name: "Capacitações", path: "/capacitacoes" },
  { name: "Simpósio", path: "/simposio" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Instituto Fonte das Águas" className="h-12 w-12" />
              <div className="hidden md:block">
                <h1 className="text-lg font-display font-bold text-primary">Instituto Fonte das Águas</h1>
                <p className="text-xs text-muted-foreground">Dignidade humana e justiça social</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                    location === item.path
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/doar">
              <Button className="gradient-secondary text-white font-semibold">
                Doar Agora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                      location === item.path
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link href="/doar">
                <Button className="w-full gradient-secondary text-white font-semibold mt-2">
                  Doar Agora
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
