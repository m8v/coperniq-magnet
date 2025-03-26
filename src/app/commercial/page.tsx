'use client';

import Link from 'next/link'
import { ArrowRight, BarChart, Building2, AreaChart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '../components/shared/Navigation'

export default function Commercial() {
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
                  <span className="block">Power Your Business With</span>
                  <span className="block text-primary relative inline-block">
                    Solar Energy
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/10 -z-10 transform -skew-x-12"></span>
                  </span>
                </h1>
                <p className="mt-6 text-foreground/80 sm:mt-7 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl">
                  Boost your bottom line and sustainability goals with commercial solar solutions. 
                  Reduce operating costs and showcase your commitment to the environment.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link href="/contact#contactForm" className="inline-flex items-center justify-center text-base sm:text-lg px-8 py-5 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-foreground">Why Go Solar?</h2>
            <p className="mt-4 max-w-2xl text-xl text-foreground/80 lg:mx-auto">
              Discover the advantages of switching to solar energy for your business
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Reduce Operating Costs',
                  description: 'Lower utility expenses significantly and achieve up to 20% ROI with tax incentives and accelerated depreciation.',
                  icon: BarChart
                },
                {
                  title: 'Enhance Brand Image',
                  description: 'Strengthen your brand reputation and appeal to eco-conscious customers and employees.',
                  icon: Building2
                },
                {
                  title: 'Hedge Against Rising Costs',
                  description: 'Lock in energy costs for 25+ years and protect your business from utility rate increases.',
                  icon: AreaChart
                }
              ].map((benefit) => (
                <Card key={benefit.title} className="border-primary/20 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform-gpu">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 bg-primary/10 rounded-full">
                        <benefit.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    </div>
                    <p className="text-foreground/80">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10 border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Ready to Power Your Business Sustainably?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Our commercial solar experts will design a custom solution that meets your energy needs, budget requirements, and sustainability goals.
          </p>
          <Link href="/contact#contactForm" className="inline-flex items-center justify-center text-base px-8 py-5 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Request a Commercial Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </div>
  )
} 