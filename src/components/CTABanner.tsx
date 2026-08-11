import FadeIn from "./FadeIn";
import WhatsAppButton from "./WhatsAppButton";

export default function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-primary-dark py-16 sm:py-20"
    >
      <FadeIn className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2
          id="cta-heading"
          className="font-display text-3xl font-normal tracking-wide text-cream sm:text-4xl"
        >
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Se algo em você pediu um espaço de escuta, esse pode ser o momento. Me
          chama no WhatsApp — vamos com calma, sem pressão.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Fale comigo no WhatsApp" variant="dark" />
        </div>
      </FadeIn>
    </section>
  );
}
