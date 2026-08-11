import FadeIn from "./FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "Encontrei na Luana um espaço onde finalmente consegui parar e me escutar de verdade. Cada sessão foi um convite gentil para olhar pra dentro.",
    name: "Patrícia M.",
    role: "Terapia individual",
    initials: "PM",
  },
  {
    quote:
      "Depois que me aposentei, sentia que tinha perdido meu lugar no mundo. A Luana me ajudou a encontrar sentido nessa nova fase, com muito respeito ao meu tempo.",
    name: "Osvaldo T.",
    role: "Terapia para terceira idade",
    initials: "OT",
  },
  {
    quote:
      "Sou adolescente e cheguei bem insegura. Ela nunca me fez sentir julgada — hoje consigo falar sobre o que sinto sem medo.",
    name: "Bruna L.",
    role: "Terapia para adolescentes",
    initials: "BL",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="bg-beige/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-base tracking-[0.12em] text-primary">
            Depoimentos
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 font-display text-3xl font-normal tracking-wide text-ink sm:text-4xl"
          >
            O que dizem as pessoas que já passaram por aqui
          </h2>
        </FadeIn>

        <ul className="mt-14 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((item, i) => (
            <FadeIn
              key={item.name}
              delay={i * 0.08}
              as="li"
              className="min-w-[85%] snap-center sm:min-w-[70%] md:min-w-0"
            >
              <article className="flex h-full flex-col border border-primary/10 bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-medium text-primary-dark"
                    aria-hidden="true"
                  >
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="text-xs text-ink-muted">{item.role}</p>
                  </div>
                </footer>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
