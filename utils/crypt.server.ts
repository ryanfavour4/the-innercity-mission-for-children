import crypto from 'crypto'

// In Next.js, store these in .env.local
const KEY = Buffer.from(process.env.ENCRYPTION_KEY || '', 'hex')
const IV = Buffer.from(process.env.ENCRYPTION_IV || '', 'hex')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encryptServer = (data: Record<string, any>) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', KEY, IV)
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export const decryptServer = (hexData: string) => {
  try {
    const decipher = crypto.createDecipheriv('aes-256-cbc', KEY, IV)
    let decrypted = decipher.update(hexData, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return JSON.parse(decrypted)
  } catch (error) {
    console.error('Decryption or Parsing failed:', error)
    return null // or throw a specific error for your API to handle
  }
}
