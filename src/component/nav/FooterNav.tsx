import React from 'react';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

const FooterNav = () => {
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
        <div className="text-sm lg:flex-grow flex gap-[15px] justify-center">
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Imprint
          </a>
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Data protection
          </a>
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            terms and conditions
          </a>
          <a href="#responsive-header" className="uppercase text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
        <div>
          <Button>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.525 3.66666C15.525 3.80832 15.525 3.95832 15.525 4.09999C15.5328 5.35847 15.2906 6.60596 14.8126 7.77014C14.3345 8.93432 13.6302 9.99202 12.7403 10.8819C11.8504 11.7718 10.7927 12.4762 9.6285 12.9542C8.46432 13.4322 7.21683 13.6744 5.95835 13.6667C4.1268 13.672 2.33269 13.1482 0.791687 12.1583C1.06669 12.1583 1.32502 12.1583 1.62502 12.1583C3.13624 12.1584 4.60364 11.6506 5.79169 10.7167C5.08747 10.7104 4.40334 10.4812 3.83743 10.062C3.27153 9.64279 2.85293 9.05514 2.64169 8.38332C2.85389 8.41716 3.06847 8.43388 3.28335 8.43332C3.58098 8.43118 3.87737 8.39483 4.16669 8.32499C3.41378 8.1713 2.73709 7.7622 2.25115 7.16692C1.76521 6.57165 1.49986 5.82676 1.50002 5.05832C1.96593 5.31533 2.48508 5.4608 3.01669 5.48332C2.54762 5.17304 2.1633 4.75072 1.89849 4.25456C1.63367 3.7584 1.49672 3.20405 1.50002 2.64166C1.50106 2.05622 1.65626 1.48139 1.95002 0.97499C2.79313 2.0147 3.84522 2.86573 5.03815 3.47296C6.23108 4.08019 7.53826 4.43009 8.87502 4.49999C8.82214 4.24779 8.79423 3.99099 8.79169 3.73332C8.76998 3.04739 8.96052 2.37147 9.3373 1.79786C9.71407 1.22426 10.2587 0.780927 10.8968 0.528408C11.535 0.27589 12.2355 0.226491 12.9028 0.386958C13.57 0.547425 14.1715 0.909936 14.625 1.42499C15.3792 1.2735 16.1012 0.991485 16.7584 0.591656C16.5074 1.36929 15.9795 2.02765 15.275 2.44166C15.9448 2.36928 16.5995 2.19505 17.2167 1.92499C16.7597 2.59246 16.1967 3.18076 15.55 3.66666H15.525Z" fill="#585858"/>
            </svg>
            <Ripple />
          </Button>
          <Button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6 3.33335H4.47498C4.33158 3.32663 4.18827 3.34826 4.05325 3.397C3.91822 3.44574 3.79414 3.52063 3.68809 3.61739C3.58205 3.71414 3.49612 3.83086 3.43525 3.96087C3.37437 4.09087 3.33973 4.23161 3.33331 4.37502V15.525C3.34171 15.8252 3.46469 16.1107 3.677 16.323C3.88931 16.5353 4.17484 16.6583 4.47498 16.6667H15.6C15.8918 16.6537 16.1668 16.5269 16.3662 16.3135C16.5656 16.1001 16.6735 15.817 16.6666 15.525V4.37502C16.669 4.23544 16.6429 4.09684 16.5898 3.96773C16.5367 3.83861 16.4578 3.7217 16.3579 3.62417C16.2581 3.52663 16.1393 3.45053 16.009 3.40052C15.8786 3.35051 15.7395 3.32765 15.6 3.33335ZM7.49998 14.45H5.55831V8.50835H7.49998V14.45ZM6.57498 7.60835C6.43949 7.61307 6.30448 7.58972 6.17844 7.53977C6.0524 7.48982 5.93806 7.41435 5.84258 7.31809C5.74711 7.22183 5.67257 7.10687 5.62365 6.98043C5.57473 6.85399 5.55249 6.7188 5.55831 6.58335C5.55232 6.44644 5.57502 6.30978 5.62494 6.18215C5.67486 6.05453 5.75091 5.93874 5.84821 5.84223C5.9455 5.74572 6.0619 5.67061 6.18993 5.62172C6.31795 5.57284 6.45479 5.55125 6.59165 5.55835C6.72714 5.55363 6.86215 5.57698 6.98818 5.62693C7.11422 5.67688 7.22857 5.75235 7.32404 5.84861C7.41952 5.94487 7.49405 6.05982 7.54297 6.18627C7.59189 6.31271 7.61414 6.4479 7.60831 6.58335C7.6143 6.72026 7.59161 6.85692 7.54169 6.98454C7.49177 7.11217 7.41572 7.22796 7.31842 7.32447C7.22112 7.42098 7.10473 7.49609 6.9767 7.54498C6.84867 7.59386 6.71184 7.61545 6.57498 7.60835ZM14.45 14.45H12.5V11.2C12.5 10.425 12.225 9.89168 11.5333 9.89168C11.3184 9.89355 11.1094 9.96182 10.9349 10.0871C10.7603 10.2125 10.6288 10.3887 10.5583 10.5917C10.5041 10.7439 10.4814 10.9055 10.4916 11.0667V14.45H8.57498V8.50835H10.4916V9.34168C10.662 9.02863 10.9157 8.76877 11.2245 8.59083C11.5333 8.41288 11.8853 8.32378 12.2416 8.33335C13.5 8.33335 14.45 9.16668 14.45 10.9417V14.45Z" fill="#585858"/>
            </svg>
            <Ripple />
          </Button>
          <Button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 10.0416C16.6511 8.77119 16.2727 7.53167 15.5763 6.46905C14.8798 5.40643 13.8942 4.56496 12.7355 4.04374C11.5768 3.52251 10.2933 3.34324 9.03612 3.52704C7.77896 3.71083 6.6005 4.25004 5.63952 5.08116C4.67854 5.91228 3.97506 7.00069 3.61194 8.21822C3.24882 9.43575 3.24117 10.7317 3.5899 11.9534C3.93863 13.1752 4.62922 14.2718 5.58032 15.1142C6.53143 15.9566 7.70345 16.5097 8.95836 16.7083V11.9833H7.29169V10.0416H8.95836V8.56662C8.91979 8.22364 8.95697 7.87639 9.06728 7.54936C9.17759 7.22232 9.35833 6.92349 9.59675 6.67394C9.83517 6.4244 10.1255 6.23022 10.4471 6.10512C10.7688 5.98003 11.114 5.92706 11.4584 5.94995C11.9582 5.9568 12.4569 6.00137 12.95 6.08328V7.74995H12.1167C11.973 7.73183 11.8271 7.74623 11.6897 7.79209C11.5523 7.83794 11.427 7.91409 11.323 8.01489C11.219 8.11569 11.1389 8.23857 11.0888 8.37446C11.0387 8.51034 11.0197 8.65576 11.0334 8.79995V10.0583H12.8834L12.5834 11.9999H11.0417V16.6666C12.6166 16.4175 14.0501 15.6122 15.0821 14.3967C16.1141 13.1812 16.6763 11.6361 16.6667 10.0416Z" fill="#585858"/>
            </svg>
            <Ripple />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default FooterNav;
