import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
<section className="pt-24 pb-16 bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/seo-digital-connection.jpg')" }}>      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 fade-in">
            <MapPin size={16} />
            Especialistas em SEO Local - Rio de Janeiro e em todo o Brasil
          </div>

          {/* Main Heading */}
           <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-6 slide-up text-balance">
            Negócio Visível — Seu negócio em destaque no Google
          </h1>

          {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-white drop-shadow-md mb-8 slide-up text-balance">
            Apareça no topo das buscas e transforme visibilidade online em clientes reais.
          </h2>

         {/* Description */}
<p className="text-lg text-white drop-shadow-md mb-10 max-w-2xl mx-auto leading-relaxed slide-up">
  <span className="bg-black/50 px-3 py-1 rounded-md">
    Ajudamos empreendedores locais com negócios físicos a serem encontrados no Google Maps e nas pesquisas
    locais, atraindo mais clientes da sua região.
  </span>
</p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg group"
              asChild
            >
              <a
                href="https://forms.gle/rARwrT2AyBaKLqLn9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Solicitar Análise Gratuita
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp size={16} />
              Atendimento em 60 minutos
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center fade-in">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Foco em Resultados</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-3xl font-bold text-accent mb-2">60s</div>
              <div className="text-muted-foreground">Tempo de Resposta</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-3xl font-bold text-accent mb-2">Local</div>
              <div className="text-muted-foreground">Especialização</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
