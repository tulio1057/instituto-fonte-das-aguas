// ============================================================================
// PÁGINA: /admin — Painel Administrativo Expandido
// ============================================================================
// Seções:
//   1. Instituto          — informações gerais
//   2. Projetos           — modais com upload de imagem
//   3. Diretoria          — membros com foto, descrição, email
//   4. Capacitações       — CRUD completo
//   5. Simpósio           — título, data, horário, local, vagas, programação,
//                           palestrantes (com foto), link de inscrição
//   6. Impacto            — números de impacto
//   7. Eventos            — eventos anuais
// ============================================================================

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  LogIn, LogOut, Save, Plus, Trash2, Loader2,
  Building2, Users, BarChart3, Calendar, FolderOpen, Lock,
  GraduationCap, Mic, Upload, X, ImageIcon, ChevronDown, ChevronUp,
  Link as LinkIcon,
} from "lucide-react";
import type { SiteContent, MembroDiretoria, NumeroImpacto, EventoAnual, Projeto } from "@/services/contentTypes";
import { CONTENT_FALLBACK } from "@/services/contentFallback";

// ---------------------------------------------------------------------------
// Tipos adicionais para as novas seções
// ---------------------------------------------------------------------------
interface Capacitacao {
  id: string;
  titulo: string;
  descricao: string;
  cargaHoraria: string;
  data: string;
  local: string;
  vagas: string;
  status: "aberta" | "encerrada" | "em_breve";
}

interface ProgramacaoItem {
  horario: string;
  atividade: string;
  descricao: string;
  tipo: string;
}

interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  tema: string;
  descricao: string;
  imagemBase64: string;
}

interface SimposioData {
  titulo: string;
  subtitulo: string;
  data: string;
  horario: string;
  local: string;
  enderecoLocal: string;
  vagas: string;
  vagasLimitadas: boolean;
  descricao: string;
  programacao: ProgramacaoItem[];
  palestrantes: Palestrante[];
  linkInscricao: string;
}

interface SiteContentExtended extends SiteContent {
  diretoriaExtended?: MembroDiretoriaExtended[];
  capacitacoes?: Capacitacao[];
  simposio?: SimposioData;
  projetosExtended?: ProjetoExtended[];
}

interface MembroDiretoriaExtended extends MembroDiretoria {
  descricao?: string;
  email?: string;
  linkedin?: string;
  imagemBase64?: string;
}

interface ProjetoExtended extends Projeto {
  imagensBase64?: string[];
  objetivos?: string[];
}

