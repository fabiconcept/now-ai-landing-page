import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Video,
  BookOpen,
  Download,
  ArrowRight,
  Search,
  Calendar,
  Users,
  BarChart3,
  Shield,
  Stethoscope,
  Brain,
  Lightbulb,
  TrendingUp,
} from "lucide-react"
import InteractiveResourcesPage from "./interactive-page"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { resourcesMetadata } from "@/constants/metadata"

export const metadata = resourcesMetadata

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Case Studies",
      description: "Real success stories from healthcare practices",
      icon: BarChart3,
      count: 12,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "White Papers",
      description: "In-depth research and industry insights",
      icon: FileText,
      count: 8,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step guides and demos",
      icon: Video,
      count: 15,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Implementation Guides",
      description: "Best practices for AI deployment",
      icon: BookOpen,
      count: 6,
      color: "bg-green-100 text-green-600",
    },
  ]

  const featuredResources = [
    {
      title: "The Complete Guide to Healthcare AI Implementation",
      description: "A comprehensive 50-page guide covering everything from planning to deployment and optimization.",
      type: "White Paper",
      downloadCount: "2.3K downloads",
      image: "/placeholder.svg?height=200&width=300",
      badge: "Featured",
      icon: Brain,
    },
    {
      title: "HIPAA Compliance Checklist for AI Solutions",
      description: "Essential checklist to ensure your AI implementation meets all HIPAA requirements.",
      type: "Checklist",
      downloadCount: "3.1K downloads",
      image: "/placeholder.svg?height=200&width=300",
      badge: "Essential",
      icon: Shield,
    },
  ]

  const webinars = [
    {
      title: "AI in Healthcare: What's Working Now",
      date: "January 25, 2024",
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Chen, CEO",
      attendees: "500+ registered",
      status: "upcoming",
    },
    {
      title: "HIPAA Compliance for AI Solutions",
      date: "January 18, 2024",
      time: "1:00 PM EST",
      speaker: "Marcus Rodriguez, CTO",
      attendees: "750+ attended",
      status: "recorded",
    },
  ]

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
              <Link href="/solutions" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Solutions
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/resources" className="text-green-600 hover:text-green-700 transition-colors font-bold">
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
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Healthcare AI <span className="text-gradient">Resources & Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover best practices, case studies, and expert insights to help you successfully implement AI in your
              healthcare practice.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10 pr-4 py-3 text-lg rounded-full border-green-200 focus:border-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the resources that match your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{category.description}</p>
                    <Badge variant="secondary" className="mt-3 bg-green-50 text-green-700">
                      {category.count} resources
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Resources</h2>
            <p className="text-xl text-gray-600">Our most popular and valuable resources</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <resource.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white text-green-600 border border-green-200">
                    {resource.badge}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                      {resource.type}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2">{resource.title}</h3>
                    <p className="text-gray-600 mt-2">{resource.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-500">{resource.downloadCount}</span>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 rounded-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">All Resources</h2>
          </div>
          <InteractiveResourcesPage />
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Webinars & Events</h2>
            <p className="text-xl text-gray-600">Join our experts for live discussions and Q&A sessions</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      className={webinar.status === "upcoming" ? "bg-green-500 text-white" : "bg-gray-500 text-white"}
                    >
                      {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                    </Badge>
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{webinar.title}</h3>
                    <div className="space-y-2 mt-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {webinar.date} at {webinar.time}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.speaker}</span>
                      </div>
                      <div className="text-green-600 font-medium">{webinar.attendees}</div>
                    </div>
                  </div>
                  <Button
                    className={`w-full ${webinar.status === "upcoming" ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"} rounded-full`}
                  >
                    {webinar.status === "upcoming" ? "Register Now" : "Watch Recording"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Latest Resources</h2>
                  <p className="text-xl text-gray-600">
                    Get notified when we publish new case studies, guides, and industry insights.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border-green-200 focus:border-green-500"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 rounded-full px-8">Subscribe</Button>
                </div>
                <p className="text-sm text-gray-500">Join 5,000+ healthcare professionals. Unsubscribe anytime.</p>
              </CardContent>
            </Card>
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
