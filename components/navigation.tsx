"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Terminal, User, Briefcase, Code, Mail, BookOpen } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Terminal },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-mono font-bold text-cyan-400 hover:text-pink-400 transition-colors">
            {"<DIBAS/>"}
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-200",
                    pathname === item.href
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-300 hover:text-pink-400 hover:border-b-2 hover:border-pink-400",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-cyan-400">
              <Terminal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
