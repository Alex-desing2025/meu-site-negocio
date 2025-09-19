"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "O serviço é realmente gratuito?",
    answer:
      "Sim. Durante o período de lançamento, a otimização e a análise são oferecidas gratuitamente para empreendedores locais.",
  },
  {
    question: "Como funciona a otimização?",
    answer:
      "Analisamos e ajustamos todo o seu perfil, desde as informações básicas até a criação de conteúdo visual e a gestão de avaliações.",
  },
  {
    question: "Preciso ter um site?",
    answer: "Não. Nosso foco total é no seu Perfil da Empresa no Google.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Os primeiros resultados aparecem entre 15 a 30 dias após a otimização, com melhorias contínuas nos meses seguintes.",
  },
  {
    question: "Vocês atendem apenas a Zona Oeste?",
    answer:
      "Nossa especialização é no Rio de Janeiro e em todo o Brasil, com foco em negócios locais e estratégias personalizadas para cada região.",
  },
  {
    question: "Como é feito o acompanhamento?",
    answer:
      "Enviamos relatórios mensais com métricas de desempenho e fazemos ajustes contínuos na estratégia conforme necessário.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">Suas Dúvidas, Respondidas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esclarecemos as principais questões sobre nossos serviços de SEO local.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="text-accent flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-accent flex-shrink-0" size={20} />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="border-t border-border pt-4">
                      <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Ainda tem dúvidas?</h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco e tire todas as suas dúvidas sobre SEO local.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/qr/6XMZQCAL7POBO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
                  >
                    Falar no WhatsApp
                  </a>
                  <a
                    href="mailto:negociovisivel2025@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                  >
                    Enviar E-mail
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
