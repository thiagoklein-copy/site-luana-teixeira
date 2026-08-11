import WhatsAppButton from "./WhatsAppButton";
import FadeIn from "./FadeIn";
import Monogram from "./Monogram";

const DIFFERENTIATORS = [
  {
    title: "Escuta Psicanalítica",
    description: "Acolhimento ético e sem julgamento",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21c4.5-3.5 7.5-6.8 7.5-10.5A7.5 7.5 0 0012 3a7.5 7.5 0 00-7.5 7.5C4.5 14.2 7.5 17.5 12 21z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Adolescentes, adultos e idosos",
    description: "Um espaço para cada fase da vida",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 19c.3-2 1.8-3.5 3.5-3.5 1.4 0 2.6 1 3.2 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Presencial e Online",
    description: "São Leopoldo e todo o Brasil",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.8 3.8 5.6 3.8 8.5S14.5 17.7 12 20.5C9.5 17.7 8.2 14.9 8.2 12S9.5 6.3 12 3.5z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

export default function Hero() {
  return (
    <section id="topo" aria-label="Apresentação" className="relative bg-cream pt-20 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
        {/* Text — left */}
        <FadeIn className="order-2 lg:order-1">
          <p className="mb-4 font-display text-base tracking-[0.12em] text-primary-dark sm:text-lg">
            Psicóloga Clínica · Percurso em Psicanálise
          </p>

          <h1 className="font-display text-4xl font-normal leading-[1.2] tracking-wide text-ink sm:text-5xl lg:text-[3.15rem]">
            Abra a porta e pertença a cada espaço dentro de ti
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Psicoterapia com abordagem psicanalítica para adolescentes, adultos
            e idosos, em São Leopoldo e online. Um espaço ético e acolhedor para
            você se reconhecer por inteiro.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Falar no WhatsApp" />
            <a
              href="#sobre"
              className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              Conhecer meu trabalho ↓
            </a>
          </div>
        </FadeIn>

        {/* Photo slot — right (sem foto até receber retrato da Luana) */}
        <FadeIn delay={0.1} className="relative order-1 lg:order-2">
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-primary/30 bg-beige sm:aspect-[3/4] lg:aspect-[4/5]">
            {/* TODO: inserir retrato editorial real da Luana em /images/luana-teixeira.jpg */}
            <div className="flex flex-col items-center gap-4 px-6 text-center">
              <Monogram size="md" />
              <p className="font-display text-sm tracking-[0.14em] text-primary-dark">
                Foto em breve
              </p>
            </div>
          </div>

          {/* Floating credential card */}
          <aside className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-primary/35 bg-beige p-4 shadow-glass sm:left-auto sm:right-4 sm:max-w-[260px]">
            <p className="font-display text-lg font-medium leading-snug tracking-wide text-primary-dark">
              Atendimento presencial em São Leopoldo e online
            </p>
          </aside>
        </FadeIn>
      </div>

      {/* Icon-label trio row (Atvisor pattern) */}
      <div className="mt-8 border-y border-primary/25 bg-beige sm:mt-12">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3 lg:px-8 lg:py-12">
          {DIFFERENTIATORS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08} as="li">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-cream text-primary-dark">
                  {item.icon}
                </span>
                <div>
                  <p className="font-display text-base font-medium tracking-wide text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-muted">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
