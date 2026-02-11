import { IGetUserServiceRes } from './types'
import { baseUrl } from './constants'
import axiosInstance from '@/config/course-training/axios'

export const getUsersService = async () => {
  const response = await axiosInstance.get(`${baseUrl}/users/`)
  const res: IGetUserServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
