type CerberusIconProps = {
  className?: string;
};

export default function CerberusIcon({ className }: CerberusIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* left head */}
      <path
        d="M3 10.5c0-2 1.4-3.5 3.2-3.5.7 0 1.3.2 1.8.6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M3.2 10.8c0 1.5.9 2.7 2.2 3.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="5" cy="9.8" r="0.65" fill="currentColor" />
      {/* center head */}
      <path
        d="M9.2 8C9.8 6.5 10.8 5.5 12 5.5s2.2 1 2.8 2.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M9.5 9.5c0 1.8 1.1 3 2.5 3s2.5-1.2 2.5-3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8.6" r="0.65" fill="currentColor" />
      {/* right head */}
      <path
        d="M16 7.6c.5-.4 1.1-.6 1.8-.6 1.8 0 3.2 1.5 3.2 3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M18.6 13.9c1.3-.4 2.2-1.6 2.2-3.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="19" cy="9.8" r="0.65" fill="currentColor" />
      {/* chest / body join */}
      <path
        d="M6.2 13.6c1.4 1.8 3.3 2.8 5.8 2.8s4.4-1 5.8-2.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* legs */}
      <path
        d="M9.5 16.4v3.4M14.5 16.4v3.4M8.5 21h7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
