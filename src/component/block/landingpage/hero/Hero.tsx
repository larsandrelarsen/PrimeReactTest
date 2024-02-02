import React from 'react';
import SearchBarArea from '../../../search/SearchBarArea';

function Hero() {
  return (
    <div className="bg-hero-pattern">
      <div className="container mx-auto py-[150px]">
        <h1 className="text-white">Find market free storage capacities with WORAGE</h1>
        <SearchBarArea/>
      </div>
    </div>
  );
}

export default Hero;
