import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Dashly',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const a = 1;
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
