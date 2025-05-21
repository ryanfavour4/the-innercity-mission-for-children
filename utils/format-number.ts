export const formatCurrency = (input: string) => {
  // Remove all non-numeric characters except the decimal point
  const numericValue = input.replace(/[^0-9.]/g, '')

  // Parse the number and format it
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(parseFloat(numericValue || '0'))

  return formattedValue
}

export const formatNumber = (input: string) => {
  // Remove non-numeric characters except the dot for decimals
  const numericValue = input.replace(/\D/g, '')

  // Format the number with commas
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const unformatNumber = (input: string) => {
  return input.replace(/,/g, '')
}

export function abbreviateNumber(num: number | bigint | null | string): string {
  if (typeof num !== 'number') return '0'

  const bigNum = BigInt(num) // Convert to BigInt to ensure precision

  if (bigNum >= BigInt(1_000_000_000_000_000_000)) {
    return `${(bigNum / BigInt(1_000_000_000_000_000_000)).toString()}q`
  } else if (bigNum >= BigInt(1_000_000_000_000_000)) {
    return `${(bigNum / BigInt(1_000_000_000_000_000)).toString()}p`
  } else if (bigNum >= BigInt(1_000_000_000_000)) {
    return `${(bigNum / BigInt(1_000_000_000_000)).toString()}t`
  } else if (bigNum >= BigInt(1_000_000_000)) {
    return `${(bigNum / BigInt(1_000_000_000)).toString()}b`
  } else if (bigNum >= BigInt(1_000_000)) {
    return `${(bigNum / BigInt(1_000_000)).toString()}m`
  } else if (bigNum >= BigInt(1_000)) {
    return `${(bigNum / BigInt(1_000)).toString()}k`
  } else {
    return bigNum.toString()
  }
}

export const convertCurrency = (
  amount: number | bigint,
  fromCurrency: 'USD' | 'NGN',
  toCurrency: 'USD' | 'NGN',
) => {
  const exchangeRate = {
    USD_TO_NGN: 1300, // Example rate, update accordingly
    NGN_TO_USD: 1 / 1300,
  }

  if (fromCurrency === 'USD' && toCurrency === 'NGN') {
    return Number(amount) * exchangeRate.USD_TO_NGN
  } else if (fromCurrency === 'NGN' && toCurrency === 'USD') {
    return Number(amount) * exchangeRate.NGN_TO_USD
  } else {
    throw new Error('Invalid currency conversion request')
  }
}
