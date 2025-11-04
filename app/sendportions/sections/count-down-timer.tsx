import { useTimer } from 'react-timer-hook'

export default function CountdownTimer() {
  const expiry = new Date('2025-12-25T00:00:00')
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: expiry })

  return (
    <div className="flex items-center justify-center gap-4 text-center text-2xl">
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{days}</h5>
        <p className="text-base">Days</p>
      </div>
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{hours}</h5>
        <p className="text-base">Hours</p>
      </div>
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{minutes}</h5>
        <p className="text-base">Minutes</p>
      </div>
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{seconds}</h5>
        <p className="text-base">Seconds</p>
      </div>
    </div>
  )
}
