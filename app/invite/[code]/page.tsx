import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter, Wordmark } from '../../page';
import { InviteHandoff } from './InviteHandoff';

const SITE_ORIGIN = 'https://inkly-web-taupe.vercel.app';

export default async function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const valid = /^[a-z0-9]{6,64}$/i.test(code);
  const inviteUrl = `${SITE_ORIGIN}/invite/${code.toLowerCase()}`;

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#130625] text-violet-50">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Wordmark />
        <Link className="text-sm text-violet-100/75 transition hover:text-fuchsia-200" href="/">
          About Inkly
        </Link>
      </header>

      <section className="relative isolate mx-auto grid w-full max-w-6xl flex-1 gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:pb-28 lg:pt-20">
        <div className="absolute -left-32 top-8 -z-10 size-[30rem] rounded-full bg-[#8d4de8]/25 blur-[110px]" />
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-fuchsia-200">
            <Heart className="size-4" /> A friend invited you
          </p>
          <h1 className="max-w-xl font-serif text-5xl leading-[.98] tracking-[-.055em] text-white sm:text-6xl">
            {valid ? 'Make room for moments together.' : 'This invite link looks incomplete.'}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-violet-100/75">
            {valid
              ? 'Your friend would love to connect with you on Inkly. Open the app to accept their invitation and share the moments that matter.'
              : 'Ask your friend to send you a new Inkly invite link.'}
          </p>
          {valid && <InviteHandoff code={code} inviteUrl={inviteUrl} />}
        </div>
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -right-4 top-12 size-40 rounded-full bg-[#e76247]/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-100/20 bg-[#251047] p-3 shadow-2xl shadow-black/40">
            <Image
              src="/inkly-app-preview.jpg"
              alt="A quiet moment captured in Inkly"
              width={500}
              height={625}
              priority
              className="aspect-[4/5] w-full rounded-[1.45rem] object-cover opacity-80"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-fuchsia-100/20 bg-[#210a42]/90 p-5 shadow-xl backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-fuchsia-200">Inkly</p>
              <p className="mt-2 font-serif text-2xl leading-tight text-white">
                A quieter place to stay close.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
