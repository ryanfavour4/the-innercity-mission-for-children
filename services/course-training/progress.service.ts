import { IGetProgressByCourseIdService, IGetProgressServiceRes } from './types'
import { baseUrl } from './constants'
import axiosInstance from '@/config/course-training/axios'

export const getProgressByCourseIdService = async ({ id }: { id: string }) => {
  if (!id) {
    return null
  }

  const response = await axiosInstance.get(`${baseUrl}/progress/${id}`)
  const res: IGetProgressByCourseIdService = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postCreateClassService = async (payload: {
  courseId: string
  title: string
  description: string
  videoUrl: string
  order: number
}) => {
  const response = await axiosInstance.post(`${baseUrl}/classes`, payload)
  const res = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response.data?.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getProgressService = async () => {
  const response = await axiosInstance.get(`${baseUrl}/progress/`)
  const res: IGetProgressServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
