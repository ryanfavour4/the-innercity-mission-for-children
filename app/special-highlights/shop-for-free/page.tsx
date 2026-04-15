'use client'
// import CtaSection from '@/layouts/cta-section'
// import TopBlogSection from '@/layouts/top-blog-section'
// import Image from 'next/image'

const locations = [
  'Hospitals',
  'Orphanages',
  'Underserved Schools',
  'Correctional Facilities',
  'Refugee Settlements',
  'Under-Bridge Communities',
  'Slums and Villages',
  'Any underserved community',
]

const highlights = [
 {
  title: "Gospel in Action",
    text: "The Gospel is preached practically while love is shown in a tangible way.",
  },
  {
    title: "Free With Dignity",
    text: "Beneficiaries receive essential items freely, with honour and care.",
  },
  {
    title: "Global Reach",
    text: "Designed for inner cities, slums, villages, and IDP camps across nations.",
  },
  {
    title: "Transformational Follow-up",
    text: "Souls are tracked, discipled, and connected into the local church family.",
  },
];

const organizers = [
  "Ministry Centers and Zones",
  "Campus Ministry Groups (Cells, PCUs, Chapters)",
  "Loveworld Staff Community",
  "Specialized Groups (Women, Teens, Youth Church, The Haven Nation)",
 ];
 

const items = [
  "Clothing & Footwear (New or Neatly Used)",
  "Household Items",
  "Baby Care Items",
  "Food Items (Non-perishable)",
  "Educational Materials",
  "Hygiene Products",
  "Ministry Materials (Rhapsody, Healing to the Nations, etc.)",
];

const outcomes = [
  "Souls won through personal evangelism",
  "Rhapsody and Healing to the Nations distributed",
  "Converts baptized and discipled",
  "New Churches and Cells planted",
];

const steps = [
  {
    title: "Location mapping and beneficiary identification",
    desc: "Plan the outreach area and identify those to be reached.",
  },
  {
    title: "Registration and pre-screening",
    desc: "Prepare beneficiaries and organise the flow of the programme.",
  },
  {
    title: "Volunteer mobilization",
    desc: "Gather and brief volunteers for service, order, and follow-up.",
  },
  {
    title: "Item sourcing and sorting",
    desc: "Collect, arrange, and categorise all outreach materials.",
  },
  {
    title: "Word Ministration",
    desc: "The Gospel is preached to all beneficiaries before the free market experience.",
  },
  {
    title: "Discipleship Card & Voucher Issuance",
    desc: "Beneficiaries receive discipleship cards and shopping vouchers.",
  },
  {
    title: "Free Market Shopping Experience",
    desc: "Beneficiaries choose items freely from categorised stalls.",
  },
];


const resources = [
  "Flyers",
  "Posters",
  "Banners",
  "Discipleship Cards",
  "Shopping Coupons",
];

export default function FreeMarketOutreachPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                  InnerCity Mission Shop for Free Market Outreach
                </div>

                <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                  ICM Shop for Free Market Outreach
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                  A global evangelical outreach demonstrating God&apos;s love by
                  providing essential items free of charge to indigent children
                  and families across inner cities, slums, villages, and IDP
                  camps.
                </p>

                <p className="mt-6 text-base font-medium text-blue-700 md:text-lg">
                  “Jesus Paid It All — Come and Buy Without a Price”
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  John 3:16 | Isaiah 55:1
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-800"
                  >
                    Organize an Outreach
                  </a>
                  <a
                    href="#resources"
                    className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    Download Resources
                  </a>
                </div>

                <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { value: "Global", label: "Outreach Scope" },
                    { value: "Free", label: "Items Provided" },
                    { value: "Practical", label: "Gospel Expression" },
                    { value: "Dignity", label: "Beneficiary Care" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="text-2xl font-bold text-blue-700">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-blue-100 bg-white p-4 shadow-xl shadow-blue-100">
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 to-sky-500 p-8 text-white">
                    <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                      Outreach Vision
                    </div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                      Giving freely, preaching boldly, and restoring dignity.
                    </h2>
                    <p className="mt-4 max-w-md text-white/90">
                      This outreach is designed to reveal the tangible love of
                      God through practical provision, the Word of God, and
                      intentional discipleship.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {[
                        "Love beyond words",
                        "The Gospel in action",
                        "Free market shopping",
                        "Follow-up and discipleship",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-white/15 px-4 py-4 text-sm font-medium backdrop-blur"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-lg md:block">
                  <p className="text-sm font-semibold text-blue-700">
                    “Come and buy without a price”
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Isaiah 55:1 inspired outreach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                About the Outreach
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                The ICM Shop for Free Market Outreach is a coordinated global
                initiative designed to demonstrate the tangible love of God by
                providing essential items at no cost.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Who Can Organize?
              </h3>
              <p className="mt-3 text-slate-600">
                The outreach can be organized by:
              </p>

              <div className="mt-6 space-y-3">
                {organizers.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-blue-100"
                  >
                    <p className="font-medium text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ITEMS */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Typical Items for the Free Market
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Items are arranged into categories so beneficiaries can freely
                select what they need with dignity.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 to-sky-500 p-8 text-white">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Expected Outcomes
              </h2>
              <p className="mt-4 text-white/90">
                The outreach is not only about provision. It is also about
                souls, discipleship, and lasting kingdom impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 h-10 w-10 rounded-full bg-blue-100 text-center text-sm font-bold leading-10 text-blue-700">
                    ✓
                  </div>
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-blue-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The outreach follows a simple flow from preparation to ministry
                and practical service.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Where Can It Be Held?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The outreach can be hosted wherever the need is present.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FOLLOW UP */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Post-Outreach Follow-Up
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The work continues after the event through discipleship and
                connection.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Track converts",
                "Enroll in Foundation School",
                "Assign to Cells or Churches",
                "Ongoing discipleship",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 to-sky-500 p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Resources
                </h2>
                <p className="mt-4 max-w-2xl text-white/90">
                  Download outreach materials such as flyers, posters, banners,
                  discipleship cards, and shopping coupons.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Available Downloads
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {resources.map((resource) => (
                    <span
                      key={resource}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700"
                    >
                      {resource}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Download Resources
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="border-t border-slate-200 bg-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Organize an ICM Shop for Free Market Outreach Today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Partner with us to demonstrate God&apos;s love and transform
              lives.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-800"
              >
                Organize an Outreach
              </a>
              <a
                href="#"
                className="rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Download Resources
              </a>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-6">
              <p className="text-sm font-medium text-slate-700">
                Chat with us on KingsChat
              </p>
              <p className="mt-2 text-blue-700">@innercityhq</p>
              <p className="text-blue-700">@partners.icm4c</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}