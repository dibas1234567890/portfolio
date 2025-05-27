import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, MapPin, Send, Terminal } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "dibaspratap@gmail.com",
      href: "mailto:dibaspratap@gmail.com",
      color: "text-cyan-400",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+977 9767286690",
      href: "tel:+9779767286690",
      color: "text-pink-400",
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "dibas1234567890",
      href: "https://github.com/dibas1234567890",
      color: "text-purple-400",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Kathmandu, Nepal",
      href: "#",
      color: "text-yellow-400",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">CONTACT_ME</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 font-mono text-lg">{"> establishing_connection.exe"}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 font-mono">{"> GET_IN_TOUCH"}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to collaborate on cutting-edge AI/ML projects? Whether you're looking for
                <span className="text-cyan-400"> innovative solutions</span>,
                <span className="text-pink-400"> technical expertise</span>, or just want to discuss the future of
                artificial intelligence, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <a
                        href={method.href}
                        className="flex items-center space-x-4 group"
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <Icon className={`w-6 h-6 ${method.color} group-hover:scale-110 transition-transform`} />
                        <div>
                          <p className="text-gray-400 font-mono text-sm">{method.label}</p>
                          <p className="text-white font-mono group-hover:text-cyan-400 transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-mono">{"> QUICK_ACTIONS"}</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-black font-bold font-mono"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  SEND_EMAIL
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400/10 font-mono"
                  size="lg"
                >
                  <Github className="w-4 h-4 mr-2" />
                  VIEW_GITHUB
                </Button>
              </div>
            </div>
          </div>

          {/* Terminal-style Contact Form */}
          <div className="space-y-6">
            <Card className="bg-gray-900/80 border-cyan-400/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-mono">contact_form.exe</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2">{"> name:"}</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your_name_here"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2">{"> email:"}</label>
                    <input
                      type="email"
                      className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2">{"> subject:"}</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="project_collaboration"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 font-mono text-sm mb-2">{"> message:"}</label>
                    <textarea
                      rows={6}
                      className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="let's build something amazing together..."
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold font-mono"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    EXECUTE_SEND
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-black rounded border border-gray-700">
                  <p className="text-green-400 font-mono text-sm">{"> status: ready_to_connect"}</p>
                  <p className="text-gray-500 font-mono text-xs mt-1">{"// response_time: <24hrs"}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-900/50 border-gray-700 max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono font-bold">AVAILABLE_FOR_PROJECTS</span>
              </div>
              <p className="text-gray-400 font-mono text-sm">{"> currently_accepting: new_opportunities"}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
