"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Bot,
    Mail,
    CheckCircle,
    ArrowRight,
    Calendar,
    Users,
    TrendingUp,
    FileText,
    Star,
    Clock,
    Shield,
    Lightbulb,
    BarChart3,
    Zap,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function NewsletterPage() {
    const [email, setEmail] = useState("")
    const [interests, setInterests] = useState<string[]>([])
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleInterestChange = (interest: string, checked: boolean) => {
        if (checked) {
            setInterests([...interests, interest])
        } else {
            setInterests(interests.filter((i) => i !== interest))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubscribed(true)
    }

    const benefits = [
        {
            icon: TrendingUp,
            title: "Industry Insights",
            description: "Latest trends and developments in healthcare AI",
        },
        {
            icon: FileText,
            title: "Exclusive Content",
            description: "Access to premium resources and case studies",
        },
        {
            icon: Lightbulb,
            title: "Best Practices",
            description: "Proven strategies from successful implementations",
        },
    ]

    const recentIssues = [
        {
            title: "AI Voice Agents: The Next Frontier in Healthcare Communication",
            date: "January 15, 2024",
            readTime: "5 min read",
            topics: ["Voice AI", "Patient Communication", "Technology"],
            featured: true,
        },
        {
            title: "HIPAA Compliance: What You Need to Know About AI Implementation",
            date: "January 8, 2024",
            readTime: "7 min read",
            topics: ["Compliance", "Security", "Implementation"],
            featured: false,
        },
        {
            title: "2024 Healthcare AI Predictions: What to Expect",
            date: "December 25, 2023",
            readTime: "8 min read",
            topics: ["Trends", "Predictions", "Industry"],
            featured: false,
        },
    ]

    const stats = [
        { number: "15K+", label: "Subscribers", icon: Users },
        { number: "98%", label: "Open Rate", icon: Mail },
        { number: "4.9/5", label: "Rating", icon: Star },
        { number: "Weekly", label: "Delivery", icon: Calendar },
    ]

    const interestOptions = [
        "AI Chatbots & Voice Agents",
        "Practice Management",
        "Patient Experience",
        "HIPAA Compliance",
        "Implementation Guides",
        "Industry Trends",
        "Case Studies",
    ]

    if (isSubscribed) {
        return (
            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-green-50/50 border-b border-green-100 sticky top-0 z-50 backdrop-blur-sm">
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
                <section className="py-24 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center space-y-8">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Welcome to the <span className="logo text-orange-500">N:OW</span> AI Newsletter!</h1>
                                <p className="text-xl text-gray-600">
                                    Thank you for subscribing. You'll receive your first newsletter within the next few days, packed with
                                    valuable insights and resources.
                                </p>
                            </div>
                            <Card className="shadow-lg text-left border border-green-100">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 text-sm font-bold">1</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Confirmation Email</p>
                                                <p className="text-gray-600 text-sm">
                                                    Check your inbox for a welcome email with your first exclusive resource.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 text-sm font-bold">2</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Weekly Newsletter</p>
                                                <p className="text-gray-600 text-sm">
                                                    Receive curated content every Tuesday with the latest insights and resources.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-green-600 text-sm font-bold">3</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Exclusive Access</p>
                                                <p className="text-gray-600 text-sm">
                                                    Get early access to new resources, webinars, and product updates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full">
                                    <Link href="/">Return to Homepage</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 rounded-full">
                                    <Link href="/resources">Browse Resources</Link>
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
                            <Link href="/newsletter" className="text-green-600 hover:text-green-700 transition-colors font-bold">
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
                            Weekly Newsletter
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            Stay Ahead with <span className="text-gradient">Healthcare AI Insights</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Join 15,000+ healthcare professionals who rely on our weekly newsletter for the latest AI trends, case
                            studies, and implementation strategies.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                                        <stat.icon className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                                    <div className="text-gray-600 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Signup Form */}
                        <div>
                            <Card className="shadow-2xl border border-green-100">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-gray-900">Subscribe to <span className="logo text-orange-500">N:OW</span> AI Newsletter</CardTitle>
                                    <p className="text-gray-600">
                                        Get weekly insights delivered to your inbox. Customize your preferences to receive content that
                                        matters most to you.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="font-semibold">
                                                Email Address *
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                className="rounded-full border-green-200 focus:border-green-500"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="font-semibold">What interests you most? (Select all that apply)</Label>
                                            <div className="grid grid-cols-1 gap-3">
                                                {interestOptions.map((interest) => (
                                                    <div key={interest} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={interest}
                                                            checked={interests.includes(interest)}
                                                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                                                        />
                                                        <Label htmlFor={interest} className="text-sm font-medium">
                                                            {interest}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                            <div className="flex items-start space-x-3">
                                                <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                                                <div className="text-sm">
                                                    <p className="font-medium text-green-900">Privacy Promise</p>
                                                    <p className="text-green-700">
                                                        We respect your privacy. Unsubscribe anytime with one click. No spam, ever.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-green-500 hover:bg-green-600 rounded-full"
                                            disabled={!email}
                                        >
                                            Subscribe to Newsletter
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>

                                        <p className="text-xs text-gray-500 text-center">
                                            By subscribing, you agree to receive marketing emails from <span className="logo text-orange-500 text-xl">N:OW</span> AI. You can unsubscribe at any
                                            time.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Benefits & Preview */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Get</h2>
                                <div className="space-y-6">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <benefit.icon className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                                                <p className="text-gray-600">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Card className="shadow-lg bg-green-50/50 border-green-100">
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Zap className="w-6 h-6 text-green-600" />
                                        <h3 className="text-lg font-semibold text-gray-900">Exclusive Subscriber Benefits</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span>Early access to new resources and tools</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span>Exclusive webinar invitations</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span>Free downloadable templates and checklists</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span>Priority support and consultation discounts</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Issues */}
            <section className="py-20 bg-green-50/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recent Newsletter Issues</h2>
                        <p className="text-xl text-gray-600">See what our subscribers have been reading</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {recentIssues.map((issue, index) => (
                            <Card
                                key={index}
                                className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${issue.featured ? "ring-2 ring-green-500" : ""}`}
                            >
                                {issue.featured && (
                                    <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                                        Featured Issue
                                    </div>
                                )}
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{issue.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{issue.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {issue.topics.map((topic, topicIndex) => (
                                                <Badge key={topicIndex} variant="secondary" className="bg-green-50 text-green-700 text-xs">
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                                        Read Full Issue
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                    </Button>
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
                            <p className="text-gray-400">© {new Date().getFullYear()} <span className="logo text-orange-500 text-xl">N:OW</span> AI. All rights reserved.</p>
                            {/* <div className="flex space-x-6 mt-4 md:mt-0">
                < href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </>
                < href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </>
              </div> */}
                        </div>
                    </div>
                </footer>
            </AnimatedSection>
        </div>
    )
}
