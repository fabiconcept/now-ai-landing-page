import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bot, Calendar, User, ArrowRight, Search, TrendingUp, Shield, Stethoscope, Brain, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { blogMetadata } from "@/constants/metadata"

// export const metadata = blogMetadata

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Healthcare: How AI is Transforming Patient Care",
    excerpt:
      "Explore the revolutionary impact of artificial intelligence on healthcare delivery, from diagnosis to treatment and beyond.",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI in Healthcare",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-healthcare-ai-transforming-patient-care",
  }

  const blogPosts = [
    {
      title: "HIPAA Compliance in the Age of AI: What Healthcare Providers Need to Know",
      excerpt:
        "Understanding the critical requirements for maintaining patient privacy while implementing AI solutions.",
      author: "Marcus Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Compliance",
      image: "/placeholder.svg?height=300&width=400",
      slug: "hipaa-compliance-ai-healthcare-providers",
    },
    {
      title: "5 Ways AI Chatbots Are Reducing Administrative Burden in Medical Practices",
      excerpt: "Real-world examples of how intelligent automation is freeing up staff time for patient care.",
      author: "Dr. Aisha Patel",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Practice Management",
      image: "/placeholder.svg?height=300&width=400",
      slug: "ai-chatbots-reducing-administrative-burden",
    },
    {
      title: "Voice AI in Healthcare: Beyond the Hype",
      excerpt: "A practical look at how voice technology is actually being implemented in healthcare settings.",
      author: "Dr. Sarah Chen",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=400",
      slug: "voice-ai-healthcare-beyond-hype",
    },
    {
      title: "Patient Experience in the Digital Age: Meeting Modern Expectations",
      excerpt: "How healthcare providers can leverage technology to improve patient satisfaction and outcomes.",
      author: "Marcus Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Patient Experience",
      image: "/placeholder.svg?height=300&width=400",
      slug: "patient-experience-digital-age",
    },
    {
      title: "ROI of Healthcare Automation: A Data-Driven Analysis",
      excerpt: "Comprehensive breakdown of cost savings and efficiency gains from implementing AI solutions.",
      author: "Dr. Aisha Patel",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Business Intelligence",
      image: "/placeholder.svg?height=300&width=400",
      slug: "roi-healthcare-automation-analysis",
    },
    {
      title: "Building Trust in AI: Transparency in Healthcare Technology",
      excerpt: "Why transparency and explainable AI are crucial for healthcare adoption and patient trust.",
      author: "Dr. Sarah Chen",
      date: "December 1, 2024",
      readTime: "5 min read",
      category: "AI Ethics",
      image: "/placeholder.svg?height=300&width=400",
      slug: "building-trust-ai-transparency-healthcare",
    },
  ]

  const categories = [
    { name: "AI in Healthcare", count: 12, icon: Brain },
    { name: "Compliance", count: 8, icon: Shield },
    { name: "Practice Management", count: 15, icon: Stethoscope },
    { name: "Technology", count: 10, icon: Bot },
    { name: "Patient Experience", count: 7, icon: User },
    { name: "Business Intelligence", count: 5, icon: TrendingUp },
  ]

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
                <Link href="/solutions" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
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
                  Contact Us
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                  Contact Us
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
      </AnimatedSection>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              Healthcare AI Insights
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              The <span className="text-green-600"><span className="logo text-orange-500">N:OW</span> AI</span> Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay ahead of the curve with insights on AI in healthcare, industry trends, and practical guides for
              modern medical practices.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-24 h-24 text-white opacity-50" />
                  </div>
                </div>
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{featuredPost.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>All Categories</option>
                      <option>AI in Healthcare</option>
                      <option>Compliance</option>
                      <option>Practice Management</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-t-lg">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Bot className="w-16 h-16 text-white opacity-50" />
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-3">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-semibold text-gray-900 leading-tight">{post.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm">
                              Read More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="shadow-lg bg-green-50 border-green-200">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-green-900">Stay Updated</h3>
                    <p className="text-green-700 text-sm">
                      Get the latest insights on AI in healthcare delivered to your inbox.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" className="bg-white" />
                    <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Popular Posts</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="space-y-2">
                      <Link href={`/blog/${post.slug}`} className="block">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h4>
                      </Link>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
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
              <p className="text-gray-400">© {new Date().getFullYear()} <span className="logo text-orange-500 text-xl">N:OW</span> AI. All rights reserved.</p>
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
