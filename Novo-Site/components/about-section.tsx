import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Award, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              Conectando Negócios Físicos ao Mundo Digital
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/connecting-business-digital.png"
                    alt="Conectando negócios físicos ao mundo digital através do SEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg">
                  <Award size={24} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Alex - Especialista em SEO Local</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Sou Alex, especialista em SEO local com foco em resultados reais. Minha missão é simples e eficiente:
                  nada genérico, nada automático.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Cada negócio é único e merece uma estratégia personalizada para transformar sua presença digital em um
                  fluxo real de clientes.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <Target size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Foco em Resultados</h4>
                    <p className="text-muted-foreground">
                      Estratégias personalizadas que geram clientes reais, não apenas números.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Especialização Local</h4>
                    <p className="text-muted-foreground">
                      Conhecimento profundo do mercado do Rio de Janeiro e em todo o Brasil, com suas particularidades
                      regionais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <User size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Atendimento Personalizado</h4>
                    <p className="text-muted-foreground">
                      Cada cliente recebe atenção individual e estratégia sob medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="mt-12 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <div className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed space-y-4">
                <p>
                  Somos uma consultoria estratégica especializada em SEO local. Nosso compromisso é posicionar negócios
                  com precisão, ética e inteligência — tornando cada empresa visível, relevante e competitiva no
                  ambiente digital.
                </p>
                <p>
                  Atuamos no Rio de Janeiro e em todo o Brasil, com foco em crescimento sustentável, respeito à
                  identidade de cada cliente e entrega de resultados reais.
                </p>
                <p className="font-semibold text-xl">Visibilidade é estratégia. Crescimento exige método.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
