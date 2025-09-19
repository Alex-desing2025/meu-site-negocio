import Image from "next/image"
import { MessageSquare, Mail, Instagram, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="https://negociovisivel.wordpress.com/wp-content/uploads/2025/09/cropped-imagem-1-1.png"
                  alt="Negócio Visível Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Negócio Visível</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Especialistas em SEO local para negócios físicos. Transformamos sua presença digital em clientes reais.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <span>Atendimento focado no Rio de Janeiro e em todo o Brasil</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/qr/6XMZQCAL7POBO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageSquare size={16} />
                  WhatsApp
                </a>
                <a
                  href="mailto:negociovisivel2025@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  E-mail
                </a>
                <a
                  href="https://www.instagram.com/visivelnegocio?igsh=MXE3eXJwc3p1N3c2cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/80">
                © 2025 Negócio Visível. Todos os direitos reservados.
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://wa.me/qr/6XMZQCAL7POBO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageSquare size={20} />
                </a>
                <a
                  href="mailto:negociovisivel2025@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.instagram.com/visivelnegocio?igsh=MXE3eXJwc3p1N3c2cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
