import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const font = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Turbo Toolkit - Web Page Builder',
  description: 'Create web pages with drag and drop components'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
