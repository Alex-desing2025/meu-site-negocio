import { Card } from "@/components/ui/card"
import { AlertTriangle, Target, Users, TrendingUp } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              Seus clientes te procuram, mas encontram seus concorrentes?
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              No mercado atual, estar invisível no Google é o mesmo que não existir. Todos os dias, clientes na sua
              região buscam por produtos e serviços como os seus.
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Problem */}
            <Card className="p-8 border-destructive/20 bg-destructive/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="text-destructive" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-destructive">O Problema</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  Seu negócio não aparece nas buscas locais
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  Clientes encontram seus concorrentes primeiro
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  Perfil no Google incompleto ou desatualizado
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  Perda de clientes potenciais diariamente
                </li>
              </ul>
            </Card>

            {/* Solution */}
            <Card className="p-8 border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-accent">A Solução</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Apareça no topo das buscas locais
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Perfil otimizado e completo no Google
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Estratégia personalizada para seu negócio
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Fluxo constante de novos clientes
                </li>
              </ul>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="text-center bg-primary text-primary-foreground p-8 rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users size={32} />
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">A Negócio Visível garante que eles encontrem você</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Transformamos sua presença digital em um fluxo real de clientes na sua porta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
