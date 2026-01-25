import 'server-only'
import crypto from 'crypto'
import { ITERATIONS, KEY_LENGTH } from './crypto.config'

const PASSWORD = process.env.ENCRYPTION_KEY!
const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 12
const SALT_LENGTH = 16
const AUTH_TAG_LENGTH = 16 // bytes (128 bits)

function deriveKey(salt: Buffer) {
  return crypto.pbkdf2Sync(
    PASSWORD,
    salt,
    ITERATIONS,
    KEY_LENGTH / 8,
    'sha256',
  )
}

export type EncryptedPayload = {
  iv: number[]
  salt: number[]
  data: number[]
  authTag: number[]
}

export function encryptServer(data: unknown): EncryptedPayload {
  const iv = crypto.randomBytes(IV_LENGTH)
  const salt = crypto.randomBytes(SALT_LENGTH)
  const key = deriveKey(salt)

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(data), 'utf8'),
    cipher.final(),
  ])

  const authTag = cipher.getAuthTag()

  if (authTag.length !== AUTH_TAG_LENGTH) {
    throw new Error('Invalid auth tag length')
  }

  return {
    iv: [...iv],
    salt: [...salt],
    data: [...ciphertext],
    authTag: [...authTag],
  }
}

export function decryptServer(payload: EncryptedPayload) {
  const iv = Buffer.from(payload.iv)
  const salt = Buffer.from(payload.salt)
  const data = Buffer.from(payload.data)
  const authTag = Buffer.from(payload.authTag)

  if (authTag.length !== AUTH_TAG_LENGTH) {
    throw new Error('Invalid auth tag length')
  }

  const key = deriveKey(salt)

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
  decipher.setAuthTag(authTag)

  const decrypted = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ])

  return JSON.parse(decrypted.toString('utf8'))
}
