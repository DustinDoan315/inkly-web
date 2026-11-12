import type { MouseEventHandler, SVGProps } from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/store-links';

export type Store = 'apple' | 'play';
type Tone = 'light' | 'dark';
type Variant = 'solid' | 'ghost';

function AppleMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

const STORES = {
  apple: {
    url: APP_STORE_URL,
    lead: 'Download on the',
    name: 'App Store',
    mark: AppleMark,
  },
  play: {
    url: PLAY_STORE_URL,
    lead: 'Get it on',
    name: 'Google Play',
    mark: PlayMark,
  },
} as const;

const FACE: Record<Tone, Record<Variant, string>> = {
  light: {
    solid:
      'bg-gradient-to-b from-[#d385f0] to-[#b356d6] text-[#21062f] shadow-[0_14px_34px_-14px_rgba(196,99,224,.9)] ring-1 ring-inset ring-white/25 hover:from-[#dd93f7] hover:to-[#c265e4] hover:shadow-[0_18px_40px_-14px_rgba(207,128,236,.85)]',
    ghost:
      'ring-1 ring-inset ring-fuchsia-200/30 bg-white/[.04] text-violet-50 backdrop-blur hover:ring-fuchsia-200/60 hover:bg-white/[.08]',
  },
  dark: {
    solid:
      'bg-[#21062f] text-white shadow-[0_14px_34px_-16px_rgba(19,6,37,.9)] ring-1 ring-inset ring-white/20 hover:bg-[#33104d]',
    ghost:
      'ring-1 ring-inset ring-white/35 bg-white/[.08] text-white backdrop-blur hover:ring-white/60 hover:bg-white/[.14]',
  },
};

const TILE: Record<Tone, Record<Variant, string>> = {
  light: {
    solid: 'bg-[#21062f] text-white',
    ghost: 'bg-white/10 text-white ring-1 ring-inset ring-white/15',
  },
  dark: {
    solid: 'bg-white text-[#21062f]',
    ghost: 'bg-[#21062f] text-white ring-1 ring-inset ring-white/15',
  },
};

const COMPACT_FACE: Record<Tone, Record<Variant, string>> = {
  light: {
    solid:
      'bg-gradient-to-b from-[#d385f0] to-[#b356d6] text-[#21062f] shadow-[0_6px_18px_-8px_rgba(196,99,224,.85)] ring-1 ring-inset ring-white/25 hover:from-[#dd93f7] hover:to-[#c265e4]',
    ghost:
      'ring-1 ring-inset ring-fuchsia-200/30 bg-white/[.04] text-violet-50 hover:ring-fuchsia-200/60 hover:bg-white/[.08]',
  },
  dark: {
    solid:
      'bg-[#21062f] text-white shadow-[0_6px_18px_-10px_rgba(19,6,37,.9)] ring-1 ring-inset ring-white/20 hover:bg-[#33104d]',
    ghost:
      'ring-1 ring-inset ring-white/35 bg-white/[.08] text-white hover:ring-white/60 hover:bg-white/[.14]',
  },
};

/**
 * Store download badge: brand mark, "Download on the / App Store" label, and a
 * hover lift. The solid variant carries the primary action, the ghost variant
 * sits next to it as the alternative. Pass `compact` for a single-line button
 * that drops its label below the `md` breakpoint.
 */
export function StoreBadge({
  store,
  tone = 'light',
  variant = 'solid',
  compact = false,
  className,
  onClick,
}: {
  store: Store;
  tone?: Tone;
  variant?: Variant;
  compact?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const listing = STORES[store];
  const Mark = listing.mark;

  if (compact) {
    return (
      <a
        aria-label={`Download Inkly on ${listing.name}`}
        className={[
          'inline-flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold',
          'transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-200',
          COMPACT_FACE[tone][variant],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        href={listing.url}
        onClick={onClick}
      >
        <Mark className="size-4 shrink-0" />
        <span className="hidden md:inline">{listing.name}</span>
      </a>
    );
  }

  return (
    <a
      className={[
        'group inline-flex items-center gap-3 rounded-2xl px-4 py-2.5',
        'transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-200',
        FACE[tone][variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      href={listing.url}
      onClick={onClick}
    >
      <span
        className={[
          'grid size-9 shrink-0 place-items-center rounded-xl transition duration-200 group-hover:scale-105',
          TILE[tone][variant],
        ].join(' ')}
      >
        <Mark className="size-[18px]" />
      </span>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium uppercase tracking-[.13em] opacity-70">
          {listing.lead}
        </span>
        <span className="mt-1 text-[15px] font-semibold tracking-[-.01em]">
          {listing.name}
        </span>
      </span>
    </a>
  );
}
