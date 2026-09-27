import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://inkly-web-taupe.vercel.app'),
  title: {
    default: 'Inkly: AI Photo Quotes',
    template: '%s | Inkly: AI Photo Quotes',
  },
  description:
    'Capture a real moment. Turn it into a personal reflection. Keep it private—or share it intentionally.',
  icons: { icon: '/inkly-favicon.png' },
  openGraph: {
    title: 'Inkly: AI Photo Quotes',
    description: 'A photo journal for the moment you need to remember.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inkly: AI Photo Quotes',
    description: 'A photo journal for the moment you need to remember.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
