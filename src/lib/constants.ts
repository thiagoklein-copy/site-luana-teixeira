export const BUSINESS = {
  name: "Luana Teixeira",
  shortName: "Luana Teixeira",
  title:
    "Psicóloga Clínica · Especialista em Psicologia Hospitalar · CRP 07/34651",
  tag: "Psicóloga Clínica · CRP 07/34651",
  crp: "CRP 07/34651",
  phoneDisplay: "(51) 99893-4691",
  phoneE164: "5551998934691",
  /** FLAG: confirmar monograma com Luana antes do lançamento — placeholder "LT" (referência IG mostrava "LF") */
  monogram: "LT",
  instagramHandle: "@psico.luanateixeira",
  instagramUrl: "https://www.instagram.com/psico.luanateixeira",
  linkedinUrl: "https://www.linkedin.com/in/luana-teixeira-9769a980",
  address: {
    street: "Av. João Corrêa, 1000",
    neighborhood: "Centro",
    city: "São Leopoldo",
    state: "RS",
    postalCode: "93020-668",
    complement: "Condomínio do Edifício Comercial Astolfi",
    full: "Av. João Corrêa, 1000 - Centro, São Leopoldo - RS, 93020-668",
    short: "Av. João Corrêa, 1000 - Centro, São Leopoldo - RS",
  },
  siteUrl: "https://www.luanateixeira.psi.br",
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Luana! Vi seu site e gostaria de agendar uma conversa.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${BUSINESS.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;
