import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";
import { NAV_PRIMARY_ITEMS, NAV_SECONDARY_ITEMS, ROUTES } from "@/config";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

// ============================================================================
// COMPONENTE: NavLink
// ============================================================================
// Link de navegação reutilizável que aplica estilo condicional
// baseado na rota atual

interface NavLinkProps {
  label: string;
  path: string;
  location: string;
  onClick?: () => void;
}

function NavLink({ label, path, location, onClick }: NavLinkProps) {
  const isActive = location === path;

  return (
    <Link href={path}>
      <a
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
          isActive ? "bg-accent text-accent-foreground" : "text-foreground/80"
        }`}
        onClick={onClick}
      >
        {label}
      </a>
    </Link>
  );
}

// ============================================================================
// COMPONENTE: DesktopNav
// ============================================================================
// Navegação desktop com menu vertical dropdown

interface DesktopNavProps {
  location: string;
  onDropdownToggle: (open: boolean) => void;
  dropdownOpen: boolean;
}

function DesktopNav({
  location,
  onDropdownToggle,
  dropdownOpen,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:block">
      <div className="relative">
        {/* Botão Menu Principal */}
        <button
          className="px-6 py-2 text-sm font-medium rounded-md transition-colors bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
          onMouseEnter={() => onDropdownToggle(true)}
          onMouseLeave={() => onDropdownToggle(false)}
        >
          Institucional
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Menu Dropdown Vertical */}
        {dropdownOpen && (
          <div
            className="absolute top-full right-0 mt-2 bg-background border border-border rounded-md shadow-xl py-1 min-w-56 z-50"
            onMouseEnter={() => onDropdownToggle(true)}
            onMouseLeave={() => onDropdownToggle(false)}
          >
            {/* Itens primários */}
            {NAV_PRIMARY_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                label={item.name}
                path={item.path}
                location={location}
              />
            ))}

            {/* Divisor */}
            <div className="my-1 border-t"></div>

            {/* Itens secundários com label */}
            <div className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
              Institucional
            </div>

            {NAV_SECONDARY_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                label={item.name}
                path={item.path}
                location={location}
              />
            ))}

            {/* Divisor */}
            <div className="my-1 border-t"></div>

            {/* Como Ajudar */}
            <NavLink
              label="Como Ajudar"
              path={ROUTES.comoAjudar}
              location={location}
            />

            {/* Contato */}
            <NavLink
              label="Contato"
              path={ROUTES.contato}
              location={location}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================================
// COMPONENTE: MobileNav
// ============================================================================
// Navegação mobile com menu expansível

interface MobileNavProps {
  location: string;
  open: boolean;
  onClose: () => void;
}

function MobileNav({ location, open, onClose }: MobileNavProps) {
  if (!open) return null;

  return (
    <nav className="lg:hidden py-4 border-t max-h-96 overflow-y-auto">
      <div className="flex flex-col gap-2">
        {/* Itens primários */}
        {NAV_PRIMARY_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            label={item.name}
            path={item.path}
            location={location}
            onClick={onClose}
          />
        ))}

        {/* Divisor e label "Institucional" */}
        <div className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
          Institucional
        </div>

        {/* Itens secundários com indentação */}
        {NAV_SECONDARY_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            label={item.name}
            path={item.path}
            location={location}
            onClick={onClose}
          />
        ))}

        {/* Como Ajudar */}
        <NavLink
          label="Como Ajudar"
          path={ROUTES.comoAjudar}
          location={location}
          onClick={onClose}
        />

        {/* Contato */}
        <NavLink
          label="Contato"
          path={ROUTES.contato}
          location={location}
          onClick={onClose}
        />

        {/* Botão Doar */}
        <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
          <Button className="w-full gradient-secondary text-white font-semibold mt-2">
            Doar Agora
          </Button>
        </a>

        {/* Toggle de tema */}
        <div className="pt-4 border-t mt-4 flex gap-2">
          <ThemeToggle />
          <span className="text-xs text-muted-foreground flex items-center">
            Alternar tema
          </span>
        </div>
      </div>
    </nav>
  );
}

// ============================================================================
// COMPONENTE: Header
// ============================================================================
// Barra de navegação principal do site

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        {/* Container principal do header */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo e nome do Instituto */}
          <Link href={ROUTES.home}>
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/logosemfundo.png"
                alt="Instituto Fonte das Águas"
                className="h-16 w-16 md:h-14 md:w-14"
              />
              <div className="hidden sm:flex flex-col">
                <h1 className="text-base md:text-lg font-display font-bold text-primary leading-tight">
                  Instituto Fonte das Águas
                </h1>
                <p className="text-xs text-muted-foreground">
                  Dignidade humana e justiça social
                </p>
              </div>
            </a>
          </Link>

          {/* Navegação desktop */}
          <DesktopNav
            location={location}
            onDropdownToggle={setDesktopDropdownOpen}
            dropdownOpen={desktopDropdownOpen}
          />

          {/* Botões de ação (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
              <Button className="gradient-secondary text-white font-semibold">
                Doar Agora
              </Button>
            </a>
          </div>

          {/* Botão menu mobile */}
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navegação mobile */}
        <MobileNav
          location={location}
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}
