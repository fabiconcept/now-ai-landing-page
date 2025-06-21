"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedText } from "@/components/ui/animated-text"
import {
  CheckCircle,
  Bot,
  Phone,
  Globe,
  Users,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Stethoscope,
  Building2,
  Heart,
  Zap,
  Calendar,
  MessageSquare,
  BarChart3,
  AlertCircle,
  Bell,
  UserCheck,
  ClipboardList,
  Target,
  Lightbulb,
  PhoneIncoming,
  PhoneOutgoing,
  UserPlus,
  FileQuestion,
} from "lucide-react"

import InteractiveCalendar from "./components/interactive-calendar"
import Link from "next/link"

export default function HomePage() {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById("interactive-calendar")
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AnimatedSection className="top-0 sticky z-50">
        <header className="bg-green-50/50 border-b border-green-100 z-50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="/solutions" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                  Solutions
                </a>
                <a href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
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
      </AnimatedSection>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <AnimatedText delay={0.2}>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-green-200 font-bold px-4 py-2 rounded-full"
                  >
                    HIPAA-Compliant AI Solutions
                  </Badge>
                </AnimatedText>
                <div className="relative">
                  <AnimatedText
                    stagger
                    className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight"
                  >
                    Generate, Capture, & Convert More Patients
                  </AnimatedText>
                </div>
                <AnimatedText delay={0.8}>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Powerful, HIPAA-compliant AI tools that automate your patient communication, reduce call wait times,
                    and grow your practice effortlessly.
                  </p>
                </AnimatedText>
              </div>
              <AnimatedSection delay={1.0} direction="up">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-4 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a href="/demo">Get a Demo</a>
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-green-200 text-gray-700 hover:bg-green-50 hover:border-green-300 text-lg px-10 py-4 font-bold rounded-full hover:scale-105 transition-all"
                    onClick={() => (window.location.href = "/book-call")}
                  >
                    <a href="/book-call">Book a Strategy Call</a>
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={1.2} direction="up">
                <div className="flex items-center space-x-8 text-sm text-gray-600 font-medium">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Easy Setup</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.6} direction="right">
              <div className="relative">
                <div className="relative z-10">
                  <div className="transition-all duration-500 hover:scale-105">
                    <Image
                      src="/main-hero-image.png"
                      alt="Healthcare AI Dashboard"
                      width={600}
                      height={400}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20 transform scale-110 animate-pulse-slow"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Replace No Shows Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                "Replace no shows faster to boost revenue & efficiency"
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Automate customer support inquiries and answer patient questions using our HIPAA compliant chatbot.
              </p>
            </AnimatedText>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Automate Customer Support Inquiries</h3>
                    <p className="text-lg text-gray-600">
                      Instantly answer patient questions about pricing, services, and availability while seamlessly
                      converting inquiries into appointments.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-semibold text-gray-900">Live Chat Example</span>
                        <Badge className="bg-green-500 text-white rounded-full px-3 py-1">Live chat</Badge>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4">
                          <p className="text-gray-800">
                            <strong>Patient:</strong> "How much does a basic dental cleaning cost without insurance?"
                          </p>
                        </div>
                        <div className="bg-green-500 text-white rounded-lg p-4">
                          <p>
                            <strong>AI Assistant:</strong> "The cost to cover a dental cleaning without insurance costs
                            $97 before taxes. You could also get a bundle of 3 cleanings a year for $200. Would you like
                            to schedule a cleaning?"
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-green-700">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Instant pricing information</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Upselling opportunities</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Direct booking conversion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <div className="relative">
                  <Card className="shadow-2xl border border-green-100 bg-white">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Bot className="w-10 h-10 text-green-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">AI Customer Support</h4>
                          <p className="text-gray-600">24/7 availability and parallel calls</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">85%</div>
                            <div className="text-sm text-gray-600">Faster Response</div>
                          </div>
                          <div className="bg-emerald-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-emerald-600">70%</div>
                            <div className="text-sm text-gray-600">Reduced No-Shows</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-gray-700">Real-time interaction with your systems</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-gray-700">Best support prioritized documents</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-gray-700">Zero customer frustrations</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call Management Dashboard Section */}
      <AnimatedSection>
        <section className="py-20 bg-green-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Complete Call Management System</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handle both outbound and inbound calls automatically with intelligent routing and specialized workflows.
              </p>
            </AnimatedText>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Outbound Calls */}
              <AnimatedCard index={0}>
                <Card className="shadow-2xl border border-green-100 bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <PhoneOutgoing className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Outbound Calls</h3>
                          <p className="text-gray-600">Automate and optimize the management of outbound calls</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <ClipboardList className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Surveys and Feedback</h4>
                            <p className="text-sm text-gray-600">
                              Automatically collect patient satisfaction surveys and feedback
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <UserPlus className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Lead Prequalification</h4>
                            <p className="text-sm text-gray-600">
                              Contact potential customers for products or services, increasing revenue and expanding
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                            <Bell className="w-5 h-5 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Confirmations and Follow-up</h4>
                            <p className="text-sm text-gray-600">
                              Automate appointment confirmations and post-visit follow-ups
                            </p>
                          </div>
                          <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Inbound Calls */}
              <AnimatedCard index={1}>
                <Card className="shadow-2xl border border-green-100 bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                          <PhoneIncoming className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Inbound Calls</h3>
                          <p className="text-gray-600">
                            Automate the management of inbound calls to improve customer experience
                          </p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <FileQuestion className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Frequently Asked Questions</h4>
                            <p className="text-sm text-gray-600">
                              Automatically answer frequently asked questions to reduce call volume
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Complaints and Claims</h4>
                            <p className="text-sm text-gray-600">
                              Resolve complaints quickly to maintain customer satisfaction and compliance
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Appointments</h4>
                            <p className="text-sm text-gray-600">
                              Manage and confirm customer appointments without human intervention, saving time
                            </p>
                          </div>
                          <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
            <AnimatedSection delay={0.4} className="text-center mt-12">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 rounded-full"
                onClick={() => (window.location.href = "/demo")}
              >
                See Call Management Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced AI Tools Section */}
      <AnimatedSection>
        <section id="solutions" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Complete AI Automation Suite</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered solutions are designed specifically for healthcare providers, ensuring compliance while
                maximizing efficiency and patient satisfaction.
              </p>
            </AnimatedText>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Search Visibility",
                  description: "Get found online with SEO-optimized websites that attract new patients.",
                  features: ["Local SEO optimization", "Mobile-responsive design", "Fast loading speeds"],
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Bot,
                  title: "Integrate Chatbot",
                  description: "Secure, AI-powered patient support available 24/7 with smart escalation.",
                  features: ["Instant patient responses", "Appointment scheduling", "Human escalation when needed"],
                  color: "bg-emerald-100 text-emerald-600",
                },
                {
                  icon: Phone,
                  title: "Voice Agents",
                  description: "Automate calls and reduce front desk overload with natural voice AI.",
                  features: ["Natural conversation flow", "Appointment confirmations", "Reduce call wait times"],
                  color: "bg-teal-100 text-teal-600",
                },
              ].map((tool, index) => (
                <AnimatedCard key={index} index={index}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8 text-center space-y-4">
                      <div
                        className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <tool.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                      <div className="pt-4 space-y-2 text-sm text-gray-600">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Detailed Appointment Management Section */}
      <AnimatedSection>
        <section className="py-20 bg-green-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Automate Appointment Management</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Streamline your scheduling process with intelligent automation that works around the clock.
              </p>
            </AnimatedText>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Smart Scheduling & Reminders</h3>
                    <p className="text-lg text-gray-600">
                      Our AI handles the entire appointment lifecycle - from initial booking to follow-up reminders,
                      reducing no-shows by up to 70%.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Calendar,
                        title: "Smart Scheduling",
                        description:
                          "AI automatically finds optimal appointment slots based on provider availability and patient preferences.",
                        color: "bg-green-100 text-green-600",
                      },
                      {
                        icon: Bell,
                        title: "Automated Reminders",
                        description:
                          "Multi-channel reminders via SMS, email, and voice calls to ensure patients never miss appointments.",
                        color: "bg-emerald-100 text-emerald-600",
                      },
                      {
                        icon: UserCheck,
                        title: "Patient Confirmations",
                        description:
                          "Automatic confirmation requests with easy reschedule options to optimize your schedule.",
                        color: "bg-teal-100 text-teal-600",
                      },
                      {
                        icon: BarChart3,
                        title: "Analytics Dashboard",
                        description:
                          "Track appointment trends, no-show rates, and optimization opportunities in real-time.",
                        color: "bg-green-100 text-green-600",
                      },
                    ].map((feature, index) => (
                      <AnimatedCard key={index} index={index}>
                        <Card className="border border-green-200 bg-white shadow-lg">
                          <CardContent className="p-6 space-y-4">
                            <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center`}>
                              <feature.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </CardContent>
                        </Card>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <div className="relative">
                  <Card className="shadow-2xl border border-green-100 bg-white">
                    <CardContent className="p-8">
                      <InteractiveCalendar />
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection className="text-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full" onClick={scrollToCalendar}>
                See Appointment Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection>
        <section className="py-20 bg-green-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven process gets you up and running with AI automation in just a few simple steps.
              </p>
            </AnimatedText>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "Understand your workflow and identify automation opportunities.",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "Tailored AI Strategy",
                  description: "Build your custom automation stack based on your specific needs.",
                  icon: Lightbulb,
                },
                {
                  step: "03",
                  title: "Implementation & Onboarding",
                  description: "Seamlessly integrate AI tools into your existing operations.",
                  icon: Zap,
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "We scale with you and provide continuous optimization.",
                  icon: Users,
                },
              ].map((item, index) => (
                <AnimatedCard key={index} index={index}>
                  <div className="relative">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-lg hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2"></div>
                    )}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries Section */}
      <AnimatedSection>
        <section id="industries" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI solutions tailored for different healthcare sectors.
              </p>
            </AnimatedText>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Stethoscope, title: "Private Practices", color: "bg-green-100 text-green-600" },
                { icon: Heart, title: "Dental Offices", color: "bg-emerald-100 text-emerald-600" },
                { icon: Building2, title: "Clinics & Labs", color: "bg-teal-100 text-teal-600" },
                { icon: Zap, title: "Urgent Care", color: "bg-green-100 text-green-600" },
                { icon: Users, title: "Telehealth Companies", color: "bg-emerald-100 text-emerald-600" },
              ].map((industry, index) => (
                <AnimatedCard key={index} index={index}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center space-y-4">
                      <div
                        className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                      >
                        <industry.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{industry.title}</h3>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-20 bg-green-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            </AnimatedText>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote:
                    "Our AI assistant has significantly improved patient generation. We've seen a noticeable increase in new patient inquiries since implementation.",
                  author: "Dr. Adewale",
                  role: "Family Practice",
                  rating: 5,
                },
                {
                  quote:
                    "We've drastically reduced no-show rates with automated reminders. This has directly translated to increased revenue and better resource allocation.",
                  author: "WellnessCare MD",
                  role: "Multi-Specialty Clinic",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <AnimatedCard key={index} index={index}>
                  <Card className="border-0 shadow-lg bg-green-50/50 border-green-100 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-700 italic">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <AnimatedText>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Unlock Patient Conversion & Revenue Growth
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-xl text-green-100">
                  Ready to transform your practice with cutting-edge AI automation? Let's build your custom solution
                  today.
                </p>
              </AnimatedText>
              <AnimatedSection delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-3 bg-white text-green-600 hover:bg-gray-50 font-semibold rounded-full hover:scale-105 transition-all"
                    onClick={() => (window.location.href = "/book-call")}
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-full hover:scale-105 transition-all"
                    onClick={() => (window.location.href = "/demo")}
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

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
