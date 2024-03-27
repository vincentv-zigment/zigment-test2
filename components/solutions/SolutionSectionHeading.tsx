import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
    className?: string
}

const SolutionSectionHeading = ({children, className}: Props) => {
  return (
    <h2 className={`text-4xl relative ${className} font-bold   text-gray-900 sm:text-5xl   lg:text-5xl xl:text-5xl`}>{children}</h2>
  )
}

export default SolutionSectionHeading