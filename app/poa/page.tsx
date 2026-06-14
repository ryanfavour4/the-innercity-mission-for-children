'use client'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import directorPreaching from '@/public/assets/poa/director-speaking.jpg'
import directorPose from '@/public/assets/poa/director-image.png'
import hourGlassImage from '@/public/assets/poa/hour-glass.png'
import Image from 'next/image'
import WishCarousel from './sections/birthday-wish-wall'
import { FormStepper } from './sections/stepper'
import { TabbedGallery } from './sections/gallery'
import { CountdownTimer } from './sections/countdown-timer'
import TestimonialForm from './sections/testimonial-form'

const links = [
  { name: 'HER STORY', href: '#' },
  { name: 'GALLERY', href: '#' },
  { name: 'BIRTHDAY WISH WALL', href: '#' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

const bannerReveal = {
  hidden: {
    opacity: 0,
    scale: 1.03,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50, rotate: 15 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 22,
    transition: {
      duration: 1,
    },
  },
}

export default function Poa() {
  return (
    <main className="font-playfair-display min-h-screen bg-[#FAF6EE] leading-none">
      <header className="bg-poa-hero overflow-hidden text-light">
        <Navbar />

        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair-display relative -mb-16 ml-auto mt-8 max-w-[12rem] pr-4 text-right text-5xl italic text-[#C9A84C] md:max-w-max md:text-[7rem]"
        >
          &quot;Love in Action&quot;
        </motion.h2>

        <section className="mx-auto h-fit w-full pt-16 xl:container md:grid md:grid-cols-12">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="relative flex flex-col items-end justify-end md:col-span-7"
          >
            <Image
              src={directorPose}
              width="100"
              height="100"
              unoptimized
              className="relative left-0 w-full scale-125 object-cover object-top md:-left-[10%] md:aspect-[1.3] md:scale-110"
              alt="director-preaching"
            />
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex flex-col justify-end bg-gradient-to-b from-dark/15 to-dark py-24 md:col-span-5 md:from-transparent md:via-transparent md:to-transparent md:px-4 md:py-8"
          >
            <figcaption className="absolute bottom-0 right-0 flex w-full flex-col gap-1 bg-gradient-to-b from-dark/10 via-dark/90 to-dark px-4 pb-10 md:static md:w-auto md:gap-2 md:from-transparent md:via-transparent md:to-transparent md:pb-8">
              <span className="w-fit border border-[#C9A84C] bg-[#2A1A1F]/50 px-2 py-1 text-[0.5rem] tracking-wide text-[#FFE08F] md:mb-5 md:text-xs">
                EXECUTIVE MINISTER · A LIFE OF SERVICE
              </span>

              <h2 className="font-playfair-display text-3xl md:text-5xl">Pastor Omoh Alabi</h2>

              <hr className="my-4 max-w-[8rem] border border-[#C9A84C]" />

              <blockquote className="mb-2 max-w-sm text-lg italic md:mb-6 md:text-2xl">
                &quot;Not all leaders lead from a podium; some lead from their knees&quot;
              </blockquote>

              {/* BUTTONS (stagger effect) */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="mt-4 flex flex-col gap-2 md:gap-y-4"
              >
                {['HER STORY', 'GALLERY', 'BIRTHDAY GREETINGS'].map((text, i) => (
                  <motion.button
                    key={text}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-fit px-7 py-3 text-sm tracking-wide md:text-base ${
                      i === 0
                        ? 'bg-[#C9A84C] text-[#2A1A1F] hover:bg-[#C9A84C]/80'
                        : 'border-2 border-[#C9A84C] text-light hover:bg-[#C9A84C]/25'
                    }`}
                  >
                    {text}
                  </motion.button>
                ))}
              </motion.div>
            </figcaption>
          </motion.div>
        </section>
      </header>

      <section className="py-14">
        <div className="container px-3">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="font-playfair-display mx-auto mb-10 max-w-[11rem] text-center text-[2.8rem] font-medium italic leading-normal text-[#310411] md:max-w-max md:text-[4rem]"
          >
            Road To POA ‘’26
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <CountdownTimer />
          </motion.div>

          <figure className="mx-auto max-w-7xl grid-cols-2 pt-10 md:grid md:pt-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeLeft}
              className="flex flex-col gap-8"
            >
              <p className="font-body text-center text-base leading-normal md:text-left md:text-lg">
                Welcome to the digital commemoration of a life beautifully lived. This space is
                dedicated to celebrating the enduring legacy, profound faith, and unwavering service
                of a leader who touched countless lives. We invite you to explore her story, witness
                her heart, and share your own memories in tribute.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="bg-[#2A1A1F] px-8 py-10 text-center text-2xl text-light md:px-20 md:text-4xl lg:px-36"
              >
                <cite>&quot;Her greatest sermon was her life&quot;</cite>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={hourGlassImage}
                width="100"
                height="100"
                unoptimized
                className="mx-auto -mt-16 w-full max-w-xs rotate-[22deg] md:max-w-md"
                alt="hour glass"
              />
            </motion.div>
          </figure>
        </div>
      </section>

      <section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={bannerReveal}
          className="bg-poa-hero mb-10 overflow-hidden px-3 py-28 text-light"
        >
          <div className="font-playfair-display flex flex-col items-center justify-center gap-2 text-center">
            <motion.h3
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="font-playfair-display text-5xl text-[#C9A84C]"
            >
              HER STORY
            </motion.h3>

            <motion.p variants={fadeUp} transition={{ delay: 0.35 }}>
              Called Before She Was Born
            </motion.p>
          </div>
        </motion.div>

        <div className="container">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="font-playfair-display mx-auto mb-10 max-w-sm text-center text-[2.8rem] font-medium italic leading-normal text-[#310411] md:max-w-max md:text-[4rem]"
          >
            Click on Year For Picture Reveal
          </motion.h3>

          <br />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            <FormStepper currentStep={5} />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#4E061A] py-10 text-light md:py-20">
        <div className="container flex grid-cols-2 flex-col-reverse gap-5 px-3 py-10 md:grid">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-2 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <Icon className="text-4xl text-[#C9A84C]" icon={'proicons:quote'} />
            </motion.div>

            <motion.cite
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="text-2xl md:text-4xl"
            >
              &quot;She saw faces, not numbers; souls, not statistics. Every interaction was a
              sacred encounter.&quot;
            </motion.cite>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="-mt-52 flex w-full flex-col items-center justify-center gap-5 bg-[#F5E8C0] px-16 py-16 text-center"
          >
            <motion.small
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs text-[#755B00]"
            >
              HER FAVORITE SCRIPTURE
            </motion.small>

            <motion.cite
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="text-2xl text-dark md:text-4xl"
            >
              &quot;I have fought the good fight, I have finished the race, I have kept the
              faith.&quot;
            </motion.cite>

            <motion.small
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
              }}
              className="text-[#544244]"
            >
              — 2 Timothy 4:7
            </motion.small>
          </motion.span>
        </div>
      </section>

      <section className="bg-poa-gallery bg-cover py-10 text-light md:py-16">
        <div className="container mx-auto flex max-w-7xl flex-col gap-6 px-3 md:gap-y-10">
          <TabbedGallery />
        </div>
      </section>

      <section className="pb-16">
        <div className="font-playfair-display bg-poa-hero mb-10 flex flex-col items-center justify-center gap-2 overflow-hidden px-3 py-28 text-center text-light">
          <h3 className="font-playfair-display text-5xl text-[#C9A84C]">BIRTHDAY WISH WALL</h3>
          <cite className="text-xl md:text-2xl">
            &quot;Her Legacy Lives in Every Life She Touched&quot;
          </cite>
          <span className="flex w-full items-center justify-center gap-2 text-xs md:text-base">
            <hr className="my-4 w-full max-w-[2rem] border-[#C9A84C]" />
            <small className="mb-1">Share how she has impacted your life</small>
            <hr className="my-4 w-full max-w-[2rem] border-[#C9A84C]" />
          </span>
        </div>
        <WishCarousel />
      </section>

      <TestimonialForm />

      <footer className="font-playfair-display bg-poa-hero flex flex-col items-center justify-center gap-y-10 overflow-hidden px-3 py-28 pb-20 text-center text-light">
        <h3 className="font-playfair-display text-2xl text-[#C9A84C] md:text-3xl">In Her Honour</h3>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="style-1-nav-link tracking-wider after:!bg-[#C9A84C] hover:text-[#C9A84C]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <small className="font-body text-xs text-[#C9A84C] md:text-sm">
          © {new Date().getFullYear()} IN HER HONOR. ALL RIGHTS RESERVED.
        </small>
      </footer>
    </main>
  )
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="border-b border-[#C9A84C]/50 bg-[#310411] px-8 py-4">
        <div className="container flex items-center justify-between text-white">
          <span className="flex flex-col items-start gap-1 text-[#C9A84C]">
            <h1 className="font-playfair-display text-xl md:text-2xl">In Her Honour</h1>
            <small className="text-[0.5rem] md:text-xs">Executive Minister InnerCity Mission</small>
          </span>

          <ul className="hidden gap-6 text-sm md:flex">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="style-1-nav-link tracking-wider after:!bg-[#C9A84C] hover:text-[#C9A84C]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="style-1-nav-link md:!hidden"
          >
            <span className="flex flex-row items-center justify-center px-2 text-sm text-[#C9A84C] after:!bg-[#C9A84C] hover:text-[#C9A84C] focus:outline-none md:hidden">
              <Icon className="mt-1" icon={'boxicons:caret-right'} />
              <p>MENU</p>
            </span>
          </button>
        </div>

        {/* //! Slide navbar for mobile  */}
        <section
          className={`fixed inset-0 z-20 bg-dark/50 text-textcolor backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'visible clip-path-slide-top-down' : 'invisible delay-200 clip-path-close'}`}
        >
          <main
            className={`${mobileMenuOpen ? 'delay-200 clip-path-slide-top-down' : 'clip-path-close'} h-full w-full overflow-y-auto bg-[#310411] px-8 py-4 text-light duration-500`}
          >
            <header className="container mb-8 flex h-fit items-center justify-between text-white">
              <span className="flex flex-col items-start gap-1 text-[#C9A84C]">
                <h1 className="font-playfair-display text-xl md:text-2xl">In Her Honour</h1>
                <small className="text-[0.5rem] md:text-xs">
                  Executive Minister InnerCity Mission
                </small>
              </span>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="style-1-nav-link"
              >
                <span className="flex flex-row items-center justify-center px-2 text-sm text-[#C9A84C] after:!bg-[#C9A84C] hover:text-[#C9A84C] focus:outline-none md:hidden">
                  <Icon className="mt-1" icon={'boxicons:caret-left'} />
                  <p>GO BACK</p>
                </span>
              </button>
            </header>

            <div className="flex h-[85%] flex-col items-center justify-center">
              <ul className="mt-16 flex w-full max-w-sm flex-col items-start gap-8 text-lg">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="style-1-nav-link tracking-widest after:!bg-[#C9A84C] hover:text-[#C9A84C]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <figure className="relative -mr-16 mt-auto block h-32 w-svw overflow-hidden rounded-l-full border-2 border-[#C9A84C]">
                <span className="absolute inset-0 bg-gradient-to-r from-dark/55 to-dark/15" />
                <Image
                  src={directorPreaching}
                  width="100"
                  height="100"
                  unoptimized
                  className={`w-full`}
                  alt="director-preaching"
                />
              </figure>
            </div>
          </main>
        </section>
      </nav>
    </>
  )
}
