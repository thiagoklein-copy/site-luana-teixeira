"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS, whatsappUrl } from "@/lib/constants";
import FadeIn from "./FadeIn";
import WhatsAppButton from "./WhatsAppButton";

const OBJECTIVES = [
  "Terapia para mim (adulto)",
  "Terapia para adolescente",
  "Terapia para idoso da família",
  "Ainda não sei, quero conversar",
] as const;

export default function Contact() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [objetivo, setObjetivo] = useState<(typeof OBJECTIVES)[number]>(
    OBJECTIVES[0]
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = [
      `Olá, Luana! Meu nome é ${nome || "—"}.`,
      `Telefone/WhatsApp: ${telefone || "—"}.`,
      `Objetivo: ${objetivo}.`,
      "Vi seu site e gostaria de agendar uma conversa.",
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <p className="font-display text-base tracking-[0.12em] text-primary-dark">
            Vamos conversar
          </p>
          <h2
            id="contact-heading"
            className="mt-2 font-display text-3xl font-normal tracking-wide text-ink sm:text-4xl"
          >
            O primeiro passo pode ser mais leve do que parece
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Me conta um pouco do que você busca. Responderei pelo WhatsApp para
            alinharmos horários, formato (presencial ou online) e tirar dúvidas
            com calma.
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Chamar no WhatsApp" />
          </div>

          <address className="mt-10 space-y-3 not-italic text-sm text-ink-muted">
            <p>
              <span className="font-medium text-ink">Telefone: </span>
              <a
                href={`tel:+${BUSINESS.phoneE164}`}
                className="transition-colors hover:text-primary"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-medium text-ink">Instagram: </span>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {BUSINESS.instagramHandle}
              </a>
            </p>
            <p>
              <span className="font-medium text-ink">Endereço: </span>
              {BUSINESS.address.short}
            </p>
          </address>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="border border-primary/30 bg-beige p-6 shadow-soft sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como posso te chamar?"
                  className="w-full border border-primary/30 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-shadow focus:border-primary-dark focus:shadow-soft"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Telefone/WhatsApp
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(51) 99999-9999"
                  className="w-full border border-primary/30 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-shadow focus:border-primary-dark focus:shadow-soft"
                />
              </div>

              <div>
                <label
                  htmlFor="objetivo"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Qual seu objetivo?
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value as typeof OBJECTIVES[number])}
                  className="w-full border border-primary/30 bg-cream px-4 py-3 text-sm text-ink outline-none transition-shadow focus:border-primary-dark focus:shadow-soft"
                >
                  {OBJECTIVES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
              >
                Quero agendar minha conversa
              </button>

              <p className="text-center text-xs leading-relaxed text-ink-muted">
                Ao enviar, você será redirecionada ao WhatsApp com sua mensagem
                pronta.
              </p>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
