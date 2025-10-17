// utils/formatTime.ts
export function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00'

  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  const paddedMins = mins.toString().padStart(2, '0')
  const paddedSecs = secs.toString().padStart(2, '0')

  if (hrs > 0) {
    return `${hrs}:${paddedMins}:${paddedSecs}`
  } else {
    return `${paddedMins}:${paddedSecs}`
  }
}
