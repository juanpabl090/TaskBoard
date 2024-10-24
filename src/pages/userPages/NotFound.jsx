import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">404</h1>
        <p className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Page not found</p>
        <p className="mt-6 text-base text-gray-500">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10">
          <Link to='/' className="inline-block px-4 py-2 text-sm font-medium text-light-black bg-bright-blue rounded-md hover:bg-amber hover:border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Go back</Link>
        </div>
      </div>
    </div>
  )
}