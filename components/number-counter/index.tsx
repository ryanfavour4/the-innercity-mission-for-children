import { useState } from 'react'

export default function NumberCounter({
  min = 1,
  max = 1000,
  step = 1,
  defaultValue = 1,
  name = 'quantity',
  onChange,
}: {
  min?: number
  max?: number
  step?: number
  name?: string
  defaultValue?: number
  onChange?: (value: number) => void
}) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setValue(newValue)
      onChange?.(newValue)
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-xl bg-white">
      <button
        onClick={() => handleChange(value - step)}
        className="btn w-fit bg-[#007853] p-2 text-light disabled:opacity-30"
        disabled={value <= min}
        type="button"
      >
        −
      </button>
      <input
        type="number"
        name={name}
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-full rounded-md border-textcolor/25 bg-transparent text-center outline-none"
      />
      <button
        onClick={() => handleChange(value + step)}
        className="btn w-fit bg-[#007853] p-2 text-light disabled:opacity-30"
        disabled={value >= max}
        type="button"
      >
        +
      </button>
    </div>
  )
}
