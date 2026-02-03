import axios from 'axios'
import kingsChatWebSdk from 'kingschat-web-sdk'
import { IProfileRes } from './types'
import { baseUrl, kingsChatClientId } from './constants'
import { encryptClient } from '@/utils/crypt.client'

export const postLoginService = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/auth/login`, credentials)
  const res: IProfileRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postLogoutService = async () => {
  sessionStorage.clear()
  const response = await axios.post(`${baseUrl}/auth/signout`)
  const res = response.data

  if (res.status < 200 || res.status >= 300) {
    const errorMessage = res.error?.message || res.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return response
}

export const postRegisterService = async (credentials: {
  name: string
  email: string
  password: string
}) => {
  const response = await axios.post(`${baseUrl}/auth/register`, credentials)
  const res: IProfileRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const loginWithKingsChat = async () => {
  await kingsChatWebSdk
    .login({
      scopes: ['profile', 'message', 'conference_call', 'send_chat_message'],
      clientId: kingsChatClientId,
    })
    .then((res) => {
      getKingChatProfile({ accessToken: res.accessToken, refreshToken: res.refreshToken })

      return { ...res }
    })
    .catch((error) => {
      console.log(error)
      return { ...error }
    })
}

export const getKingChatProfile = async ({
  accessToken,
  refreshToken,
}: {
  accessToken: string
  refreshToken: string
}) => {
  const response = await axios.post(`${baseUrl}/auth/kingschat`, {
    accessToken,
    refreshToken,
  })
  const res: IProfileRes = response.data
  sessionStorage.setItem('course-training-profile', encryptClient(res))

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

// const getKingChatProfile = async ({
//   accessToken,
//   refreshToken,
// }: {
//   accessToken: string
//   refreshToken: string
// }) => {
//   https://connect.kingsch.at/api/profile
//   axios
//     .get('https://connect.kingsch.at/developer/api/profile', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//     .then((response) => {
//       console.log(response.data, refreshToken)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
