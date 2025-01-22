import Link from 'next/link'
import React from 'react'

export default function CtaSection() {
  return (
    <div className="bg-light py-10">
      <div className="wrapper flex h-96 flex-col items-center justify-center gap-10 rounded-xl bg-[url('/assets/images/cta-banner.jpg')] bg-cover bg-center text-white md:rounded-xl">
        <h3 className="text-center text-3xl font-bold tracking-wide md:text-4xl">
          Every Child is your Child!
        </h3>

        <div className="flex flex-row items-center gap-4 md:flex-row md:gap-8">
          <Link
            className="btn-primary block w-fit py-3"
            href={'/https://fundraise.theinnercitymission.ngo/'}
          >
            Join as fundraiser
          </Link>
          <Link className="btn-white block w-fit py-3" href={'/donate'}>
            Donate
          </Link>
        </div>
      </div>
    </div>
  )
}
