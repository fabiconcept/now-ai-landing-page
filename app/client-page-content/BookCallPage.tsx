"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, CheckCircle, Clock, Video, ArrowRight, Shield, Users } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"

export default function BookCallPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    callType: "",
    urgency: "",
    topics: "",
    additionalNotes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ]

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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">Call Scheduled Successfully!</h1>
                <p className="text-xl text-gray-600">
                  Your strategy call has been booked. We'll send you a calendar invitation with all the details shortly.
                </p>
              </div>
              <Card className="shadow-lg text-left border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Call Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="w-5 h-5 text-green-600" />
                      <span>{selectedDate?.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span>{selectedTime}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Video className="w-5 h-5 text-green-600" />
                      <span>Video call link will be provided</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  <Link href="/solutions">Explore Solutions</Link>
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
      <AnimatedSection direction="fade" className="top-0 z-50 sticky" duration={0.8}>
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
      </AnimatedSection>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              Strategy Call
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Book Your <span className="text-green-600">Strategy Call</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Schedule a personalized consultation with our healthcare AI experts. We'll discuss your challenges,
              explore solutions, and create a custom roadmap for your practice.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>45-minute call</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Calendar and Time Selection */}
            <div className="space-y-8">
              <Card className="shadow-lg border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Select Date & Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">Choose a Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      className="rounded-md border"
                      classNames={{
                        head_cell: "text-gray-700",
                        day: "text-gray-700",
                        day_selected: "bg-green-600 text-white hover:bg-green-700 focus:bg-green-700",
                        day_today: "text-green-600 font-semibold",
                        day_disabled: "text-gray-400 opacity-50",
                        nav_button: "text-gray-700",
                        // nav_button_hover: "bg-gray-100",
                      }}
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <Label className="text-base font-medium mb-3 block">Available Times</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-full ${
                              selectedTime === time ? "bg-green-600 hover:bg-green-700 text-white" : ""
                            }`}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-green-50 border-green-200 border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-900">What to Expect</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-green-800">Comprehensive practice assessment</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-green-800">Custom AI solution recommendations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-green-800">Implementation roadmap</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Your Information</CardTitle>
                  <p className="text-gray-600">
                    Tell us about yourself and your practice so we can prepare for our call.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Practice/Organization Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="rounded-full">
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
                      <Label htmlFor="callType">Call Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("callType", value)}>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="What type of call?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general-consultation">General Consultation</SelectItem>
                          <SelectItem value="specific-solution">Specific Solution Discussion</SelectItem>
                          <SelectItem value="implementation-planning">Implementation Planning</SelectItem>
                          <SelectItem value="technical-questions">Technical Questions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Timeline *</Label>
                      <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="When are you looking to implement?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately (within 1 month)</SelectItem>
                          <SelectItem value="short-term">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium-term">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topics">Topics to Discuss *</Label>
                      <Textarea
                        id="topics"
                        placeholder="What specific challenges or topics would you like to discuss?"
                        value={formData.topics}
                        onChange={(e) => handleInputChange("topics", e.target.value)}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Any additional information that would help us prepare?"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                        rows={2}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 rounded-full"
                      disabled={isSubmitting || !selectedDate || !selectedTime}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Booking Call...
                        </>
                      ) : (
                        <>
                          Book Strategy Call
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By booking this call, you agree to our privacy policy. We'll send you a calendar invitation and
                      may contact you to confirm details.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
