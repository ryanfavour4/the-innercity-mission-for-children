import axios from 'axios'
import { IPostLoginServiceRes } from './types'
import { baseUrl } from './constants'

export const postLoginService = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/auth/login`, credentials)
  const res: IPostLoginServiceRes = response.data

  if (res.status < 200 || (res.status >= 300 && res?.error)) {
    const errorMessage = res?.error?.message || res.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postLogoutService = async () => {
  const response = await axios.post(`${baseUrl}/auth/signout`)
  const res = response.data

  if (res.status < 200 || res.status >= 300) {
    const errorMessage = res.error?.message || res.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return response
}

export const postRegisterService = async (credentials: {
  fullname: string
  email: string
  password: string
}) => {
  const response = await axios.post(`${baseUrl}/auth/register`, credentials)
  const res = response.data

  if (res.status < 200 || res.status >= 300) {
    const errorMessage = res.error?.message || res.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return response
}
