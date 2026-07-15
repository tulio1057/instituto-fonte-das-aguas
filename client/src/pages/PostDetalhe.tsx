import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarDays, Loader2, User } from "lucide-react";
import { usePosts } from "@/hooks/usePosts";
import { ROUTES } from "@/config";
import { formatDataBR } from "@/services/postTypes";

export default function PostDetalhe() {
  const [match, params] = useRoute("/blog/:slug");
  const { posts, loading } = usePosts();

  if (!match) return null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const post = posts.find((p) => p.slug === params?.slug && p.publicado);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
          <Link href={ROUTES.blog}>
            <Button>Voltar para o Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Parágrafos separados por linha em branco (texto puro escrito no admin)
  const paragrafos = post.conteudo.split(/\n\s*\n/).filter((p) => p.trim().length > 0);

  const outrosPosts = posts
    .filter((p) => p.publicado && p.slug !== post.slug)
    .sort((a, b) => (a.data < b.data ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Botão Voltar */}
      <div className="fixed top-24 left-4 md:left-8 z-40">
        <Link href={ROUTES.blog}>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="gradient-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {post.categoria && (
              <Badge variant="secondary" className="mb-4">{post.categoria}</Badge>
            )}
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">{post.titulo}</h1>
            <div className="flex items-center justify-center gap-6 text-sm opacity-90">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {formatDataBR(post.data)}
              </span>
              {post.autor && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.autor}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Imagem de capa */}
      {post.capaBase64 && (
        <div className="container -mt-10 md:-mt-16 relative z-10">
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video bg-muted">
            <img src={post.capaBase64} alt={post.titulo} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-5">
              {paragrafos.map((paragrafo, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-foreground/80">
                  {paragrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outros posts */}
      {outrosPosts.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
                Continue Lendo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {outrosPosts.map((p) => (
                  <Link key={p.id} href={`${ROUTES.blog}/${p.slug}`}>
                    <Card className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="p-6">
                        <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDataBR(p.data)}
                        </span>
                        <h3 className="font-display text-base font-bold mb-2 line-clamp-2">{p.titulo}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{p.resumo}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
