import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Zap } from "lucide-react"

export default function About() {
  const expertise = [
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "LLM-driven applications, RAG systems, and model fine-tuning",
      color: "text-cyan-400",
    },
    {
      icon: Code,
      title: "Automation",
      description: "Process automation and workflow optimization",
      color: "text-pink-400",
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "NLP, text processing, and multi-language support",
      color: "text-purple-400",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Model optimization and latency reduction",
      color: "text-yellow-400",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">ABOUT_ME</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-mono">{"> WHO_AM_I"}</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate AI/ML Engineer from Kathmandu, Nepal, with a strong focus on building
                <span className="text-cyan-400"> cutting-edge artificial intelligence solutions</span>. My expertise
                lies in developing LLM-driven applications, implementing RAG systems, and creating automation tools that
                solve real-world problems.
              </p>
              <p>
                Currently working at <span className="text-pink-400">Palmmind</span>, I specialize in developing AI
                agents for autonomous processes, building tools for low-resource languages, and optimizing model
                performance for production environments.
              </p>
              <p>
                My journey in AI/ML has led me to work with diverse technologies from
                <span className="text-purple-400"> SpaCy and NLTK</span> to modern
                <span className="text-cyan-400"> LangChain libraries</span>, always pushing the boundaries of what's
                possible with artificial intelligence.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-mono">{"> EXPERTISE"}</h2>
            <div className="grid gap-4">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Icon className={`w-8 h-8 ${item.color} flex-shrink-0 mt-1`} />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              TECHNICAL_STACK
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python",
              "LangChain",
              "RAG Systems",
              "Model Fine-tuning",
              "SpaCy",
              "NLTK",
              "Transformers",
              "MongoDB",
              "Django",
              "WordPress",
              "Raspberry Pi",
              "OCR",
              "Prompt Optimization",
              "AI Agents",
              "Automation",
              "NLP",
              "GenAI",
              "Clustering",
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="justify-center p-3 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-mono"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              EDUCATION
            </span>
          </h2>

          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bachelor's of Information Management</h3>
                    <p className="text-cyan-400 font-mono">Shanker Dev Campus</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 font-mono">2018 - 2023</p>
                    <Badge variant="outline" className="border-pink-400 text-pink-400">
                      3.53 GPA
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
