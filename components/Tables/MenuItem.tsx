import Link from 'next/link'
import React, { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode,
  href?: string,
  onClick?: any
}
 

const MenuItem = ({children, href, onClick}:Props) => {
  const menuRef = useRef<HTMLDivElement>(null)
  return (
    <>
      { href!==undefined && 
        <Link 
          href={href}
          className='menu-item hover:bg-gray-100 active:bg-gray-200 p-1 rounded-md block'
        >
          {children}
        </Link> 
      }
      {
        onClick!==undefined && 
        <button 
          onClick={onClick} 
          className="menu-item rounded-md  hover:bg-gray-100 active:bg-gray-200 p-1"
          >
          {children}
        </button>
      }
      {/* <div className="menu-item hover:bg-gray-100 active:bg-gray-200"
        ref={menuRef}
      >
          
      </div> */}
    </>
  )
}

export default MenuItem