// ============================================================================
// HOOK: useContent
// ============================================================================
// Busca o conteúdo dinâmico da API (/api/content) e expõe um estado
// tipado para uso nos componentes.
//
// Uso:
//   const { content, loading, error } = useContent();
//   if (loading) return <Spinner />;
//   const { instituto, numerosImpacto } = content;
// ============================================================================

import { useState, useEffect } from "react";
import type { SiteContent } from "../services/contentTypes";
import { CONTENT_FALLBACK } from "../services/contentFallback";

interface UseContentResult {
  content: SiteContent;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useContent(): UseContentResult {
  const [content, setContent] = useState<SiteContent>(CONTENT_FALLBACK);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function fetchContent() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/content");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: SiteContent = await res.json();
        if (!cancelled) setContent(data);
      } catch (err) {
        if (!cancelled) {
          console.warn("[useContent] Usando fallback. Erro:", err);
          setError("Não foi possível carregar o conteúdo do servidor.");
          // Mantém o fallback (config.ts) em caso de erro
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchContent();
    return () => { cancelled = true; };
  }, [tick]);

  return {
    content,
    loading,
    error,
    refetch: () => setTick((t) => t + 1),
  };
}
