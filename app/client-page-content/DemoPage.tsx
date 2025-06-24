"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedText } from "@/components/ui/animated-text"
import {
    Bot,
    Calendar,
    CheckCircle,
    Clock,
    Users,
    Phone,
    Mail,
    Play,
    ArrowRight,
    Shield,
    Zap,
    Loader2,
} from "lucide-react"
import { submitDemoForm } from "@/lib/api"
import Link from "next/link"

export default function DemoPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        practiceType: "",
        practiceSize: "",
        currentChallenges: "",
        interestedSolutions: [] as string[],
        preferredTime: "",
        additionalNotes: "",
    })

    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrors({})

        try {
            const response = await submitDemoForm(formData)
            if (response.success) {
                setIsSubmitted(true)
            }
        } catch (error: any) {
            if (error.details && error.details.issues) {
                const newErrors: { [key: string]: string } = {}
                error.details.issues.forEach((issue: any) => {
                    newErrors[issue.path[0]] = issue.message
                })
                setErrors(newErrors)
            } else {
                setErrors({ general: "Failed to submit form. Please try again." })
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const handleCheckboxChange = (solution: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            interestedSolutions: checked
                ? [...prev.interestedSolutions, solution]
                : prev.interestedSolutions.filter((s) => s !== solution),
        }))
        if (errors.interestedSolutions) {
            setErrors((prev) => ({ ...prev, interestedSolutions: "" }))
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white">
                {/* Header */}
                <AnimatedSection className="top-0 sticky z-50" direction="down">
                    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center py-4">
                                <Link href="http://localhost:3000" className="flex items-center space-x-2">
                                    <span className="text-6xl drop-shadow-lg font-black text-orange-500 tracking-tight logo">N:OW</span>
                                </Link>
                            </div>
                        </div>
                    </header>
                </AnimatedSection>

                {/* Success Message */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center space-y-8">
                            <AnimatedSection>
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                            </AnimatedSection>
                            <AnimatedText>
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-bold text-gray-900">Demo Scheduled Successfully!</h1>
                                    <p className="text-xl text-gray-600">
                                        Thank you for your interest in <span className="logo text-orange-500 text-xl">N:OW</span> AI. We've received your demo request and will be in touch within
                                        24 hours to confirm your personalized demonstration.
                                    </p>
                                </div>
                            </AnimatedText>
                            <AnimatedCard>
                                <Card className="shadow-lg text-left border">
                                    <CardContent className="p-6 space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-green-600 text-sm font-bold">1</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Confirmation Call</p>
                                                    <p className="text-gray-600 text-sm">
                                                        Our team will contact you within 24 hours to confirm your demo time and discuss your
                                                        specific needs.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-green-600 text-sm font-bold">2</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Personalized Demo</p>
                                                    <p className="text-gray-600 text-sm">
                                                        Experience a customized demonstration of our AI solutions tailored to your practice type and
                                                        challenges.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-green-600 text-sm font-bold">3</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Custom Proposal</p>
                                                    <p className="text-gray-600 text-sm">
                                                        Receive a tailored implementation plan and pricing proposal for your specific requirements.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                            <AnimatedSection delay={0.4}>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full">
                                        <Link href="/">Return to Homepage</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full">
                                        <Link href="/blog">Read Our Blog</Link>
                                    </Button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <AnimatedSection className="top-0 z-50 sticky">
                <header className="bg-green-50/50 border-b border-green-100 sticky top-0 z-50 backdrop-blur-sm">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <Link href="/" className="flex items-center space-x-3">
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
                        <AnimatedText delay={0.2}>
                            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                Personalized Demo
                            </Badge>
                        </AnimatedText>
                        <AnimatedText stagger className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            See <span className="logo text-orange-500">N:OW</span> AI in Action
                        </AnimatedText>
                        <AnimatedText delay={0.6}>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Experience how our AI-powered solutions can transform your healthcare practice. Get a personalized
                                demonstration tailored to your specific needs and challenges.
                            </p>
                        </AnimatedText>
                        <AnimatedSection delay={0.8}>
                            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>30-minute demo</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Shield className="w-4 h-4" />
                                    <span>HIPAA compliant</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4" />
                                    <span>Live interaction</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Demo Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Form */}
                        <AnimatedSection direction="left">
                            <Card className="shadow-lg border">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-gray-900">Schedule Your Demo</CardTitle>
                                    <p className="text-gray-600">
                                        Fill out the form below and we'll contact you within 24 hours to schedule your personalized
                                        demonstration.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    {errors.general && (
                                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                            {errors.general}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name *</Label>
                                                <Input
                                                    id="firstName"
                                                    value={formData.firstName}
                                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                                    className={errors.firstName ? "border-red-500" : ""}
                                                    required
                                                />
                                                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name *</Label>
                                                <Input
                                                    id="lastName"
                                                    value={formData.lastName}
                                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                                    className={errors.lastName ? "border-red-500" : ""}
                                                    required
                                                />
                                                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                className={errors.email ? "border-red-500" : ""}
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                className={errors.phone ? "border-red-500" : ""}
                                                required
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="company">Practice/Organization Name *</Label>
                                            <Input
                                                id="company"
                                                value={formData.company}
                                                onChange={(e) => handleInputChange("company", e.target.value)}
                                                className={errors.company ? "border-red-500" : ""}
                                                required
                                            />
                                            {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="role">Your Role *</Label>
                                            <Select onValueChange={(value) => handleInputChange("role", value)}>
                                                <SelectTrigger className={errors.role ? "border-red-500" : ""}>
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
                                            {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="practiceType">Practice Type *</Label>
                                                <Select onValueChange={(value) => handleInputChange("practiceType", value)}>
                                                    <SelectTrigger className={errors.practiceType ? "border-red-500" : ""}>
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="family-practice">Family Practice</SelectItem>
                                                        <SelectItem value="dental">Dental</SelectItem>
                                                        <SelectItem value="specialty">Specialty Clinic</SelectItem>
                                                        <SelectItem value="urgent-care">Urgent Care</SelectItem>
                                                        <SelectItem value="telehealth">Telehealth</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.practiceType && <p className="text-red-500 text-xs">{errors.practiceType}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="practiceSize">Practice Size *</Label>
                                                <Select onValueChange={(value) => handleInputChange("practiceSize", value)}>
                                                    <SelectTrigger className={errors.practiceSize ? "border-red-500" : ""}>
                                                        <SelectValue placeholder="Select size" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1-5">1-5 providers</SelectItem>
                                                        <SelectItem value="6-15">6-15 providers</SelectItem>
                                                        <SelectItem value="16-50">16-50 providers</SelectItem>
                                                        <SelectItem value="50+">50+ providers</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.practiceSize && <p className="text-red-500 text-xs">{errors.practiceSize}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Which solutions interest you most? *</Label>
                                            <div className="space-y-2">
                                                {[
                                                    "AI Chatbot for Patient Communication",
                                                    "AI Voice Agent for Phone Calls",
                                                    "SEO-Optimized Website",
                                                    "Appointment Scheduling Automation",
                                                    "Patient Intake Automation",
                                                    "All Solutions",
                                                ].map((solution) => (
                                                    <div key={solution} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={solution}
                                                            checked={formData.interestedSolutions.includes(solution)}
                                                            onCheckedChange={(checked) => handleCheckboxChange(solution, checked as boolean)}
                                                        />
                                                        <Label htmlFor={solution} className="text-sm">
                                                            {solution}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                            {errors.interestedSolutions && (
                                                <p className="text-red-500 text-xs">{errors.interestedSolutions}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="currentChallenges">Current Challenges (Optional)</Label>
                                            <Textarea
                                                id="currentChallenges"
                                                placeholder="Tell us about your current operational challenges..."
                                                value={formData.currentChallenges}
                                                onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                                                rows={3}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                                            <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select preferred time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                                                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                                                    <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                                                    <SelectItem value="flexible">I'm flexible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                                            <Textarea
                                                id="additionalNotes"
                                                placeholder="Any specific questions or requirements?"
                                                value={formData.additionalNotes}
                                                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                                                rows={2}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-green-600 hover:bg-green-700 rounded-full"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin rounded-full h-4 w-4 mr-2" />
                                                    Scheduling Demo...
                                                </>
                                            ) : (
                                                <>
                                                    Schedule My Demo
                                                    <ArrowRight className="ml-2 w-5 h-5" />
                                                </>
                                            )}
                                        </Button>

                                        <p className="text-xs text-gray-500 text-center">
                                            By submitting this form, you agree to our privacy policy and terms of service. We'll only use your
                                            information to schedule and conduct your demo.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Demo Preview */}
                        <AnimatedSection direction="right">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Experience</h2>
                                    <div className="space-y-6">
                                        {[
                                            {
                                                icon: Play,
                                                title: "Live AI Interaction",
                                                description: "See our AI chatbot and voice agent in action with real healthcare scenarios.",
                                            },
                                            {
                                                icon: Users,
                                                title: "Customized Scenarios",
                                                description: "Experience use cases specific to your practice type and patient needs.",
                                            },
                                            {
                                                icon: Calendar,
                                                title: "Implementation Planning",
                                                description: "Discuss timeline, integration process, and next steps for your practice.",
                                            },
                                        ].map((item, index) => (
                                            <AnimatedCard key={index} index={index}>
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <item.icon className="w-6 h-6 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                                        <p className="text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            </AnimatedCard>
                                        ))}
                                    </div>
                                </div>

                                <AnimatedCard>
                                    <Card className="shadow-lg bg-green-50 border-green-200 border">
                                        <CardContent className="p-6">
                                            <div className="text-center space-y-4">
                                                <h3 className="text-lg font-semibold text-green-900">Demo Highlights</h3>
                                                <div className="grid grid-cols-2 gap-4 text-sm">
                                                    <div className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                                        <span className="text-green-800">Live chatbot demo</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                                        <span className="text-green-800">Voice agent preview</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                                        <span className="text-green-800">Q&A session</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </AnimatedCard>

                                <AnimatedSection delay={0.6}>
                                    <div className="text-center space-y-4">
                                        <p className="text-gray-600">Have questions before scheduling? We're here to help.</p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <Button variant="outline" size="sm" className="rounded-full">
                                                <Phone className="w-4 h-4 mr-2" />
                                                Call Us: (555) 123-4567
                                            </Button>
                                            <Button variant="outline" size="sm" className="rounded-full">
                                                <Mail className="w-4 h-4 mr-2" />
                                                Email: demo@nowai.com
                                            </Button>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
