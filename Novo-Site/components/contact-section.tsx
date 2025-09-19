import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Mail, Instagram, Clock, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              Pronto para Tornar seu Negócio Visível?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Solicite sua análise gratuita. O atendimento inicial leva apenas 60 minutos e é por chamada de voz.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    <MessageSquare className="text-green-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">Resposta imediata e atendimento personalizado</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/qr/6XMZQCAL7POBO1" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">E-mail</h3>
                <p className="text-muted-foreground mb-6">Envie sua dúvida detalhada por e-mail</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <a href="mailto:negociovisivel2025@gmail.com">Enviar E-mail</a>
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
                    <Instagram className="text-pink-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Instagram</h3>
                <p className="text-muted-foreground mb-6">Acompanhe dicas e novidades</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white bg-transparent"
                >
                  <a
                    href="https://www.instagram.com/visivelnegocio?igsh=MXE3eXJwc3p1N3c2cw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-12">
            <Card className="bg-gradient-to-r from-accent to-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Análise Gratuita do Seu Negócio</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Descubra como seu negócio pode aparecer no topo das buscas locais e atrair mais clientes.
                </p>
                <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                  <a href="https://forms.gle/rARwrT2AyBaKLqLn9" target="_blank" rel="noopener noreferrer">
                    Solicitar Análise Gratuita
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="text-accent" size={20} />
              <span className="text-muted-foreground">Resposta em 60 minutos</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-accent" size={20} />
              <span className="text-muted-foreground">Rio de Janeiro e em todo o Brasil</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-accent" size={20} />
              <span className="text-muted-foreground">Atendimento por voz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
