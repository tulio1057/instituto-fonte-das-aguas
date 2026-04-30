// ============================================================================
// PÁGINA: /admin — Painel Administrativo
// ============================================================================
// Fluxo:
//  1. Se não houver token salvo → exibe tela de login
//  2. Após login → carrega content.json via GET /api/content
//  3. Exibe formulários por seção (instituto, diretoria, impacto, eventos, projetos)
//  4. "Salvar" envia via POST /api/content com o token no header
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  LogIn, LogOut, Save, Plus, Trash2, Loader2,
  Building2, Users, BarChart3, Calendar, FolderOpen, Lock,
} from "lucide-react";
import type { SiteContent, MembroDiretoria, NumeroImpacto, EventoAnual, Projeto } from "@/services/contentTypes";
import { CONTENT_FALLBACK } from "@/services/contentFallback";

// ---------------------------------------------------------------------------
// Token helpers (localStorage)
// ---------------------------------------------------------------------------
const TOKEN_KEY = "admin_token";
const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

// ---------------------------------------------------------------------------
// Tela de Login
// ---------------------------------------------------------------------------
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao fazer login.");
      onLogin(data.token);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Painel Administrativo</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Instituto Fonte das Águas</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite a senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Entrando...</>
              ) : (
                <><LogIn className="mr-2 h-4 w-4" /> Entrar</>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Componente auxiliar: campo de formulário
// ---------------------------------------------------------------------------
function Field({
  label, value, onChange, type = "text", rows,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  rows?: number;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {rows ? (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="text-sm"
        />
      ) : (
        <Input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm h-8"
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Informações do Instituto
// ---------------------------------------------------------------------------
function SecaoInstituto({
  data,
  onChange,
}: {
  data: SiteContent["instituto"];
  onChange: (d: SiteContent["instituto"]) => void;
}) {
  const set = (key: keyof SiteContent["instituto"]) => (v: string) =>
    onChange({ ...data, [key]: v });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Nome" value={data.nome} onChange={set("nome")} />
      <Field label="Slogan" value={data.slogan} onChange={set("slogan")} />
      <div className="md:col-span-2">
        <Field label="Descrição" value={data.descricao} onChange={set("descricao")} rows={3} />
      </div>
      <Field label="Telefone" value={data.telefone} onChange={set("telefone")} />
      <Field label="WhatsApp (somente números)" value={data.whatsapp} onChange={set("whatsapp")} />
      <Field label="E-mail" value={data.email} onChange={set("email")} type="email" />
      <Field label="PIX" value={data.pix} onChange={set("pix")} />
      <Field label="Endereço" value={data.endereco} onChange={set("endereco")} />
      <Field label="Bairro" value={data.bairro} onChange={set("bairro")} />
      <Field label="Cidade" value={data.cidade} onChange={set("cidade")} />
      <Field label="Estado (sigla)" value={data.estado} onChange={set("estado")} />
      <Field label="CEP" value={data.cep} onChange={set("cep")} />
      <Field label="Instagram (@)" value={data.instagram} onChange={set("instagram")} />
      <Field label="URL do Instagram" value={data.instagramUrl} onChange={set("instagramUrl")} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Números de Impacto
// ---------------------------------------------------------------------------
function SecaoImpacto({
  data,
  onChange,
}: {
  data: NumeroImpacto[];
  onChange: (d: NumeroImpacto[]) => void;
}) {
  const update = (i: number, key: keyof NumeroImpacto, v: string) => {
    const next = data.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={i} className="flex gap-3 items-end">
          <div className="w-28 shrink-0">
            <Field label="Número" value={item.numero} onChange={(v) => update(i, "numero", v)} />
          </div>
          <div className="flex-1">
            <Field label="Descrição" value={item.descricao} onChange={(v) => update(i, "descricao", v)} />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive shrink-0 mb-0.5"
            onClick={() => onChange(data.filter((_, idx) => idx !== i))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange([...data, { numero: "", descricao: "" }])}
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar número
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Diretoria
// ---------------------------------------------------------------------------
function SecaoDiretoria({
  data,
  onChange,
}: {
  data: MembroDiretoria[];
  onChange: (d: MembroDiretoria[]) => void;
}) {
  const update = (i: number, key: keyof MembroDiretoria, v: string) => {
    const next = data.map((item, idx) =>
      idx === i ? { ...item, [key]: v } : item
    );
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {data.map((membro, i) => (
        <div key={membro.id} className="flex gap-3 items-end">
          <div className="flex-1">
            <Field label="Nome" value={membro.nome} onChange={(v) => update(i, "nome", v)} />
          </div>
          <div className="flex-1">
            <Field label="Cargo" value={membro.cargo} onChange={(v) => update(i, "cargo", v)} />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive shrink-0 mb-0.5"
            onClick={() => onChange(data.filter((_, idx) => idx !== i))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() =>
          onChange([...data, { id: Date.now(), nome: "", cargo: "" }])
        }
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar membro
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Eventos
// ---------------------------------------------------------------------------
function SecaoEventos({
  data,
  onChange,
}: {
  data: EventoAnual[];
  onChange: (d: EventoAnual[]) => void;
}) {
  const update = (i: number, key: keyof EventoAnual, v: string) => {
    const next = data.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {data.map((ev, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-3 relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-7 w-7 text-destructive hover:text-destructive"
            onClick={() => onChange(data.filter((_, idx) => idx !== i))}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Nome do evento" value={ev.nome} onChange={(v) => update(i, "nome", v)} />
            <Field label="Mês / período" value={ev.mes} onChange={(v) => update(i, "mes", v)} />
          </div>
          <Field label="Descrição" value={ev.descricao} onChange={(v) => update(i, "descricao", v)} rows={2} />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange([...data, { nome: "", mes: "", descricao: "" }])}
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar evento
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Projetos
// ---------------------------------------------------------------------------
function SecaoProjetos({
  data,
  onChange,
}: {
  data: Projeto[];
  onChange: (d: Projeto[]) => void;
}) {
  const update = (i: number, key: keyof Projeto, v: string) => {
    const next = data.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {data.map((proj, i) => (
        <div key={proj.id} className="border rounded-lg p-4 space-y-3 relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-7 w-7 text-destructive hover:text-destructive"
            onClick={() => onChange(data.filter((_, idx) => idx !== i))}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="ID (slug, sem espaços)"
              value={proj.id}
              onChange={(v) => update(i, "id", v.toLowerCase().replace(/\s+/g, "-"))}
            />
            <Field label="Título" value={proj.titulo} onChange={(v) => update(i, "titulo", v)} />
          </div>
          <Field
            label="Descrição curta"
            value={proj.descricaoCurta}
            onChange={(v) => update(i, "descricaoCurta", v)}
            rows={2}
          />
          <Field
            label="Descrição longa"
            value={proj.descricaoLonga}
            onChange={(v) => update(i, "descricaoLonga", v)}
            rows={4}
          />
          <Field label="Impacto" value={proj.impacto} onChange={(v) => update(i, "impacto", v)} rows={2} />
          <Field label="Frente (ID)" value={proj.frente} onChange={(v) => update(i, "frente", v)} />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() =>
          onChange([
            ...data,
            {
              id: `projeto-${Date.now()}`,
              titulo: "",
              descricaoCurta: "",
              descricaoLonga: "",
              impacto: "",
              frente: "",
            },
          ])
        }
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar projeto
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Painel principal (pós-login)
// ---------------------------------------------------------------------------
const SECOES = [
  { key: "instituto",      label: "Informações gerais", icon: Building2 },
  { key: "numerosImpacto", label: "Números de impacto",  icon: BarChart3 },
  { key: "diretoria",      label: "Diretoria",           icon: Users },
  { key: "eventosAnuais",  label: "Eventos",             icon: Calendar },
  { key: "projetos",       label: "Projetos",            icon: FolderOpen },
] as const;

type SecaoKey = (typeof SECOES)[number]["key"];

function AdminPanel({ token, onLogout }: { token: string; onLogout: () => void }) {
  const [content, setContent] = useState<SiteContent>(CONTENT_FALLBACK);
  const [loadingData, setLoadingData] = useState(true);
  const [saving, setSaving] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState<SecaoKey>("instituto");

  // Carrega dados ao montar
  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data: SiteContent) => setContent(data))
      .catch(() => toast.error("Erro ao carregar dados. Usando valores padrão."))
      .finally(() => setLoadingData(false));
  }, []);

  // Salva dados
  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          toast.error("Sessão expirada. Faça login novamente.");
          onLogout();
          return;
        }
        throw new Error(data.error || "Erro ao salvar.");
      }
      toast.success("Conteúdo salvo! O site já reflete as mudanças.");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Erro ao salvar.");
    } finally {
      setSaving(false);
    }
  }, [content, token, onLogout]);

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const secaoAtual = SECOES.find((s) => s.key === secaoAtiva)!;

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-background border-b sticky top-0 z-10">
        <div className="container flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">Admin</span>
            <span className="text-muted-foreground text-xs hidden sm:block">
              / Instituto Fonte das Águas
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              disabled={saving}
              size="sm"
              className="gap-1.5"
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? "Salvando..." : "Salvar"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="gap-1.5 text-muted-foreground"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar de navegação */}
          <nav className="md:w-52 shrink-0">
            <div className="space-y-1">
              {SECOES.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setSecaoAtiva(key)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors text-left ${
                    secaoAtiva === key
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-6 p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">Dica</p>
              <p>Clique em "Salvar" após editar. As mudanças aparecem no site imediatamente.</p>
            </div>
          </nav>

          {/* Área de conteúdo */}
          <div className="flex-1 min-w-0">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <secaoAtual.icon className="h-4 w-4 text-primary" />
                  {secaoAtual.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {secaoAtiva === "instituto" && (
                  <SecaoInstituto
                    data={content.instituto}
                    onChange={(d) => setContent({ ...content, instituto: d })}
                  />
                )}
                {secaoAtiva === "numerosImpacto" && (
                  <SecaoImpacto
                    data={content.numerosImpacto}
                    onChange={(d) => setContent({ ...content, numerosImpacto: d })}
                  />
                )}
                {secaoAtiva === "diretoria" && (
                  <SecaoDiretoria
                    data={content.diretoria}
                    onChange={(d) => setContent({ ...content, diretoria: d })}
                  />
                )}
                {secaoAtiva === "eventosAnuais" && (
                  <SecaoEventos
                    data={content.eventosAnuais}
                    onChange={(d) => setContent({ ...content, eventosAnuais: d })}
                  />
                )}
                {secaoAtiva === "projetos" && (
                  <SecaoProjetos
                    data={content.projetos}
                    onChange={(d) => setContent({ ...content, projetos: d })}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Página /admin — orquestra login e painel
// ---------------------------------------------------------------------------
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(() => getToken());

  function handleLogin(t: string) {
    setToken(t);
    localStorage.setItem(TOKEN_KEY, t);
  }

  function handleLogout() {
    clearToken();
    setToken(null);
  }

  if (!token) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <AdminPanel token={token} onLogout={handleLogout} />;
}
