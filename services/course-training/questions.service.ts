import axios from 'axios'
import {
  IGetQuestionsByClassIdServiceRes,
  IGetQuestionsService,
  IGetQuestionsServiceRes,
} from './types'
import { baseUrl } from './constants'

export const getQuestionsService = async () => {
  const response = await axios.get(`${baseUrl}/questions`)
  const res: IGetQuestionsServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getQuestionsByClassIdService = async ({ id }: { id: string }) => {
  if (!id) {
    return null
  }
  console.log(id, 'THE ID GOT HERE')
  const response = await axios.get(`${baseUrl}/questions/class/${id}`)
  const res: IGetQuestionsByClassIdServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getQuestionsByIdService = async ({ id }: { id: string }) => {
  const response = await axios.get(`${baseUrl}/questions/${id}`)
  const res: IGetQuestionsService = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postCreateQuestionService = async (payload: {
  coursePassPercent?: number
  title: string
  description: string
}) => {
  const response = await axios.post(`${baseUrl}/questions/`, payload)
  const res = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response.data?.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
