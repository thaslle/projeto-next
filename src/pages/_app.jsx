import './styles/reset.css';
import './styles/global.scss';

import Head from 'next/head';
import { Suspense } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Wrapper } from '../templates/Wrapper';

import dynamic from 'next/dynamic';

const Loader = dynamic(() => import('../components/Loader'), {
  ssr: false,
});

const Scene3D = dynamic(() => import('../components/Scene3D'), {
  ssr: false,
  suspense: true,
});

export default function App({ Component, pageProps, router }) {
  return (
    <Wrapper>
      <Head>
        <title>Thalles Lopes</title>
        <meta
          name="description"
          content="Hello, I'm Thalles, a web developer & digital designer based in São Paulo. For over a decade, I've been creating engaging digital experiences through web design, architecture and illustration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Scene3D />
      </Suspense>
    </Wrapper>
  );
}
