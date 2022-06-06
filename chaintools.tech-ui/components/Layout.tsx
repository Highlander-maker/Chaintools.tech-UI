import { ReactNode } from 'react'
import Head from 'next/head'
import Nav from './Nav'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="flex flex-col items-center justify-center w-full flex-1 p-2 md:px-20 text-center">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by{' '}
        <a
          className="pl-1 link link-primary link-hover"
          href="https://twitter.com/HighlanderNodes"
        >
          Highlander Nodes
        </a>
        <span className="pl-1"> and</span>
        <a
          className="pl-1 link link-primary link-hover"
          href="https://twitter.com/qf3l3k_tech"
        >
          qf3l3k.tech
        </a>
      </footer>
    </div>
  )
}