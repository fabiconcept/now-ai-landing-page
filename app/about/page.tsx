import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedText } from "@/components/ui/animated-text"
import {
  Target,
  CheckCircle,
  Lightbulb,
  Heart,
  Shield,
  Phone,
  MessageSquare,
  Zap,
  Award,
  Clock,
  Users,
  Star,
} from "lucide-react"
import Link from "next/link"
import { aboutMetadata } from "@/constants/metadata"

// export const metadata = aboutMetadata

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AnimatedSection direction="down" duration={0.8} className="top-0 sticky z-50">
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

      {/* Hero Section - Matching Homepage Style */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 rounded-full">
                About NOW AI
              </Badge>
            </AnimatedSection>
            <AnimatedText delay={0.2} stagger>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Transforming Healthcare with <span className="text-gradient">Intelligent Automation</span>
              </h1>
            </AnimatedText>
            <AnimatedSection delay={0.4}>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're on a mission to revolutionize healthcare operations through cutting-edge AI technology, making
                quality care more accessible and efficient for everyone.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} direction="left">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-green-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To empower healthcare providers with AI-driven solutions that reduce administrative burden, improve
                    patient experiences, and allow medical professionals to focus on what they do best - providing
                    exceptional care.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A future where every healthcare practice, regardless of size, has access to intelligent automation
                    that enhances efficiency, ensures compliance, and ultimately improves patient outcomes across the
                    globe.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="right">
              <div className="relative">
                <Card className="shadow-2xl border border-green-100">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Why We Started <span className="logo text-orange-500">N:OW</span> AI</h3>
                        <p className="text-green-100">
                          After witnessing firsthand how administrative tasks overwhelm healthcare providers, we knew
                          there had to be a better way. AI technology had the potential to solve these challenges while
                          maintaining the highest standards of patient privacy and care quality.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold">500+</div>
                            <div className="text-green-100 text-sm">Practices Served</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold">30%</div>
                            <div className="text-green-100 text-sm">Average Time Saved</div>
                          </div>
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

      {/* Team Section */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of healthcare professionals, AI researchers, and technology experts united by a common
              goal.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former healthcare administrator with 15+ years experience in practice management.",
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO & Co-Founder",
                bio: "AI researcher specializing in healthcare applications and HIPAA-compliant systems.",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                name: "Dr. Aisha Patel",
                role: "Chief Medical Officer",
                bio: "Practicing physician and healthcare technology advocate with deep clinical insights.",
                color: "bg-teal-100 text-teal-600",
              },
            ].map((member, index) => (
              <AnimatedCard key={index} index={index} delay={0.1}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-24 h-24 ${member.color} rounded-full mx-auto flex items-center justify-center`}>
                      <Users className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-green-600 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at <span className="logo text-orange-500">N:OW</span> AI
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description: "HIPAA compliance and data security are non-negotiable in everything we build.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Heart,
                title: "Patient-Centered",
                description: "Every solution we create ultimately serves to improve patient care and experience.",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                icon: CheckCircle,
                title: "Reliability",
                description: "Healthcare can't afford downtime. Our systems are built for 99.9% uptime.",
                color: "bg-teal-100 text-teal-600",
              },
            ].map((value, index) => (
              <AnimatedCard key={index} index={index} delay={0.1}>
                <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform healthcare
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2022",
                  title: "Company Founded",
                  description: "Started with a vision to transform healthcare operations",
                  icon: Zap,
                  color: "bg-green-500",
                },
                {
                  year: "2023",
                  title: "First AI Chatbot",
                  description: "Launched our HIPAA-compliant chatbot solution",
                  icon: MessageSquare,
                  color: "bg-emerald-500",
                },
                {
                  year: "2024",
                  title: "Voice Agent Launch",
                  description: "Introduced AI voice agents for call automation",
                  icon: Phone,
                  color: "bg-teal-500",
                },
                {
                  year: "2024",
                  title: "500+ Practices",
                  description: "Reached milestone of serving 500+ healthcare practices",
                  icon: Award,
                  color: "bg-green-600",
                },
              ].map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 0.1} direction="left">
                  <div className="flex items-center space-x-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 ${milestone.color} text-white rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <milestone.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className="bg-green-100 text-green-800 font-semibold">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from healthcare practices using <span className="logo text-orange-500">N:OW</span> AI
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Healthcare Practices", icon: Users, color: "bg-green-100 text-green-600" },
              { number: "1M+", label: "Patient Interactions", icon: Heart, color: "bg-emerald-100 text-emerald-600" },
              { number: "30%", label: "Time Saved", icon: Clock, color: "bg-teal-100 text-teal-600" },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "bg-green-100 text-green-600" },
            ].map((stat, index) => (
              <AnimatedCard key={index} index={index} delay={0.1}>
                <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from healthcare providers using <span className="logo text-orange-500">N:OW</span> AI
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "NOW AI has transformed our practice operations. We've seen a 40% increase in appointment bookings and our staff can focus on patient care instead of answering repetitive questions.",
                author: "Dr. Sarah Johnson",
                role: "Family Practice",
                rating: 5,
              },
              {
                quote:
                  "The voice agent handles our appointment scheduling flawlessly. Our patients love the 24/7 availability and we've reduced no-shows by 60%.",
                author: "WellnessCare Clinic",
                role: "Multi-Specialty Practice",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              <p className="text-gray-400">© {new Date().getFullYear()} NOW AI. All rights reserved.</p>
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