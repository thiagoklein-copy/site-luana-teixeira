type CheckItemProps = {
  label: string;
  className?: string;
};

/** Small circular check icon + label (Atvisor-style checkmark list). */
export default function CheckItem({ label, className = "" }: CheckItemProps) {
  return (
    <li className={`flex items-start gap-2.5 ${className}`}>
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary-dark"
        aria-hidden="true"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6.5L4.5 9L10 3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-sm leading-relaxed text-ink sm:text-[0.95rem]">
        {label}
      </span>
    </li>
  );
}
