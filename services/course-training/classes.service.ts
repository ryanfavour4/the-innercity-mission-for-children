import axios from 'axios'
import { IGetClassesService, IGetClassesServiceRes, IGetClassesByCourseIdServiceRes } from './types'
import { baseUrl } from './constants'

export const getClassesService = async () => {
  const response = await axios.get(`${baseUrl}/classes`)
  const res: IGetClassesServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getClassesByCourseIdService = async ({ id }: { id: string }) => {
  const response = await axios.get(`${baseUrl}/classes/course/${id}`)
  const res: IGetClassesByCourseIdServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getClassesByIdService = async ({ id }: { id: string }) => {
  const response = await axios.get(`${baseUrl}/class/${id}`)
  const res: IGetClassesService = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const postCreateCourseService = async (payload: {
  coursePassPercent?: number
  title: string
  description: string
}) => {
  const response = await axios.post(`${baseUrl}/classes/`, payload)
  const res = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response.data?.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
