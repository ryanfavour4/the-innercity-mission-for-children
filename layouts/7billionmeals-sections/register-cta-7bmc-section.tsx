import Link from 'next/link'
import { EventCalenderIcon, FileDocumentIcon } from '@/components/svgs'

export default function RegisterCta7bmcSection({
  openRegisterModal,
}: {
  openRegisterModal: () => void
}) {
  return (
    <>
      <section id="register-event" className="py-6">
        <div className="wrapper bg-register-cta-7bmc-section flex min-h-48 flex-col items-center justify-center gap-2 rounded-xl bg-cover px-2 py-10 text-center text-light md:min-h-96 md:py-4">
          <h4 className="text-3xl font-bold">Share Your Impact</h4>
          <p>Register your outreach, upload your reports, and show the change you’re making.</p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-2 gap-y-4 md:max-w-96">
            <Link
              href={'/'}
              className="btn-white flex w-fit items-center gap-2 text-nowrap border px-8 text-base ring-light/50"
            >
              <FileDocumentIcon className="text-2xl" />
              <p>Upload Report</p>
            </Link>
            <Link
              href="#register-event"
              onClick={openRegisterModal}
              className="btn flex w-fit items-center gap-2 text-nowrap border px-4 text-base text-light ring-light/50"
            >
              <EventCalenderIcon className="text-2xl" />
              <p>Register Event</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
