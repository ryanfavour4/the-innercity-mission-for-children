// Marquee.js
import React from 'react'

type Props = {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
}

const Marquee = ({ children, speed = 50 }: Props) => {
  return (
    <div className="relative box-border w-full overflow-hidden whitespace-nowrap">
      <div
        className="animate-marquee right-0 whitespace-nowrap text-right will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  )
}

export default Marquee
