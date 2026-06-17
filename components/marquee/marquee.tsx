// Marquee.js
import React from 'react'
import ReactFastMarquee from 'react-fast-marquee'

type Props = {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
}

const Marquee = ({ children, speed = 50, direction = 'left' }: Props) => {
  return (
    <ReactFastMarquee speed={speed} direction={direction}>
      <div
        className="animate-marque right-0 whitespace-nowrap text-right will-change-transform"
        // style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </ReactFastMarquee>
  )
}

export default Marquee
