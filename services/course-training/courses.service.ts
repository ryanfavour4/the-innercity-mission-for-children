import axios from 'axios'
import { IGetCoursesService, IGetCoursesServiceRes, IGetCoursesSubModuleServiceRes } from './types'
import { baseUrl } from './constants'

export const getCoursesService = async () => {
  const response = await axios.get(`${baseUrl}/courses`)
  const res: IGetCoursesServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getCoursesSubModulesService = async () => {
  const response = await axios.get(`${baseUrl}/courses/sub-modules`)
  const res: IGetCoursesSubModuleServiceRes = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response?.data?.message || response.data || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}

export const getCourseByIdService = async ({ id }: { id: string }) => {
  const response = await axios.get(`${baseUrl}/courses/${id}`)
  const res: IGetCoursesService = response.data

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
  const response = await axios.post(`${baseUrl}/courses/`, payload)
  const res = response.data

  if (response.status < 200 || response.status >= 300) {
    const errorMessage = response.data?.message || 'Something went wrong'
    throw new Error(errorMessage)
  }

  return res
}
