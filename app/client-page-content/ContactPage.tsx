"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bot,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Headphones,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    inquiryType: "",
    message: "",
    urgency: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const plan = urlParams.get("plan")
    const message = urlParams.get("message")

    if (plan) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "pricing",
        message:
          message ||
          `I'm interested in the ${plan.replace("-", " ")} plan. Please provide more information about pricing and implementation.`,
      }))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our healthcare AI experts",
      contact: "(555) 123-4567",
      availability: "Mon-Fri 8AM-8PM EST",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your questions",
      contact: "hello@nowai.com",
      availability: "Response within 4 hours",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support during business hours",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a personalized consultation",
      contact: "Book online",
      availability: "Flexible scheduling",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
  ]

  const offices = [
    {
      city: "New York",
      address: "123 Healthcare Ave, Suite 500",
      zipcode: "New York, NY 10001",
      phone: "(555) 123-4567",
      type: "Headquarters",
    },
    {
      city: "San Francisco",
      address: "456 Innovation Blvd, Floor 12",
      zipcode: "San Francisco, CA 94105",
      phone: "(555) 987-6543",
      type: "West Coast Office",
    },
    {
      city: "Austin",
      address: "789 Tech Park Dr, Building C",
      zipcode: "Austin, TX 78701",
      phone: "(555) 456-7890",
      type: "Development Center",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center space-x-3">
                  <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Message Sent Successfully!</h1>
                <p className="text-xl text-gray-700 font-medium">
                  Thank you for reaching out to N_OW AI. We've received your message and will respond within 4 hours
                  during business hours.
                </p>
              </div>
              <Card className="shadow-md text-left">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Review & Assignment</p>
                        <p className="text-gray-600 text-sm font-medium">
                          Our team will review your inquiry and assign it to the right specialist.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Personalized Response</p>
                        <p className="text-gray-600 text-sm font-medium">
                          You'll receive a detailed response tailored to your specific needs and questions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Follow-up Action</p>
                        <p className="text-gray-600 text-sm font-medium">
                          If needed, we'll schedule a call or demo to discuss your requirements in detail.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white hover:bg-gray-50 font-semibold border-2 border-black"
                >
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
              </Link>
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
              <Link href="/contact" className="text-green-600 font-bold">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="hidden sm:inline-flex rounded-full bg-white hover:bg-gray-50 font-semibold"
              >
                <Link href="/book-call">Book a Call</Link>
              </Button>
              <Button className="bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold">
                <Link href="/demo">Get a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 rounded-full">
              Get in Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight">
              Let's <span className="text-green-600">Transform Healthcare</span> Together
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Ready to revolutionize your healthcare practice with AI? Our team of experts is here to help you every
              step of the way.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 font-medium">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>4-hour response time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>HIPAA compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Choose Your Preferred Contact Method</h2>
            <p className="text-xl text-gray-700 font-medium">
              We're here to help through multiple channels. Pick what works best for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 font-medium text-sm mb-4">{method.description}</p>
                    <div className={`${method.bgColor} border-2 border-gray-200 rounded-xl p-3`}>
                      <p className="font-bold text-gray-900">{method.contact}</p>
                      <p className="text-gray-600 text-sm font-medium">{method.availability}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold">
                    {method.title === "Schedule a Call" ? (
                      <Link href="/book-call">Book Now</Link>
                    ) : method.title === "Phone Support" ? (
                      <Link href="tel:+15551234567">Call Now</Link>
                    ) : method.title === "Email Support" ? (
                      <Link href="mailto:hello@nowai.com">Send Email</Link>
                    ) : (
                      "Start Chat"
                    )}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <div className="space-y-6 mb-8">
                <h2 className="text-4xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-xl text-gray-700 font-medium">
                  Fill out the form below and we'll get back to you within 4 hours during business hours.
                </p>
              </div>
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-semibold">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className=""
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-semibold">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className=""
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className=""
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className=""
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-semibold">
                        Practice/Organization Name *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className=""
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="role" className="font-semibold">
                          Your Role *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("role", value)}>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="physician">Physician</SelectItem>
                            <SelectItem value="practice-manager">Practice Manager</SelectItem>
                            <SelectItem value="administrator">Administrator</SelectItem>
                            <SelectItem value="it-director">IT Director</SelectItem>
                            <SelectItem value="owner">Practice Owner</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="font-semibold">
                          Inquiry Type *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="demo">Request Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Questions</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="font-semibold">
                        Urgency Level
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger className="">
                          <SelectValue placeholder="How urgent is this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="medium">Medium - Need response this week</SelectItem>
                          <SelectItem value="high">High - Need response today</SelectItem>
                          <SelectItem value="urgent">Urgent - Existing customer issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your needs, questions, or how we can help..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        className=""
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center font-medium">
                      By submitting this form, you agree to our privacy policy. We'll only use your information to
                      respond to your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Offices */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-md bg-gray-50">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-700 font-medium">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-700 font-medium">hello@nowai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Support</p>
                        <p className="text-gray-700 font-medium">support@nowai.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Our Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{office.city}</h4>
                            <Badge className="bg-gray-200 text-gray-800 text-xs font-bold">{office.type}</Badge>
                          </div>
                          <p className="text-gray-700 font-medium text-sm">{office.address}</p>
                          <p className="text-gray-700 font-medium text-sm">{office.zipcode}</p>
                          <p className="text-gray-600 font-medium text-sm">{office.phone}</p>
                        </div>
                      </div>
                      {index < offices.length - 1 && <hr className="border-gray-200" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-md bg-gray-50">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm font-medium">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="text-gray-900 font-bold">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="text-gray-900 font-bold">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="text-gray-900 font-bold">Closed</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600 font-medium">
                      Emergency support available 24/7 for existing customers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 font-medium">
              Quick answers to common questions. Don't see yours? Contact us directly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How quickly can you implement AI solutions?",
                answer: "Most implementations take 2-4 weeks depending on complexity and integrations needed.",
              },
              {
                question: "Is your AI HIPAA compliant?",
                answer:
                  "Yes, all our AI solutions are fully HIPAA compliant with end-to-end encryption and secure data handling.",
              },
              {
                question: "What's included in your support?",
                answer: "24/7 technical support, regular updates, training, and dedicated account management.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer:
                  "Yes, we integrate with most major EHR systems, practice management software, and communication platforms.",
              },
              {
                question: "What's your pricing model?",
                answer:
                  "We offer flexible pricing based on practice size and features needed. Contact us for a custom quote.",
              },
              {
                question: "Do you offer training for our staff?",
                answer:
                  "Yes, comprehensive training is included with all implementations, plus ongoing support materials.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-700 font-medium">{faq.answer}</p>
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
