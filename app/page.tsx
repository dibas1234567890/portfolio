import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, ChevronRight, Zap, Brain, Code2 } from "lucide-react"
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

          {/* Right side - Cyberpunk Stick Figure */}
          <div className="relative">
            {/* Stick Figure with cyberpunk frame */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Neon frame effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 rounded-lg p-1">
                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Cyberpunk Stick Figure SVG */}
                  <svg
                    width="200"
                    height="280"
                    viewBox="0 0 200 280"
                    className="animate-pulse"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Head */}
                    <circle
                      cx="100"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke="url(#neonGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                    />

                    {/* Body */}
                    <line
                      x1="100"
                      y1="65"
                      x2="100"
                      y2="180"
                      stroke="url(#neonGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                    />

                    {/* Arms */}
                    <line
                      x1="100"
                      y1="100"
                      x2="60"
                      y2="130"
                      stroke="url(#neonGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="140"
                      y2="130"
                      stroke="url(#neonGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                    />

                    {/* Legs */}
                    <line
                      x1="100"
                      y1="180"
                      x2="70"
                      y2="240"
                      stroke="url(#neonGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                    />
                    <line
                      x1="100"
                      y1="180"
                      x2="130"
                      y2="240"
                      stroke="url(#neonGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                    />

                    {/* Cyberpunk Elements */}
                    {/* Laptop/Device in hand */}
                    <rect
                      x="35"
                      y="125"
                      width="20"
                      height="12"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      filter="url(#glow)"
                    />

                    {/* Neural network nodes around head */}
                    <circle cx="75" cy="25" r="3" fill="#ec4899" className="animate-pulse" />
                    <circle cx="125" cy="25" r="3" fill="#06b6d4" className="animate-pulse delay-300" />
                    <circle cx="85" cy="55" r="2" fill="#8b5cf6" className="animate-pulse delay-500" />
                    <circle cx="115" cy="55" r="2" fill="#10b981" className="animate-pulse delay-700" />

                    {/* Connection lines */}
                    <line
                      x1="75"
                      y1="25"
                      x2="85"
                      y2="35"
                      stroke="#ec4899"
                      strokeWidth="1"
                      opacity="0.6"
                      className="animate-pulse"
                    />
                    <line
                      x1="125"
                      y1="25"
                      x2="115"
                      y2="35"
                      stroke="#06b6d4"
                      strokeWidth="1"
                      opacity="0.6"
                      className="animate-pulse delay-300"
                    />

                    {/* Code symbols floating around */}
                    <text x="150" y="80" fill="#06b6d4" fontSize="12" fontFamily="monospace" className="animate-pulse">
                      {"</>"}
                    </text>
                    <text
                      x="30"
                      y="200"
                      fill="#ec4899"
                      fontSize="10"
                      fontFamily="monospace"
                      className="animate-pulse delay-500"
                    >
                      AI
                    </text>
                    <text
                      x="160"
                      y="160"
                      fill="#8b5cf6"
                      fontSize="8"
                      fontFamily="monospace"
                      className="animate-pulse delay-1000"
                    >
                      ML
                    </text>
                  </svg>
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
