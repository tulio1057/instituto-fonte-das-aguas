import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSiteContent } from "@/contexts/ContentContext";

export default function Contato() {
  const { content } = useSiteContent();
  const { instituto } = content;

  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.nome}.\n\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nAssunto: ${formData.assunto}\n\nMensagem:\n${formData.mensagem}`;
    window.open(`https://wa.me/${instituto.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Você será redirecionado para o WhatsApp!");
    setFormData({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  };

  const enderecoCompleto = `${instituto.endereco}, ${instituto.bairro}, ${instituto.cidade}/${instituto.estado}`;

  return (
    <div className="min-h-screen">
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">Estamos aqui para responder suas dúvidas e ouvir suas sugestões</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Formas de <span className="text-gradient">Contato</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Escolha a forma mais conveniente para você se comunicar conosco</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* WhatsApp */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/10 mb-6">
                  <Phone className="h-8 w-8 text-[#25D366]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">Envie uma mensagem e receba resposta rápida</p>
                <a
                  href={`https://wa.me/${instituto.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de falar com o Instituto Fonte das Águas.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  {instituto.telefone || instituto.whatsapp}
                </a>
              </CardContent>
            </Card>

            {/* Telefone */}
            {instituto.telefone && (
              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">Telefone</h3>
                  <p className="text-muted-foreground mb-6">Ligue durante o horário comercial</p>
                  <a
                    href={`tel:+55${instituto.telefone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {instituto.telefone}
                  </a>
                </CardContent>
              </Card>
            )}

            {/* Endereço */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Endereço</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {instituto.endereco}<br />{instituto.bairro}<br />
                  {instituto.cidade}/{instituto.estado} - CEP: {instituto.cep}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(enderecoCompleto)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-sm"
                >
                  Ver no Google Maps
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg bg-muted/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 08h às 17h<br />Sábados: 08h às 12h<br />Domingos e Feriados: Fechado
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formulário */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Envie uma <span className="text-gradient">Mensagem</span></h2>
              <p className="text-lg text-muted-foreground">Preencha o formulário abaixo e entraremos em contato assim que possível</p>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome completo" className="mt-2" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                      <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required placeholder="(79) 9 9999-9999" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="assunto">Assunto *</Label>
                    <select id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-input bg-background mt-2">
                      <option value="">Selecione um assunto</option>
                      <option value="Voluntariado">Voluntariado</option>
                      <option value="Doação">Doação</option>
                      <option value="Parceria">Parceria</option>
                      <option value="Dúvida Geral">Dúvida Geral</option>
                      <option value="Sugestão">Sugestão</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} required placeholder="Sua mensagem aqui..." className="mt-2 min-h-32" />
                  </div>
                  <Button type="submit" size="lg" className="w-full gradient-secondary text-white font-semibold">
                    Enviar Mensagem via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">Você será redirecionado para o WhatsApp para enviar sua mensagem</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Acompanhe Nossas <span className="text-gradient">Redes Sociais</span></h2>
            <p className="text-lg text-muted-foreground mb-8">Fique por dentro de todas as ações, notícias e momentos do Instituto</p>
            <a href={instituto.instagramUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
              {instituto.instagram}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Pronto para Fazer a Diferença?</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">Seja como voluntário, doador ou parceiro, sua contribuição transforma vidas no Bairro Industrial.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/como-ajudar">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">Como Ajudar <Heart className="ml-2 h-5 w-5" /></Button>
              </a>
              <a href={`https://wa.me/${instituto.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre como posso ajudar o Instituto.")}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">Fale Conosco <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
