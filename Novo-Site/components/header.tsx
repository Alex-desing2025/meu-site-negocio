"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="https://negociovisivel.wordpress.com/wp-content/uploads/2025/09/cropped-imagem-1-1.png"
              alt="Negócio Visível Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-primary">Negócio Visível</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Sobre
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
