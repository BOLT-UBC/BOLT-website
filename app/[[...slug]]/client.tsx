'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
// const App = dynamic(() => import('../../src/App'), { ssr: false })
 
const Home = dynamic(() => import('../../src/pages/home/Home'), { ssr: false });
const About = dynamic(() => import('../../src/pages/about-page/AboutPage'), { ssr: false });
const Events = dynamic(() => import('../../src/pages/events-page/EventsPage'), { ssr: false });
const FirstBytePage = dynamic(() => import('../../src/pages/first-byte-page/FirstBytePage'), { ssr: false });

export function ClientOnly({ page }: { page: string }) {
  if (page === 'home') {
    return <Home />; 
  }

  if (page === 'aboutus') {
    return <About />;
  }

  if (page === 'events') {
    return <Events />;
  }

  if (page === '') {
    return <FirstBytePage />;
  }

  return <h1>404: Page Not Found</h1>;
}