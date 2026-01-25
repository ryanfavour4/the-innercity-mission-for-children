'use client'

import { ITERATIONS, KEY_LENGTH } from './crypto.config'

const password = process.env.NEXT_PUBLIC_CRYPTO_PASSWORD!

const encoder = new TextEncoder()
const decoder = new TextDecoder()

const IV_LENGTH = 12
const SALT_LENGTH = 16
const AUTH_TAG_LENGTH = 16 // bytes (128 bits)

export type EncryptedPayload = {
  iv: number[]
  salt: number[]
  data: number[]
  authTag: number[]
}

async function deriveKey(salt: Uint8Array) {
  const baseKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey'],
  )

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt as BufferSource,
      iterations: Number(ITERATIONS),
      hash: 'SHA-256',
    },
    baseKey,
    {
      name: 'AES-GCM',
      length: KEY_LENGTH,
    },
    false,
    ['encrypt', 'decrypt'],
  )
}

export async function encryptClient(data: unknown): Promise<EncryptedPayload> {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH))
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH))
  const key = await deriveKey(salt)

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv, tagLength: 128 },
    key,
    encoder.encode(JSON.stringify(data)),
  )

  const bytes = new Uint8Array(encrypted)

  const ciphertext = bytes.slice(0, bytes.length - AUTH_TAG_LENGTH)
  const authTag = bytes.slice(bytes.length - AUTH_TAG_LENGTH)

  return {
    iv: Array.from(iv),
    salt: Array.from(salt),
    data: Array.from(ciphertext),
    authTag: Array.from(authTag),
  }
}

export async function decryptClient(payload: EncryptedPayload) {
  const key = await deriveKey(new Uint8Array(payload.salt))

  const combined = new Uint8Array([...payload.data, ...payload.authTag])

  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: new Uint8Array(payload.iv),
      tagLength: 128,
    },
    key,
    combined,
  )

  return JSON.parse(decoder.decode(decrypted))
}
