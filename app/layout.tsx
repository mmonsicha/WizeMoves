import type {Metadata} from 'next';
import { IBM_Plex_Sans_Thai, Anuphan } from 'next/font/google';
import './globals.css'; // Global styles

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

const anuphan = Anuphan({
  subsets: ['thai', 'latin'],
  variable: '--font-anuphan',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WizeMoves Content by Sellsuki',
  description: 'ปลดล็อกยอดขายด้วยคอนเทนต์ที่ขายได้จริง โดยทีม WizeMoves Content',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="th" className={`${ibmPlexSansThai.variable} ${anuphan.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
