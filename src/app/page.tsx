import Link from 'next/link'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-yellow-500">Sunny Co</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#benefits" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium">
                Benefits
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Power Your Home With</span>
                  <span className="block text-yellow-500">Solar Energy</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Transform your home into a sustainable powerhouse with our cutting-edge solar solutions. Save money while saving the planet.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Go Solar?</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover the advantages of switching to solar energy
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Save Money',
                  description: 'Reduce or eliminate your electric bills and earn great returns on your investment.'
                },
                {
                  title: 'Increase Home Value',
                  description: 'Solar installations can significantly increase your property value.'
                },
                {
                  title: 'Protect the Environment',
                  description: 'Reduce your carbon footprint and help create a sustainable future.'
                }
              ].map((benefit) => (
                <div key={benefit.title} className="relative">
                  <div className="text-lg leading-6 font-medium text-gray-900">
                    {benefit.title}
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}
