"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  Github,
  Mail,
  MessageCircle,
  Code,
  Globe,
  Gamepad2,
  Sun,
  Moon,
  Languages,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Target,
  Settings,
  Database,
  Layers,
  GitBranch,
  Menu,
  X,
} from "lucide-react"

type Language = "pt" | "en"
type Theme = "dark" | "light"

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      education: "Educação",
      skills: "Habilidades",
      technologies: "Tecnologias",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      title: "Desenvolvedor Full Stack",
      age: "18 anos",
      location: "Rio Claro, SP",
      discord: "Discord: gm_whitinho",
      contact: "Entre em Contato",
      github: "GitHub",
      experience: "Anos de Experiência",
      languages: "Linguagens",
      developer: "Desenvolvedor",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Atualmente cursando Desenvolvimento de Sistemas, sempre em busca de novos desafios e oportunidades para crescer profissionalmente.",
    },
    education: {
      title: "Formação Acadêmica",
      completed: "Concluído",
      school: "João Professor Batista Leme",
      schoolPeriod: "2019 - 2025",
      schoolDescription: "Ensino Fundamental II e Ensino Médio",
      course: "Desenvolvimento de Sistemas",
      courseSchool: "FIEC",
      coursePeriod: "2024 - 2025",
      courseDescription: "Curso Técnico em Desenvolvimento de Sistemas",
      completedDate: "Concluído em 12 de Dezembro de 2025",
      achievements: "Conquistas Acadêmicas",
      achievementsList: [
        "Foco em programação e desenvolvimento web",
        "Projetos práticos em diversas linguagens",
        "Participação ativa em atividades técnicas",
      ],
      languages: "Idiomas",
      portuguese: "Português",
      english: "Inglês",
      nativeLevel: "Nativo",
      intermediateLevel: "Intermediário",
    },
    projects: {
      title: "Meus Projetos",
      github: "Projetos GitHub",
      roblox: "Portfolio Roblox",
      viewProject: "Ver Projeto",
      viewGithub: "Ver no GitHub",
      robloxDescription: "Portfolio completo dos meus trabalhos e experiências no desenvolvimento Roblox/Luau",
      githubDescription: "Confira meus repositórios e contribuições no GitHub",
    },
    skills: {
      title: "Linguagens de Programação",
      levels: {
        junior: "Junior",
        pleno: "Pleno",
        senior: "Senior",
      },
      progress: {
        junior: "Nível Junior",
        pleno: "Nível Pleno",
        senior: "Nível Senior",
      },
      years: "anos de experiência",
      year: "ano de experiência",
    },
    technologies: {
      title: "Tecnologias & Ferramentas",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas",
      databases: "Banco de Dados",
    },
    goals: {
      title: "Objetivos Profissionais",
      shortTerm: "Curto Prazo",
      longTerm: "Longo Prazo",
      shortTermGoals: [
        "Concluir o curso de Desenvolvimento de Sistemas",
        "Conseguir primeira oportunidade como desenvolvedor",
        "Aprofundar conhecimentos em React e Node.js",
      ],
      longTermGoals: [
        "Tornar-se desenvolvedor Full Stack sênior",
        "Liderar projetos de desenvolvimento",
        "Contribuir para projetos open source",
      ],
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
      education: "Education",
      skills: "Skills",
      technologies: "Technologies",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Full Stack Developer",
      age: "18 years old",
      location: "Rio Claro, SP",
      discord: "Discord: gm_whitinho",
      contact: "Get In Touch",
      github: "GitHub",
      experience: "Years of Experience",
      languages: "Languages",
      developer: "Developer",
    },
    about: {
      title: "About Me",
      description:
        "Full Stack developer passionate about creating innovative and efficient solutions. Currently studying Systems Development, always seeking new challenges and opportunities for professional growth.",
    },
    education: {
      title: "Academic Background",
      completed: "Completed",
      school: "João Professor Batista Leme",
      schoolPeriod: "2019 - 2025",
      schoolDescription: "Middle School and High School",
      course: "Systems Development",
      courseSchool: "FIEC",
      coursePeriod: "2024 - 2025",
      courseDescription: "Technical Course in Systems Development",
      completedDate: "Completed on December 12, 2025",
      achievements: "Academic Achievements",
      achievementsList: [
        "Focus on programming and web development",
        "Practical projects in multiple languages",
        "Active participation in technical activities",
      ],
      languages: "Languages",
      portuguese: "Portuguese",
      english: "English",
      nativeLevel: "Native",
      intermediateLevel: "Intermediate",
    },
    projects: {
      title: "My Projects",
      github: "GitHub Projects",
      roblox: "Roblox Portfolio",
      viewProject: "View Project",
      viewGithub: "View on GitHub",
      robloxDescription: "Complete portfolio of my work and experience in Roblox/Luau development",
      githubDescription: "Check out my repositories and contributions on GitHub",
    },
    skills: {
      title: "Programming Languages",
      levels: {
        junior: "Junior",
        pleno: "Mid-level",
        senior: "Senior",
      },
      progress: {
        junior: "Junior Level",
        pleno: "Mid-level",
        senior: "Senior Level",
      },
      years: "years of experience",
      year: "year of experience",
    },
    technologies: {
      title: "Technologies & Tools",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      databases: "Databases",
    },
    goals: {
      title: "Professional Goals",
      shortTerm: "Short Term",
      longTerm: "Long Term",
      shortTermGoals: [
        "Complete Systems Development course",
        "Get first opportunity as a developer",
        "Deepen knowledge in React and Node.js",
      ],
      longTermGoals: [
        "Become a senior Full Stack developer",
        "Lead development projects",
        "Contribute to open source projects",
      ],
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

const calculateLevel = (years: number, skillName?: string) => {
  if (years <= 2) return { level: "junior", progress: (years / 2) * 100 }
  if (years <= 5) return { level: "pleno", progress: ((years - 2) / 3) * 100 }
  if (skillName === "Luau" && years >= 7) {
    return { level: "senior", progress: 100 }
  }
  return { level: "senior", progress: Math.min(((years - 5) / 5) * 100, 100) }
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt")
  const [theme, setTheme] = useState<Theme>("dark")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const t = translations[language]

  const handleEmailContact = () => {
    window.location.href = "mailto:adryanmichel.profissional@gmail.com"
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
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
      mobileMenu: "bg-slate-900/95 backdrop-blur-lg",
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
      mobileMenu: "bg-white/95 backdrop-blur-lg",
    },
  }

  const currentTheme = themeClasses[theme]

  const githubProjects = [
    {
      name: "qualquerum",
      description: language === "pt" ? "Projeto em desenvolvimento" : "Project in development",
      language: "JavaScript",
      color: "bg-yellow-500",
    },
    {
      name: "vota-o-sistema",
      description: language === "pt" ? "Sistema de votação" : "Voting system",
      language: "HTML",
      color: "bg-orange-500",
    },
    {
      name: "snakegame",
      description: language === "pt" ? "Jogo da cobrinha clássico" : "Classic snake game",
      language: "JavaScript",
      color: "bg-yellow-500",
    },
    {
      name: "BusWay",
      description: language === "pt" ? "Sistema de transporte" : "Transportation system",
      language: "HTML",
      color: "bg-orange-500",
    },
  ]

  const skills = [
    { name: "Java", years: 3, icon: Code, color: "bg-orange-500" },
    { name: "Python", years: 3, icon: Code, color: "bg-green-500" },
    { name: "JavaScript", years: 3, icon: Globe, color: "bg-yellow-500" },
    { name: "C", years: 3, icon: Code, color: "bg-purple-500" },
    { name: "Luau", years: 7, icon: Gamepad2, color: "bg-red-500" },
    { name: "HTML", years: 4, icon: Globe, color: "bg-orange-600" },
  ]

  const technologies = {
    frontend: [
      { name: "React", icon: Layers, color: "bg-blue-500" },
      { name: "HTML5", icon: Globe, color: "bg-orange-500" },
      { name: "CSS3", icon: Globe, color: "bg-blue-600" },
      { name: "Tailwind CSS", icon: Layers, color: "bg-cyan-500" },
    ],
    backend: [
      { name: "Node.js", icon: Settings, color: "bg-green-600" },
      { name: "Express", icon: Settings, color: "bg-gray-600" },
      { name: "Python", icon: Code, color: "bg-yellow-600" },
    ],
    tools: [
      { name: "Git", icon: GitBranch, color: "bg-orange-600" },
      { name: "GitHub", icon: Github, color: "bg-gray-800" },
      { name: "VS Code", icon: Code, color: "bg-blue-700" },
    ],
    databases: [
      { name: "MySQL", icon: Database, color: "bg-blue-800" },
      { name: "MongoDB", icon: Database, color: "bg-green-700" },
    ],
  }

  const getLevelColor = (level: string) => {
    const colors = {
      junior: "bg-blue-500",
      pleno: "bg-yellow-500",
      senior: "bg-green-500",
    }
    return colors[level as keyof typeof colors]
  }

  const getLevelTextColor = (level: string, theme: string) => {
    const colors = {
      junior: theme === "dark" ? "text-blue-400" : "text-blue-600",
      pleno: theme === "dark" ? "text-yellow-400" : "text-yellow-600",
      senior: theme === "dark" ? "text-green-400" : "text-green-600",
    }
    return colors[level as keyof typeof colors]
  }

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
    { href: "#technologies", label: t.nav.technologies },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <div className={`min-h-screen ${currentTheme.bg}`}>
      <header className={`fixed top-0 w-full ${currentTheme.header} z-50`}>
        <div className="container mx-auto px-4 py-3 md:py-4">
          <nav className="flex justify-between items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${currentTheme.text}`}>Portfolio</h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex space-x-4 xl:space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`${currentTheme.textSecondary} hover:text-purple-400 transition-colors text-sm xl:text-base`}
                  >
                    {link.label}
                  </a>
                ))}
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

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Theme Toggle Mobile */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-lg ${currentTheme.textSecondary}`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Toggle Mobile */}
              <button
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className={`p-2 rounded-lg ${currentTheme.textSecondary} text-sm font-medium`}
                aria-label="Toggle language"
              >
                {language === "pt" ? "EN" : "PT"}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${currentTheme.textSecondary}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div
            className={`lg:hidden ${currentTheme.mobileMenu} border-t ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`${currentTheme.text} hover:text-purple-400 transition-colors text-lg py-2 border-b ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ${currentTheme.text} mb-3 md:mb-4`}>
              Adryan Michel
              <span className={`block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500 font-normal mt-2`}>
                Silveira Evangelista
              </span>
            </h1>
            <p className={`text-base md:text-xl ${currentTheme.textSecondary} mb-2`}>
              {t.hero.age} | {t.hero.title}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                <span className={`text-sm md:text-base ${currentTheme.textSecondary}`}>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                <span className={`text-sm md:text-base ${currentTheme.textSecondary}`}>{t.hero.discord}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <Button size="lg" className={`${currentTheme.button} w-full sm:w-auto`} onClick={handleEmailContact}>
              <Mail className="w-4 h-4 mr-2" />
              {t.hero.contact}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`${currentTheme.buttonOutline} w-full sm:w-auto`}
              onClick={() => window.open("https://github.com/AdryanMichel", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              {t.hero.github}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
            <div className={`${currentTheme.statCard} rounded-lg p-3 md:p-4 border`}>
              <div className={`text-xl md:text-2xl font-bold ${currentTheme.text}`}>7+</div>
              <div className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>{t.hero.experience}</div>
            </div>
            <div className={`${currentTheme.statCard} rounded-lg p-3 md:p-4 border`}>
              <div className={`text-xl md:text-2xl font-bold ${currentTheme.text}`}>6</div>
              <div className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>{t.hero.languages}</div>
            </div>
            <div className={`${currentTheme.statCard} rounded-lg p-3 md:p-4 border`}>
              <div className={`text-xl md:text-2xl font-bold ${currentTheme.text}`}>Full Stack</div>
              <div className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>{t.hero.developer}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className={`${currentTheme.card} ${currentTheme.text} border`}>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center mb-2 md:mb-4">{t.about.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-lg leading-relaxed text-center px-4 md:px-8">
              <p>{t.about.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-2xl md:text-4xl font-bold ${currentTheme.text} text-center mb-8 md:mb-12`}>
            {t.education.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
            {/* School Education */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-start gap-3 mb-2 md:mb-4">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-purple-500 flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <CardTitle className={`${currentTheme.text} text-lg md:text-xl`}>{t.education.school}</CardTitle>
                    <CardDescription className={`${currentTheme.textSecondary} text-sm`}>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {t.education.schoolPeriod}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className={`${currentTheme.textSecondary} mb-3 text-sm md:text-base`}>
                  {t.education.schoolDescription}
                </p>
                <span
                  className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${theme === "dark" ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}
                >
                  <Award className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  {t.education.completed}
                </span>
              </CardContent>
            </Card>

            {/* Technical Course */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-start gap-3 mb-2 md:mb-4">
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <CardTitle className={`${currentTheme.text} text-lg md:text-xl`}>{t.education.course}</CardTitle>
                    <CardDescription className={`${currentTheme.textSecondary} text-sm`}>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {t.education.coursePeriod} - {t.education.courseSchool}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className={`${currentTheme.textSecondary} mb-3 text-sm md:text-base`}>
                  {t.education.courseDescription}
                </p>
                <span
                  className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${theme === "dark" ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}
                >
                  <Award className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  {t.education.completedDate}
                </span>
              </CardContent>
            </Card>
          </div>

          {/* Achievements and Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {/* Academic Achievements */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                  <CardTitle className={`${currentTheme.text} text-lg md:text-xl`}>
                    {t.education.achievements}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="space-y-2 md:space-y-3">
                  {t.education.achievementsList.map((achievement, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 ${currentTheme.textSecondary} text-sm md:text-base`}
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <Languages className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                  <CardTitle className={`${currentTheme.text} text-lg md:text-xl`}>{t.education.languages}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className={`${currentTheme.text} font-medium text-sm md:text-base`}>
                      {t.education.portuguese}
                    </span>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${theme === "dark" ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}
                    >
                      {t.education.nativeLevel}
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className={`${currentTheme.text} font-medium text-sm md:text-base`}>
                      {t.education.english}
                    </span>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${theme === "dark" ? "bg-yellow-500/20 text-yellow-300" : "bg-yellow-100 text-yellow-700"}`}
                    >
                      {t.education.intermediateLevel}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-2xl md:text-4xl font-bold ${currentTheme.text} text-center mb-8 md:mb-12`}>
            {t.skills.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              const levelData = calculateLevel(skill.years, skill.name)
              const levelColor = getLevelColor(levelData.level)
              const levelTextColor = getLevelTextColor(levelData.level, theme)

              return (
                <Card
                  key={skill.name}
                  className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 transform hover:scale-105 border`}
                >
                  <CardHeader className="pb-2 md:pb-3 p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <div className={`p-2 rounded-lg ${skill.color}`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className={`${currentTheme.text} text-lg md:text-xl`}>{skill.name}</CardTitle>
                        <CardDescription className={`${currentTheme.textSecondary} text-xs md:text-sm`}>
                          {skill.years} {skill.years === 1 ? t.skills.year : t.skills.years}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${levelColor} text-white`}
                      >
                        {t.skills.levels[levelData.level as keyof typeof t.skills.levels]}
                      </span>
                      <span className={`text-xs md:text-sm font-medium ${levelTextColor}`}>
                        {Math.round(levelData.progress)}%
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 md:p-6 pt-0">
                    {/* Level Progress Bar */}
                    <div className="mb-2 md:mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className={currentTheme.textSecondary}>
                          {t.skills.progress[levelData.level as keyof typeof t.skills.progress]}
                        </span>
                      </div>
                      <div
                        className={`w-full ${theme === "dark" ? "bg-white/20" : "bg-gray-300"} rounded-full h-2 md:h-3`}
                      >
                        <div
                          className={`h-2 md:h-3 rounded-full ${levelColor} transition-all duration-1000`}
                          style={{ width: `${levelData.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="flex justify-between text-xs">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${levelData.level === "junior" ? levelColor : "bg-green-500"}`}
                        />
                        <span className={`mt-1 ${currentTheme.textMuted} text-[10px] md:text-xs`}>
                          {t.skills.levels.junior}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${levelData.level === "pleno" ? levelColor : levelData.level === "senior" ? "bg-green-500" : theme === "dark" ? "bg-white/30" : "bg-gray-400"}`}
                        />
                        <span className={`mt-1 ${currentTheme.textMuted} text-[10px] md:text-xs`}>
                          {t.skills.levels.pleno}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${levelData.level === "senior" ? levelColor : theme === "dark" ? "bg-white/30" : "bg-gray-400"}`}
                        />
                        <span className={`mt-1 ${currentTheme.textMuted} text-[10px] md:text-xs`}>
                          {t.skills.levels.senior}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Level Legend */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <div className={`${currentTheme.card} rounded-lg p-4 md:p-6 border`}>
              <h3 className={`text-lg md:text-xl font-semibold ${currentTheme.text} mb-3 md:mb-4 text-center`}>
                {language === "pt" ? "Legenda dos Níveis" : "Level Legend"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="text-center">
                  <div className="inline-block px-3 md:px-4 py-1 md:py-2 rounded-full bg-blue-500 text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    {t.skills.levels.junior}
                  </div>
                  <p className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>
                    {language === "pt" ? "0-2 anos de experiência" : "0-2 years of experience"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 md:px-4 py-1 md:py-2 rounded-full bg-yellow-500 text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    {t.skills.levels.pleno}
                  </div>
                  <p className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>
                    {language === "pt" ? "2-5 anos de experiência" : "2-5 years of experience"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 md:px-4 py-1 md:py-2 rounded-full bg-green-500 text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    {t.skills.levels.senior}
                  </div>
                  <p className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>
                    {language === "pt" ? "5+ anos de experiência" : "5+ years of experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-2xl md:text-4xl font-bold ${currentTheme.text} text-center mb-8 md:mb-12`}>
            {t.technologies.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Frontend */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className={`${currentTheme.text} text-base md:text-lg flex items-center gap-2`}>
                  <Layers className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  {t.technologies.frontend}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2 md:space-y-3">
                  {technologies.frontend.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-2 md:gap-3">
                        <div className={`p-1.5 md:p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className={`${currentTheme.text} text-sm md:text-base`}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className={`${currentTheme.text} text-base md:text-lg flex items-center gap-2`}>
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  {t.technologies.backend}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2 md:space-y-3">
                  {technologies.backend.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-2 md:gap-3">
                        <div className={`p-1.5 md:p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className={`${currentTheme.text} text-sm md:text-base`}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className={`${currentTheme.text} text-base md:text-lg flex items-center gap-2`}>
                  <GitBranch className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                  {t.technologies.tools}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2 md:space-y-3">
                  {technologies.tools.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-2 md:gap-3">
                        <div className={`p-1.5 md:p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className={`${currentTheme.text} text-sm md:text-base`}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className={`${currentTheme.text} text-base md:text-lg flex items-center gap-2`}>
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                  {t.technologies.databases}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2 md:space-y-3">
                  {technologies.databases.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-2 md:gap-3">
                        <div className={`p-1.5 md:p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className={`${currentTheme.text} text-sm md:text-base`}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-2xl md:text-4xl font-bold ${currentTheme.text} text-center mb-8 md:mb-12`}>
            {t.projects.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* GitHub Projects */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border`}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <Github className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                  <CardTitle className={`${currentTheme.text} text-xl md:text-2xl`}>{t.projects.github}</CardTitle>
                </div>
                <CardDescription className={`${currentTheme.textSecondary} text-sm md:text-base`}>
                  {t.projects.githubDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  {githubProjects.map((project, index) => (
                    <div
                      key={index}
                      className={`p-3 md:p-4 rounded-lg ${theme === "dark" ? "bg-white/5" : "bg-gray-100"} border ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
                    >
                      <div className="flex items-center gap-2 mb-1 md:mb-2">
                        <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${project.color}`}></div>
                        <h4 className={`font-semibold ${currentTheme.text} text-sm md:text-base truncate`}>
                          {project.name}
                        </h4>
                      </div>
                      <p className={`text-xs md:text-sm ${currentTheme.textSecondary} mb-1 md:mb-2`}>
                        {project.description}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${theme === "dark" ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"}`}
                      >
                        {project.language}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full ${currentTheme.button}`}
                  onClick={() => window.open("https://github.com/AdryanMichel", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.viewGithub}
                </Button>
              </CardContent>
            </Card>

            {/* Roblox Portfolio */}
            <Card
              className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 border border-red-500/30`}
            >
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <Gamepad2 className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                  <CardTitle className={`${currentTheme.text} text-xl md:text-2xl`}>{t.projects.roblox}</CardTitle>
                </div>
                <CardDescription className={`${currentTheme.textSecondary} text-sm md:text-base`}>
                  {t.projects.robloxDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div
                    className={`p-3 md:p-4 rounded-lg ${theme === "dark" ? "bg-red-500/10" : "bg-red-50"} border ${theme === "dark" ? "border-red-500/20" : "border-red-200"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                      <span className={`font-semibold ${currentTheme.text} text-sm md:text-base`}>Luau Developer</span>
                    </div>
                    <p className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>
                      {language === "pt"
                        ? "7 anos de experiência em desenvolvimento Roblox"
                        : "7 years of experience in Roblox development"}
                    </p>
                  </div>
                  <div
                    className={`p-3 md:p-4 rounded-lg ${theme === "dark" ? "bg-red-500/10" : "bg-red-50"} border ${theme === "dark" ? "border-red-500/20" : "border-red-200"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                      <span className={`font-semibold ${currentTheme.text} text-sm md:text-base`}>
                        {language === "pt" ? "Especialista" : "Specialist"}
                      </span>
                    </div>
                    <p className={`text-xs md:text-sm ${currentTheme.textSecondary}`}>
                      {language === "pt"
                        ? "Scripting avançado e desenvolvimento de jogos"
                        : "Advanced scripting and game development"}
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.open("https://michelportfolio.carrd.co/", "_blank")}
                >
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  {t.projects.viewProject}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Professional Goals */}
          <div className={`${currentTheme.card} rounded-lg p-4 md:p-8 border`}>
            <h3 className={`text-xl md:text-2xl font-bold ${currentTheme.text} text-center mb-6 md:mb-8`}>
              {t.goals.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4
                  className={`text-lg md:text-xl font-semibold ${currentTheme.text} mb-3 md:mb-4 flex items-center gap-2`}
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                  {t.goals.shortTerm}
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {t.goals.shortTermGoals.map((goal, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 ${currentTheme.textSecondary} text-sm md:text-base`}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className={`text-lg md:text-xl font-semibold ${currentTheme.text} mb-3 md:mb-4 flex items-center gap-2`}
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  {t.goals.longTerm}
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {t.goals.longTermGoals.map((goal, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 ${currentTheme.textSecondary} text-sm md:text-base`}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className={`${currentTheme.card} ${currentTheme.text} border`}>
            <CardHeader className="text-center p-4 md:p-6">
              <CardTitle className="text-2xl md:text-3xl mb-2 md:mb-4">{t.contact.title}</CardTitle>
              <CardDescription className={`${currentTheme.textSecondary} text-sm md:text-lg px-2`}>
                {t.contact.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <Button size="lg" className={`${currentTheme.button} w-full sm:w-auto`} onClick={handleEmailContact}>
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {t.contact.email}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`${currentTheme.buttonOutline} w-full sm:w-auto`}
                  onClick={() => window.open("https://github.com/AdryanMichel", "_blank")}
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  GitHub
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
                <div
                  className={`p-3 md:p-4 rounded-lg ${theme === "dark" ? "bg-white/5" : "bg-gray-100"} text-center border ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mx-auto mb-2" />
                  <p className={`${currentTheme.text} font-medium text-xs md:text-sm break-all`}>
                    adryanmichel.profissional@gmail.com
                  </p>
                </div>
                <div
                  className={`p-3 md:p-4 rounded-lg ${theme === "dark" ? "bg-white/5" : "bg-gray-100"} text-center border ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
                >
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mx-auto mb-2" />
                  <p className={`${currentTheme.text} font-medium text-xs md:text-sm`}>{t.contact.discord}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 md:py-8 px-4 border-t ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}>
        <div className="container mx-auto text-center">
          <p className={`${currentTheme.textSecondary} text-sm md:text-base`}>
            © {new Date().getFullYear()} Adryan Michel. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}
