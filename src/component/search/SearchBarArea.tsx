import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

function SearchBarArea() {
  return (
    <div className="bg-white rounded inline-flex py-[35px] px-[25px]">
      <div className="p-inputgroup flex-1">
    <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
    </span>
        <InputText placeholder="Username"/>
      </div>

      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">$</span>
        <InputNumber placeholder="Price"/>
        <span className="p-inputgroup-addon">.00</span>
      </div>

      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">www</span>
        <InputText placeholder="Website"/>
      </div>

      <div className="flex">
        <Button label="Search Area">
          <Ripple />
        </Button>
      </div>
    </div>
  );
}

export default SearchBarArea;
