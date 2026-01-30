export interface IPostLoginServiceRes {
  message: string
  user: User
  session: Session
  error: { message: string | null } | null
  status: number
}

export interface User {
  id: number
  fullname: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface Session {
  isLoggedIn: boolean
  token: string
  user: User
}

// !!! COURSES
export type IGetCoursesServiceRes = IGetCoursesService[]

export interface IGetCoursesService {
  coursePassPercent: number
  _id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type IGetCoursesSubModuleServiceRes = IGetCoursesSubModuleService[]
export interface IGetCoursesSubModuleService {
  _id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  __v: number
  classesCount: number
  questionsCount: number
}
