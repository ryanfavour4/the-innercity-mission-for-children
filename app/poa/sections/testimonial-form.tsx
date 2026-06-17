import { useState } from 'react'
import { FileDropZone } from './file-drop-zone'
import axios from 'axios'

export default function TestimonialForm() {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [relation, setRelation] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('name', name)
      formData.append('country', country)
      formData.append('relation', relation)
      formData.append('message', message)

      if (image) {
        formData.append('image', image)
      }

      const res = await axios.post('/api/poa/testimonials', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const data = await res.data
      console.log(data)
      if (!res?.data?.success) {
        throw new Error(data.message)
      }

      alert('Thank you for your message ❤️')

      setName('')
      setCountry('')
      setRelation('')
      setMessage('')
      setImage(null)
    } catch (err) {
      console.error(err)
      alert('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="send-wishes" className="px-3 pb-16">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl border border-[#C9A84C] px-5 py-4 text-[#312025] ring-2 ring-[#877274]/50 ring-offset-4 md:px-10 md:py-8"
        >
          <div className="flex flex-col items-center justify-center gap-3 overflow-hidden px-3 py-10 text-center">
            <h3 className="font-playfair-display text-3xl font-medium text-[#312025] md:text-5xl">
              Write Your Birthday Message
            </h3>
            <p className="font-body text-base text-[#544244] md:text-lg">
              Your words will pasted on the birthday wish wall.
            </p>
          </div>

          <div className="flex flex-col gap-10 gap-x-8 md:grid md:grid-cols-2">
            <span className="font-body flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-semibold text-[#544244]">
                FULL NAME
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="border-0 border-b !border-[#C9A84C] bg-transparent !outline-transparent !ring-transparent focus:border-b-[2.5px]"
              />
            </span>
            <span className="font-body flex flex-col gap-1">
              <label htmlFor="country" className="text-sm font-semibold text-[#544244]">
                CITY / COUNTRY
              </label>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                id="country"
                className="border-0 border-b !border-[#C9A84C] bg-transparent !outline-transparent !ring-transparent focus:border-b-[2.5px]"
              />
            </span>
            <span className="font-body col-span-2 flex flex-col gap-1">
              <label htmlFor="relation" className="text-sm font-semibold text-[#544244]">
                RELATIONSHIP TO HER
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="border-0 border-b !border-[#C9A84C] bg-transparent !outline-transparent !ring-transparent focus:border-b-[2.5px]"
                name="relation"
                id="relation"
              >
                <option value="">Select how you knew her</option>
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Colleague">Colleague</option>
                <option value="Church">Church</option>
                <option value="Neighbour">Neighbour</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </span>
            <span className="font-body col-span-2 flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-semibold text-[#544244]">
                YOUR MESSAGE
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Share your memories, lessons learned, or expressions of gratitude..."
                className="border-0 border-b !border-[#C9A84C] bg-transparent !outline-transparent !ring-transparent focus:border-b-[2.5px]"
              />
            </span>
            <span className="font-body col-span-2 flex flex-col gap-1">
              <FileDropZone
                onChange={(file: File | null) => {
                  setImage(file)
                }}
              />
            </span>

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 w-full bg-[#B38945] px-7 py-3 text-sm tracking-wide text-light transition-colors duration-300 hover:bg-[#B38945]/80 md:text-base"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
