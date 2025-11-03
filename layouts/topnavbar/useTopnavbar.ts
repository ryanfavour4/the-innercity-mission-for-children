import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export type menu_type = {
  title: string
  path?: string
  subPath?: string
  external?: boolean
  subMenus?: {
    title: string
    path: string
    external?: boolean
    inherit?: boolean
  }[]
}

export const menus: menu_type[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About us',
    path: '/about',
  },
  {
    title: 'What we do',
    subPath: '/what-we-do',
    subMenus: [
      {
        title: 'Educational Program',
        path: '/educational-program',
      },
      {
        title: 'Feeding Program',
        path: '/feeding-program',
      },
      {
        title: 'Family Strengthening Program',
        path: '/family-strengthen-program',
      },
      {
        title: 'Shelter Program',
        path: '/shelter-program',
      },
      {
        title: 'Humanitarian Response',
        path: '/humanitarian-response',
      },
      {
        title: 'Health & Nutrition Program',
        path: '/health-and-nutrition-program',
      },
      {
        title: 'Child Safety & Advocacy Program',
        path: '/child-safety-and-advocacy-program',
      },
      {
        title: 'Faith & Development Program',
        path: '/faith-and-development-program',
      },
    ],
  },
  {
    title: 'Special Highlights',
    subPath: '/special-highlights',
    subMenus: [
      {
        title: 'Summer Initiatives',
        path: '/summerinitiatives',
      },
      {
        title: '7 Billion Meals',
        path: '/7billionmeals',
      },
      {
        title: 'Back To School',
        path: '/backtoschool',
      },
      {
        title: 'Send Portions',
        path: '/sendportions',
        inherit: false,
      },
      {
        title: 'Video Livestream',
        path: '/livestream/',
      },
      {
        title: 'Spread Truth Campaign',
        path: '/spread-truth/',
      },
      {
        title: 'North-East Nigeria',
        path: '/north-east-nigeria',
      },
      {
        title: 'Colouring Dream tv',
        path: 'https://colouringdreams.tv/',
        external: true,
      },
      {
        title: '360 Virtual Tours',
        path: 'https://360.theinnercitymission.ngo/',
        external: true,
      },
    ],
  },
  {
    title: 'Support Project',
    subPath: '/support-project',
    subMenus: [
      {
        title: 'Partner With Us',
        path: '/partner-with-us',
      },
      {
        title: '7 Billion Meals',
        path: '/special-highlights/7billionmeals',
        inherit: false,
      },
      {
        title: 'Volunteer',
        path: 'https://hvn.theinnercitymission.ngo/',
        external: true,
      },
      {
        title: 'Online Fundraising',
        path: 'https://fundraise.theinnercitymission.ngo/',
        external: true,
      },
    ],
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
]

export default function useTopnavbar() {
  const navListRef = useRef<HTMLUListElement>(null)
  const [subMenuClicked, setSubMenuClicked] = useState<string>('')
  const [navOpen, setNavOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeMenu, setActiveMenu] = useState<menu_type | null>(null)
  const pathName = usePathname()

  const getActiveUrl = (path: string, subPath?: string): boolean => {
    // Check if the main path matches
    if (pathName === path) {
      return true
    }
    // Check if the subPath exists and matches
    if (subPath && pathName.startsWith(subPath)) {
      return true
    }
    return false
  }

  useEffect(() => {
    const activeMenuObj = menus.find(
      (menu) =>
        getActiveUrl(menu.path || '', menu.subPath) ||
        (menu.subMenus && menu.subMenus.some((subMenu) => getActiveUrl(subMenu.path))),
    )
    setActiveMenu(activeMenuObj || null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])

  useEffect(() => {
    const navList = navListRef.current

    if (navList) {
      const handleClick = (e: MouseEvent) => {
        // Check if the target is a link tag and then toggle the nav open and close
        if (e.target instanceof HTMLElement) {
          // This line checks if the target is an <a> tag with a non-empty href attribute and toggles the nav state
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          e.target.tagName === 'A' &&
            e.target.attributes.getNamedItem('href')?.value !== '' &&
            setNavOpen((p) => !p)
        }
      }

      navList.addEventListener('click', (e) => handleClick(e))

      return () => {
        navList.removeEventListener('click', handleClick)
      }
    }
  }, [])

  return {
    setNavOpen,
    getActiveUrl,
    setSubMenuClicked,
    subMenuClicked,
    navOpen,
    pathName,
    navListRef,
  }
}
