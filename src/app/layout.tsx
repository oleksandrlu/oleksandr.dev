import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Oleksandr.dev - Full-stack Developer',
    template: '%s | Oleksandr.dev',
  },
  description: 'Full-stack developer specializing in React, Next.js, TypeScript, WebGL, and Three.js. Building immersive digital experiences with performance and accessibility in mind.',
  keywords: ['developer', 'full-stack', 'React', 'Next.js', 'TypeScript', 'WebGL', 'Three.js', 'portfolio'],
  authors: [{ name: 'Oleksandr' }],
  creator: 'Oleksandr',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oleksandr.dev',
    siteName: 'Oleksandr.dev',
    title: 'Oleksandr.dev - Full-stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, WebGL, and Three.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oleksandr.dev - Full-stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, WebGL, and Three.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="w-full max-w-full mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
