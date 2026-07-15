import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Loader2, Newspaper } from "lucide-react";
import { usePosts } from "@/hooks/usePosts";
import { ROUTES } from "@/config";
import { formatDataBR } from "@/services/postTypes";

const POSTS_POR_PAGINA = 9;

export default function Blog() {
  const { posts, loading } = usePosts();
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);
  const [pagina, setPagina] = useState(1);

  const publicados = useMemo(
    () =>
      posts
        .filter((p) => p.publicado)
        .sort((a, b) => (a.data < b.data ? 1 : -1)),
    [posts]
  );

  const categorias = useMemo(() => {
    const set = new Set(publicados.map((p) => p.categoria).filter(Boolean) as string[]);
    return Array.from(set);
  }, [publicados]);

  const filtrados = useMemo(
    () => (categoriaAtiva ? publicados.filter((p) => p.categoria === categoriaAtiva) : publicados),
    [publicados, categoriaAtiva]
  );

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POSTS_POR_PAGINA));
  const visiveis = filtrados.slice(0, pagina * POSTS_POR_PAGINA);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Blog de Impactos</h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Histórias, novidades e bastidores das transformações que acontecem no Bairro Industrial
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Filtro de categorias */}
            {categorias.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                <button
                  onClick={() => { setCategoriaAtiva(null); setPagina(1); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    categoriaAtiva === null
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground/70 border-border hover:border-primary/50"
                  }`}
                >
                  Todos
                </button>
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setCategoriaAtiva(cat); setPagina(1); }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                      categoriaAtiva === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground/70 border-border hover:border-primary/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Estado de carregamento */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mb-3" />
                <p>Carregando posts...</p>
              </div>
            )}

            {/* Estado vazio */}
            {!loading && filtrados.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-center text-muted-foreground">
                <Newspaper className="h-12 w-12 mb-4 opacity-40" />
                <p className="text-lg">Ainda não há posts publicados por aqui.</p>
                <p className="text-sm mt-1">Volte em breve para acompanhar as novidades do Instituto.</p>
              </div>
            )}

            {/* Grid de posts */}
            {!loading && visiveis.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiveis.map((post) => (
                  <Link key={post.id} href={`${ROUTES.blog}/${post.slug}`}>
                    <Card className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                      {post.capaBase64 ? (
                        <div className="aspect-video w-full overflow-hidden bg-muted">
                          <img
                            src={post.capaBase64}
                            alt={post.titulo}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full gradient-primary flex items-center justify-center">
                          <Newspaper className="h-10 w-10 text-white/70" />
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {formatDataBR(post.data)}
                          </span>
                          {post.categoria && <Badge variant="secondary">{post.categoria}</Badge>}
                        </div>
                        <h3 className="font-display text-lg font-bold mb-3">{post.titulo}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                          {post.resumo}
                        </p>
                        <div className="mt-4 pt-4 border-t flex items-center justify-between">
                          <span className="text-sm font-semibold text-primary">Ler mais</span>
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* Carregar mais */}
            {!loading && pagina < totalPaginas && (
              <div className="flex justify-center mt-12">
                <Button variant="outline" size="lg" onClick={() => setPagina((p) => p + 1)}>
                  Carregar mais posts
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
