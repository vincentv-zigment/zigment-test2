import Footer from '@/components/landing-page/Footer'
import Navbar from '@/components/landing-page/Navbar'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import NextProgress from 'nextjs-progressbar'
import { ReactNode } from 'react'


type Props = {
  children: ReactNode
}

function LandingPageLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <>
        <Head>
          <title>Zigment.ai</title>
        </Head>
        <Navbar />
        <NextProgress />
          <main className="pt-[80px]">
            {children}
          </main> 
        <Footer />
    </>
  )
}

export default LandingPageLayout