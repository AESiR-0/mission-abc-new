import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const qanelasSoft = localFont({
  src: [
    {
      path: './fonts/QanelasSoftMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/QanelasSoftExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/QanelasSoftSemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/QanelasSoftRegular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-qanelas' // This allows us to use it as a CSS variable
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${qanelasSoft.variable} ${manrope.variable} font-qanelas bg-[#141513] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
