import Link from 'next/link'
import { Sun, ArrowRight, BarChart, CloudLightning } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from './components/shared/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
                  <span className="block">Power Your Home With</span>
                  <span className="block text-primary">Solar Energy</span>
                </h1>
                <p className="mt-3 text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Transform your home into a sustainable powerhouse with our cutting-edge solar solutions. Save money while saving the planet.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-foreground">Why Go Solar?</h2>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
              Discover the advantages of switching to solar energy
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Save Money',
                  description: 'Reduce or eliminate your electric bills and earn great returns on your investment.',
                  icon: BarChart
                },
                {
                  title: 'Increase Home Value',
                  description: 'Solar installations can significantly increase your property value.',
                  icon: Sun
                },
                {
                  title: 'Protect the Environment',
                  description: 'Reduce your carbon footprint and help create a sustainable future.',
                  icon: CloudLightning
                }
              ].map((benefit) => (
                <Card key={benefit.title} className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-2 bg-primary/10 rounded-full">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contact our team today to schedule a free consultation and discover how much you can save with solar energy.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
