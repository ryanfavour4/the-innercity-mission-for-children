import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="relative inset-0 flex h-full w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    </div>
  )
}
