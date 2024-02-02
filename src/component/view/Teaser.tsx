import React from 'react';

const Teaser = ({text}: {
  text: string | number;
}) => {
  return (
    <div className="ps-[2px] font-bold border-s-[5px] border-pink-900">
      <div className="py-[25px]">{text}</div>
    </div>
  );
}

export default Teaser;
