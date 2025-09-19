import { Card, CardContent } from "@/components/ui/card"
import { Search, Target, Settings, BarChart3, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Análise",
    description: "Estudamos sua presença online atual.",
  },
  {
    number: "02",
    icon: Target,
    title: "Definição",
    description: "Identificamos as palavras-chave que seus clientes usam.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Otimização",
    description: "Otimizamos seu perfil no Google Meu Negócio.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Acompanhamento",
    description: "Monitoramos os resultados com relatórios mensais.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Ajuste",
    description: "Ajustamos a estratégia para garantir a evolução contínua.",
  },
]

export function MethodologySection() {
  return (
    <section id="como-funciona" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              Nosso Processo em 5 Passos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma metodologia comprovada que transforma sua presença digital em resultados reais.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <step.icon className="text-primary" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Flow Indicator */}
          <div className="hidden lg:flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-16 h-0.5 bg-accent/30"></div>
                </div>
              ))}
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Processo Transparente e Eficiente</h3>
              <p className="opacity-90">Cada etapa é documentada e você acompanha todo o progresso em tempo real.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
