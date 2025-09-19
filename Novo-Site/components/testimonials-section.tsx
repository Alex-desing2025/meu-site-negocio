import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Corte Disfarçado",
    location: "Rio de Janeiro e em todo o Brasil",
    business: "Barbearia",
    content:
      "Depois da otimização, minha barbearia começou a receber clientes que me encontraram direto no Google. Nunca imaginei que isso faria tanta diferença.",
    rating: 5,
  },
  {
    name: "Lanchonete do Zé",
    location: "Rio de Janeiro e em todo o Brasil",
    business: "Alimentação",
    content:
      "A consultoria foi simples, direta e me deu clareza sobre o que fazer. Já estou aplicando as dicas e vendo resultado.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              O que Nossos Clientes do Rio de Janeiro e em todo o Brasil Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados reais de empreendedores locais que transformaram sua presença digital.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                      <Quote size={16} />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 mt-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="text-accent fill-current" size={16} />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-foreground/80 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.business} • {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">+50</div>
                <div className="text-muted-foreground">Negócios Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-muted-foreground">Taxa de Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30 dias</div>
                <div className="text-muted-foreground">Primeiros Resultados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
