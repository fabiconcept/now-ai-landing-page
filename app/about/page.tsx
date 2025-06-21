import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, ArrowRight, CheckCircle, Lightbulb, Heart, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-gray-900 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center neo-brutalist">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight">N_OW AI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Solutions
              </a>
              <a href="/industries" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Industries
              </a>
              <a href="/about" className="text-blue-600 font-bold">
                About
              </a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Blog
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="hidden sm:inline-flex neo-brutalist bg-white hover:bg-gray-50 font-semibold"
              >
                <a href="/book-call">Book a Call</a>
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 neo-brutalist font-semibold">
                <a href="/demo">Get a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <Badge
              variant="secondary"
              className="neo-brutalist bg-yellow-300 text-black border-black font-bold px-4 py-2"
            >
              About N_OW AI
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
              Transforming Healthcare with <span className="text-gradient">Intelligent Automation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              We're on a mission to revolutionize healthcare operations through cutting-edge AI technology, making
              quality care more accessible and efficient for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower healthcare providers with AI-driven solutions that reduce administrative burden, improve
                  patient experiences, and allow medical professionals to focus on what they do best - providing
                  exceptional care.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A future where every healthcare practice, regardless of size, has access to intelligent automation
                  that enhances efficiency, ensures compliance, and ultimately improves patient outcomes across the
                  globe.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Why We Started N_OW AI</h3>
                  <p className="text-blue-100">
                    After witnessing firsthand how administrative tasks overwhelm healthcare providers, we knew there
                    had to be a better way. AI technology had the potential to solve these challenges while maintaining
                    the highest standards of patient privacy and care quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-blue-100 text-sm">Practices Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">30%</div>
                      <div className="text-blue-100 text-sm">Average Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of healthcare professionals, AI researchers, and technology experts united by a common
              goal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former healthcare administrator with 15+ years experience in practice management.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO & Co-Founder",
                bio: "AI researcher specializing in healthcare applications and HIPAA-compliant systems.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Aisha Patel",
                role: "Chief Medical Officer",
                bio: "Practicing physician and healthcare technology advocate with deep clinical insights.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description: "HIPAA compliance and data security are non-negotiable in everything we build.",
              },
              {
                icon: Heart,
                title: "Patient-Centered",
                description: "Every solution we create ultimately serves to improve patient care and experience.",
              },
              {
                icon: CheckCircle,
                title: "Reliability",
                description: "Healthcare can't afford downtime. Our systems are built for 99.9% uptime.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Journey</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2022",
                  title: "Company Founded",
                  description: "Started with a vision to transform healthcare operations",
                },
                {
                  year: "2023",
                  title: "First AI Chatbot",
                  description: "Launched our HIPAA-compliant chatbot solution",
                },
                {
                  year: "2024",
                  title: "Voice Agent Launch",
                  description: "Introduced AI voice agents for call automation",
                },
                {
                  year: "2024",
                  title: "500+ Practices",
                  description: "Reached milestone of serving 500+ healthcare practices",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Join Our Mission?</h2>
            <p className="text-xl text-blue-100">
              Whether you're a healthcare provider looking for solutions or a talented individual wanting to make a
              difference, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
