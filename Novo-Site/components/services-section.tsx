import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Target, BarChart3, MessageSquare, Camera } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Otimização de Perfil no Google",
    description: "Perfil completo, fotos estratégicas e categorias corretas para mais cliques e mais visitas.",
  },
  {
    icon: Target,
    title: "Estratégia de Palavras-Chave",
    description: "Descubra como seus clientes te procuram e apareça nos resultados certos.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de Desempenho",
    description: "Acompanhe suas visualizações, cliques e chamadas com dados claros e diretos.",
  },
  {
    icon: MessageSquare,
    title: "Consultoria Digital",
    description: "Uma sessão personalizada para montar seu plano prático de presença digital.",
  },
  {
    icon: Camera,
    title: "Conteúdo Visual Local",
    description: "Imagens e artes digitais que destacam seu negócio e conectam com seu público.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              Soluções Práticas para o Seu Negócio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos serviços focados em resultados reais para sua presença digital local.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <service.icon className="text-accent" size={24} />
                    </div>
                    <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Service - Highlighted */}
          <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Serviço Completo de SEO Local</h3>
              <p className="text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
                Combinamos todos os serviços acima em uma estratégia integrada que garante máxima visibilidade para seu
                negócio local.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-accent font-medium">
                <span className="bg-accent/10 px-3 py-1 rounded-full">✓ Análise Completa</span>
                <span className="bg-accent/10 px-3 py-1 rounded-full">✓ Otimização Total</span>
                <span className="bg-accent/10 px-3 py-1 rounded-full">✓ Acompanhamento Mensal</span>
                <span className="bg-accent/10 px-3 py-1 rounded-full">✓ Suporte Contínuo</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
