import React from 'react'

const defaultSteps = [
  { id: 1, label: 'Early Years', year: 1955 },
  { id: 2, label: 'The Call', year: 1978 },
  { id: 3, label: 'The Journey', year: 1992 },
  { id: 4, label: 'Today', year: 2024 },
]

type Step = {
  id: number
  label: string
  year: number
}

export const FormStepper = ({
  currentStep,
  stepsTrack = defaultSteps,
}: {
  currentStep: number
  stepsTrack?: Step[]
}) => {
  return (
    <div className="w-full py-16 pb-72">
      {/* The Magic Wrapper: 
        flex-col makes it vertical on mobile.
        md:flex-row makes it horizontal on desktop.
      */}
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        {stepsTrack.map((step, index) => {
          const isActive = currentStep >= step.id
          const isCompleted = currentStep > step.id
          const isLastStep = index === stepsTrack.length - 1

          return (
            <React.Fragment key={step.id}>
              {/* Step Circle & Label Container */}
              <div className="flex flex-col items-center">
                <small className="font-body mb-3 font-semibold text-[#310411]">{step.year}</small>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#E5E7EB] bg-[#310411] text-[#E5E7EB] shadow-md ring-2 ring-[#C9A84C]'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isCompleted ? <span className="text-lg">🎂</span> : step.id}
                </div>

                <div className="mt-2 text-center">
                  <p
                    className={`font-body whitespace-nowrap text-sm font-semibold ${
                      isActive ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {!isLastStep && (
                <div className="/* Mobile: Vertical Line */ /* Desktop: Horizontal Line */ my-2 flex min-h-[40px] w-[2px] flex-1 overflow-hidden bg-[#C9A84C] transition-all duration-300 md:mx-4 md:my-0 md:mb-1 md:h-[2px] md:min-h-0 md:w-auto md:min-w-[20px]">
                  <div
                    className={`bg-[#C9A84C] transition-all duration-500 ${
                      isCompleted ? 'h-full w-full' : 'h-0 w-full md:h-full md:w-0'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
