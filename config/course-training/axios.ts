import { baseUrl } from '@/services/course-training/constants'
import { IProfileRes } from '@/services/course-training/types'
import { decryptClient } from '@/utils/crypt.client'
import axios, { AxiosInstance } from 'axios'

const getToken = async () => {
  const profileSS: IProfileRes | null = decryptClient(
    sessionStorage.getItem('course-training-profile') || '',
  )
  const token = profileSS?.token
  return token
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken()

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
