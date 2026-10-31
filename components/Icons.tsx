import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ShieldIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.4 7.5 9.5 4.4-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
  </svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.4 7.5 9.5 4.4-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12.2 2.3 2.3 4.2-4.6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 4h3.5l1.7 4.2-2.1 1.3a11 11 0 0 0 6.4 6.4l1.3-2.1L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const FileSignIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 14.5c1-1.5 1.8-1.5 2.2-.3.4 1.2 1.2 1 2.3-.7" />
  </svg>
);

export const SearchShieldIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m15 15 5.5 5.5M8 10.5l1.8 1.8L13 9" />
  </svg>
);

export const ReportIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

export const GraduationIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
    <path d="M6.5 12v4.2c0 1.2 2.5 2.8 5.5 2.8s5.5-1.6 5.5-2.8V12M21.5 9.5v6" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const StoreIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 9.5 5.5 4h13L20 9.5M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5 12.5V20h14v-7.5M10 20v-4.5h4V20" />
  </svg>
);

export const TagIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 12.2V4.5A1.5 1.5 0 0 1 4.5 3h7.7a1.5 1.5 0 0 1 1.06.44l7.3 7.3a1.5 1.5 0 0 1 0 2.12l-7.7 7.7a1.5 1.5 0 0 1-2.12 0l-7.3-7.3A1.5 1.5 0 0 1 3 12.2Z" />
    <circle cx="8" cy="8" r="1.3" />
  </svg>
);

export const HandshakeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m3 11 4-4 4 1.5L14 6l7 6-3 3M3 11l5 5m0 0 2 2m-2-2-1 1m4-1 2 2m-2-2 1.5-1.5M13 17l2 2m-2-2-1 1" />
  </svg>
);

export const LockOpenIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 7.6-1.7M12 15v2" />
  </svg>
);

export const PuzzleIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v4h-4v-2a2 2 0 1 0-4 0v2H6v-4H4a2 2 0 1 1 0-4h2V6h4V4Z" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
