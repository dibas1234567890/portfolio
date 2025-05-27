import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "ML Engineer (Machine Learning Engineer)",
      company: "Palmmind",
      location: "Lalitpur, Nepal",
      period: "Aug 2024 - Present",
      type: "Current",
      achievements: [
        "Developed AI agents for autonomous lead generation and capture",
        "Created diverse agentic tools connected with LLMs for workflow automation",
        "Built LLM-based services for low-resource languages in local governments",
        "Created Roman Nepali to Devanagari transliterators with 0.01-1s latency",
        "Used Model Context Protocol standards to leverage data sources",
        "Automated internal processes reducing human error and improving efficiency",
        "Worked with Arabic and Spanish for NLTK text processing tasks",
        "Built comprehensive scrapers for APIs, images, text, WordPress, AJAX",
        "Quantized and fine-tuned models for improved efficiency and accuracy",
        "Optimized prompts for enhanced accuracy and reduced latency",
        "Leveraged KV caching for faster and more efficient responses",
        "Utilized RAG techniques to build customer experience bots",
        "Achieved <2% vulnerability using Garak framework",
        "Contributed to team achieving ISO certification",
        "Developed automated voice agents for Home Automation with Raspberry Pi",
        "Built commercial-grade OCR solutions for banking sector",
      ],
    },
    {
      title: "ML Engineer",
      company: "Creolio.com",
      location: "Remote",
      period: "Jan 2024 - Jul 2024",
      type: "Remote",
      achievements: [
        "Implemented SpaCy and NLTK with Simalign for advanced NLP processing",
        "Integrated NLP results with RAG techniques and Transformers",
        "Developed translation systems for well-known texts across multiple languages",
      ],
    },
    {
      title: "IT Support",
      company: "Pearl Publication Pvt. Ltd",
      location: "Kathmandu, Nepal",
      period: "Mar 2023 - Jun 2024",
      type: "Support",
      achievements: [
        "Provided comprehensive technical support for hardware, software, and networks",
        "Diagnosed and resolved system errors, connectivity issues, and performance problems",
        "Managed software installations, updates, and custom configurations",
        "Trained in HIPAA compliance and confidentiality protocols",
        "Maintained WordPress websites ensuring security and optimal performance",
        "Developed full Django application for internal office automation",
      ],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "border-cyan-400 text-cyan-400"
      case "Remote":
        return "border-pink-400 text-pink-400"
      case "Support":
        return "border-purple-400 text-purple-400"
      default:
        return "border-gray-400 text-gray-400"
    }
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">EXPERIENCE</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 font-mono text-lg">{"> building_ai_solutions.log"}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full border-4 border-black"></div>

                {/* Content */}
                <div className="ml-20">
                  <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Building className="w-4 h-4 text-cyan-400" />
                              <span className="font-mono text-cyan-400">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-pink-400" />
                              <span className="font-mono">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start lg:items-end space-y-2">
                          <Badge variant="outline" className={`font-mono ${getTypeColor(exp.type)}`}>
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <Badge variant="outline" className={getTypeColor(exp.type)}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
