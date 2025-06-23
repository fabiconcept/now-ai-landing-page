import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Phone, Globe, MessageSquare, Shield, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { solutionsMetadata } from "@/constants/metadata"

export const metadata = solutionsMetadata

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-50/50 border-b border-green-100 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/solutions" className="text-green-600 hover:text-green-700 transition-colors font-bold">
                Solutions
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Resources
              </Link>
              <Link href="/newsletter" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Newsletter
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-green-200 text-gray-700 hover:bg-green-50 hover:text-green-700 font-semibold"
              >
                <Link href="/book-call">Book a Call</Link>
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-6">
                <Link href="/demo">Get a Demo</Link>
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
              AI-Powered Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Complete <span className="text-gradient">Healthcare Automation</span> Suite
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From patient communication to appointment scheduling, our AI solutions handle the routine so you can focus
              on exceptional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="hidden sm:inline-flex border-green-200 text-gray-700 hover:bg-green-50 hover:text-green-700 font-semibold"
              >
                <Link href="/book-call">Book a Call</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-6"
              >
                <Link href="/demo">Get a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-16 bg-green-50">
              <TabsTrigger value="chatbot" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                AI Chatbot
              </TabsTrigger>
              <TabsTrigger value="voice" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                Voice Agents
              </TabsTrigger>
              <TabsTrigger value="website" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                Smart Website
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chatbot" className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Bot className="w-8 h-8 text-green-600" />
                      <h2 className="text-3xl font-bold text-gray-900">HIPAA-Compliant AI Chatbot</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Integrate HIPAA-compliant chatbots to answer patient inquiries, schedule appointments, and
                      escalate to human staff when needed.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">24/7 Patient Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Smart Escalation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Multi-language</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="shadow-2xl border border-green-100">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 pb-4 border-b border-green-100">
                          <Bot className="w-6 h-6 text-green-600" />
                          <span className="font-semibold">Healthcare Assistant</span>
                          <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800">
                            Online
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-3 max-w-xs border border-green-200">
                            <p className="text-sm">Hi! How can I help you today?</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                            <p className="text-sm">I need to schedule an appointment</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 max-w-xs border border-green-200">
                            <p className="text-sm">
                              I'd be happy to help you schedule an appointment. What type of visit do you need?
                            </p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                            <p className="text-sm">How much is a dental cleaning?</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 max-w-xs border border-green-200">
                            <p className="text-sm">Dental cleanings start at $120. Would you like to book one?</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="voice" className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-8 h-8 text-green-600" />
                      <h2 className="text-3xl font-bold text-gray-900">AI Voice Agent</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Automate appointment management and reduce call wait times with custom voice AI agents that sound
                      natural and professional.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Reduce Wait Times</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Natural Voice</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Appointment Booking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Call Analytics</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="shadow-2xl border border-green-100">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-12 h-12 text-green-600" />
                          </div>
                          <h3 className="font-semibold text-gray-900">Call in Progress</h3>
                          <p className="text-gray-600 text-sm">AI Voice Agent Active</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-sm text-green-800">
                              "Thank you for calling. How may I assist you today?"
                            </p>
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <p className="text-sm text-gray-800">Caller: "I'd like to schedule a check-up"</p>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-sm text-green-800">
                              "I can help you with that. What's your preferred date?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="website" className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-8 h-8 text-green-600" />
                      <h2 className="text-3xl font-bold text-gray-900">SEO-Optimized Smart Website</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Improve your online presence with SEO optimization and integrated AI features. Drive more traffic
                      and convert visitors into patients.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">SEO Optimized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Mobile Responsive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">AI Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Analytics Dashboard</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="shadow-2xl border border-green-100">
                    <CardContent className="p-0">
                      <div className="bg-gray-100 p-4 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
                            yourpractice.com
                          </div>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="h-4 bg-green-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="h-16 bg-green-100 rounded flex items-center justify-center">
                            <Bot className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="h-16 bg-emerald-100 rounded flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div className="h-16 bg-teal-100 rounded flex items-center justify-center">
                            <Phone className="w-6 h-6 text-teal-600" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose <span className="logo text-orange-500">N:OW</span> AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our comprehensive solution with traditional approaches
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border border-green-100">
              <CardContent className="p-0">
                <div className="grid grid-cols-3 divide-x divide-green-100">
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Feature</h3>
                    <div className="space-y-4">
                      {[
                        "24/7 Patient Support",
                        "HIPAA Compliance",
                        "Multi-language Support",
                        "Integration Ready",
                        "Analytics Dashboard",
                        "Custom Training",
                      ].map((feature, index) => (
                        <div key={index} className="py-2 text-gray-700">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <h3 className="font-semibold text-gray-900 mb-4">Traditional Solution</h3>
                    <div className="space-y-4">
                      {["❌", "⚠️", "❌", "❌", "❌", "❌"].map((status, index) => (
                        <div key={index} className="py-2 text-center">
                          {status}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-green-50">
                    <h3 className="font-semibold text-green-900 mb-4"><span className="logo text-orange-500">N:OW</span> AI</h3>
                    <div className="space-y-4">
                      {["✅", "✅", "✅", "✅", "✅", "✅"].map((status, index) => (
                        <div key={index} className="py-2 text-center">
                          {status}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real-World Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Appointment Management",
                description: "Patients can book, reschedule, or cancel appointments through chat or voice",
                icon: Calendar,
                metrics: "85% reduction in scheduling calls",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Patient Follow-ups",
                description:
                  "Automated follow-ups to ensure patients are recovering well and adhering to treatment plans",
                icon: MessageSquare,
                metrics: "90% of patients respond to follow-ups",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                title: "No-Show Reduction",
                description: "Automated reminders and confirmations to reduce no-shows",
                icon: Shield,
                metrics: "70% reduction in no-shows",
                color: "bg-teal-100 text-teal-600",
              },
            ].map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center`}>
                    <useCase.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                  <div className="pt-2">
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      {useCase.metrics}
                    </Badge>
                  </div>
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
                    <Link href="/solutions#ai-chatbot" className="hover:text-green-400 transition-colors">
                      AI Chatbots
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#voice-agent" className="hover:text-green-400 transition-colors">
                      Voice Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#automation" className="hover:text-green-400 transition-colors">
                      Website Automation
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  {/* <li>
                          <Link href="/about" className="hover:text-green-400 transition-colors">
                            About
                          </Link>
                        </li> */}
                  <li>
                    <Link href="/resources" className="hover:text-green-400 transition-colors">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter" className="hover:text-green-400 transition-colors">
                      Newsletter
                    </Link>
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
              <p className="text-gray-400">© {new Date().getFullYear()} <span className="logo text-orange-500">N:OW</span> AI. All rights reserved.</p>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                      <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                        Privacy Policy
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                        Terms of Service
                      </Link>
                    </div> */}
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}
