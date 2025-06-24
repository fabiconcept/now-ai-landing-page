import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function BlogPostPage() {
  // This would typically come from a CMS or database
  const post = {
    title: "The Future of Healthcare: How AI is Transforming Patient Care",
    excerpt:
      "Explore the revolutionary impact of artificial intelligence on healthcare delivery, from diagnosis to treatment and beyond.",
    content: `
      <p>The healthcare industry stands at the precipice of a technological revolution. Artificial Intelligence (AI) is no longer a futuristic concept—it's actively reshaping how we deliver, receive, and think about patient care. From diagnostic accuracy to personalized treatment plans, AI is proving to be a game-changer in ways we're only beginning to understand.</p>

      <h2>The Current State of AI in Healthcare</h2>
      <p>Today's healthcare AI applications span a remarkable range of use cases. Machine learning algorithms can now detect diabetic retinopathy with greater accuracy than human specialists, while natural language processing systems help physicians navigate complex medical literature in real-time during patient consultations.</p>

      <p>Perhaps most importantly for day-to-day operations, AI-powered administrative tools are reducing the burden of paperwork and routine tasks that have long plagued healthcare providers. This shift allows medical professionals to focus on what they do best: caring for patients.</p>

      <h2>Transforming Patient Interactions</h2>
      <p>One of the most visible changes AI brings to healthcare is in patient communication. Intelligent chatbots and voice assistants can now handle routine inquiries, appointment scheduling, and even basic triage—all while maintaining strict HIPAA compliance.</p>

      <p>These systems don't replace human interaction; they enhance it. By handling routine questions and administrative tasks, AI frees up healthcare staff to spend more meaningful time with patients who need complex care and emotional support.</p>

      <h2>The Promise of Predictive Healthcare</h2>
      <p>Looking ahead, AI's most exciting potential lies in predictive healthcare. By analyzing patterns in patient data, AI systems can identify health risks before they become serious problems. This shift from reactive to proactive care could fundamentally change health outcomes while reducing costs.</p>

      <p>Early warning systems for sepsis, heart failure, and other critical conditions are already showing promising results in hospital settings. As these technologies mature and become more accessible, we can expect to see similar predictive capabilities in outpatient and primary care settings.</p>

      <h2>Challenges and Considerations</h2>
      <p>Of course, the integration of AI in healthcare isn't without challenges. Privacy concerns, the need for regulatory compliance, and the importance of maintaining the human element in care delivery all require careful consideration.</p>

      <p>The key is finding the right balance—leveraging AI's capabilities to enhance human expertise rather than replace it. The most successful implementations we've seen combine powerful AI tools with thoughtful human oversight and clear ethical guidelines.</p>

      <h2>Looking Forward</h2>
      <p>As we look to the future, it's clear that AI will continue to play an increasingly important role in healthcare. The practices that embrace these technologies thoughtfully—with proper attention to privacy, ethics, and patient experience—will be best positioned to provide exceptional care in the years to come.</p>

      <p>The future of healthcare isn't about choosing between human expertise and artificial intelligence. It's about combining the best of both to create a healthcare system that's more efficient, more accurate, and more focused on what matters most: helping people live healthier lives.</p>
    `,
    author: "Dr. Sarah Chen",
    authorBio:
      "Dr. Sarah Chen is the CEO and Co-Founder of N_OW AI, with over 15 years of experience in healthcare administration and a passion for leveraging technology to improve patient outcomes.",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI in Healthcare",
    tags: ["Artificial Intelligence", "Healthcare Technology", "Patient Care", "Digital Health"],
    image: "/placeholder.svg?height=400&width=800",
  }

  const relatedPosts = [
    {
      title: "HIPAA Compliance in the Age of AI",
      slug: "hipaa-compliance-ai-healthcare-providers",
      category: "Compliance",
    },
    {
      title: "5 Ways AI Chatbots Are Reducing Administrative Burden",
      slug: "ai-chatbots-reducing-administrative-burden",
      category: "Practice Management",
    },
    {
      title: "Voice AI in Healthcare: Beyond the Hype",
      slug: "voice-ai-healthcare-beyond-hype",
      category: "Technology",
    },
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

      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-green-600">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">The Future of Healthcare</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                  {post.category}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between py-6 border-y">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-600">CEO & Co-Founder</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                {/* Featured Image */}
                <div className="relative h-64 md:h-96 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-12 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bot className="w-24 h-24 text-white opacity-50" />
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The healthcare industry stands at the precipice of a technological revolution. Artificial
                    Intelligence (AI) is no longer a futuristic concept—it's actively reshaping how we deliver, receive,
                    and think about patient care. From diagnostic accuracy to personalized treatment plans, AI is
                    proving to be a game-changer in ways we're only beginning to understand.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Current State of AI in Healthcare</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Today's healthcare AI applications span a remarkable range of use cases. Machine learning algorithms
                    can now detect diabetic retinopathy with greater accuracy than human specialists, while natural
                    language processing systems help physicians navigate complex medical literature in real-time during
                    patient consultations.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Perhaps most importantly for day-to-day operations, AI-powered administrative tools are reducing the
                    burden of paperwork and routine tasks that have long plagued healthcare providers. This shift allows
                    medical professionals to focus on what they do best: caring for patients.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Transforming Patient Interactions</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    One of the most visible changes AI brings to healthcare is in patient communication. Intelligent
                    chatbots and voice assistants can now handle routine inquiries, appointment scheduling, and even
                    basic triage—all while maintaining strict HIPAA compliance.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    These systems don't replace human interaction; they enhance it. By handling routine questions and
                    administrative tasks, AI frees up healthcare staff to spend more meaningful time with patients who
                    need complex care and emotional support.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <blockquote className="text-green-900 italic text-lg">
                      "AI doesn't replace the human touch in healthcare—it amplifies it by removing barriers that
                      prevent meaningful patient-provider connections."
                    </blockquote>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Promise of Predictive Healthcare</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Looking ahead, AI's most exciting potential lies in predictive healthcare. By analyzing patterns in
                    patient data, AI systems can identify health risks before they become serious problems. This shift
                    from reactive to proactive care could fundamentally change health outcomes while reducing costs.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Early warning systems for sepsis, heart failure, and other critical conditions are already showing
                    promising results in hospital settings. As these technologies mature and become more accessible, we
                    can expect to see similar predictive capabilities in outpatient and primary care settings.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Challenges and Considerations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Of course, the integration of AI in healthcare isn't without challenges. Privacy concerns, the need
                    for regulatory compliance, and the importance of maintaining the human element in care delivery all
                    require careful consideration.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The key is finding the right balance—leveraging AI's capabilities to enhance human expertise rather
                    than replace it. The most successful implementations we've seen combine powerful AI tools with
                    thoughtful human oversight and clear ethical guidelines.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Looking Forward</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As we look to the future, it's clear that AI will continue to play an increasingly important role in
                    healthcare. The practices that embrace these technologies thoughtfully—with proper attention to
                    privacy, ethics, and patient experience—will be best positioned to provide exceptional care in the
                    years to come.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The future of healthcare isn't about choosing between human expertise and artificial intelligence.
                    It's about combining the best of both to create a healthcare system that's more efficient, more
                    accurate, and more focused on what matters most: helping people live healthier lives.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
                      <p className="text-gray-600">{post.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Facebook className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related Posts */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <div key={index} className="space-y-2">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <Link href={`/blog/${relatedPost.slug}`} className="block">
                          <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors leading-tight">
                            {relatedPost.title}
                          </h4>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="shadow-lg bg-green-50 border-green-200">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-green-900">Get More Insights</h3>
                    <p className="text-green-700 text-sm">
                      Subscribe to our newsletter for the latest AI healthcare insights.
                    </p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe Now</Button>
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
