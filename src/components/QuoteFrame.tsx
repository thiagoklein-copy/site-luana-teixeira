import { type ReactNode } from "react";
import Monogram from "./Monogram";

type QuoteFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Editorial QuoteFrame — Instagram carousel motif, tuned for web contrast:
 * light surface on cream, dark caramel serif text, arrow + monogram accents.
 */
export default function QuoteFrame({
  children,
  className = "",
}: QuoteFrameProps) {
  return (
    <blockquote
      className={`relative border border-primary/35 bg-beige px-8 py-10 text-center shadow-soft sm:px-12 sm:py-12 ${className}`}
    >
      <span
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-primary-dark/50 text-primary-dark sm:right-5 sm:top-5"
        aria-hidden="true"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <p className="mx-auto max-w-lg font-display text-lg font-medium leading-relaxed tracking-wide text-primary-dark sm:text-xl sm:leading-relaxed">
        {children}
      </p>

      <span className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
        <Monogram size="sm" />
      </span>
    </blockquote>
  );
}
