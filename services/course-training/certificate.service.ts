import { IGetCertificateByCourseIdService } from './types'
import { baseUrl } from './constants'
import axiosInstance from '@/config/course-training/axios'

export const getCertificateByCourseIdService = async ({ id }: { id: string }) => {
  if (!id) {
    return null
  }

  const response = await axiosInstance.get(`${baseUrl}/certificates/${id}`)
  const res: IGetCertificateByCourseIdService = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postCreateCertificateService = async (payload: {
  courseId: string
  certificateName: string
}) => {
  const response = await axiosInstance.post(`${baseUrl}/certificates`, payload)
  const res = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response.data?.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
