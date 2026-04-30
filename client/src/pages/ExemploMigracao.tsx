// ============================================================================
// EXEMPLO: Como usar o hook useContent nas páginas existentes
// ============================================================================
// Este arquivo mostra como migrar uma página para consumir dados dinâmicos
// da API em vez do config.ts estático.
//
// ANTES (estático):
//   import { NUMEROS_IMPACTO, INSTITUTO_INFO } from "@/config";
//
// DEPOIS (dinâmico):
//   import { useContent } from "@/hooks/useContent";
//   const { content, loading } = useContent();
//
// Exemplo aplicado à seção "Números de Impacto" da Home:
// ============================================================================

import { useContent } from "@/hooks/useContent";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Award, Package, Stethoscope, TrendingUp, Target, Home as HomeIcon } from "lucide-react";
import { Loader2 } from "lucide-react";

// Mapa de ícone por descrição (adaptado do config.ts original)
const ICONES: Record<string, React.ElementType> = {
  "Voluntários":           Users,
  "Famílias":              HomeIcon,
  "Crianças/Adolescentes": Users,
  "Vidas Impactadas":      Heart,
  "Toneladas alimentos":   Package,
  "Exames de saúde":       Stethoscope,
  "Taxa retenção":         TrendingUp,
  "Projetos Ativos":       Target,
};

export function NumerosDeImpacto() {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {content.numerosImpacto.map((item, i) => {
        const Icon = ICONES[item.descricao] ?? Target;
        return (
          <Card key={i} className="border-none shadow-md text-center">
            <CardContent className="p-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-bold text-2xl text-primary">{item.numero}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.descricao}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// ============================================================================
// Exemplo de migração completa de uma página
// ============================================================================
//
// Na página Home.tsx, substitua:
//
//   const voluntarios = 40;
//   const familias = 50;
//
// Por:
//
//   const { content } = useContent();
//   const { numerosImpacto, instituto } = content;
//
// E nos JSX hardcoded como:
//   <h1>Trabalhando para promover a dignidade humana...</h1>
//
// Use:
//   <h1>{instituto.descricao}</h1>
//
// ============================================================================
