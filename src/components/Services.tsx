import CheckItem from "./CheckItem";
import FadeIn from "./FadeIn";
import WhatsAppButton from "./WhatsAppButton";

const SERVICES = [
  {
    title: "Terapia para Adolescentes",
    description:
      "Um espaço de escuta para as questões próprias da adolescência — identidade, relações e os primeiros grandes desafios emocionais.",
    checklist: [
      "Escuta ética e sem julgamento",
      "Respeito ao tempo de cada um",
      "Espaço para se reconhecer por inteiro",
    ],
  },
  {
    title: "Terapia Individual para Adultos",
    description:
      "Para quem busca compreender ansiedades, relações e momentos de transição — um espaço para construir novos sentidos.",
    checklist: [
      "Escuta psicanalítica individualizada",
      "Acompanhamento em momentos de transição",
      "Seu ritmo, sua história",
    ],
  },
  {
    title: "Terapia para a Terceira Idade",
    description:
      "Acolhimento sensível para as questões próprias do envelhecer, das perdas e dos recomeços, com respeito ao tempo de cada história.",
    checklist: [
      "Escuta sensível às perdas e recomeços",
      "Respeito à singularidade de cada fase",
      "Espaço seguro para elaborar histórias",
    ],
  },
] as const;

export default function Services() {
  return (
    <section
      id="atendimento"
      aria-labelledby="services-heading"
      className="bg-beige py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-base tracking-[0.12em] text-primary-dark">
            Como posso te ajudar
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-display text-3xl font-normal tracking-wide text-ink sm:text-4xl"
          >
            Um espaço para cada fase da vida
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Cada processo é único. Trabalho com escuta psicanalítica, respeitando
            o tempo e a história de cada pessoa.
          </p>
        </FadeIn>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08} as="li">
              <article className="flex h-full flex-col border border-primary/30 bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <h3 className="font-display text-xl font-medium leading-snug tracking-wide text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.checklist.map((item) => (
                    <CheckItem key={item} label={item} />
                  ))}
                </ul>
                <div className="mt-8">
                  <WhatsAppButton
                    label="Agendar conversa"
                    className="w-full"
                    message="Olá, Luana! Vi seu site e gostaria de agendar uma conversa sobre atendimento."
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
