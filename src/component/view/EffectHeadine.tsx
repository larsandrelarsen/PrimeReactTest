import React from 'react';

const EffectHeadline = ({title, fill, className}: {
  title?: any;
  fill: any;
  className?: any;
}) => {
  return (
    <div className={'text-white relative' + ' ' + className}>
      <svg className="m-auto" width="224" height="115" viewBox="0 0 224 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M224 57.8443L134.995 109.098C122.497 116.29 102.175 116.29 89.6071 109.11L0 57.8443L89.5717 6.26317C103.214 -1.59504 120.066 -1.61843 133.732 6.2047L224 57.8443Z"
          fill={fill}/>
      </svg>
      <h5 className="text-white uppercase text-[18px] absolute top-[45px] left-[0] right-[0] text-center">{title}</h5>
    </div>
  );
}

export default EffectHeadline;
