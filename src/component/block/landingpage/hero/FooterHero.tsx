import React from 'react';
import SearchBarArea from '../../../search/SearchBarArea';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

const FooterHero = () => {
  return (
    <div className="bg-hero-pattern">
      <div className="container mx-auto text-center py-[150px]">
        <h3 className="text-white">
          Set on a fast, direct and secure placement<br/>
          of free storage space
        </h3>
        <div className="flex justify-center gap-[15px] mt-[45px]">
          <Button label="Button">
            <Ripple/>
          </Button>
          <Button label="Button">
            <Ripple/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FooterHero;
