import {
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  Heart,
  LockKeyhole,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const APP_STORE_URL = 'https://apps.apple.com/us/app/inkly-daily-vibes/id6760991001';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Capture a real moment',
    text: 'A late coffee. A small win. The sky from the train. Start with the things that are already yours.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'Turn it into a reflection',
    text: 'Inkly helps you find a few honest words for the feeling—personal, not poster-perfect.',
  },
  {
    icon: Heart,
    number: '03',
    title: 'Return to it privately',
    text: 'Your memories are yours to keep. Share only when you deliberately choose to.',
  },
];

const faqs = [
  [
    'Is Inkly a social network?',
    'No. Inkly starts private. You can choose friends or public visibility for a memory only when you want to share it.',
  ],
  [
    'What happens to my photo when I make a reflection?',
    'Inkly sends the photo or processed image data to its secure backend and AI provider to help create the reflection. Saved photos are stored privately by default.',
  ],
  [
    'Can I edit the reflection?',
    'Yes. You can review and refine generated words before you save or share them.',
  ],
  [
    'How do I restore a purchase?',
    'Open the paywall in the app and choose Restore purchases. Your store account manages billing and active subscriptions.',
  ],
];

function Wordmark() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="Inkly: Daily Vibes home"
    >
      <Image
        src="/inkly-logo.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-[11px] object-cover shadow-[0_0_24px_rgba(141,77,232,.45)]"
      />
      <span>
        <span className="block text-lg font-semibold leading-5 tracking-[-.04em] text-white">
          Inkly
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[.14em] text-fuchsia-200">
          Daily Vibes
        </span>
      </span>
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c031a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-sm text-sm leading-6 text-violet-200/60">
            A quieter place for the moments you want to remember.
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-violet-100/80"
        >
          <Link className="transition hover:text-fuchsia-200" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-fuchsia-200" href="/terms">
            Terms
          </Link>
          <Link className="transition hover:text-fuchsia-200" href="/support">
            Support
          </Link>
          <Link
            className="transition hover:text-fuchsia-200"
            href="/delete-account"
          >
            Delete account
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export { SiteFooter, Wordmark };

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#130625] text-violet-50">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Wordmark />
        <nav
          className="hidden items-center gap-6 text-sm text-violet-100/75 sm:flex"
          aria-label="Main navigation"
        >
          <a className="transition hover:text-fuchsia-200" href="#how-it-works">
            How it works
          </a>
          <a className="transition hover:text-fuchsia-200" href="#privacy">
            Privacy
          </a>
          <a className="transition hover:text-fuchsia-200" href="#faq">
            FAQ
          </a>
        </nav>
        <a
          className="shrink-0 rounded-full border border-fuchsia-200/30 bg-[#b95add] px-3 py-2 text-xs font-semibold text-[#21062f] transition hover:bg-[#cf80ec] sm:px-4 sm:text-sm"
          href={APP_STORE_URL}
        >
          Download on the App Store
        </a>
      </header>

      <section className="relative isolate mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-28 lg:pt-20">
        <div className="absolute -left-32 top-8 -z-10 size-[30rem] rounded-full bg-[#8d4de8]/25 blur-[110px]" />
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-fuchsia-200">
            <span className="size-1.5 rounded-full bg-[#be55cc]" /> Inkly: Daily
            Vibes
          </p>
          <h1 className="max-w-xl font-serif text-5xl leading-[.98] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
            A photo journal for the moment you need to remember.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-violet-100/75">
            Capture a real moment. Turn it into a personal reflection. Keep it
            private—or share it intentionally.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#b95add] px-5 py-3 text-sm font-semibold text-[#21062f] transition hover:bg-[#cf80ec]"
              href={APP_STORE_URL}
            >
              Download on the App Store <ArrowRight className="size-4" />
            </a>
            <a
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-violet-100 transition hover:text-fuchsia-200"
              href="#how-it-works"
            >
              See how it works <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -right-4 top-12 size-40 rounded-full bg-[#e76247]/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-100/20 bg-[#251047] p-3 shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem]">
              <Image
                src="/inkly-app-preview.png"
                alt="Inkly photo journal app preview"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover opacity-80"
              />
            </div>
            <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-fuchsia-100/20 bg-[#210a42]/90 p-5 shadow-xl backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-fuchsia-200">
                Today&apos;s reflection
              </p>
              <p className="mt-2 font-serif text-2xl leading-tight text-white">
                “You made room for quiet. Let it stay with you.”
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-violet-100/80">
                <LockKeyhole className="size-3.5 text-fuchsia-200" /> Private by
                default
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-[#f7f2ff] py-20 text-[#210a42] sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7433ca]">
            A gentler ritual
          </p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl">
              From photo to reflection in three steps.
            </h2>
            <p className="max-w-sm text-base leading-7 text-violet-950/65">
              Capture a moment, put the feeling into words, and keep the memory
              close.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-violet-200 bg-violet-200 md:grid-cols-3">
            {steps.map(({ icon: Icon, number, title, text }) => (
              <article key={number} className="bg-[#fcfaff] p-7 sm:p-9">
                <div className="flex items-start justify-between">
                  <Icon className="size-6 text-[#8437db]" />
                  <span className="text-sm font-medium text-violet-400">
                    {number}
                  </span>
                </div>
                <h3 className="mt-14 font-serif text-2xl tracking-[-.025em]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-violet-950/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="privacy"
        className="border-y border-white/10 bg-[#251047] py-20 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="grid size-12 place-items-center rounded-2xl bg-[#b95add] text-[#21062f]">
              <LockKeyhole className="size-6" />
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[.18em] text-fuchsia-200">
              Privacy, without the fine print feeling
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl">
              Your memories begin as yours alone.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                'Private by default',
                'Saved photos are private unless you actively choose friends or public visibility.',
              ],
              [
                'Intentional sharing',
                'You control whether a moment is only yours, shared with friends, or public.',
              ],
              [
                'Clear AI processing',
                'Inkly processes selected images to create reflections—never to train a public feed.',
              ],
              [
                'Account control',
                'Delete your account inside the app whenever you need to. Your subscription is managed separately by your store.',
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-fuchsia-100/15 bg-[#3b1968] p-5"
              >
                <Check className="size-4 text-fuchsia-200" />
                <h3 className="mt-5 font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-violet-100/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ff] py-20 text-[#210a42] sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7433ca]">
              Built around the moment
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl">
              Small touches that make coming back feel good.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                'A reflection you can make your own',
                'Edit the words before you keep them—so the memory still sounds like you.',
              ],
              [
                'A calendar of moments',
                'Find the days you want to revisit without turning your life into a feed.',
              ],
              [
                'Reminders on your terms',
                'A gentle prompt is available when you choose it, and easy to switch off.',
              ],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl bg-[#ece1ff] p-7">
                <p className="text-sm font-semibold text-[#7433ca]">Inkly</p>
                <h3 className="mt-20 font-serif text-2xl tracking-[-.025em]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-violet-950/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#130625] py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-fuchsia-200">
              Questions, answered
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl">
              The important things.
            </h2>
            <p className="mt-5 text-violet-100/60">
              Need a hand?{' '}
              <Link
                className="text-fuchsia-200 underline underline-offset-4"
                href="/support"
              >
                Visit support
              </Link>
              .
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-white">
                  <span>{question}</span>
                  <span className="text-xl text-fuchsia-200 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-6 text-violet-100/65">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="inkly-gradient py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-white/75">
              Now on the App Store
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-.04em] sm:text-5xl">
              Keep the moments that keep you.
            </h2>
          </div>
          <a
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#21062f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3b1968]"
            href={APP_STORE_URL}
          >
            Download on the App Store <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
