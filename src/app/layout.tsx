import { Providers } from './providers'
import { getConfigg } from '../wagmi'
import { cookieToInitialState } from 'wagmi'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { ReactNode } from 'react'
export const metadata = {
  title: "Pinecone - Vercel AI SDK Example",
  description: "Pinecone - Vercel AI SDK Example",
};

import "../global.css";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfigg(),
    headers().get('cookie'),
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{props.children}</Providers>
      </body>
    </html>
  )
}