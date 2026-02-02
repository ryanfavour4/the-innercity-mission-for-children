'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export function useUpdateQueryParams() {
  const router = useRouter()
  const searchParams = useSearchParams()

  return (newParams: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key) // remove param
      } else {
        params.set(key, value) // add / replace
      }
    })

    router.replace(`?${params.toString()}`, {
      scroll: false,
    })
  }
}
