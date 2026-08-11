import CheckItem from "./CheckItem";
import FadeIn from "./FadeIn";

const CREDENTIALS = [
  "Graduada em Psicologia pela UNISINOS",
  "Pós-graduada em Psicologia Hospitalar · Hospital Moinhos de Vento (POA)",
  "Abordagem Psicanalítica",
] as const;

export default function TrustBar() {
  return (
    <section
      aria-label="Credenciais"
      className="border-b border-primary/25 bg-beige"
    >
      <FadeIn className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center md:gap-6 lg:gap-8">
          {CREDENTIALS.map((item) => (
            <CheckItem
              key={item}
              label={item}
              className="md:justify-center md:[&>span:last-child]:text-center md:[&>span:last-child]:text-[0.85rem] md:[&>span:last-child]:leading-snug md:[&>span:last-child]:font-medium lg:[&>span:last-child]:text-sm"
            />
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
