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
        <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-3">
          {CREDENTIALS.map((item) => (
            <CheckItem
              key={item}
              label={item}
              className="sm:[&>span:last-child]:text-ink sm:[&>span:last-child]:font-medium"
            />
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
