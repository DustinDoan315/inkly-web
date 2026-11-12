'use client';

import { useSyncExternalStore } from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/store-links';

const subscribe = () => () => {};
const getSnapshot = () => /Android/i.test(navigator.userAgent);
const getServerSnapshot = () => false;

/**
 * Header download link that points at the store for the visitor's device.
 *
 * The server and the first client render use the App Store label; Android
 * visitors are switched to Google Play once hydrated so the header keeps a
 * single compact button.
 */
export function DownloadLink({ className }: { className?: string }) {
  const isAndroid = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <a className={className} href={isAndroid ? PLAY_STORE_URL : APP_STORE_URL}>
      {isAndroid ? 'Get it on Google Play' : 'Download on the App Store'}
    </a>
  );
}
