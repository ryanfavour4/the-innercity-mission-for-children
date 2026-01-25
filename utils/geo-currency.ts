export type CurrencyInfo = {
  code: string
  symbol: string
  name: string
}

const COUNTRY_TO_CURRENCY: Record<string, CurrencyInfo> = {
  NG: { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  US: { code: 'USD', symbol: '$', name: 'US Dollar' },
  GB: { code: 'GBP', symbol: '£', name: 'British Pound' },
  EU: { code: 'EUR', symbol: '€', name: 'Euro' },
  CA: { code: 'CAD', symbol: '$', name: 'Canadian Dollar' },
  AU: { code: 'AUD', symbol: '$', name: 'Australian Dollar' },
  ZA: { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  GH: { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi' },
  KE: { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  IN: { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
}

const FALLBACK_CURRENCY: CurrencyInfo = {
  code: 'USD',
  symbol: '$',
  name: 'US Dollar',
}

export function getCurrencyFromIP(ipData: { country_code?: string }): CurrencyInfo {
  if (!ipData?.country_code) return FALLBACK_CURRENCY

  return COUNTRY_TO_CURRENCY[ipData.country_code.toUpperCase()] ?? FALLBACK_CURRENCY
}
