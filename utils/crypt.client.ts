import CryptoJS from 'crypto-js'

// Note: NEXT_PUBLIC_ makes this visible to the browser!
const KEY = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_ENCRYPTION_KEY || '')
const IV = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_ENCRYPTION_IV || '')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encryptClient = (data: Record<string, any>) => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.ciphertext.toString() // Outputs Hex
}

// ... KEY and IV definitions ...
export const decryptClient = (hexData: string) => {
  try {
    if (!hexData) return null

    const ciphertext = CryptoJS.enc.Hex.parse(hexData)
    const cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext })

    const decrypted = CryptoJS.AES.decrypt(cipherParams, KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8)

    if (!decryptedStr) throw new Error('Decryption resulted in empty string')

    return JSON.parse(decryptedStr)
  } catch (error) {
    console.error('Client Decryption Error:', error)
    return null
  }
}
