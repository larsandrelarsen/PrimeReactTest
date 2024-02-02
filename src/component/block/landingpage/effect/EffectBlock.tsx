import React from 'react';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import EffectHeadline from '../../../view/EffectHeadine';

const EffectBlock = () => {
  return (
    <div className="container mx-auto text-center mt-[45px]">
      <h3>The WORAGE effect</h3>
      <p>WORAGE is your logistics network for the procurement of warehouse space and logistics services in the German market.</p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-[45px]">
        <div>
          <EffectHeadline className="mb-[30px]" title="Efficiency" fill="#FF631C"/>
          <p>At WORAGE, you can contact other companies safely and easily to find free storage space quickly and with little effort, or offer it yourself.</p>
        </div>
        <div>
          <EffectHeadline className="mb-[30px]" title="Security" fill="#B20D30"/>
          <p>At WORAGE, you can contact other companies safely and easily to find free storage space quickly and with little effort, or offer it yourself.</p>
        </div>
        <div>
          <EffectHeadline className="mb-[30px]" title="Visibility" fill="#8D30D3"/>
          <p>At WORAGE, you can contact other companies safely and easily to find free storage space quickly and with little effort, or offer it yourself.</p>
        </div>
      </div>
      <div className="mt-[45px]">
        <Button label="Register now">
          <Ripple/>
        </Button>
      </div>
    </div>
  );
}

export default EffectBlock;
