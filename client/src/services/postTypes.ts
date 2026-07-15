// ============================================================================
// TIPOS: Blog de Impactos — posts.json
// ============================================================================
// Os posts ficam em um arquivo separado (posts.json), fora do content.json
// principal, para não inchar o payload de /api/content à medida que o blog
// cresce. Seguem o mesmo padrão de "salvar tudo de uma vez" do restante do
// site (sem CRUD granular no backend).

export interface BlogPost {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  /** Texto puro. Parágrafos são separados por linha em branco (\n\n). */
  conteudo: string;
  capaBase64?: string;
  autor: string;
  /** Formato ISO (yyyy-mm-dd) — permite ordenar por data corretamente. */
  data: string;
  categoria?: string;
  publicado: boolean;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Gera um slug amigável de URL a partir de um título (remove acentos, etc). */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Formata uma data ISO (yyyy-mm-dd) para o padrão pt-BR (dd/mm/aaaa). */
export function formatDataBR(isoDate: string): string {
  if (!isoDate) return "";
  const [ano, mes, dia] = isoDate.split("-");
  if (!ano || !mes || !dia) return isoDate;
  return `${dia}/${mes}/${ano}`;
}
