import React from 'react';
import { useDropDownContext } from './DropDownContainer';



const DropDown: React.FC = () => {
  const { openDropDown, dropDownPosition, childNode } = useDropDownContext();


  return (
    <>
      {openDropDown && (
        <div
          className="z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 p-1 ring-black ring-opacity-5 focus:outline-none 
          [&_button]:w-full 
          [&_button]:text-start 
          [&>div]:cursor-pointer 
          [&>div]:py-1 
          [&>div]:px-2 
          [&>div]:rounded-md 
          bg-red-100 absolute"
          style={{
            top: dropDownPosition.y +'px',
            left: dropDownPosition.x + 'px',
            position: 'absolute',
          }}
        >
          {childNode}
        </div>
      )}
    </>
  );
};

export default DropDown;
