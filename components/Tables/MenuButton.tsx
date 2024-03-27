

import React, { useRef, MouseEvent, useEffect } from 'react';
import { useDropDownContext } from './DropDownContainer';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const MenuButton  = ({ children }:{ children: React.ReactNode }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setOpenDropDown, setDropDownPosition, setChildNode, openDropDown } = useDropDownContext();

  const handleClickOutside = (event: any) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          event.target.classList[0]!=='menu-item' 
        ) {
          setOpenDropDown(false);
        }
      };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOpenDropDown(!openDropDown);
    setDropDownPosition({ x: rect.x - 130 , y: e.pageY+ 10   });
    setChildNode(children);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute z-10 -translate-y-1/2 top-1/2 inset-x-0  mx-auto w-fit" ref={dropdownRef}>
      <button
        className="flex max-w-xs items-center rounded-full   text-sm focus:outline-none focus:ring-2 focus:ring-brand-lightgreen focus:ring-offset-2"
        onClick={handleClick}
      >
        <EllipsisVerticalIcon className='w-6 h-6 text-gray-600' />
      </button>
    </div>
  );
};

export default MenuButton;

