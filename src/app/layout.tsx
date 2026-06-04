import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chronos Algeria | Le Patrimoine Phygital',
  description: 'Quand le Grès d\'Algérie rencontre le Futur Holographique. Une passerelle entre l\'histoire millénaire et la technologie de demain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
