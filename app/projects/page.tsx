import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, Languages, Home, Eye, Building } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI Agent Lead Generation System",
      description: "Autonomous AI agents for lead generation and capture with advanced workflow automation",
      icon: Bot,
      color: "text-cyan-400",
      tags: ["LangChain", "AI Agents", "Automation", "Lead Generation"],
      company: "Palmmind",
      status: "Production",
    },
    {
      title: "Roman Nepali to Devanagari Transliterator",
      description:
        "High-performance transliteration system using SpaCy, NLTK, and Soundex algorithms with sub-second latency",
      icon: Languages,
      color: "text-pink-400",
      tags: ["NLP", "SpaCy", "NLTK", "Soundex", "Low-latency"],
      company: "Palmmind",
      status: "Production",
    },
    {
      title: "Raspberry Pi Voice Agent",
      description: "Automated voice-controlled home automation system with AI-powered natural language processing",
      icon: Home,
      color: "text-purple-400",
      tags: ["Raspberry Pi", "Voice AI", "Home Automation", "IoT"],
      company: "Palmmind",
      status: "Deployed",
    },
    {
      title: "Commercial OCR for Banking",
      description: "Enterprise-grade optical character recognition system for financial document processing",
      icon: Eye,
      color: "text-yellow-400",
      tags: ["OCR", "Computer Vision", "Banking", "Document Processing"],
      company: "Palmmind",
      status: "Production",
    },
    {
      title: "Multi-language RAG System",
      description: "Customer experience bots with retrieval-augmented generation supporting multiple languages",
      icon: Bot,
      color: "text-green-400",
      tags: ["RAG", "Chatbots", "Multi-language", "Customer Service"],
      company: "Palmmind",
      status: "Production",
    },
    {
      title: "Django Office Automation",
      description: "Full-stack Django application for internal office process automation and efficiency improvement",
      icon: Building,
      color: "text-orange-400",
      tags: ["Django", "Python", "Automation", "Web Development"],
      company: "Pearl Publication",
      status: "Deployed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "border-cyan-400 text-cyan-400"
      case "Deployed":
        return "border-pink-400 text-pink-400"
      default:
        return "border-gray-400 text-gray-400"
    }
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">PROJECTS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 font-mono text-lg">{"> showcasing_ai_innovations.exe"}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors`}>
                        <Icon className={`w-8 h-8 ${project.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-gray-400 border-gray-600 font-mono text-xs">
                            {project.company}
                          </Badge>
                          <Badge variant="outline" className={`font-mono text-xs ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-mono"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      VIEW_DETAILS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-pink-400 text-pink-400 hover:bg-pink-400/10 font-mono"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      SOURCE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              TECHNOLOGIES_USED
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python",
              "LangChain",
              "SpaCy",
              "NLTK",
              "Transformers",
              "RAG",
              "Django",
              "MongoDB",
              "Raspberry Pi",
              "OCR",
              "Computer Vision",
              "NLP",
              "AI Agents",
              "Automation",
              "Voice AI",
              "IoT",
              "Soundex",
              "Multi-language",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg text-center hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <span className="text-gray-300 group-hover:text-cyan-400 font-mono text-sm transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
