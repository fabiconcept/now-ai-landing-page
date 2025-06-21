"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bot, Calendar, User, Search, TrendingUp, Shield, Brain, Clock, Download, Star, Filter } from "lucide-react"

const allResources = [
  {
    id: 1,
    title: "The Complete Guide to Healthcare AI Implementation",
    description: "A comprehensive 50-page guide covering everything from planning to deployment and optimization.",
    type: "White Paper",
    category: "Implementation",
    downloadCount: "2.3K downloads",
    readTime: "15 min read",
    date: "2024-01-15",
    featured: true,
    popular: true,
    tags: ["AI", "Implementation", "Strategy"],
    icon: Brain,
  },
  {
    id: 2,
    title: "HIPAA Compliance in the Age of AI: What Healthcare Providers Need to Know",
    description:
      "Understanding the critical requirements for maintaining patient privacy while implementing AI solutions.",
    type: "Case Study",
    category: "Compliance",
    downloadCount: "1.8K downloads",
    readTime: "8 min read",
    date: "2024-01-12",
    featured: false,
    popular: true,
    tags: ["HIPAA", "Compliance", "Security"],
    icon: Shield,
  },
  {
    id: 3,
    title: "5 Ways AI Chatbots Are Reducing Administrative Burden in Medical Practices",
    description: "Real-world examples of how intelligent automation is freeing up staff time for patient care.",
    type: "Guide",
    category: "Practice Management",
    downloadCount: "3.1K downloads",
    readTime: "6 min read",
    date: "2024-01-10",
    featured: false,
    popular: true,
    tags: ["Chatbots", "Automation", "Efficiency"],
    icon: Bot,
  },
  {
    id: 4,
    title: "Voice AI in Healthcare: Beyond the Hype",
    description: "A practical look at how voice technology is actually being implemented in healthcare settings.",
    type: "White Paper",
    category: "Technology",
    downloadCount: "1.2K downloads",
    readTime: "12 min read",
    date: "2024-01-08",
    featured: false,
    popular: false,
    tags: ["Voice AI", "Technology", "Healthcare"],
    icon: Bot,
  },
  {
    id: 5,
    title: "Patient Experience in the Digital Age: Meeting Modern Expectations",
    description: "How healthcare providers can leverage technology to improve patient satisfaction and outcomes.",
    type: "Case Study",
    category: "Patient Experience",
    downloadCount: "980 downloads",
    readTime: "10 min read",
    date: "2024-01-05",
    featured: false,
    popular: false,
    tags: ["Patient Experience", "Digital Health", "Satisfaction"],
    icon: User,
  },
  {
    id: 7,
    title: "Building Trust in AI: Transparency in Healthcare Technology",
    description: "Why transparency and explainable AI are crucial for healthcare adoption and patient trust.",
    type: "Guide",
    category: "AI Ethics",
    downloadCount: "720 downloads",
    readTime: "7 min read",
    date: "2024-01-01",
    featured: false,
    popular: false,
    tags: ["AI Ethics", "Trust", "Transparency"],
    icon: Shield,
  },
  {
    id: 8,
    title: "Implementing AI Scheduling: Best Practices and Pitfalls",
    description: "Learn from successful implementations and avoid common mistakes in AI scheduling systems.",
    type: "Case Study",
    category: "Implementation",
    downloadCount: "1.1K downloads",
    readTime: "9 min read",
    date: "2023-12-28",
    featured: false,
    popular: false,
    tags: ["Scheduling", "Implementation", "Best Practices"],
    icon: Calendar,
  },
]

export default function InteractiveResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    "All",
    "Implementation",
    "Compliance",
    "Practice Management",
    "Technology",
    "Patient Experience",
    "Business Intelligence",
    "AI Ethics",
  ]
  const types = ["All", "White Paper", "Case Study", "Guide", "Video"]

  const filteredAndSortedResources = useMemo(() => {
    const filtered = allResources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory
      const matchesType = selectedType === "All" || resource.type === selectedType

      return matchesSearch && matchesCategory && matchesType
    })

    // Sort resources
    switch (sortBy) {
      case "date":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "popular":
        filtered.sort((a, b) => {
          const aDownloads = Number.parseInt(a.downloadCount.replace(/[^\d]/g, ""))
          const bDownloads = Number.parseInt(b.downloadCount.replace(/[^\d]/g, ""))
          return bDownloads - aDownloads
        })
        break
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [searchTerm, selectedCategory, selectedType, sortBy])

  const handleDownload = (resourceId: number) => {
    // Simulate download
    const resource = allResources.find((r) => r.id === resourceId)
    if (resource) {
      alert(`Downloading: ${resource.title}`)
      // In a real app, this would trigger an actual download
    }
  }

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <Card className="shadow-lg border border-green-100">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search resources by title, description, or tags..."
                className="pl-10 pr-4 py-3 text-lg rounded-full border-green-200 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>

              <select
                className="border border-green-200 rounded-lg px-3 py-2 text-sm focus:border-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                className="border border-green-200 rounded-lg px-3 py-2 text-sm focus:border-green-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                className="border border-green-200 rounded-lg px-3 py-2 text-sm focus:border-green-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="popular">Sort by Popularity</option>
                <option value="title">Sort by Title</option>
              </select>

              <div className="flex ml-auto">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-l-lg rounded-r-none"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-r-lg rounded-l-none"
                >
                  List
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredAndSortedResources.length} of {allResources.length} resources
              {searchTerm && <span> for "{searchTerm}"</span>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources Grid/List */}
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {filteredAndSortedResources.map((resource) => (
          <Card
            key={resource.id}
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className={`${viewMode === "grid" ? "p-6" : "p-4"} space-y-4`}>
              <div className={`flex ${viewMode === "list" ? "items-start space-x-4" : "flex-col space-y-4"}`}>
                {viewMode === "grid" && (
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex space-x-2">
                      {resource.featured && <Badge className="bg-green-500 text-white">Featured</Badge>}
                      {resource.popular && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {viewMode === "list" && (
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-6 h-6 text-green-600" />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                      {resource.type}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      {resource.category}
                    </Badge>
                    {viewMode === "list" && resource.featured && (
                      <Badge className="bg-green-500 text-white text-xs">Featured</Badge>
                    )}
                    {viewMode === "list" && resource.popular && (
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>

                  <h3
                    className={`font-semibold text-gray-900 ${viewMode === "grid" ? "text-lg" : "text-base"} leading-tight mb-2`}
                  >
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{resource.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {resource.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-green-200 text-green-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className={`flex items-center justify-between ${viewMode === "list" ? "text-sm" : ""}`}>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{resource.readTime}</span>
                      </div>
                      <span>{resource.downloadCount}</span>
                    </div>

                    <Button
                      size="sm"
                      onClick={() => handleDownload(resource.id)}
                      className="bg-green-500 hover:bg-green-600 rounded-full"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredAndSortedResources.length === 0 && (
        <Card className="shadow-lg">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSelectedType("All")
              }}
              variant="outline"
              className="border-green-200 hover:bg-green-50"
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
