import { useMemo } from 'react'
import { useTimer } from 'react-timer-hook'

export function CountdownTimer() {
  const expiry = new Date('2026-06-30T00:00:00')
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: expiry })

  const tiles = useMemo(
    () => [
      { name: 'Days', value: days },
      { name: 'Hours', value: hours },
      { name: 'Minutes', value: minutes },
      { name: 'Seconds', value: seconds },
    ],
    [days, hours, minutes, seconds],
  )

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 place-items-center items-center justify-center gap-4 text-center text-2xl md:grid-cols-4">
      {tiles.map((t) => (
        <div
          key={t.value}
          className="flex aspect-1 w-full max-w-36 flex-col items-center justify-center gap-3 rounded-[2.5rem] border border-[#6C581F] bg-transparent px-2 py-4 text-[#C9A84C] md:aspect-[1.1] md:max-w-[10rem]"
        >
          <h5 className="font-playfair-display text-5xl font-bold italic leading-none md:text-6xl">
            {t.value}
          </h5>
          <p className="font-playfair-display text-base italic">{t.name}</p>
        </div>
      ))}
    </div>
  )
}
