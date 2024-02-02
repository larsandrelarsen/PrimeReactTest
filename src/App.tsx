import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import EffectBlock from './component/block/landingpage/effect/EffectBlock';
import FaqBlock from './component/block/landingpage/faq/FaqBlock';
import TopNav from './component/nav/TopNav';
import Hero from './component/block/landingpage/hero/Hero';
import FooterHero from './component/block/landingpage/hero/FooterHero';

function App() {
  const value = {
    ripple: true,
  };

  return (
    <div className="App">
      <PrimeReactProvider value={value}>
        <TopNav />
        <Hero />
        <EffectBlock />
        <FaqBlock />
        <FooterHero />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
