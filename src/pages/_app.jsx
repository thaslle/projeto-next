import './styles/reset.css';
import './styles/global.scss';

import Head from 'next/head';
import { useState, useEffect } from 'react';

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
  const [progress, setProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // Once the progress reaches 100%, we trigger the animation and allow the content to render
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoadingComplete(true);
      }, 500); // Optional: 500ms delay to let loader animation finish

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [progress]);

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

      {/* Display the loader until progress reaches 100% */}
      {!isLoadingComplete && <Loader />}

      {/* Once loading is complete, render the main content */}
      {isLoadingComplete && (
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      )}

      {/* Scene3D starts immediately to drive the progress */}
      <Scene3D onProgress={(p) => setProgress(p)} />
    </Wrapper>
  );
}
