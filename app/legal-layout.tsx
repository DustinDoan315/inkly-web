import Link from "next/link";
import { SiteFooter, Wordmark } from "./page";

type LegalLayoutProps = { eyebrow: string; title: string; updated: string; children: React.ReactNode };

export function LegalLayout({ eyebrow, title, updated, children }: LegalLayoutProps) {
  return <main className="min-h-screen bg-[#f4efe7] text-[#25211d]"><header className="bg-[#171513]"><div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8"><Wordmark /><Link className="text-sm text-stone-300 transition hover:text-amber-200" href="/">Back to Inkly</Link></div></header><article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24"><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9b5d29]">{eyebrow}</p><h1 className="mt-4 font-serif text-5xl leading-none tracking-[-.05em] sm:text-6xl">{title}</h1><p className="mt-5 border-b border-stone-300 pb-10 text-sm text-stone-500">Last updated: {updated}</p><div className="legal-copy mt-10 text-[1.02rem] leading-8 text-stone-700">{children}</div></article><SiteFooter /></main>;
}
