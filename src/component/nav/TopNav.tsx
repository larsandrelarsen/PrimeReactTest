import React from 'react';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

function TopNav() {
  return (
    <nav className="flex container mx-auto items-center justify-between flex-wrap bg-teal-500 py-[15px]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img alt="logo" src="/app/brand.png"/>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            How Worage Works
          </a>
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About us
          </a>
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Login
          </a>
        </div>
        <div>
          <Button>
            Advertise Area
            <Ripple />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
