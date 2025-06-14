'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/assets/icons/logo-black-text.png'
import logoBlue from '@/public/assets/icons/logo-black-text.png'
import { ChevronDownIcon, CloseXIcon, MenuFriesIcon, SearchMagnifierIcon } from '@/components/svgs'
import useTopnavbar, { menus as defaultmenu } from './useTopnavbar'

export default function TopNavbar({ menus = defaultmenu }) {
  const {
    setNavOpen,
    getActiveUrl,
    setSubMenuClicked,
    subMenuClicked,
    navOpen,
    pathName,
    navListRef,
  } = useTopnavbar()

  return (
    <>
      <nav className="relative pb-16 md:pb-20">
        <div className="fixed left-0 right-0 top-0 z-20 w-full bg-light py-2">
          <div className="wrapper flex items-center justify-between">
            <Link href={'/'}>
              <Image src={logo.src} alt="logo" className="w-24 md:w-28" width={100} height={50} />
            </Link>

            <div className="hidden md:inline-block">
              <ul className="flex items-center space-x-5 text-sm text-dark">
                {menus.map((menu, index) => (
                  <li
                    onMouseEnter={() => setSubMenuClicked(menu.subPath || '')}
                    onMouseLeave={() => setSubMenuClicked('')}
                    key={index}
                    className="relative"
                  >
                    <Link
                      className="flex items-center gap-1 font-medium hover:text-primary hover:underline"
                      href={menu.path || ''}
                    >
                      <p>{menu.title}</p>
                      {menu.subMenus && <ChevronDownIcon />}
                    </Link>
                    {menu.subMenus && (
                      <ol
                        className={`absolute left-0 h-0 min-w-60 overflow-hidden rounded-md bg-light text-sm shadow ${subMenuClicked == menu.subPath && '!h-fit'}`}
                      >
                        {menu.subMenus.map((subMenu, index) => (
                          <li key={index}>
                            <Link
                              className="flex w-full items-center justify-between border-4 border-transparent px-3 py-2 text-textcolor hover:border-l-primary hover:bg-secondary/50 hover:font-semibold hover:text-primary"
                              href={subMenu.external ? subMenu.path : menu.subPath + subMenu.path}
                              target={subMenu.external ? '_blank' : '_self'}
                            >
                              <p>{subMenu.title}</p>
                              <small className="ml-10 text-xs font-bold text-primary">
                                {subMenu.external && '◹'}
                              </small>
                            </Link>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-5">
              <span className="mr-4 hidden cursor-pointer text-2xl text-light md:inline">
                <SearchMagnifierIcon />
              </span>
              <Link href={'/donate'} className="block w-fit">
                <button className="btn-primary w-fit">Donate</button>
              </Link>
              <button onClick={() => setNavOpen((p) => !p)} className="inline-block md:hidden">
                <MenuFriesIcon className="btn-white h-12 w-12 rotate-180 px-2 text-5xl font-bold text-primary ring-light hover:bg-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* _____________ Slide navbar for mobile _____________ */}
      <div
        className={`fixed inset-0 z-20 bg-dark/50 text-textcolor backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${navOpen ? 'visible clip-path-slide-top-down' : 'invisible delay-200 clip-path-close'}`}
      >
        <div
          className={`${navOpen ? 'delay-200 clip-path-slide-top-down' : 'clip-path-close'} h-full w-full bg-light px-2 py-3 duration-500`}
        >
          <div className="flex items-center justify-between">
            <Image src={logoBlue.src} alt="logo" className="w-24 md:w-28" width={100} height={50} />
            <button onClick={() => setNavOpen((p) => !p)} className="ml-auto block md:hidden">
              <CloseXIcon className="btn h-12 w-12 rotate-180 px-2 font-bold text-textcolor ring-textcolor" />
            </button>
          </div>

          <div className="mt-10 h-[calc(100vh-100px)] overflow-scroll py-6 pb-20">
            <ul ref={navListRef} className="h-fit space-y-3">
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`overflow-hidden rounded-md border border-textcolor/50 hover:border-primary hover:bg-primary/20 hover:text-primary ${getActiveUrl(menu.path || '', menu.subPath || '') && 'border-primary bg-primary/15 text-primary'}`}
                >
                  <Link
                    onClick={() => setSubMenuClicked(menu.subPath || '')}
                    className="flex w-full items-center justify-between px-3 py-2 font-semibold"
                    href={menu.path || ''}
                  >
                    <p>{menu.title}</p>
                    {menu.subMenus && <ChevronDownIcon />}
                  </Link>

                  {menu.subMenus && (
                    <ul
                      className={`mb-0 h-0 w-full overflow-hidden bg-white px-3 transition-all ${subMenuClicked == menu.subPath && 'mb-2 h-auto'}`}
                    >
                      {menu.subMenus.map((subMenu, index) => (
                        <li key={index}>
                          <Link
                            className={`flex w-full items-center justify-between border-2 border-transparent px-3 py-2 hover:border-l-primary hover:bg-secondary/50 hover:font-semibold ${pathName === menu.subPath + subMenu.path && 'border-l-primary bg-secondary/50 font-semibold'}`}
                            href={subMenu.external ? subMenu.path : menu.subPath + subMenu.path}
                            target={subMenu.external ? '_blank' : '_self'}
                          >
                            <p>{subMenu.title}</p>
                            <small className="ml-10 text-xs font-bold text-primary">
                              {subMenu.external && '◹'}
                            </small>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
