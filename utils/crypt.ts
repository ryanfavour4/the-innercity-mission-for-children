import crypto from 'crypto'

const algorithm = process.env.ENCRYPTION_ALGORITHM || ''
const salt = crypto.randomBytes(16).toString('hex')
const password = process.env.ENCRYPTION_KEY || ''
const key = crypto.scryptSync(password, salt, 32) // Derive a 32-byte key from the encryption key

// Function to encrypt an object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encryptObject = (obj: Record<string, any>): string => {
  const iv = crypto.randomBytes(16) // Generate a new IV for each encryption
  const json = JSON.stringify(obj)
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(json, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return `${iv.toString('hex')}:${encrypted}:${salt}` // Include the salt in the output
}

// Function to decrypt an object
export const decryptObject = (encrypted: string): Record<string, unknown> => {
  const [ivHex, encryptedText, salt] = encrypted.split(':')
  const iv = Buffer.from(ivHex, 'hex')
  const key = crypto.scryptSync(password, salt, 32) // Derive the key using the salt
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return JSON.parse(decrypted)
}

// Helper function to sanitize the ID
export function sanitizeId(id: string): string {
  return encodeURIComponent(id)
}
