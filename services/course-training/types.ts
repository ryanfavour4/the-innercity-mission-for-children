// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SwrMutateType<T, F = any> = (
  _key: string,
  {
    arg,
  }: {
    arg: T
  },
) => Promise<F> | void

// !!!!! ========== AUTH
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

// !!! ========== COURSES
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

// !!! ========== CLASSES
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

//  !!!! ======== QUESTIONS
export type IGetQuestionsServiceRes = IGetQuestionsService[]

export interface IGetQuestionsService {
  _id: string
  classId: IGetClassesByCourseIdService
  question: string
  options: IQuestionOption[]
  correctOptionId: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type IGetQuestionsByClassIdServiceRes = IGetQuestionsByClassIdService[]

export interface IGetQuestionsByClassIdService {
  _id: string
  classId: IGetClassesByCourseIdService
  question: string
  options: IQuestionOption[]
  correctOptionId: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IQuestionOption {
  id: string
  text: string
  _id: string
}

//  !!!! ======== ANSWERS
export type IGetAnswersServiceRes = IGetAnswersService[]

export interface IGetAnswersService {
  _id: string
  classId: IGetClassesService
  courseId: IGetCoursesService
  answers: IAnswersAnswerType[]
  totalQuestions: number
  correctAnswers: number
  percentage: number
  passed: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IGetAnswersByClassIdServiceRes {
  _id: string
  classId: IGetClassesService
  courseId: IGetCoursesService
  answers: IAnswersAnswerType[]
  totalQuestions: number
  correctAnswers: number
  percentage: number
  passed: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IPostSubmitAnswersServicePayload {
  classId: string
  courseId: string
  answers: IAnswersAnswerType[]
}

export interface IPostSubmitAnswers {
  questionId: string
  selectedAnswerId: string
}

export interface IAnswersAnswerType {
  questionId: string
  selectedAnswerId: string
  isCorrect?: boolean
}
