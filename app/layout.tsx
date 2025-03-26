import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import './ui/globals.css';

export const metadata: Metadata = {
  title: 'Dungeon Blitz : Remake - Blitz Forge Studio',
  description: 'Enjoy our Dungeon Blitz Demo!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
