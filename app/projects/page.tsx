import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Bot,
  Languages,
  Home,
  Eye,
  Building,
  Cpu,
  Database,
  Zap,
  Globe,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: "ai-lead-generation",
      title: "AI Agent Lead Generation System",
      description:
        "Autonomous AI agents that research prospects, craft personalized outreach, and manage the entire lead generation pipeline with minimal human intervention.",
      longDescription:
        "A sophisticated multi-agent system that combines web scraping, natural language processing, and automated outreach to generate and qualify leads. The system uses LangChain for orchestration, multiple LLMs for different tasks, and integrates with CRM systems for seamless workflow automation.",
      icon: Bot,
      color: "text-cyan-400",
      bgGradient: "from-cyan-400/20 to-blue-400/20",
      tags: ["LangChain", "AI Agents", "Automation", "Lead Generation", "Multi-Agent"],
      company: "Palmmind",
      status: "Production",
      features: [
        "Autonomous prospect research and qualification",
        "Personalized message generation using LLMs",
        "Multi-channel outreach (email, LinkedIn, social)",
        "Real-time lead scoring and prioritization",
        "CRM integration and automated follow-ups",
        "Performance analytics and optimization",
      ],
      techStack: ["Python", "LangChain", "OpenAI GPT-4", "MongoDB", "Redis", "FastAPI"],
      metrics: {
        "Lead Quality": "85% qualified rate",
        "Response Rate": "23% improvement",
        "Time Saved": "40 hours/week",
        Conversion: "15% increase",
      },
    },
    {
      id: "nepali-transliterator",
      title: "Roman Nepali to Devanagari Transliterator",
      description:
        "Ultra-fast transliteration system converting Roman script Nepali to Devanagari with sub-second latency using advanced NLP algorithms.",
      longDescription:
        "A high-performance transliteration engine that bridges the gap between Roman script and Devanagari for Nepali language processing. Uses a combination of SpaCy, NLTK, and custom Soundex algorithms to achieve accurate transliteration with minimal latency.",
      icon: Languages,
      color: "text-pink-400",
      bgGradient: "from-pink-400/20 to-purple-400/20",
      tags: ["NLP", "SpaCy", "NLTK", "Soundex", "Low-latency", "Language Processing"],
      company: "Palmmind",
      status: "Production",
      features: [
        "Real-time transliteration with 0.01-1s latency",
        "Context-aware word disambiguation",
        "Batch processing for large documents",
        "API endpoint for integration",
        "Custom dictionary support",
        "Accuracy optimization through ML",
      ],
      techStack: ["Python", "SpaCy", "NLTK", "FastAPI", "Redis", "Docker"],
      metrics: {
        Latency: "0.01-1 seconds",
        Accuracy: "94% word-level",
        Throughput: "1000 req/min",
        Uptime: "99.9%",
      },
    },
    {
      id: "raspberry-pi-voice",
      title: "Raspberry Pi Voice Agent",
      description:
        "Intelligent home automation system with natural language voice control, learning user preferences and managing IoT devices autonomously.",
      longDescription:
        "A complete voice-controlled home automation solution running on Raspberry Pi. Integrates speech recognition, natural language understanding, and IoT device control to create a seamless smart home experience.",
      icon: Home,
      color: "text-purple-400",
      bgGradient: "from-purple-400/20 to-indigo-400/20",
      tags: ["Raspberry Pi", "Voice AI", "Home Automation", "IoT", "Speech Recognition"],
      company: "Palmmind",
      status: "Deployed",
      features: [
        "Natural language voice commands",
        "Multi-device IoT integration",
        "Learning user behavior patterns",
        "Offline speech processing",
        "Custom wake word detection",
        "Mobile app remote control",
      ],
      techStack: ["Python", "SpeechRecognition", "PyTorch", "MQTT", "Flask", "SQLite"],
      metrics: {
        "Response Time": "<2 seconds",
        Accuracy: "92% command recognition",
        Devices: "25+ IoT devices",
        Uptime: "99.5%",
      },
    },
    {
      id: "banking-ocr",
      title: "Commercial OCR for Banking",
      description:
        "Enterprise-grade optical character recognition system for financial document processing with high accuracy and security compliance.",
      longDescription:
        "A robust OCR solution designed specifically for banking and financial institutions. Processes various document types including checks, forms, and statements with bank-grade security and accuracy requirements.",
      icon: Eye,
      color: "text-yellow-400",
      bgGradient: "from-yellow-400/20 to-orange-400/20",
      tags: ["OCR", "Computer Vision", "Banking", "Document Processing", "Security"],
      company: "Palmmind",
      status: "Production",
      features: [
        "Multi-format document support",
        "Real-time processing pipeline",
        "Bank-grade security compliance",
        "Fraud detection integration",
        "Batch processing capabilities",
        "Audit trail and logging",
      ],
      techStack: ["Python", "OpenCV", "Tesseract", "TensorFlow", "PostgreSQL", "Docker"],
      metrics: {
        Accuracy: "99.2% character recognition",
        Processing: "500 docs/hour",
        Security: "ISO 27001 compliant",
        Uptime: "99.99%",
      },
    },
    {
      id: "multilingual-rag",
      title: "Multi-language RAG System",
      description:
        "Advanced customer experience bots with retrieval-augmented generation supporting multiple languages and complex query understanding.",
      longDescription:
        "A sophisticated RAG system that provides customer support across multiple languages. Uses advanced embedding techniques, semantic search, and context-aware response generation to deliver accurate and helpful customer service.",
      icon: Globe,
      color: "text-green-400",
      bgGradient: "from-green-400/20 to-teal-400/20",
      tags: ["RAG", "Chatbots", "Multi-language", "Customer Service", "Embeddings"],
      company: "Palmmind",
      status: "Production",
      features: [
        "Support for 12+ languages",
        "Semantic search and retrieval",
        "Context-aware responses",
        "Real-time knowledge updates",
        "Sentiment analysis integration",
        "Escalation to human agents",
      ],
      techStack: ["Python", "LangChain", "Pinecone", "OpenAI", "FastAPI", "Redis"],
      metrics: {
        Languages: "12 supported",
        "Resolution Rate": "78% first contact",
        "Response Time": "<3 seconds",
        Satisfaction: "4.6/5 rating",
      },
    },
    {
      id: "django-automation",
      title: "Django Office Automation",
      description:
        "Full-stack web application automating internal office processes, reducing manual work and improving operational efficiency.",
      longDescription:
        "A comprehensive office management system built with Django that automates various internal processes including document management, workflow approvals, and resource allocation. Features a modern UI and robust backend architecture.",
      icon: Building,
      color: "text-orange-400",
      bgGradient: "from-orange-400/20 to-red-400/20",
      tags: ["Django", "Python", "Automation", "Web Development", "Workflow"],
      company: "Pearl Publication",
      status: "Deployed",
      features: [
        "Document management system",
        "Automated workflow approvals",
        "Resource booking and allocation",
        "Employee time tracking",
        "Report generation and analytics",
        "Role-based access control",
      ],
      techStack: ["Django", "PostgreSQL", "Redis", "Celery", "Bootstrap", "JavaScript"],
      metrics: {
        "Time Saved": "30 hours/week",
        "Process Efficiency": "60% improvement",
        "User Adoption": "95% staff usage",
        "Error Reduction": "80% fewer mistakes",
      },
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

        {/* Featured Project */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 font-mono">{"> FEATURED_PROJECT"}</h2>
          <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${projects[0].bgGradient} rounded-lg`}>
                      <Bot className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-cyan-400 text-cyan-400 font-mono mb-2">
                        FEATURED
                      </Badge>
                      <h3 className="text-3xl font-bold text-white">{projects[0].title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{projects[0].longDescription}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(projects[0].metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-cyan-400 font-bold font-mono">{value}</div>
                        <div className="text-gray-400 text-sm">{key}</div>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-black font-bold">
                    <Link href={`/projects/${projects[0].id}`} className="flex items-center">
                      EXPLORE_PROJECT <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  {/* Interactive Project Visualization */}
                  <div className="relative w-full h-80 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 rounded-lg overflow-hidden">
                    {/* Animated Network Nodes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        {/* Central AI Brain */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                          <Bot className="w-8 h-8 text-black" />
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-400 rounded-full animate-float">
                          <Database className="w-4 h-4 text-black m-2" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-400 rounded-full animate-float delay-500">
                          <Zap className="w-4 h-4 text-black m-2" />
                        </div>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-400 rounded-full animate-float delay-1000">
                          <Globe className="w-4 h-4 text-black m-2" />
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full animate-float delay-1500">
                          <Shield className="w-4 h-4 text-black m-2" />
                        </div>
                      </div>
                    </div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="20%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="80%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <line
                        x1="50%"
                        y1="50%"
                        x2="20%"
                        y2="50%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <line
                        x1="50%"
                        y1="50%"
                        x2="80%"
                        y2="50%"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -top-4 -right-4 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    85% Qualified
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-pink-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse delay-300">
                    23% Response ↑
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 font-mono">{"> ALL_PROJECTS"}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 bg-gradient-to-br ${project.bgGradient} rounded-lg group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`w-8 h-8 ${project.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </CardTitle>
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

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(project.metrics)
                        .slice(0, 2)
                        .map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center p-2 bg-gray-800/50 rounded">
                            <div className={`${project.color} font-bold text-sm`}>{value}</div>
                            <div className="text-gray-500 text-xs">{key}</div>
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
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
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-mono flex-1"
                      >
                        <Link href={`/projects/${project.id}`} className="flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          VIEW_DETAILS
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pink-400 text-pink-400 hover:bg-pink-400/10 font-mono"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tech Stack Visualization */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              TECHNOLOGY_ECOSYSTEM
            </span>
          </h2>

          <div className="relative">
            {/* Central Hub */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Technology Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Python", category: "Language", color: "text-cyan-400" },
                { name: "LangChain", category: "Framework", color: "text-pink-400" },
                { name: "OpenAI", category: "AI/ML", color: "text-purple-400" },
                { name: "SpaCy", category: "NLP", color: "text-green-400" },
                { name: "Django", category: "Web", color: "text-yellow-400" },
                { name: "MongoDB", category: "Database", color: "text-orange-400" },
                { name: "FastAPI", category: "API", color: "text-cyan-400" },
                { name: "Docker", category: "DevOps", color: "text-pink-400" },
                { name: "Redis", category: "Cache", color: "text-purple-400" },
                { name: "Raspberry Pi", category: "Hardware", color: "text-green-400" },
                { name: "TensorFlow", category: "ML", color: "text-yellow-400" },
                { name: "PostgreSQL", category: "Database", color: "text-orange-400" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group relative p-4 bg-gray-900/50 border border-gray-700 rounded-lg text-center hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <div className={`text-lg font-bold ${tech.color} mb-1 group-hover:scale-110 transition-transform`}>
                    {tech.name}
                  </div>
                  <div className="text-gray-500 text-xs font-mono">{tech.category}</div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 border-cyan-400/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono">6+</div>
              <div className="text-gray-400 font-mono">PROJECTS_DEPLOYED</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-400/10 to-pink-400/5 border-pink-400/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-pink-400 mb-2 font-mono">3</div>
              <div className="text-gray-400 font-mono">COMPANIES_SERVED</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-400/10 to-purple-400/5 border-purple-400/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">99.9%</div>
              <div className="text-gray-400 font-mono">AVERAGE_UPTIME</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-400/10 to-green-400/5 border-green-400/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2 font-mono">12+</div>
              <div className="text-gray-400 font-mono">LANGUAGES_SUPPORTED</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
