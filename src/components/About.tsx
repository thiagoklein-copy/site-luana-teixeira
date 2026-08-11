import Image from "next/image";
import CheckItem from "./CheckItem";
import FadeIn from "./FadeIn";
import QuoteFrame from "./QuoteFrame";

const VALUES = [
  "Acolhimento",
  "Escuta",
  "Ética",
  "Respeito",
  "Cuidado",
  "Singularidade",
  "Presença",
] as const;

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* TODO: substituir por retrato editorial real da Luana */}
            <Image
              src="/images/luana-teixeira.png"
              alt="Retrato de Luana Teixeira"
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-display text-base tracking-[0.12em] text-primary">
            Quem sou eu
          </p>
          <h2
            id="about-heading"
            className="mt-2 font-display text-3xl font-normal tracking-wide text-ink sm:text-4xl"
          >
            Olá, eu sou a Luana
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted sm:text-[1.05rem]">
            <p>
              Sou psicóloga, graduada pela Universidade do Vale do Rio dos Sinos
              (UNISINOS), com pós-graduação em Psicologia Hospitalar pelo
              Hospital Moinhos de Vento, em Porto Alegre.
            </p>
            <p>
              Atuo na clínica particular com adolescentes, adultos e idosos,
              oferecendo um espaço de escuta ética e acolhedora, orientado pela
              psicanálise. Mantenho formação contínua por meio de grupos de
              estudos e aprofundamento teórico nessa abordagem.
            </p>
            <p>
              Acompanho demandas relacionadas à ansiedade, relações
              interpessoais, maternidade, luto, autoestima e momentos de
              transição de vida, buscando, junto ao paciente, a construção de
              novos sentidos.
            </p>
          </div>

          <div className="mt-8">
            <QuoteFrame>
              Gosto de lembrar que sempre há tempo para se encontrar e se
              pertencer no que se é por inteiro.
            </QuoteFrame>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {VALUES.map((value) => (
              <CheckItem key={value} label={value} />
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
