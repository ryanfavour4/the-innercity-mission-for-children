import Image from 'next/image'
import React from 'react'

export default function ShelterProgram() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Shelter Program</h1>
        <p className="mb-6 text-gray-700">
          Through our shelter program, the InnerCity Mission directly and indirectly, through
          partnerships with other child care institutions, provides holistic child development.
        </p>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">The InnerCity Mission Home</h2>
          <p className="mb-4 text-gray-700">
            The InnerCity Mission Home is a rescue and rehabilitation program!
          </p>
          <p className="mb-4 text-gray-700">
            This residential program is a direct approach to our Shelter Program, through which we
            provide a stable family environment and whole-life care for indigent and vulnerable
            children. The term Whole life care means we take a long-term approach to child
            development and provide opportunities that champion children’s right to a safe,
            permanent and nurturing home thus encouraging healthy, spiritual, physical, social and
            economic development for indigent, vulnerable and orphaned children in our direct care
            all the way through young adulthood.
          </p>
          <div className="flex gap-4">
            <div className="bg-gray-200 flex h-48 w-1/2 items-center justify-center">
              <Image
                width={300}
                height={300}
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                alt="Children playing"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="bg-gray-200 flex h-48 w-1/2 items-center justify-center">
              <Image
                width={300}
                height={300}
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                alt="Children playing"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Orphanage Support</h2>
          <p className="mb-4 text-gray-700">
            We support other Child care institutions that provide holistic child development for
            orphaned and vulnerable children.
          </p>
          <p className="mb-4 text-gray-700">
            This is because many orphanages and child care institutions are overpopulated and with
            limited cash inflow, they struggle to meet the individual needs of the children in their
            care. Through this initiative, we provide support for the children they serve.
          </p>
        </div>
      </div>
    </div>
  )
}
