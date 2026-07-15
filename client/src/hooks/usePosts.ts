import { useEffect, useState } from "react";
import type { BlogPost } from "@/services/postTypes";

// ============================================================================
// HOOK: usePosts — busca /api/posts uma vez (mesmo padrão do ContentContext)
// ============================================================================
export function usePosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data: unknown) => {
        if (!cancelled) setPosts(Array.isArray(data) ? (data as BlogPost[]) : []);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading };
}
