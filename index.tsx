"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Github, Mail, MessageCircle, Code, Globe, Gamepad2, Sun, Moon, Languages } from "lucide-react"

type Language = "pt" | "en"
type Theme = "dark" | "light"

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      title: "Desenvolvedor Full Stack",
      age: "18 anos",
      discord: "Discord: gm_whitinho",
      contact: "Entre em Contato",
      github: "GitHub",
      experience: "Anos de Experiência",
      languages: "Linguagens",
      developer: "Desenvolvedor",
    },
    about: {
      title: "Sobre Mim",
      description1:
        "Sou um desenvolvedor Full Stack com foco em entregar soluções completas, desde o backend até o frontend. Tenho experiência sólida em várias linguagens de programação e tecnologias, acumulando mais de 3 anos em Java, Python, JavaScript e C, além de 7 anos de Luau (linguagem do Roblox) e 4 anos de HTML.",
      description2:
        "Busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para me destacar no mercado e entregar projetos de alta qualidade.",
    },
    skills: {
      title: "Experiência Técnica",
      years: "anos de experiência",
      year: "ano de experiência",
    },
    contact: {
      title: "Vamos Trabalhar Juntos?",
      description:
        "Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto!",
      email: "Enviar Email",
      discord: "Discord: gm_whitinho",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      title: "Full Stack Developer",
      age: "18 years old",
      discord: "Discord: gm_whitinho",
      contact: "Get In Touch",
      github: "GitHub",
      experience: "Years of Experience",
      languages: "Languages",
      developer: "Developer",
    },
    about: {
      title: "About Me",
      description1:
        "I am a Full Stack developer focused on delivering complete solutions, from backend to frontend. I have solid experience in various programming languages and technologies, accumulating over 3 years in Java, Python, JavaScript and C, plus 7 years of Luau (Roblox language) and 4 years of HTML.",
      description2:
        "I constantly seek to improve my skills and learn new technologies to stand out in the market and deliver high-quality projects.",
    },
    skills: {
      title: "Technical Experience",
      years: "years of experience",
      year: "year of experience",
    },
    contact: {
      title: "Let's Work Together?",
      description: "I'm always open to new challenges and opportunities. Get in touch to discuss your next project!",
      email: "Send Email",
      discord: "Discord: gm_whitinho",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt")
  const [theme, setTheme] = useState<Theme>("dark")

  const t = translations[language]

  const skills = [
    { name: "Java", years: 3, icon: Code, color: theme === "dark" ? "bg-orange-500" : "bg-orange-600" },
    { name: "Python", years: 3, icon: Code, color: theme === "dark" ? "bg-green-500" : "bg-green-600" },
    { name: "JavaScript", years: 3, icon: Globe, color: theme === "dark" ? "bg-yellow-500" : "bg-yellow-600" },
    { name: "C", years: 3, icon: Code, color: theme === "dark" ? "bg-purple-500" : "bg-purple-600" },
    { name: "Luau", years: 7, icon: Gamepad2, color: theme === "dark" ? "bg-red-500" : "bg-red-600" },
    { name: "HTML", years: 4, icon: Globe, color: theme === "dark" ? "bg-orange-600" : "bg-orange-700" },
  ]

  const handleEmailContact = () => {
    window.location.href = "mailto:adryanmichel.profissional@gmail.com"
  }

  const themeClasses = {
    dark: {
      bg: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      header: "bg-black/20 backdrop-blur-md border-b border-white/10",
      text: "text-white",
      textSecondary: "text-white/80",
      textMuted: "text-white/60",
      card: "bg-white/10 backdrop-blur-sm border-white/20",
      cardHover: "hover:bg-white/20",
      button: "bg-purple-600 hover:bg-purple-700",
      buttonOutline: "border-white/20 text-white hover:bg-white/10",
      statCard: "bg-white/10 backdrop-blur-sm border-white/20",
    },
    light: {
      bg: "bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100",
      header: "bg-white/80 backdrop-blur-md border-b border-gray-200",
      text: "text-gray-900",
      textSecondary: "text-gray-700",
      textMuted: "text-gray-600",
      card: "bg-white/80 backdrop-blur-sm border-gray-200",
      cardHover: "hover:bg-white/90",
      button: "bg-purple-600 hover:bg-purple-700",
      buttonOutline: "border-gray-300 text-gray-700 hover:bg-gray-100",
      statCard: "bg-white/80 backdrop-blur-sm border-gray-200",
    },
  }

  const currentTheme = themeClasses[theme]

  return (
    <div className={`min-h-screen ${currentTheme.bg}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full ${currentTheme.header} z-50`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${currentTheme.text}`}>Portfolio</h1>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-6">
                <a
                  href="#about"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.about}
                </a>
                <a
                  href="#skills"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.skills}
                </a>
                <a
                  href="#contact"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.contact}
                </a>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center gap-2">
                <Sun className={`w-4 h-4 ${theme === "light" ? currentTheme.text : currentTheme.textMuted}`} />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
                <Moon className={`w-4 h-4 ${theme === "dark" ? currentTheme.text : currentTheme.textMuted}`} />
              </div>

              {/* Language Toggle */}
              <div className="flex items-center gap-2">
                <Languages className={`w-4 h-4 ${currentTheme.textSecondary}`} />
                <Switch checked={language === "en"} onCheckedChange={(checked) => setLanguage(checked ? "en" : "pt")} />
                <span className={`text-sm ${currentTheme.textSecondary}`}>{language === "pt" ? "EN" : "PT"}</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className={`text-5xl md:text-7xl font-bold ${currentTheme.text} mb-4 animate-fade-in`}>
              Adryan Michel
              <span className={`block text-3xl md:text-4xl text-purple-500 font-normal mt-2`}>
                Silveira Evangelista
              </span>
            </h1>
            <p className={`text-xl ${currentTheme.textSecondary} mb-2`}>
              {t.hero.age} | {t.hero.title}
            </p>
            <div className="flex justify-center items-center gap-2 mb-8">
              <MessageCircle className="w-5 h-5 text-purple-500" />
              <span className={currentTheme.textSecondary}>{t.hero.discord}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className={currentTheme.button} onClick={handleEmailContact}>
              <Mail className="w-4 h-4 mr-2" />
              {t.hero.contact}
            </Button>
            <Button size="lg" variant="outline" className={currentTheme.buttonOutline}>
              <Github className="w-4 h-4 mr-2" />
              {t.hero.github}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className={`${currentTheme.statCard} rounded-lg p-4`}>
              <div className={`text-2xl font-bold ${currentTheme.text}`}>7+</div>
              <div className={`text-sm ${currentTheme.textSecondary}`}>{t.hero.experience}</div>
            </div>
            <div className={`${currentTheme.statCard} rounded-lg p-4`}>
              <div className={`text-2xl font-bold ${currentTheme.text}`}>6</div>
              <div className={`text-sm ${currentTheme.textSecondary}`}>{t.hero.languages}</div>
            </div>
            <div className={`${currentTheme.statCard} rounded-lg p-4 col-span-2 md:col-span-1`}>
              <div className={`text-2xl font-bold ${currentTheme.text}`}>Full Stack</div>
              <div className={`text-sm ${currentTheme.textSecondary}`}>{t.hero.developer}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <Card className={`${currentTheme.card} ${currentTheme.text}`}>
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-4">{t.about.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <p className="mb-6">{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${currentTheme.text} text-center mb-12`}>{t.skills.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 transform hover:scale-105`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${skill.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className={`${currentTheme.text} text-xl`}>{skill.name}</CardTitle>
                        <CardDescription className={currentTheme.textSecondary}>
                          {skill.years} {skill.years === 1 ? t.skills.year : t.skills.years}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`w-full ${theme === "dark" ? "bg-white/20" : "bg-gray-300"} rounded-full h-2`}>
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${Math.min((skill.years / 7) * 100, 100)}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-bold ${currentTheme.text} mb-8`}>{t.contact.title}</h2>
          <p className={`text-xl ${currentTheme.textSecondary} mb-12 max-w-2xl mx-auto`}>{t.contact.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className={`${currentTheme.button} min-w-[200px]`} onClick={handleEmailContact}>
              <Mail className="w-5 h-5 mr-2" />
              {t.contact.email}
            </Button>
            <Button size="lg" variant="outline" className={`${currentTheme.buttonOutline} min-w-[200px]`}>
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.contact.discord}
            </Button>
          </div>

          <div className={`mt-8 p-4 ${currentTheme.card} rounded-lg max-w-md mx-auto`}>
            <p className={`${currentTheme.textSecondary} text-sm mb-2`}>Email profissional:</p>
            <p className={`${currentTheme.text} font-mono`}>adryanmichel.profissional@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${theme === "dark" ? "border-white/20" : "border-gray-200"}`}>
        <div className="container mx-auto text-center">
          <p className={currentTheme.textMuted}>© 2024 Adryan Michel Silveira Evangelista. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
