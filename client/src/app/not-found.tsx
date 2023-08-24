import Link from "next/link"
export default function NotFound() {
    return (
      <div className="h-screen">
        <div className="bg min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-primary-color sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Page not found</h1>
                  <p className="mt-1 text-base text-gray-300">Please check the URL in the address bar and try again.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-color hover:bg-primary-color/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Go back home
                  </Link>
                  <a
                    href="mailto:contact@gamesell.store"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-color bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Contact support
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
}
  