// ---------------------------------------------------------------------------
// Token helpers
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 px-4">
      <Card className="w-full max-w-sm shadow-xl border-0">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Painel Admin</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Instituto Fonte das Águas</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="password">Senha de acesso</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
                className="h-11"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full h-11" disabled={loading}>
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
// Componente: Upload de imagem
// ---------------------------------------------------------------------------
function ImageUpload({
  value,
  onChange,
  label = "Foto",
  placeholder = "Clique ou arraste uma imagem",
  size = "md",
}: {
  value: string;
  onChange: (base64: string) => void;
  label?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione uma imagem.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onChange(result);
    };
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  const sizeClasses = {
    sm: "h-24 w-24 rounded-full",
    md: "h-40 w-full rounded-xl",
    lg: "h-56 w-full rounded-xl",
  };

  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <div
        className={`${sizeClasses[size]} border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors cursor-pointer bg-muted/20 flex items-center justify-center overflow-hidden relative group`}
        onClick={() => fileRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {value ? (
          <>
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <button
              type="button"
              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </>
        ) : (
          <div className="text-center space-y-2 p-4">
            <ImageIcon className="h-8 w-8 text-muted-foreground/40 mx-auto" />
            {size !== "sm" && (
              <p className="text-xs text-muted-foreground">{placeholder}</p>
            )}
          </div>
        )}
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Componente auxiliar: campo de formulário
// ---------------------------------------------------------------------------
function Field({
  label, value, onChange, type = "text", rows, placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {rows ? (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="text-sm"
          placeholder={placeholder}
        />
      ) : (
        <Input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm h-9"
          placeholder={placeholder}
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
// Seção: Projetos (com upload de imagens e objetivos)
// ---------------------------------------------------------------------------
function SecaoProjetos({
  data,
  onChange,
}: {
  data: ProjetoExtended[];
  onChange: (d: ProjetoExtended[]) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const update = (i: number, key: keyof ProjetoExtended, v: unknown) => {
    const next = data.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  };

  const addImagem = (i: number, base64: string) => {
    const imgs = [...(data[i].imagensBase64 || []), base64];
    update(i, "imagensBase64", imgs);
  };

  const removeImagem = (i: number, imgIdx: number) => {
    const imgs = (data[i].imagensBase64 || []).filter((_, ii) => ii !== imgIdx);
    update(i, "imagensBase64", imgs);
  };

  const addObjetivo = (i: number) => {
    const objs = [...(data[i].objetivos || []), ""];
    update(i, "objetivos", objs);
  };

  const updateObjetivo = (i: number, oIdx: number, v: string) => {
    const objs = (data[i].objetivos || []).map((o, oi) => (oi === oIdx ? v : o));
    update(i, "objetivos", objs);
  };

  const removeObjetivo = (i: number, oIdx: number) => {
    const objs = (data[i].objetivos || []).filter((_, oi) => oi !== oIdx);
    update(i, "objetivos", objs);
  };

  return (
    <div className="space-y-3">
      {data.map((proj, i) => {
        const isOpen = expanded === proj.id;
        return (
          <div key={proj.id} className="border rounded-xl overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors text-left"
              onClick={() => setExpanded(isOpen ? null : proj.id)}
            >
              <div className="flex items-center gap-3">
                <FolderOpen className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium text-sm">{proj.titulo || "Novo projeto"}</span>
                <span className="text-xs text-muted-foreground hidden sm:block">— {proj.frente}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-destructive hover:text-destructive/80 p-1"
                  onClick={(e) => { e.stopPropagation(); onChange(data.filter((_, idx) => idx !== i)); }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-2 space-y-5 border-t bg-muted/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="ID (slug, sem espaços)"
                    value={proj.id}
                    onChange={(v) => update(i, "id", v.toLowerCase().replace(/\s+/g, "-"))}
                  />
                  <Field label="Título" value={proj.titulo} onChange={(v) => update(i, "titulo", v)} />
                  <Field label="Frente (ID)" value={proj.frente} onChange={(v) => update(i, "frente", v)} placeholder="ex: vinculos-bem-estar" />
                </div>
                <Field label="Descrição curta" value={proj.descricaoCurta} onChange={(v) => update(i, "descricaoCurta", v)} rows={2} />
                <Field label="Descrição longa" value={proj.descricaoLonga} onChange={(v) => update(i, "descricaoLonga", v)} rows={4} />
                <Field label="Impacto" value={proj.impacto} onChange={(v) => update(i, "impacto", v)} rows={2} />

                {/* Objetivos */}
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Objetivos do projeto</Label>
                  {(proj.objetivos || []).map((obj, oIdx) => (
                    <div key={oIdx} className="flex gap-2">
                      <Input
                        value={obj}
                        onChange={(e) => updateObjetivo(i, oIdx, e.target.value)}
                        className="text-sm h-9 flex-1"
                        placeholder={`Objetivo ${oIdx + 1}`}
                      />
                      <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-destructive shrink-0"
                        onClick={() => removeObjetivo(i, oIdx)}>
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => addObjetivo(i)}>
                    <Plus className="h-3.5 w-3.5 mr-1" /> Adicionar objetivo
                  </Button>
                </div>

                {/* Imagens */}
                <div className="space-y-3">
                  <Label className="text-xs text-muted-foreground">Imagens do projeto</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(proj.imagensBase64 || []).map((img, imgIdx) => (
                      <div key={imgIdx} className="relative group rounded-lg overflow-hidden h-32">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          className="absolute top-1 right-1 bg-destructive text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImagem(i, imgIdx)}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                    <div className="h-32">
                      <ImageUpload
                        value=""
                        onChange={(b64) => { if (b64) addImagem(i, b64); }}
                        label=""
                        placeholder="Adicionar imagem"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

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
              imagensBase64: [],
              objetivos: [],
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
// Seção: Diretoria (com foto, descrição, email, linkedin)
// ---------------------------------------------------------------------------
function SecaoDiretoria({
  data,
  onChange,
}: {
  data: MembroDiretoriaExtended[];
  onChange: (d: MembroDiretoriaExtended[]) => void;
}) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const update = (i: number, key: keyof MembroDiretoriaExtended, v: unknown) => {
    const next = data.map((item, idx) =>
      idx === i ? { ...item, [key]: v } : item
    );
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {data.map((membro, i) => {
        const isOpen = expanded === i;
        return (
          <div key={membro.id} className="border rounded-xl overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors text-left"
              onClick={() => setExpanded(isOpen ? null : i)}
            >
              <div className="flex items-center gap-3">
                {membro.imagemBase64 ? (
                  <img src={membro.imagemBase64} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 border-2 border-primary/20" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div>
                  <span className="font-medium text-sm">{membro.nome || "Novo membro"}</span>
                  {membro.cargo && <span className="text-xs text-muted-foreground ml-2">— {membro.cargo}</span>}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-destructive hover:text-destructive/80 p-1"
                  onClick={(e) => { e.stopPropagation(); onChange(data.filter((_, idx) => idx !== i)); }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-3 border-t bg-muted/10">
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Foto */}
                  <div className="shrink-0">
                    <ImageUpload
                      value={membro.imagemBase64 || ""}
                      onChange={(b64) => update(i, "imagemBase64", b64)}
                      label="Foto do membro"
                      size="sm"
                    />
                    <p className="text-xs text-muted-foreground mt-1 text-center">Foto</p>
                  </div>
                  {/* Campos */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Nome" value={membro.nome} onChange={(v) => update(i, "nome", v)} />
                    <Field label="Cargo" value={membro.cargo} onChange={(v) => update(i, "cargo", v)} />
                    <Field label="E-mail" value={membro.email || ""} onChange={(v) => update(i, "email", v)} type="email" />
                    <Field label="LinkedIn (URL)" value={membro.linkedin || ""} onChange={(v) => update(i, "linkedin", v)} />
                    <div className="sm:col-span-2">
                      <Field label="Descrição / Papel" value={membro.descricao || ""} onChange={(v) => update(i, "descricao", v)} rows={2} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() =>
          onChange([...data, { id: Date.now(), nome: "", cargo: "", descricao: "", email: "", linkedin: "", imagemBase64: "" }])
        }
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar membro
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Capacitações
// ---------------------------------------------------------------------------
function SecaoCapacitacoes({
  data,
  onChange,
}: {
  data: Capacitacao[];
  onChange: (d: Capacitacao[]) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const update = (i: number, key: keyof Capacitacao, v: unknown) => {
    const next = data.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  };

  const statusLabels = {
    aberta: "Inscrições abertas",
    encerrada: "Encerrada",
    em_breve: "Em breve",
  };

  const statusColors = {
    aberta: "bg-green-100 text-green-700",
    encerrada: "bg-gray-100 text-gray-600",
    em_breve: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="space-y-3">
      {data.map((cap, i) => {
        const isOpen = expanded === cap.id;
        return (
          <div key={cap.id} className="border rounded-xl overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors text-left"
              onClick={() => setExpanded(isOpen ? null : cap.id)}
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium text-sm">{cap.titulo || "Nova capacitação"}</span>
                {cap.status && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[cap.status]}`}>
                    {statusLabels[cap.status]}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-destructive hover:text-destructive/80 p-1"
                  onClick={(e) => { e.stopPropagation(); onChange(data.filter((_, idx) => idx !== i)); }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-3 border-t bg-muted/10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Título" value={cap.titulo} onChange={(v) => update(i, "titulo", v)} />
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Status</Label>
                    <select
                      value={cap.status}
                      onChange={(e) => update(i, "status", e.target.value as Capacitacao["status"])}
                      className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="em_breve">Em breve</option>
                      <option value="aberta">Inscrições abertas</option>
                      <option value="encerrada">Encerrada</option>
                    </select>
                  </div>
                  <Field label="Data" value={cap.data} onChange={(v) => update(i, "data", v)} placeholder="ex: 20/06/2026" />
                  <Field label="Carga horária" value={cap.cargaHoraria} onChange={(v) => update(i, "cargaHoraria", v)} placeholder="ex: 8h" />
                  <Field label="Local" value={cap.local} onChange={(v) => update(i, "local", v)} />
                  <Field label="Vagas" value={cap.vagas} onChange={(v) => update(i, "vagas", v)} placeholder="ex: 30 vagas" />
                </div>
                <Field label="Descrição" value={cap.descricao} onChange={(v) => update(i, "descricao", v)} rows={3} />
              </div>
            )}
          </div>
        );
      })}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() =>
          onChange([
            ...data,
            {
              id: `cap-${Date.now()}`,
              titulo: "",
              descricao: "",
              cargaHoraria: "",
              data: "",
              local: "",
              vagas: "",
              status: "em_breve",
            },
          ])
        }
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar capacitação
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seção: Simpósio
// ---------------------------------------------------------------------------
function SecaoSimposio({
  data,
  onChange,
}: {
  data: SimposioData;
  onChange: (d: SimposioData) => void;
}) {
  const set = (key: keyof SimposioData) => (v: unknown) =>
    onChange({ ...data, [key]: v });

  const [tabAtiva, setTabAtiva] = useState<"geral" | "programacao" | "palestrantes" | "inscricao">("geral");

  const updateProgItem = (i: number, key: keyof ProgramacaoItem, v: string) => {
    const next = data.programacao.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    set("programacao")(next);
  };

  const addProgItem = () => {
    set("programacao")([...data.programacao, { horario: "", atividade: "", descricao: "", tipo: "palestra" }]);
  };

  const removeProgItem = (i: number) => {
    set("programacao")(data.programacao.filter((_, idx) => idx !== i));
  };

  const updatePalestrante = (i: number, key: keyof Palestrante, v: string) => {
    const next = data.palestrantes.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    set("palestrantes")(next);
  };

  const addPalestrante = () => {
    set("palestrantes")([
      ...data.palestrantes,
      { id: `pal-${Date.now()}`, nome: "", cargo: "Palestrante", tema: "", descricao: "", imagemBase64: "" },
    ]);
  };

  const removePalestrante = (i: number) => {
    set("palestrantes")(data.palestrantes.filter((_, idx) => idx !== i));
  };

  const tipoOptions = ["abertura", "palestra", "institucional", "coffee", "grupo", "roda", "encerramento"];

  const tabs = [
    { key: "geral" as const, label: "Informações gerais" },
    { key: "programacao" as const, label: "Programação" },
    { key: "palestrantes" as const, label: "Palestrantes" },
    { key: "inscricao" as const, label: "Inscrição" },
  ];

  return (
    <div className="space-y-5">
      {/* Sub-navegação */}
      <div className="flex gap-1 flex-wrap border-b">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setTabAtiva(tab.key)}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors -mb-px ${
              tabAtiva === tab.key
                ? "bg-background border border-b-background text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Informações gerais */}
      {tabAtiva === "geral" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Field label="Título principal do simpósio" value={data.titulo} onChange={(v) => set("titulo")(v)} placeholder="ex: SIMPÓSIO INFÂNCIA SEGURA 2026" />
            </div>
            <Field label="Subtítulo / chamada" value={data.subtitulo} onChange={(v) => set("subtitulo")(v)} />
            <Field label="Data" value={data.data} onChange={(v) => set("data")(v)} placeholder="ex: 16/05/2026" />
            <Field label="Horário" value={data.horario} onChange={(v) => set("horario")(v)} placeholder="ex: 14h às 19h30" />
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Vagas</Label>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={data.vagasLimitadas}
                    onCheckedChange={(checked) => set("vagasLimitadas")(checked)}
                  />
                  <span className="text-sm">{data.vagasLimitadas ? "Limitadas" : "Ilimitadas"}</span>
                </div>
                {data.vagasLimitadas && (
                  <Input
                    value={data.vagas}
                    onChange={(e) => set("vagas")(e.target.value)}
                    className="text-sm h-9 flex-1"
                    placeholder="Número de vagas (ou 'Limitadas')"
                  />
                )}
              </div>
            </div>
          </div>
          <Field label="Local (nome)" value={data.local} onChange={(v) => set("local")(v)} placeholder="ex: Graça Igreja Batista" />
          <Field label="Endereço do local" value={data.enderecoLocal} onChange={(v) => set("enderecoLocal")(v)} />
          <Field label="Descrição do simpósio" value={data.descricao} onChange={(v) => set("descricao")(v)} rows={4} />
        </div>
      )}

      {/* Programação */}
      {tabAtiva === "programacao" && (
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">Adicione ou remova tópicos da programação do evento.</p>
          {data.programacao.map((item, i) => (
            <div key={i} className="border rounded-xl p-4 space-y-3 bg-muted/5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Item #{i + 1}</span>
                <Button type="button" variant="ghost" size="icon" className="h-7 w-7 text-destructive"
                  onClick={() => removeProgItem(i)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Field label="Horário" value={item.horario} onChange={(v) => updateProgItem(i, "horario", v)} placeholder="14:00" />
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Tipo</Label>
                  <select
                    value={item.tipo}
                    onChange={(e) => updateProgItem(i, "tipo", e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {tipoOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <Field label="Atividade" value={item.atividade} onChange={(v) => updateProgItem(i, "atividade", v)} />
                </div>
              </div>
              <Field label="Descrição / detalhes" value={item.descricao} onChange={(v) => updateProgItem(i, "descricao", v)} />
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={addProgItem}>
            <Plus className="h-4 w-4 mr-1" /> Adicionar item na programação
          </Button>
        </div>
      )}

      {/* Palestrantes */}
      {tabAtiva === "palestrantes" && (
        <div className="space-y-4">
          {data.palestrantes.map((pal, i) => (
            <div key={pal.id} className="border rounded-xl p-4 space-y-4 bg-muted/5">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{pal.nome || `Palestrante ${i + 1}`}</span>
                <Button type="button" variant="ghost" size="icon" className="h-7 w-7 text-destructive"
                  onClick={() => removePalestrante(i)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="shrink-0">
                  <ImageUpload
                    value={pal.imagemBase64}
                    onChange={(b64) => updatePalestrante(i, "imagemBase64", b64)}
                    label="Foto do palestrante"
                    size="sm"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center w-24">Foto</p>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Nome" value={pal.nome} onChange={(v) => updatePalestrante(i, "nome", v)} />
                  <Field label="Cargo" value={pal.cargo} onChange={(v) => updatePalestrante(i, "cargo", v)} placeholder="ex: Palestrante" />
                  <div className="sm:col-span-2">
                    <Field label="Tema" value={pal.tema} onChange={(v) => updatePalestrante(i, "tema", v)} />
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Descrição / Mini currículo" value={pal.descricao} onChange={(v) => updatePalestrante(i, "descricao", v)} rows={3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={addPalestrante}>
            <Plus className="h-4 w-4 mr-1" /> Adicionar palestrante
          </Button>
        </div>
      )}

      {/* Inscrição */}
      {tabAtiva === "inscricao" && (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <LinkIcon className="h-4 w-4 shrink-0" />
              O link abaixo será exibido no botão "Inscreva-se Agora" na página do simpósio.
            </p>
          </div>
          <Field
            label="Link do formulário de inscrição"
            value={data.linkInscricao}
            onChange={(v) => set("linkInscricao")(v)}
            placeholder="https://forms.gle/..."
          />
        </div>
      )}
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
            className="h-9 w-9 text-destructive hover:text-destructive shrink-0 mb-0.5"
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
// Seção: Eventos Anuais
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
        <div key={i} className="border rounded-xl p-4 space-y-3 relative bg-muted/5">
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
// Painel principal
// ---------------------------------------------------------------------------

// Defaults para seções novas
const DEFAULT_SIMPOSIO: SimposioData = {
  titulo: "SIMPÓSIO INFÂNCIA SEGURA 2026\nFonte das Águas",
  subtitulo: "Um dia dedicado ao conhecimento, networking e transformação social",
  data: "16/05/2026",
  horario: "14h às 19h30",
  local: "Graça Igreja Batista",
  enderecoLocal: "Rua Adezinho da Costa Pinto, 149, Bairro Industrial",
  vagas: "Limitadas",
  vagasLimitadas: true,
  descricao: "O Simpósio Instituto Fonte das Águas é um evento anual que reúne profissionais, voluntários, educadores e lideranças comunitárias para discutir temas relevantes sobre desenvolvimento social, educação, voluntariado e transformação comunitária.",
  programacao: [
    { horario: "14:00", atividade: "Acolhida e Musicalização", descricao: "Recepção dos participantes", tipo: "abertura" },
    { horario: "14:10", atividade: "Boas-vindas Institucionais", descricao: "Contextualização do encontro e objetivos da tarde", tipo: "abertura" },
    { horario: "14:30", atividade: "Painel I – Crianças e Internet: desafios, riscos e proteção", descricao: "Palestrantes: André e Cássio", tipo: "palestra" },
  ],
  palestrantes: [
    { id: "p1", nome: "Cássio Ângelo", cargo: "Palestrante", tema: "Crianças e Internet: desafios, riscos e proteção", descricao: "Técnico em Eletroeletrônica pelo IFS, especializando em Inteligência Artificial pela Uninassau.", imagemBase64: "" },
    { id: "p2", nome: "André Lopes", cargo: "Palestrante", tema: "Crianças e Internet: desafios, riscos e proteção", descricao: "Educador Digital, Perito Ciber, Mestre em Criminalística.", imagemBase64: "" },
  ],
  linkInscricao: "https://forms.gle/DUCwBkzeWWG31dQK8",
};

const SECOES = [
  { key: "instituto",      label: "Informações gerais",  icon: Building2 },
  { key: "projetos",       label: "Projetos",            icon: FolderOpen },
  { key: "diretoria",      label: "Diretoria",           icon: Users },
  { key: "capacitacoes",   label: "Capacitações",        icon: GraduationCap },
  { key: "simposio",       label: "Simpósio",            icon: Mic },
  { key: "numerosImpacto", label: "Números de impacto",  icon: BarChart3 },
  { key: "eventosAnuais",  label: "Eventos",             icon: Calendar },
] as const;

type SecaoKey = (typeof SECOES)[number]["key"];

function AdminPanel({ token, onLogout }: { token: string; onLogout: () => void }) {
  const [content, setContent] = useState<SiteContentExtended>(CONTENT_FALLBACK as SiteContentExtended);
  const [loadingData, setLoadingData] = useState(true);
  const [saving, setSaving] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState<SecaoKey>("instituto");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data: SiteContentExtended) => {
        setContent({
          ...CONTENT_FALLBACK as SiteContentExtended,
          ...data,
          simposio: data.simposio || DEFAULT_SIMPOSIO,
          capacitacoes: data.capacitacoes || [],
          diretoriaExtended: data.diretoriaExtended || (data.diretoria || []).map((m) => ({
            ...m, descricao: "", email: "", linkedin: "", imagemBase64: "",
          })),
          projetosExtended: data.projetosExtended || (data.projetos || []).map((p) => ({
            ...p, imagensBase64: [], objetivos: [],
          })),
        });
      })
      .catch(() => {
        setContent({
          ...(CONTENT_FALLBACK as SiteContentExtended),
          simposio: DEFAULT_SIMPOSIO,
          capacitacoes: [],
          diretoriaExtended: (CONTENT_FALLBACK.diretoria || []).map((m) => ({
            ...m, descricao: "", email: "", linkedin: "", imagemBase64: "",
          })),
          projetosExtended: (CONTENT_FALLBACK.projetos || []).map((p) => ({
            ...p, imagensBase64: [], objetivos: [],
          })),
        });
        toast.error("Usando valores padrão (sem conexão).");
      })
      .finally(() => setLoadingData(false));
  }, []);

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
        <div className="text-center space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="text-sm text-muted-foreground">Carregando dados...</p>
        </div>
      </div>
    );
  }

  const secaoAtual = SECOES.find((s) => s.key === secaoAtiva)!;

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-background border-b sticky top-0 z-20 shadow-sm">
        <div className="container flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <div className="w-5 h-0.5 bg-foreground mb-1" />
              <div className="w-5 h-0.5 bg-foreground mb-1" />
              <div className="w-5 h-0.5 bg-foreground" />
            </button>
            <div>
              <span className="font-bold text-sm">Admin</span>
              <span className="text-muted-foreground text-xs hidden sm:inline"> — Instituto Fonte das Águas</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleSave} disabled={saving} size="sm" className="gap-1.5 h-8">
              {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              {saving ? "Salvando..." : "Salvar"}
            </Button>
            <Button variant="ghost" size="sm" onClick={onLogout} className="gap-1.5 text-muted-foreground h-8">
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <nav className={`md:w-56 shrink-0 ${sidebarOpen ? "block" : "hidden"} md:block`}>
            <div className="space-y-1">
              {SECOES.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => { setSecaoAtiva(key); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                    secaoAtiva === key
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-6 p-3 bg-primary/5 border border-primary/10 rounded-xl text-xs text-muted-foreground space-y-1.5">
              <p className="font-semibold text-foreground flex items-center gap-1.5">
                <Save className="h-3.5 w-3.5 text-primary" />
                Como usar
              </p>
              <p>Edite os campos e clique em <strong>Salvar</strong> no topo. As alterações aparecem no site imediatamente.</p>
              <p className="text-primary/70">Imagens são salvas em Base64 no conteúdo.</p>
            </div>
          </nav>

          {/* Área principal */}
          <div className="flex-1 min-w-0">
            <Card className="shadow-sm">
              <CardHeader className="pb-4 border-b">
                <CardTitle className="text-base flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <secaoAtual.icon className="h-4 w-4 text-primary" />
                  </div>
                  {secaoAtual.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                {secaoAtiva === "instituto" && (
                  <SecaoInstituto
                    data={content.instituto}
                    onChange={(d) => setContent({ ...content, instituto: d })}
                  />
                )}
                {secaoAtiva === "projetos" && (
                  <SecaoProjetos
                    data={content.projetosExtended || []}
                    onChange={(d) => setContent({ ...content, projetosExtended: d })}
                  />
                )}
                {secaoAtiva === "diretoria" && (
                  <SecaoDiretoria
                    data={content.diretoriaExtended || []}
                    onChange={(d) => setContent({ ...content, diretoriaExtended: d })}
                  />
                )}
                {secaoAtiva === "capacitacoes" && (
                  <SecaoCapacitacoes
                    data={content.capacitacoes || []}
                    onChange={(d) => setContent({ ...content, capacitacoes: d })}
                  />
                )}
                {secaoAtiva === "simposio" && (
                  <SecaoSimposio
                    data={content.simposio || DEFAULT_SIMPOSIO}
                    onChange={(d) => setContent({ ...content, simposio: d })}
                  />
                )}
                {secaoAtiva === "numerosImpacto" && (
                  <SecaoImpacto
                    data={content.numerosImpacto}
                    onChange={(d) => setContent({ ...content, numerosImpacto: d })}
                  />
                )}
                {secaoAtiva === "eventosAnuais" && (
                  <SecaoEventos
                    data={content.eventosAnuais}
                    onChange={(d) => setContent({ ...content, eventosAnuais: d })}
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
// Export principal
// ---------------------------------------------------------------------------
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(() => getToken());

  function handleLogin(t: string) {
    setToken(t);
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
