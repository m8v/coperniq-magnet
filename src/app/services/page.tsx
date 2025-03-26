"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info, Shield, Sun, Zap, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SolarCareMembershipPlans() {
  // Use null as initial state to avoid hydration mismatch
  const [billingPeriod, setBillingPeriod] = useState<string | null>(null)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  
  // Initialize state values after component mounts on client side
  useEffect(() => {
    setBillingPeriod("monthly")
  }, [])

  // If billingPeriod is null (during SSR), default to "monthly" for rendering
  const currentBillingPeriod = billingPeriod || "monthly"

  const plans = [
    {
      id: "silver",
      name: "Silver",
      icon: Shield,
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      tagline: "Basic solar care",
      description: "Essential coverage for orphaned solar customers",
      primaryFeatures: [
        "Annual performance check",
        "Email support",
        "10% discount on repairs",
        "48-hour response time",
        "Service trip fee waived"
      ],
      secondaryFeatures: [
        "Phone & email support",
        "System performance reports"
      ],
      color: "bg-gradient-to-br from-[#E6E8E9] to-[#C0C2C4] dark:from-[#71767B] dark:to-[#52565B]",
      borderColor: "border-[#C0C2C4] dark:border-[#52565B]",
      iconColor: "text-[#8A9097] dark:text-[#C0C2C4]",
      buttonVariant: "outline"
    },
    {
      id: "gold",
      name: "Gold",
      icon: Sun,
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      tagline: "Most popular",
      description: "Enhanced protection for optimal system performance",
      primaryFeatures: [
        "Everything in Silver",
        "Semi-annual performance check",
        "Proactive system performance alerts",
        "20% discount on repairs",
        "24-hour response time",
        "Annual panel cleaning"
      ],
      secondaryFeatures: [
        "Priority scheduling",
        "Inverter health checks",
        "Monthly performance reports"
      ],
      popular: true,
      color: "bg-gradient-to-br from-[#F5D485] to-[#D4AF37] dark:from-[#AA8C2C] dark:to-[#8A7424]",
      borderColor: "border-[#D4AF37] dark:border-[#8A7424]",
      iconColor: "text-[#B8860B] dark:text-[#FFD700]",
      buttonVariant: "default"
    },
    {
      id: "platinum",
      name: "Platinum",
      icon: Zap,
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      tagline: "Complete protection",
      description: "Complete coverage with warranty management",
      primaryFeatures: [
        "Everything in Gold",
        "Proactive 24/7/365 monitoring",
        "Monthly performance check",
        "Complete Warranty Management",
        "30% discount on repairs",
        "Same-day response time",
        "Battery system monitoring & alerts"
      ],
      secondaryFeatures: [
        "VIP customer support",
        "Dedicated support specialist",
        "Weekly performance reports",
        "Annual system upgrade consultation"
      ],
      color: "bg-gradient-to-br from-[#C0C0C0] to-[#505050] dark:from-[#A0A0A0] dark:to-[#303030]",
      borderColor: "border-[#505050] dark:border-[#303030]",
      iconColor: "text-[#303030] dark:text-[#E5E4E2]",
      buttonVariant: "outline"
    }
  ]

  const aLaCarteServices = [
    { 
      service: "Panel Cleaning", 
      price: "$15 per panel",
      description: "Professional cleaning to remove dirt and debris, improving efficiency and performance."
    },
    { 
      service: "Inverter Repair", 
      price: "$850 flat fee",
      description: "Expert diagnosis and repair of inverter issues to restore optimal system function."
    },
    { 
      service: "Roof Leak Repair", 
      price: "$350 flat fee",
      description: "Waterproofing and sealing around solar panel mounts to prevent water damage."
    },
    { 
      service: "Panel Removal & Reinstallation", 
      price: "$125 per panel",
      description: "Temporary removal and proper reinstallation for roof repairs or panel replacement."
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-3">
          <Sun className="h-10 w-10 text-amber-500" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">À La Carte Services</h2>
      </div>

      {/* A La Carte Services Section */}
      <div className="w-full mb-12">
        <Card className="border border-border">
          <CardContent className="pt-6 px-4 md:px-6">
            <div className="space-y-3 w-full">
              {aLaCarteServices.map((item, index) => (
                <div key={index} className="flex flex-col p-4 border-b border-border hover:bg-muted/30 transition-colors rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-base text-foreground">{item.service}</span>
                    <span className="text-foreground font-semibold ml-4 bg-background/70 py-1 px-3 rounded-full">{item.price}</span>
                  </div>
                  <p className="text-foreground/80 text-sm mt-2">{item.description}</p>
                </div>
              ))}
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md flex items-start">
                <AlertTriangle className="text-amber-500 h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-amber-700">Service Trip Fee: $99 per visit</p>
                  <p className="text-amber-700 text-sm">This fee is applied to all one-time services listed above. Save on service fees with our Protect plans!</p>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/contact#contactForm" className="inline-flex items-center justify-center text-base px-8 py-5 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Request Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Protect Memberships</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Safeguard your solar investment and optimize your system&apos;s performance with expert monitoring and warranty management.
        </p>
      </div>

      <Tabs 
        defaultValue="monthly" 
        value={currentBillingPeriod} 
        onValueChange={setBillingPeriod}
        className="mb-8"
      >
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">
            Annual
            <Badge variant="outline" className="ml-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              Save 20%
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {plans.map((plan) => (
          <Card 
            key={plan.id}
            className={`relative h-auto min-h-full transition-all duration-300 overflow-visible flex flex-col ${
              hoveredPlan === plan.id ? "scale-[1.02] shadow-lg" : ""
            } ${plan.color} ${plan.borderColor} border-2`}
            onMouseEnter={() => setHoveredPlan(plan.id)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {plan.popular && (
              <div 
                className="absolute top-0 right-0 bg-amber-500 text-white font-bold py-1 px-4 text-sm shadow-lg z-30 rounded-bl-lg"
              >
                MOST POPULAR
              </div>
            )}
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className={`p-2 rounded-full mr-2 ${plan.iconColor} bg-background/80`}>
                    <plan.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{plan.name} Protect</CardTitle>
                </div>
                {plan.id === "silver" && (
                  <Badge variant="outline" className="font-normal bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    Included with installation
                  </Badge>
                )}
              </div>
              <div className="mt-2">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tabular-nums">
                    ${currentBillingPeriod === "monthly" ? plan.monthlyPrice.toFixed(2) : plan.yearlyPrice.toFixed(2)}
                  </span>
                  <span className="text-foreground/70 ml-2 text-sm">
                    /{currentBillingPeriod === "monthly" ? "month" : "year"}
                  </span>
                </div>
                <p className="text-foreground/80 text-sm mt-2">{plan.description}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-6">
              <div className="space-y-4">
                <ul className="space-y-2">
                  {plan.primaryFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pt-6">
              <Link href="/contact#contactForm" className={`inline-flex items-center justify-center w-full text-base px-6 py-3 font-medium rounded-md transition-all shadow-md hover:shadow-xl group relative overflow-hidden ${plan.buttonVariant === "default" ? "bg-primary text-white hover:bg-primary/90" : "bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground"}`}>
                <span className="relative z-10 flex items-center justify-center w-full">
                  Select Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 w-full bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-800 rounded-full p-3 mt-2 md:mt-0">
              <Info className="h-6 w-6 text-amber-600 dark:text-amber-300" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-semibold text-xl mb-2">Orphaned Solar System?</h3>
              <p className="text-foreground/80 mb-4">
                If your original installer is no longer in business, our Protect plans work for any solar system regardless of who installed it. We support all major OEM equipment.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/contact#contactForm" className="inline-flex items-center justify-center text-base px-8 py-5 font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-xl group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Protect Your System
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-800/50">
            <p className="text-center text-sm text-foreground/80 mb-6">We provide monitoring support for all major solar equipment manufacturers including:</p>
            <div className="flex justify-center mb-6">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 w-full max-w-3xl">
                <div className="h-10 w-36 md:w-48 relative grayscale hover:grayscale-0 transition-colors duration-300">
                  <img 
                    src="/Enphase_logo.png" 
                    alt="Enphase logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="h-10 w-36 md:w-48 relative grayscale hover:grayscale-0 transition-colors duration-300">
                  <img 
                    src="/SolarEdge_logo.svg" 
                    alt="SolarEdge logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-foreground/80 font-medium">And 10+ other major inverter manufacturers</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-foreground/80">
        All plans include a 30-day money-back guarantee. No long-term contracts required.
      </div>
    </div>
  )
} 