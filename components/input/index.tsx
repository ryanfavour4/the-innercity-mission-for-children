/* eslint-disable @typescript-eslint/no-explicit-any */
import useInput, { IInputProps, ITextAreaProps } from './useInput'
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { formatNumber } from '@/utils/format-number'
import { EyeIcon, EyeOffIcon } from '../svgs'

export default function Input({
  type,
  name,
  placeholder,
  required = false,
  minLength,
  maxLength,
  state,
  className,
  setState,
  ...rest
}: IInputProps) {
  const { seePassword, inputType, validateOnBlur, setSeePassword } = useInput(
    type,
    state,
    required,
    setState,
    minLength,
    maxLength,
  )

  return (
    <div className="relative h-full w-full">
      {type === 'text-area' ? (
        <>
          {/* //* TEXT AREA */}
          <TextArea
            name={name}
            state={state}
            setState={setState}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            className={className}
            {...rest}
          />
        </>
      ) : (
        <>
          {/* //* INPUT */}
          <input
            type={inputType}
            className={`disabled:bg-gray-100 block w-full rounded-md border-2 bg-white px-3 py-2.5 text-base text-textcolor -outline-offset-1 outline-primary ring-primary/25 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:text-gray-500 disabled:ring-0 sm:text-sm/6 md:text-sm ${
              state.error ? 'border-red-600' : 'border-primary/25'
            } ${type === 'password' ? 'pr-12' : 'pr-3'} ${className}`}
            name={name}
            id={name}
            {...rest}
            placeholder={placeholder}
            required={required}
            value={state.value}
            onChange={(e) => {
              setState((prev: any) => ({
                ...prev,
                value: type === 'amount' ? formatNumber(e.target.value) : e.target.value,
                error: false,
                dirty: true,
              }))
            }}
            onBlur={validateOnBlur}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onFocus={(_e) => setState((prev: any) => ({ ...prev, dirty: true }))}
          />
        </>
      )}

      {/* //* PASSWORD EYE */}
      {type === 'password' && (
        <div
          onClick={() => setSeePassword(!seePassword)}
          className={`absolute right-3 top-2 h-6 w-6 cursor-pointer rounded-2xl ${
            state.message ? 'top-2.5' : 'top-2.5'
          }`}
        >
          {seePassword ? <EyeIcon className="h-6 w-6" /> : <EyeOffIcon className="h-6 w-6" />}
        </div>
      )}
      {/* //* ERROR MESSAGE */}
      <p className="text-sm text-red-600">{state.message}</p>
    </div>
  )
}

function TextArea({
  name,
  placeholder,
  required = false,
  minLength,
  maxLength,
  state,
  className,
  setState,
  ...rest
}: ITextAreaProps) {
  const { validateOnBlur } = useInput('text', state, required, setState, minLength, maxLength)
  return (
    <>
      <textarea
        className={`disabled:bg-gray-100 block w-full resize-none rounded-md border-2 bg-white px-3 py-2.5 text-base text-textcolor -outline-offset-1 outline-primary ring-primary/25 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:text-gray-500 disabled:ring-0 sm:text-sm/6 md:text-sm ${
          state.error ? 'border-red-600' : 'border-primary/75'
        } ${className}`}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        value={state.value}
        onChange={(e) => {
          setState((prev: any) => ({
            ...prev,
            value: e.target.value,
            error: false,
            dirty: true,
          }))
        }}
        onBlur={validateOnBlur}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onFocus={(_e: any) => setState((prev: any) => ({ ...prev, dirty: true }))}
        {...(rest as DetailedHTMLProps<
          TextareaHTMLAttributes<HTMLTextAreaElement>,
          HTMLTextAreaElement
        >)}
      />
    </>
  )
}
