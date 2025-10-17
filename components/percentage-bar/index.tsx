'use client'
import React, { useRef, useState } from 'react'

type PercentageBarProps = {
  value: number // 0 to 100
  filledColor?: string
  backgroundColor?: string
  className?: string
  onChange?: (value: number) => void // callback when user clicks/drags
}

const PercentageBar: React.FC<PercentageBarProps> = ({
  value,
  filledColor = '#0074E6',
  backgroundColor = '#D9D9D9',
  className,
  onChange,
}) => {
  const barRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const clamped = Math.min(Math.max(value, 0), 100)

  const updateValue = (clientX: number) => {
    if (!barRef.current) return
    const rect = barRef.current.getBoundingClientRect()
    const newValue = ((clientX - rect.left) / rect.width) * 100
    if (onChange) onChange(Math.min(Math.max(newValue, 0), 100))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateValue(e.clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateValue(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging])

  return (
    <div
      ref={barRef}
      className={`${className} h-2 w-full cursor-pointer overflow-hidden rounded-lg`}
      style={{ backgroundColor }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="h-full rounded-lg transition-all duration-100"
        style={{ width: `${clamped}%`, backgroundColor: filledColor }}
      />
    </div>
  )
}

export default PercentageBar
