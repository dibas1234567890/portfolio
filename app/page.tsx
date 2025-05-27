import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, ChevronRight, Zap, Brain, Code2, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const skills = ["Python", "LangChain", "RAG Systems", "Model Fine-tuning", "AI Agents", "NLP"]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>{"> initializing_portfolio.exe"}</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-white">DIBAS</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
                  BASNET
                </span>
              </h1>

              <div className="space-y-2">
                <p className="text-2xl lg:text-3xl font-mono text-pink-400">AI/ML_ENGINEER</p>
                <p className="text-gray-400 font-mono">{"> location: kathmandu_nepal"}</p>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Building the future with <span className="text-cyan-400">artificial intelligence</span> and
              <span className="text-pink-400"> machine learning</span>. Specializing in LLM-driven applications,
              automation, and cutting-edge AI solutions.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-black font-bold"
              >
                <Link href="/projects" className="flex items-center">
                  VIEW_PROJECTS <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-pink-400 text-pink-400 hover:bg-pink-400/10 font-mono"
              >
                <Link href="/contact">CONTACT_ME</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Photo placeholder and graphics */}
          <div className="relative">
            {/* Photo placeholder with cyberpunk frame */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Neon frame effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 rounded-lg p-1">
                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
                      <User className="w-16 h-16 text-cyan-400" />
                    </div>
                    <p className="text-gray-400 font-mono text-sm">{"[PHOTO_PLACEHOLDER]"}</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Floating tech icons */}
            <div className="absolute top-8 right-8 animate-float">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="absolute bottom-8 left-8 animate-float delay-500">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <div className="absolute top-1/3 right-0 animate-float delay-1000">
              <Code2 className="w-7 h-7 text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-cyan-400 font-mono">2+</div>
              <div className="text-gray-400 font-mono">YEARS_EXPERIENCE</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-pink-400 font-mono">10+</div>
              <div className="text-gray-400 font-mono">AI_PROJECTS</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-purple-400 font-mono">3</div>
              <div className="text-gray-400 font-mono">COMPANIES</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
