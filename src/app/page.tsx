'use client';

import Link from 'next/link'
import { ArrowRight, HomeIcon, Building2 } from 'lucide-react'
import Navigation from './components/shared/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-12 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
                  <span className="block">Sustainable Energy</span>
                  <span className="block text-primary relative inline-block">
                    For Everyone
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/10 -z-10 transform -skew-x-12"></span>
                  </span>
                </h1>
                <p className="mt-6 text-foreground/80 sm:mt-7 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl">
                  Whether you&apos;re a homeowner or business owner, we have solar solutions designed for your specific needs.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* Residential Card */}
                  <div className="bg-background border border-border rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <HomeIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Residential</h2>
                    <p className="text-foreground/80 mb-6 text-center">
                      Transform your home with energy-efficient solar solutions that save money and the environment.
                    </p>
                    <Link href="/residential" className="mt-auto inline-flex items-center justify-center text-base px-6 py-3 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden w-full">
                      <span className="relative z-10 flex items-center justify-center">
                        Explore Residential
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </div>

                  {/* Commercial Card */}
                  <div className="bg-background border border-border rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Commercial</h2>
                    <p className="text-foreground/80 mb-6 text-center">
                      Reduce operating costs and showcase your commitment to sustainability with commercial solar solutions.
                    </p>
                    <Link href="/commercial" className="mt-auto inline-flex items-center justify-center text-base px-6 py-3 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden w-full">
                      <span className="relative z-10 flex items-center justify-center">
                        Explore Commercial
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10 border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Contact our team of solar experts and we&apos;ll help determine the best solution for your specific situation.
          </p>
          <Link href="/contact#contactForm" className="inline-flex items-center justify-center text-base px-8 py-5 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </div>
  )
}
