import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inkly-web-taupe.vercel.app'),
  title: {
    default: 'Inkly: Daily Vibes — a photo journal for real moments',
    template: '%s | Inkly: Daily Vibes',
  },
  description:
    'Capture a real moment. Turn it into a personal reflection. Keep it private—or share it intentionally.',
  openGraph: {
    title: 'Inkly: Daily Vibes',
    description: 'A photo journal for the moment you need to remember.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inkly: Daily Vibes',
    description: 'A photo journal for the moment you need to remember.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
