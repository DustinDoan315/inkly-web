'use client';

import { ArrowRight, Check, Copy } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const APP_STORE_URL =
  'https://apps.apple.com/us/app/inkly-daily-vibes/id6760991001';

type Props = {
  code: string;
  inviteUrl: string;
};

/**
 * Copy the value to the clipboard, returning whether it worked.
 *
 * Requires a secure context and a user gesture, which a tap provides. When a
 * browser blocks it the invite code stays visible on the page so it can still
 * be entered by hand.
 */
async function writeClipboard(value: string): Promise<boolean> {
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

export function InviteHandoff({ code, inviteUrl }: Props) {
  const [copied, setCopied] = useState<'code' | 'link' | null>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(null), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopyCode = useCallback(async () => {
    const ok = await writeClipboard(code.toUpperCase());
    if (ok) setCopied('code');
  }, [code]);

  const handleCopyLink = useCallback(async () => {
    const ok = await writeClipboard(inviteUrl);
    if (ok) setCopied('link');
  }, [inviteUrl]);

  /**
   * Put the invite on the clipboard before leaving for the App Store. The
   * installed app reads it once on first launch, which is what lets a new
   * install know who invited them.
   */
  const handleGetApp = useCallback(
    async (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      await writeClipboard(inviteUrl);
      window.location.href = APP_STORE_URL;
    },
    [inviteUrl],
  );

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#b95add] px-5 py-3 text-sm font-semibold text-[#21062f] transition hover:bg-[#cf80ec]"
          href={inviteUrl}
        >
          Open in Inkly <ArrowRight className="size-4" />
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/30 px-5 py-3 text-sm font-semibold text-violet-50 transition hover:bg-white/10"
          href={APP_STORE_URL}
          onClick={handleGetApp}
        >
          Get Inkly on the App Store
        </a>
      </div>

      <div className="mt-6 rounded-2xl border border-fuchsia-100/15 bg-[#251047]/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-fuchsia-200">
          Your invite code
        </p>
        <p className="mt-2 font-mono text-3xl tracking-[.18em] text-white">
          {code.toUpperCase()}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopyCode}
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/30 px-4 py-2 text-sm font-semibold text-violet-50 transition hover:bg-white/10"
          >
            {copied === 'code' ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            {copied === 'code' ? 'Code copied' : 'Copy code'}
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/30 px-4 py-2 text-sm font-semibold text-violet-50 transition hover:bg-white/10"
          >
            {copied === 'link' ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            {copied === 'link' ? 'Link copied' : 'Copy link'}
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-violet-100/55">
          New to Inkly? Tap <span className="text-violet-50">Get Inkly</span> and
          the invite is carried over automatically after you install. You can
          also enter the code above in the app under Friends.
        </p>
      </div>
    </>
  );
}
