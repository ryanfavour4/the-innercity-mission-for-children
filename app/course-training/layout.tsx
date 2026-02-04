import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased">
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        theme="colored"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable={false}
      />
    </div>
  )
}
