import axios from 'axios'
import {
  IGetAnswersByClassIdServiceRes,
  IGetAnswersService,
  IGetAnswersServiceRes,
  IPostSubmitAnswersServicePayload,
} from './types'
import { baseUrl } from './constants'
import axiosInstance from '@/config/course-training/axios'

export const getAnswersService = async () => {
  const response = await axios.get(`${baseUrl}/answers`)
  const res: IGetAnswersServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getAnswersByClassIdService = async ({ id }: { id: string }) => {
  const response = await axios.get(`${baseUrl}/answers/class/${id}`)
  const res: IGetAnswersByClassIdServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getAnswersByIdService = async ({ id }: { id: string }) => {
  const response = await axios.get(`${baseUrl}/answers/${id}`)
  const res: IGetAnswersService = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postSubmitAnswersService = async (payload: IPostSubmitAnswersServicePayload) => {
  const response = await axiosInstance.post(`${baseUrl}/answers/submit`, payload)
  const res = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response.data?.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
