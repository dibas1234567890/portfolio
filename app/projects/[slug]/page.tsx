import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Play, Zap, Shield, Cpu } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Project data - in a real app this would come from a CMS or database
const projectsData = {
  "ai-lead-generation": {
    title: "AI Agent Lead Generation System",
    description:
      "Autonomous AI agents that research prospects, craft personalized outreach, and manage the entire lead generation pipeline with minimal human intervention.",
    longDescription:
      "A sophisticated multi-agent system that combines web scraping, natural language processing, and automated outreach to generate and qualify leads. The system uses LangChain for orchestration, multiple LLMs for different tasks, and integrates with CRM systems for seamless workflow automation.",
    company: "Palmmind",
    status: "Production",
    date: "2024",
    tags: ["LangChain", "AI Agents", "Automation", "Lead Generation", "Multi-Agent"],
    techStack: ["Python", "LangChain", "OpenAI GPT-4", "MongoDB", "Redis", "FastAPI"],
    features: [
      "Autonomous prospect research and qualification",
      "Personalized message generation using LLMs",
      "Multi-channel outreach (email, LinkedIn, social)",
      "Real-time lead scoring and prioritization",
      "CRM integration and automated follow-ups",
      "Performance analytics and optimization",
    ],
    metrics: {
      "Lead Quality": "85% qualified rate",
      "Response Rate": "23% improvement",
      "Time Saved": "40 hours/week",
      Conversion: "15% increase",
    },
    challenges: [
      "Maintaining personalization at scale",
      "Avoiding spam filters and rate limits",
      "Integrating with multiple CRM systems",
      "Ensuring data privacy compliance",
    ],
    solutions: [
      "Dynamic template generation with LLMs",
      "Smart throttling and reputation management",
      "Universal API adapter pattern",
      "End-to-end encryption and audit trails",
    ],
  },
  "nepali-transliterator": {
    title: "Roman Nepali to Devanagari Transliterator",
    description:
      "Ultra-fast transliteration system converting Roman script Nepali to Devanagari with sub-second latency using advanced NLP algorithms.",
    longDescription:
      "A high-performance transliteration engine that bridges the gap between Roman script and Devanagari for Nepali language processing. Uses a combination of SpaCy, NLTK, and custom Soundex algorithms to achieve accurate transliteration with minimal latency.",
    company: "Palmmind",
    status: "Production",
    date: "2024",
    tags: ["NLP", "SpaCy", "NLTK", "Soundex", "Low-latency", "Language Processing"],
    techStack: ["Python", "SpaCy", "NLTK", "FastAPI", "Redis", "Docker"],
    features: [
      "Real-time transliteration with 0.01-1s latency",
      "Context-aware word disambiguation",
      "Batch processing for large documents",
      "API endpoint for integration",
      "Custom dictionary support",
      "Accuracy optimization through ML",
    ],
    metrics: {
      Latency: "0.01-1 seconds",
      Accuracy: "94% word-level",
      Throughput: "1000 req/min",
      Uptime: "99.9%",
    },
    challenges: [
      "Handling ambiguous romanization",
      "Optimizing for low-latency requirements",
      "Managing large dictionary datasets",
      "Dealing with code-mixed text",
    ],
    solutions: [
      "Context-aware disambiguation algorithms",
      "Efficient caching and preprocessing",
      "Compressed trie data structures",
      "Language detection and segmentation",
    ],
  },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400">
            <Link href="/projects" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK_TO_PROJECTS
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="border-cyan-400 text-cyan-400 font-mono">
                  {project.company}
                </Badge>
                <Badge variant="outline" className="border-pink-400 text-pink-400 font-mono">
                  {project.status}
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-400 font-mono">
                  {project.date}
                </Badge>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-black font-bold">
                <Play className="w-4 h-4 mr-2" />
                LIVE_DEMO
              </Button>
              <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10">
                <Github className="w-4 h-4 mr-2" />
                SOURCE
              </Button>
            </div>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors font-mono"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.entries(project.metrics).map(([key, value], index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2 font-mono">{value}</div>
                <div className="text-gray-400 text-sm font-mono">{key}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-mono">{"> KEY_FEATURES"}</h2>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-mono">{"> TECH_STACK"}</h2>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-800/50 rounded-lg text-center border border-gray-600 hover:border-cyan-400/50 transition-colors"
                    >
                      <span className="text-gray-300 font-mono text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-mono">{"> CHALLENGES"}</h2>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-mono">{"> SOLUTIONS"}</h2>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Cpu className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Gallery/Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">{"> PROJECT_DEMO"}</h2>
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-8">
              <div className="relative h-96 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Interactive Demo</h3>
                  <p className="text-gray-400 max-w-md">
                    Experience the project in action with our interactive demonstration
                  </p>
                  <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-black font-bold">
                    LAUNCH_DEMO
                  </Button>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/3 left-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">{"> RELATED_PROJECTS"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Multi-language RAG System</h3>
                <p className="text-gray-400 mb-4">Customer experience bots with advanced language support</p>
                <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                  <Link href="/projects/multilingual-rag">VIEW_PROJECT</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Raspberry Pi Voice Agent</h3>
                <p className="text-gray-400 mb-4">Intelligent home automation with voice control</p>
                <Button variant="outline" size="sm" className="border-pink-400 text-pink-400 hover:bg-pink-400/10">
                  <Link href="/projects/raspberry-pi-voice">VIEW_PROJECT</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
