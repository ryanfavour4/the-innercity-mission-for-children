export function addHashParams(newParams: Record<string, string>) {
  if (typeof window === 'undefined') return

  requestAnimationFrame(() => {
    const params = new URLSearchParams(window.location.search)

    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value)
    })

    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`
    window.history.replaceState(null, '', newUrl)
  })
}
