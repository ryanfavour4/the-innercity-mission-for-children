import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'

// components/CourseSidebar.tsx
export function CourseSidebar({ navOpen }: { navOpen: boolean }) {
  return (
    <aside
      className={`absolute bottom-0 top-0 w-80 overflow-y-auto border-r bg-light md:relative md:block md:!translate-x-0 ${navOpen ? '!-translate-x-full' : ''}`}
    >
      <div className="flex items-center gap-4 border-b border-textcolor/25 p-6">
        <Link href={'#'}>
          <Image
            src={logoDefault}
            unoptimized
            alt="logo"
            className="w-8 md:w-12"
            width={100}
            height={50}
          />
        </Link>
        <h2 className="text-xl font-bold">Course Content</h2>
      </div>
      <nav className="p-2">
        <button
          className={`mb-1 flex w-full items-center gap-3 rounded-lg p-3 text-left text-base text-textcolor/75 transition-colors ${'bg-primary/25 font-semibold !text-primary'}`}
        >
          <span className="font-mono text-xs opacity-50">{String(0 + 1).padStart(2, '0')}</span>
          <span className="truncate text-base">Jumping away now</span>
        </button>
        <button
          className={`mb-1 flex w-full items-center gap-3 rounded-lg p-3 text-left text-base text-textcolor/75 transition-colors ${''}`}
        >
          <span className="font-mono text-xs opacity-50">{String(0 + 1).padStart(2, '0')}</span>
          <span className="truncate text-base">Jumping away now</span>
        </button>
      </nav>
    </aside>
  )
}
