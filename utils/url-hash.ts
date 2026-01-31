export function addHashParams(newParams: Record<string, string>) {
  // Get current query params (remove the ? if present)
  const currentSearch = typeof window !== 'undefined' ? window.location.search.slice(1) : null

  // Create URLSearchParams from current search
  const params = new URLSearchParams(currentSearch || '')

  // Add new parameters
  Object.entries(newParams).forEach(([key, value]) => {
    params.set(key, value)
  })

  // Update URL with search params, keeping hash if it exists
  const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`
  window.history.replaceState({}, '', newUrl)
}
