export interface IPostLoginServiceRes {
  message: string
  user: User
  session: Session
  error: { message: string | null } | null
  status: number
}

export interface IProfileRes {
  token: string
  user: User
}

export interface User {
  email: string
  name: string
  avatar: string
  kingschatId: string
  provider: string
  emailVerified: boolean
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
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

// !!! CLASSES
export type IGetClassesByCourseIdServiceRes = IGetClassesByCourseIdService[]

export interface IGetClassesByCourseIdService {
  _id: string
  courseId: string
  title: string
  description: string
  videoUrl: string
  order: number
  createdAt: string
  updatedAt: string
  __v: number
}

export type IGetClassesServiceRes = IGetClassesService[]

export interface IGetClassesService {
  coursePassPercent: number
  _id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  __v: number
}
