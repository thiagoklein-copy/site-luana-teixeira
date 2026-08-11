import { BUSINESS } from "@/lib/constants";

type MonogramProps = {
  className?: string;
  size?: "sm" | "md";
};

/**
 * Placeholder monogram "LT" (Luana Teixeira).
 * FLAG: confirmar com Luana o monograma real antes do lançamento —
 * a referência do Instagram mostrava "LF", que não corresponde às iniciais dela.
 */
export default function Monogram({ className = "", size = "sm" }: MonogramProps) {
  const dim = size === "sm" ? "h-8 w-8 text-[10px]" : "h-10 w-10 text-xs";

  return (
    <span
      className={`inline-flex ${dim} items-center justify-center rounded-full border border-primary-dark/55 bg-beige font-display font-medium tracking-[0.12em] text-primary-dark ${className}`}
      aria-hidden="true"
      title="Monograma provisório — confirmar com Luana"
    >
      {BUSINESS.monogram}
    </span>
  );
}
