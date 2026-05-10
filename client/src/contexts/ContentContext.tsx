import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { SiteContent } from "@/services/contentTypes";
import { CONTENT_FALLBACK } from "@/services/contentFallback";

interface ContentContextValue {
  content: SiteContent;
  loading: boolean;
  refresh: () => void;
}

const ContentContext = createContext<ContentContextValue>({
  content: CONTENT_FALLBACK,
  loading: true,
  refresh: () => {},
});

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(CONTENT_FALLBACK);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => { if (!cancelled) setContent(data as SiteContent); })
      .catch(() => { /* mantém fallback */ })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [tick]);

  return (
    <ContentContext.Provider value={{ content, loading, refresh: () => setTick((t) => t + 1) }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useSiteContent = () => useContext(ContentContext);
