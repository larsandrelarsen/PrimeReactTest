import React from 'react';

function Teaser(props: any) {
  return (
    <div className="ps-[2px] font-bold border-s-[5px] border-pink-900">
      <div className="py-[25px]">{props.text}</div>
    </div>
  );
}

export default Teaser;
