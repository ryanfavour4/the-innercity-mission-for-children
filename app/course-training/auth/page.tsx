'use client'
import { FormEvent, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/icons/educators-cdrtification-program-logo.png'
import kingsChatLogo from '@/public/assets/icons/kingschat-logo.png'
import useSWRMutation from 'swr/mutation'
import {
  loginWithKingsChat,
  postLoginService,
  postRegisterService,
} from '@/services/course-training/auth.service'
import { useStorageListener } from '@/hooks/use-storage'
import { decryptClient, encryptClient } from '@/utils/crypt.client'
import { IProfileRes, SwrMutateType } from '@/services/course-training/types'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const navigate = useRouter()
  const loginSwrMutate: SwrMutateType<{ email: string; password: string }> = (_, { arg }) =>
    postLoginService(arg)
  const { trigger: triggerLogin, isMutating: loginLoading } = useSWRMutation(
    '/auth/login',
    loginSwrMutate,
  )
  const registerSwrMutate: SwrMutateType<{ email: string; password: string; name: string }> = (
    _,
    { arg },
  ) => postRegisterService(arg)
  const { trigger: triggerRegister, isMutating: registerLoading } = useSWRMutation(
    '/auth/register',
    registerSwrMutate,
  )
  const { trigger, isMutating } = useSWRMutation('/auth/kingschat', loginWithKingsChat)
  const profileSS: IProfileRes | null = decryptClient(
    useStorageListener('course-training-profile') || '',
  )

  useEffect(() => {
    if (profileSS) navigate.replace('/course-training/home#courses')
    console.log(profileSS)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileSS])

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      triggerLogin({ email, password: email })
        .catch((err) => {
          toast.error(err?.response?.data?.message)
          console.log(err)
        })
        .then((res) => {
          console.log(res)
          sessionStorage.setItem('course-training-profile', encryptClient(res))
        })
    } else {
      triggerRegister({ email, name, password: email })
        .catch((err) => {
          toast.error(err?.response?.data?.message)
          console.log(err)
        })
        .then((res: IProfileRes) => {
          sessionStorage.setItem('course-training-profile', encryptClient(res))
        })
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-2 py-6 md:p-6">
      {/* Back to Home Link */}
      <Link
        href="/course-training/home"
        className="left-8 top-8 mb-6 mr-auto flex items-center gap-2 text-base text-textcolor/75 transition hover:text-primary md:absolute"
      >
        <Icon icon="lucide:arrow-left" />
        <span>Back to Home</span>
      </Link>

      <div className="max-auto w-full md:max-w-[450px]">
        {/* The Card */}
        <div className="rounded-3xl border border-gray-100 bg-light px-4 py-10 shadow-lg md:p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="flex flex-col items-center font-bold tracking-tighter">
              <Image
                src={logo}
                unoptimized
                alt="logo"
                className="w-12 md:w-16"
                width={100}
                height={50}
              />
            </span>
            <h1 className="text-3xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="mt-2 text-base text-textcolor/75">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-primary hover:underline"
                disabled={isMutating || loginLoading || registerLoading}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {!isLogin && (
              <div>
                <label className="mb-1 ml-1 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <Icon
                    icon="lucide:user"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-gray-50 w-full rounded-2xl border border-gray-200 py-3.5 pl-11 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-1 ml-1 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Icon
                  icon="lucide:mail"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="bg-gray-50 w-full rounded-2xl border border-gray-200 py-3.5 pl-11 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="hidden">
              <div className="mb-1 ml-1 flex justify-between">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                {isLogin && (
                  <a href="#" className="hidden text-sm text-primary hover:underline">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <Icon
                  icon="lucide:lock"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 w-full rounded-2xl border border-gray-200 py-3.5 pl-11 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              disabled={isMutating || loginLoading || registerLoading}
              className="btn-primary mt-10 flex w-full items-center justify-center shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              {(isMutating || loginLoading || registerLoading) && (
                <Icon icon={'codex:loader'} className="text-2xl" />
              )}
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-textcolor/75"></div>
            </div>
            <span className="relative bg-light px-4 text-sm text-textcolor/75">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button className="hover:bg-gray-50 hidden items-center justify-center gap-2 rounded-2xl border border-gray-200 py-3 transition">
              <Icon icon="logos:google-icon" className="text-lg" />
              <span className="text-sm font-semibold">Google</span>
            </button>
            <button
              onClick={() => trigger()}
              disabled={isMutating || loginLoading || registerLoading}
              className="hover:bg-gray-50 flex items-center justify-center gap-2 rounded-2xl border border-primary py-3 transition"
            >
              {(isMutating || loginLoading || registerLoading) && (
                <Icon icon={'codex:loader'} className="text-2xl" />
              )}
              <Image alt="kingsChatLogo" unoptimized src={kingsChatLogo} className="size-5" />
              <span className="text-sm font-semibold">Signin With Kingchat</span>
            </button>
          </div>

          {/* Toggle Link */}
          <p className="mt-8 hidden text-center text-base text-textcolor/75">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-primary hover:underline"
              disabled={isMutating || loginLoading || registerLoading}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>

        {/* Small Footer Text */}
        <p className="mt-8 text-center text-xs text-gray-400">
          By continuing, you agree to ICM&apos;s Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
