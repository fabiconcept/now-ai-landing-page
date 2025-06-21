import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Stethoscope,
  Heart,
  Building2,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  FileText,
  Activity,
  Microscope,
  Brain,
} from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      title: "Family Practice",
      icon: Stethoscope,
      description: "Comprehensive primary care solutions for family medicine practices",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Patient triage and symptom assessment",
        "Appointment scheduling automation",
        "Prescription refill requests",
        "Insurance verification",
        "Preventive care reminders",
        "Family health tracking",
      ],
      metrics: {
        efficiency: "40% reduction in admin time",
        satisfaction: "95% patient satisfaction",
        calls: "60% fewer phone calls",
      },
      challenges: [
        "High volume of routine inquiries",
        "Complex family scheduling needs",
        "Insurance verification delays",
        "Preventive care follow-ups",
      ],
    },
    {
      title: "Dental Practices",
      icon: Heart,
      description: "Specialized AI solutions for dental offices and oral health practices",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "Appointment reminders and confirmations",
        "Treatment plan explanations",
        "Insurance pre-authorization",
        "Post-procedure care instructions",
        "Emergency dental triage",
        "Oral hygiene education",
      ],
      metrics: {
        efficiency: "50% fewer no-shows",
        satisfaction: "92% patient satisfaction",
        calls: "70% reduction in routine calls",
      },
      challenges: [
        "High no-show rates",
        "Complex treatment explanations",
        "Insurance claim complications",
        "Emergency appointment requests",
      ],
    },
    {
      title: "Specialty Clinics",
      icon: Microscope,
      description: "Tailored solutions for specialized medical practices and clinics",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "Specialist referral coordination",
        "Complex procedure scheduling",
        "Pre-visit preparation guidance",
        "Test result notifications",
        "Treatment protocol explanations",
        "Follow-up care coordination",
      ],
      metrics: {
        efficiency: "35% faster referral processing",
        satisfaction: "88% provider satisfaction",
        calls: "45% reduction in coordination calls",
      },
      challenges: [
        "Complex referral processes",
        "Specialized terminology needs",
        "Multi-provider coordination",
        "Detailed pre-visit requirements",
      ],
    },
    {
      title: "Urgent Care",
      icon: Zap,
      description: "Fast-response AI solutions for urgent care and walk-in clinics",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Real-time wait time updates",
        "Symptom-based triage",
        "Insurance verification",
        "Pre-registration forms",
        "Location and hours information",
        "Emergency escalation protocols",
      ],
      metrics: {
        efficiency: "30% reduction in wait times",
        satisfaction: "90% patient satisfaction",
        calls: "80% of inquiries automated",
      },
      challenges: [
        "Unpredictable patient volumes",
        "Urgent symptom assessment",
        "Insurance verification speed",
        "Multi-location coordination",
      ],
    },
    {
      title: "Telehealth Platforms",
      icon: Users,
      description: "Digital-first solutions for telehealth and virtual care providers",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      features: [
        "Virtual appointment scheduling",
        "Technical support assistance",
        "Platform navigation help",
        "Insurance coverage verification",
        "Prescription management",
        "Follow-up care coordination",
      ],
      metrics: {
        efficiency: "60% reduction in support tickets",
        satisfaction: "94% user satisfaction",
        calls: "75% of tech issues resolved",
      },
      challenges: [
        "Technical support needs",
        "Platform adoption barriers",
        "Insurance coverage questions",
        "Multi-state licensing complexity",
      ],
    },
    {
      title: "Mental Health",
      icon: Brain,
      description: "Sensitive, HIPAA-compliant solutions for mental health practices",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      features: [
        "Crisis intervention protocols",
        "Appointment scheduling with privacy",
        "Therapy session reminders",
        "Resource and coping strategy sharing",
        "Insurance verification",
        "Referral coordination",
      ],
      metrics: {
        efficiency: "25% improvement in appointment adherence",
        satisfaction: "91% patient satisfaction",
        calls: "40% reduction in crisis calls",
      },
      challenges: [
        "Crisis intervention needs",
        "Privacy and stigma concerns",
        "Appointment adherence issues",
        "Complex insurance coverage",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-gray-900 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Solutions
              </a>
              <a href="/industries" className="text-blue-600 font-bold">
                Industries
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
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
                <Link href="/book-call">Book a Call</Link>
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 neo-brutalist font-semibold">
                <Link href="/demo">Get a Demo</Link>
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
              Industry-Specific Solutions
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
              AI Solutions for <span className="text-gradient">Every Healthcare Specialty</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              From family practice to specialized clinics, our AI solutions are tailored to meet the unique challenges
              and workflows of your healthcare specialty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 neo-brutalist text-lg px-10 py-4 font-bold"
              >
                <Link href="/demo">See Your Industry Demo</Link>
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neo-brutalist bg-white hover:bg-gray-50 text-lg px-10 py-4 font-bold border-2 border-black"
              >
                <Link href="/contact">Discuss Your Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="glass-card neo-brutalist hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center neo-brutalist`}
                    >
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-black text-gray-900">{industry.title}</CardTitle>
                      <p className="text-gray-600 font-medium">{industry.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Key Metrics */}
                  <div className={`${industry.bgColor} ${industry.borderColor} border-2 rounded-2xl p-6 neo-brutalist`}>
                    <h4 className="font-black text-gray-900 mb-4">Proven Results</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Efficiency Gain:</span>
                        <Badge className="bg-green-200 text-green-800 border border-green-300 font-bold">
                          {industry.metrics.efficiency}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Satisfaction:</span>
                        <Badge className="bg-blue-200 text-blue-800 border border-blue-300 font-bold">
                          {industry.metrics.satisfaction}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Call Reduction:</span>
                        <Badge className="bg-purple-200 text-purple-800 border border-purple-300 font-bold">
                          {industry.metrics.calls}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Challenges */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4">Challenges We Solve</h4>
                    <div className="space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 neo-brutalist font-bold">
                    Learn More About {industry.title}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-6xl drop-shadow-lg font-black text-gray-900">Industry-Specific Implementation</h2>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Our proven process adapts to your specialty's unique requirements and workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Specialty Assessment",
                description: "Deep dive into your specific practice type, workflows, and patient demographics.",
                icon: Activity,
              },
              {
                step: "02",
                title: "Custom Configuration",
                description: "Tailor AI responses, workflows, and integrations to your specialty's needs.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Staff Training",
                description: "Specialty-specific training for your team on AI tools and best practices.",
                icon: Users,
              },
              {
                step: "04",
                title: "Ongoing Optimization",
                description: "Continuous refinement based on your specialty's evolving requirements.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <Card key={index} className="glass-card neo-brutalist text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto neo-brutalist">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mx-auto neo-brutalist">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-6xl drop-shadow-lg font-black text-gray-900">Trusted Across Healthcare</h2>
            <p className="text-xl text-gray-700 font-medium">
              Healthcare providers across all specialties trust N_OW AI to transform their operations.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Healthcare Practices", icon: Building2 },
              { number: "50+", label: "Medical Specialties", icon: Stethoscope },
              { number: "1M+", label: "Patient Interactions", icon: Users },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
            ].map((stat, index) => (
              <Card key={index} className="glass-card neo-brutalist text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto neo-brutalist">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-6xl drop-shadow-lg font-black text-white">Ready to Transform Your Specialty?</h2>
            <p className="text-xl text-blue-100 font-medium">
              Join hundreds of healthcare providers who have revolutionized their specialty practice with AI automation
              tailored to their unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="neo-brutalist text-lg px-10 py-4 font-bold bg-white text-black hover:bg-gray-100"
              >
                <Link href="/demo">Get Industry Demo</Link>
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neo-brutalist text-lg px-10 py-4 font-bold border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/book-call">Book Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
