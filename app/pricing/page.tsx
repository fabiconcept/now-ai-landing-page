"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, CheckCircle, ArrowRight, Users, Building2, Zap, Phone, Globe, BarChart3, Headphones } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function PricingPage() {
  const plans = [
    {
      name: "AI Essentials",
      price: "$499",
      period: "/month",
      description: "For small practices looking to integrate AI without heavy investment",
      features: [
        "AI SEO-optimized content for blogs & newsletters (Jasper.ai)",
        "Basic AI chatbot for patient inquiries (Chatbase.co)",
        "HIPAA-compliant AI voice agent (limited to 500 calls/month)",
        "AI appointment reminders to reduce no-shows",
        "Multi-location AI appointment scheduling",
        "Basic analytics & reporting",
        "Email support",
      ],
      popular: false,
      cta: "Start Free Trial",
      icon: Users,
      color: "border-gray-200",
    },
    {
      name: "AI Accelerator",
      price: "$1,299",
      period: "/month",
      description: "For mid-sized clinics aiming for automation at scale",
      features: [
        "Everything in AI Essentials +",
        "AI blog widget with auto-generated FAQs",
        "Advanced AI chatbot with escalation to human agents",
        "HIPAA-compliant AI voice agent (up to 2,000 calls/month)",
        "AI-powered patient follow-ups & recall scheduling",
        "Custom AI SEO content strategy & keyword tracking",
        "AI-powered lead generation & patient acquisition strategy",
        "Priority phone support",
        "Advanced analytics dashboard",
      ],
      popular: true,
      cta: "Start Free Trial",
      icon: Building2,
      color: "border-green-500",
    },
    {
      name: "AI Domination",
      price: "Custom",
      period: "",
      description: "For large healthcare organizations needing full AI integration",
      features: [
        "Everything in AI Accelerator +",
        "Fully customized AI voice agent workflows",
        "White-label AI solutions under your brand",
        "Unlimited AI conversations & voice calls",
        "Custom AI training for your specific practice",
        "API access for custom integrations",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom reporting & analytics",
        "Multi-practice management dashboard",
      ],
      popular: false,
      cta: "Contact Sales",
      icon: Zap,
      color: "border-gray-200",
    },
  ]

  const addOns = [
    {
      name: "SEO Website",
      price: "$199/month",
      description: "Professional website with SEO optimization",
      icon: Globe,
    },
    {
      name: "Advanced Analytics",
      price: "$99/month",
      description: "Detailed reporting and insights dashboard",
      icon: BarChart3,
    },
    {
      name: "Additional Locations",
      price: "$50/month",
      description: "Per additional practice location",
      icon: Building2,
    },
    {
      name: "Premium Support",
      price: "$199/month",
      description: "24/7 phone support with dedicated rep",
      icon: Headphones,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-50/50 border-b border-green-100 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/solutions" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Solutions
              </a>
              <a href="/pricing" className="text-green-600 hover:text-green-700 transition-colors font-bold">
                Pricing
              </a>
              <a href="/resources" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Resources
              </a>
              <a href="/newsletter" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Newsletter
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-green-200 text-gray-700 hover:bg-green-50 hover:text-green-700 font-semibold"
              >
                <a href="/book-call">Book a Call</a>
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-6">
                <a href="/demo">Get a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 rounded-full">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Ready to Start <span className="text-gradient">Automating Phone Calls</span> with AI?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our comprehensive AI automation plans. Start with a 14-day free trial and transform your
              practice operations.
            </p>
            <div className="flex items-center justify-center space-x-4 bg-white rounded-full p-2 shadow-lg max-w-md w-fit mx-auto">
              <button className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold">Monthly</button>
              <button className="px-6 py-2 rounded-full text-gray-600 hover:text-green-600 font-semibold">
                Yearly (2 months free)
              </button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${plan.color} shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? "scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1 rounded-full">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center space-y-4 pb-8">
                  <div
                    className={`w-16 h-16 ${plan.popular ? "bg-green-100" : "bg-gray-100"} rounded-2xl flex items-center justify-center mx-auto`}
                  >
                    <plan.icon className={`w-8 h-8 ${plan.popular ? "text-green-600" : "text-gray-600"}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    {plan.name !== "Enterprise" && <p className="text-sm text-gray-500">Billed monthly</p>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-800"} text-white rounded-full py-3`}
                    size="lg"
                    onClick={() => {
                      const planInfo = encodeURIComponent(
                        `Interested in ${plan.name} plan - ${plan.price}${plan.period}`,
                      )
                      window.location.href = `/contact?plan=${plan.name.toLowerCase().replace(" ", "-")}&message=${planInfo}`
                    }}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Add-On Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional features and services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <addon.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                    <p className="text-green-600 font-bold text-lg">{addon.price}</p>
                    <p className="text-gray-600 text-sm mt-2">{addon.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Is there a setup fee?",
                answer:
                  "No, there are no setup fees. You can start your free trial immediately and begin using our AI solutions right away.",
              },
              {
                question: "Can I change plans anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
              },
              {
                question: "What's included in the free trial?",
                answer:
                  "The 14-day free trial includes full access to the Professional plan features, including AI chatbot, voice agent, and analytics.",
              },
              {
                question: "Do you offer custom pricing?",
                answer:
                  "Yes, we offer custom pricing for large practices and healthcare systems. Contact our sales team for a personalized quote.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Absolutely. All our solutions are HIPAA compliant with end-to-end encryption and secure data handling.",
              },
              {
                question: "What support is included?",
                answer:
                  "All plans include email support. Professional and Enterprise plans include phone support and dedicated account management.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <AnimatedSection>
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-5xl font-black text-orange-500 tracking-tight logo">N:OW</span>
                </Link>
                <p className="text-gray-400">Revolutionizing healthcare with AI-powered automation solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/solutions#ai-chatbot" className="hover:text-green-400 transition-colors">
                      AI Chatbots
                    </a>
                  </li>
                  <li>
                    <a href="/solutions#voice-agent" className="hover:text-green-400 transition-colors">
                      Voice Agents
                    </a>
                  </li>
                  <li>
                    <a href="/solutions#automation" className="hover:text-green-400 transition-colors">
                      Website Automation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  {/* <li>
                          <a href="/about" className="hover:text-green-400 transition-colors">
                            About
                          </a>
                        </li> */}
                  <li>
                    <a href="/resources" className="hover:text-green-400 transition-colors">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="/newsletter" className="hover:text-green-400 transition-colors">
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>hello@nowai.com</li>
                  <li>(555) 123-4567</li>
                  <li>Mon-Fri 9AM-6PM EST</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
              <p className="text-gray-400">© 2024 NOW AI. All rights reserved.</p>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                      <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                        Privacy Policy
                      </a>
                      <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                        Terms of Service
                      </a>
                    </div> */}
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}
