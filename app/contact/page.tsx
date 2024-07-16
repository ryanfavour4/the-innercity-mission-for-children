import { FacebookIcon, LinkedlnIcon, TwitterIcon } from '@/components/svgs'
export default function () {
  return (
    <>
      {/* {Contact Information} */}
      <div className=" bg-secondary p-6 px-10 py-5 md:px-28 md:pb-16 md:pt-12">
        <div className="wrapper flex md:flex-row flex-col gap-3 md:gap-0">
          <div>
            <div className="ml-[-50px] flex items-center justify-normal  gap-2 align-middle">
              <div className="w-10 border-2 border-b-0 border-l-0 border-r-0 border-black"></div>
              <h3 className="text-lg font-bold uppercase">contact us</h3>
            </div>
            <h2 className="pb-3 pt-3 text-2xl font-bold md:text-4xl">We'd love to hear from you</h2>
            <p className="w-[85%] text-sm" style={{ lineHeight: '1.6rem' }}>
              Have any question in mind or want to enquire? Please feel free to contact us through
              the form or the following details.
            </p>
          </div>
          <div>
            <div>
              <h1 className="font-bold">Let's Talk</h1>
              <div>
                <p>+234 09012346514</p>
                <p>hello@largerthani.com</p>
              </div>
            </div>
            <div className="pt-5">
              <h1 className="font-bold">Head Office</h1>
              <p>8 Brewery Drive, Lagos, Nigeria.</p>
            </div>
            <div className="pt-5">
              <h1 className="font-bold">Branch Office</h1>
              <div>
                <p>Opp Opolo round about, Yenagoa, Bayelsa, Nigeria</p>
              </div>
            </div>
            <div className="mt-7 flex items-center gap-4 text-greytext">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-6 w-6 text-3xl md:h-9 md:w-9" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-6 w-6 text-3xl md:h-9 md:w-9" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <LinkedlnIcon className="h-6 w-6 text-3xl md:h-9 md:w-9" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* {contact form} */}
      <div className="p-12">
        <form
          className="wrapper flex flex-col place-items-center items-center justify-center  md:px-24 px-2"
          action=""
        >
          <div className="grid w-full  md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex w-full flex-col gap-2">
              <label className="pt-6 text-greytext" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border-b-2 border-black outline-0 placeholder:text-black"
                placeholder="John"
                type="text"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="pt-6 text-greytext" htmlFor="lasttName">
                Last Name
              </label>
              <input
                className="border-b-2 border-black outline-0  placeholder:text-black"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="pt-6 text-greytext" htmlFor="email">
                Email Id
              </label>
              <input
                className="border-b-2 border-black outline-0 placeholder:text-black"
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="pt-6 text-greytext" htmlFor="subject">
                Subject
              </label>
              <input
                className="border-b-2 border-black outline-0  placeholder:text-black"
                type="text"
              />
            </div>
          </div>

          <div className="flex w-full flex-col  gap-2">
            <label className="pt-6 text-greytext" htmlFor="message">
              Message
            </label>
            <textarea
              className="h-[200px] rounded-sm border-2 border-black p-2  outline-0 placeholder:text-black"
              name="message"
              id="message"
              placeholder="Type your Message"
              
            ></textarea>
          </div>
          <button className="rounded-md bg-primary p-4 text-white md:my-8 my-4" type="submit">
            Send Message
          </button>
        </form>
       
      </div>
      {/* {Map} */}
      <div >
          <img src="/assets/images/Map.png" alt="Location" />
        </div>
    </>
  )
}
