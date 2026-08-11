import FadeIn from "./FadeIn";
import QuoteFrame from "./QuoteFrame";

export default function Approach() {
  return (
    <section
      id="visao"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden bg-primary-dark py-24 sm:py-32"
    >
      {/* TODO: trocar fundo sólido por foto de interior/natureza com luz suave */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(242,237,226,0.12)_0%,_transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <FadeIn>
          <p className="font-display text-base tracking-[0.12em] text-beige/90">
            Minha visão
          </p>
          <h2
            id="approach-heading"
            className="mt-3 font-display text-3xl font-normal leading-tight tracking-wide text-cream sm:text-4xl lg:text-5xl"
          >
            Pertença a cada espaço dentro de ti
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Esse espaço é para ser um respiro para o teu dia a dia. Um convite
            para abrir as portas internas e ver os caminhos que há na imensidão
            do teu mundo interior — respeitando o teu tempo e a tua
            singularidade.
          </p>
          <div className="mt-10 flex justify-center">
            <QuoteFrame className="max-w-lg">
              Acredito na importância de cada pessoa poder se reconhecer e se
              apropriar dos seus próprios espaços internos.
            </QuoteFrame>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
