import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const primaryNavItems = [
  { name: "Início", path: "/" },
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Projetos", path: "/projetos" },
];

const secondaryNavItems = [
  { name: "Diretoria", path: "/diretoria" },
  { name: "Eventos", path: "/eventos" },
  { name: "Voluntários", path: "/voluntarios" },
  { name: "Capacitações", path: "/capacitacoes" },
  { name: "Simpósio", path: "/simposio" },
  { name: "Transparência", path: "/transparencia" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <img src="/public/logo.svg" alt="Instituto Fonte das Águas" className="h-16 w-16 md:h-14 md:w-14" />
              <div className="hidden sm:flex flex-col">
                <h1 className="text-base md:text-lg font-display font-bold text-primary leading-tight">Instituto Fonte das Águas</h1>
                <p className="text-xs text-muted-foreground">Dignidade humana e justiça social</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNavItems.map((item) => (
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

            {/* Dropdown for secondary items */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80 flex items-center gap-1"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                Institucional
                <ChevronDown className="h-4 w-4" />
              </button>
              {desktopDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-0 bg-background border rounded-md shadow-lg py-2 min-w-48"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  {secondaryNavItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <a
                        className={`px-4 py-2 text-sm font-medium block transition-colors hover:bg-accent hover:text-accent-foreground ${
                          location === item.path
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/80"
                        }`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Como Ajudar */}
            <Link href="/como-ajudar">
              <a
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                  location === "/como-ajudar"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80"
                }`}
              >
                Como Ajudar
              </a>
            </Link>

            {/* Contato */}
            <Link href="/contato">
              <a
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                  location === "/contato"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80"
                }`}
              >
                Contato
              </a>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
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
          <nav className="lg:hidden py-4 border-t max-h-96 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {primaryNavItems.map((item) => (
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

              <div className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                Institucional
              </div>
              {secondaryNavItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground pl-8 ${
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

              <Link href="/como-ajudar">
                <a
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                    location === "/como-ajudar"
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Como Ajudar
                </a>
              </Link>

              <Link href="/contato">
                <a
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                    location === "/contato"
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </a>
              </Link>

              <Link href="/doar">
                <Button className="w-full gradient-secondary text-white font-semibold mt-2">
                  Doar Agora
                </Button>
              </Link>
              
              <div className="pt-4 border-t mt-4 flex gap-2">
                <ThemeToggle />
                <span className="text-xs text-muted-foreground flex items-center">
                  Alternar tema
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
