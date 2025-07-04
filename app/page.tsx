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
      current: "Cursando",
      school: "João Professor Batista Leme",
      course: "Desenvolvimento de Sistemas",
      year: "3º Ano do Ensino Médio",
      period: "2022 - 2025",
      status: "Em andamento",
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
      current: "Currently studying",
      school: "João Professor Batista Leme",
      course: "Systems Development",
      year: "3rd Year of High School",
      period: "2022 - 2025",
      status: "In progress",
      achievements: "Academic Achievements",
      achievementsList: [
        "Focus on programming and web development",
        "Practical projects in various languages",
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

// Função para calcular nível baseado nos anos de experiência
const calculateLevel = (years: number, skillName?: string) => {
  if (years <= 2) return { level: "junior", progress: (years / 2) * 100 }
  if (years <= 5) return { level: "pleno", progress: ((years - 2) / 3) * 100 }

  // Para Luau com 7 anos, mostrar 100% no nível Senior
  if (skillName === "Luau" && years >= 7) {
    return { level: "senior", progress: 100 }
  }

  return { level: "senior", progress: Math.min(((years - 5) / 5) * 100, 100) }
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt")
  const [theme, setTheme] = useState<Theme>("dark")

  const t = translations[language]

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
    { name: "Java", years: 3, icon: Code, color: currentTheme.dark ? "bg-orange-500" : "bg-orange-600" },
    { name: "Python", years: 3, icon: Code, color: currentTheme.dark ? "bg-green-500" : "bg-green-600" },
    { name: "JavaScript", years: 3, icon: Globe, color: currentTheme.dark ? "bg-yellow-500" : "bg-yellow-600" },
    { name: "C", years: 3, icon: Code, color: currentTheme.dark ? "bg-purple-500" : "bg-purple-600" },
    { name: "Luau", years: 7, icon: Gamepad2, color: currentTheme.dark ? "bg-red-500" : "bg-red-600" },
    { name: "HTML", years: 4, icon: Globe, color: currentTheme.dark ? "bg-orange-600" : "bg-orange-700" },
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

  const getLevelColor = (level: string, theme: string) => {
    const colors = {
      junior: theme === "dark" ? "bg-blue-500" : "bg-blue-600",
      pleno: theme === "dark" ? "bg-yellow-500" : "bg-yellow-600",
      senior: theme === "dark" ? "bg-green-500" : "bg-green-600",
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
                  href="#education"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.education}
                </a>
                <a
                  href="#skills"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.skills}
                </a>
                <a
                  href="#technologies"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.technologies}
                </a>
                <a
                  href="#projects"
                  className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}
                >
                  {t.nav.projects}
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
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className={currentTheme.textSecondary}>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-500" />
                <span className={currentTheme.textSecondary}>{t.hero.discord}</span>
              </div>
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
            <CardContent className="text-lg leading-relaxed text-center">
              <p>{t.about.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${currentTheme.text} text-center mb-12`}>{t.education.title}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Education */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                  <div>
                    <CardTitle className={`${currentTheme.text} text-xl`}>{t.education.school}</CardTitle>
                    <CardDescription className={currentTheme.textSecondary}>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {t.education.period}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold ${currentTheme.text} mb-2`}>{t.education.course}</h4>
                    <p className={`${currentTheme.textSecondary} mb-2`}>{t.education.year}</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${theme === "dark" ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      {t.education.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Achievements */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <CardTitle className={`${currentTheme.text} text-xl`}>{t.education.achievements}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.education.achievementsList.map((achievement, index) => (
                    <li key={index} className={`flex items-start gap-2 ${currentTheme.textSecondary}`}>
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-8 h-8 text-blue-500" />
                  <CardTitle className={`${currentTheme.text} text-xl`}>{t.education.languages}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`${currentTheme.text} font-medium`}>{t.education.portuguese}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${theme === "dark" ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}
                    >
                      {t.education.nativeLevel}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`${currentTheme.text} font-medium`}>{t.education.english}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${theme === "dark" ? "bg-yellow-500/20 text-yellow-300" : "bg-yellow-100 text-yellow-700"}`}
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
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${currentTheme.text} text-center mb-12`}>{t.skills.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const levelData = calculateLevel(skill.years, skill.name)
              const levelColor = getLevelColor(levelData.level, theme)
              const levelTextColor = getLevelTextColor(levelData.level, theme)

              return (
                <Card
                  key={skill.name}
                  className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 transform hover:scale-105`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${skill.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`${currentTheme.text} text-xl`}>{skill.name}</CardTitle>
                        <CardDescription className={currentTheme.textSecondary}>
                          {skill.years} {skill.years === 1 ? t.skills.year : t.skills.years}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColor} text-white`}>
                        {t.skills.levels[levelData.level as keyof typeof t.skills.levels]}
                      </span>
                      <span className={`text-sm font-medium ${levelTextColor}`}>{Math.round(levelData.progress)}%</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Level Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className={currentTheme.textSecondary}>
                          {t.skills.progress[levelData.level as keyof typeof t.skills.progress]}
                        </span>
                      </div>
                      <div className={`w-full ${theme === "dark" ? "bg-white/20" : "bg-gray-300"} rounded-full h-3`}>
                        <div
                          className={`h-3 rounded-full ${levelColor} transition-all duration-1000 relative overflow-hidden`}
                          style={{ width: `${levelData.progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="flex justify-between text-xs">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${levelData.level === "junior" ? levelColor : theme === "dark" ? "bg-green-500" : "bg-green-600"}`}
                        ></div>
                        <span className={`mt-1 ${currentTheme.textMuted}`}>{t.skills.levels.junior}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${levelData.level === "pleno" ? levelColor : levelData.level === "senior" ? (theme === "dark" ? "bg-green-500" : "bg-green-600") : (theme === "dark" ? "bg-white/30" : "bg-gray-400")}`}
                        ></div>
                        <span className={`mt-1 ${currentTheme.textMuted}`}>{t.skills.levels.pleno}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${levelData.level === "senior" ? levelColor : theme === "dark" ? "bg-white/30" : "bg-gray-400"}`}
                        ></div>
                        <span className={`mt-1 ${currentTheme.textMuted}`}>{t.skills.levels.senior}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Level Legend */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className={`${currentTheme.card} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${currentTheme.text} mb-4 text-center`}>
                {language === "pt" ? "Legenda dos Níveis" : "Level Legend"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div
                    className={`inline-block px-4 py-2 rounded-full ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"} text-white font-semibold mb-2`}
                  >
                    {t.skills.levels.junior}
                  </div>
                  <p className={`text-sm ${currentTheme.textSecondary}`}>
                    {language === "pt" ? "0-2 anos de experiência" : "0-2 years of experience"}
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className={`inline-block px-4 py-2 rounded-full ${theme === "dark" ? "bg-yellow-500" : "bg-yellow-600"} text-white font-semibold mb-2`}
                  >
                    {t.skills.levels.pleno}
                  </div>
                  <p className={`text-sm ${currentTheme.textSecondary}`}>
                    {language === "pt" ? "2-5 anos de experiência" : "2-5 years of experience"}
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className={`inline-block px-4 py-2 rounded-full ${theme === "dark" ? "bg-green-500" : "bg-green-600"} text-white font-semibold mb-2`}
                  >
                    {t.skills.levels.senior}
                  </div>
                  <p className={`text-sm ${currentTheme.textSecondary}`}>
                    {language === "pt" ? "5+ anos de experiência" : "5+ years of experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${currentTheme.text} text-center mb-12`}>{t.technologies.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`${currentTheme.text} text-lg flex items-center gap-2`}>
                  <Layers className="w-6 h-6 text-blue-500" />
                  {t.technologies.frontend}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technologies.frontend.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={currentTheme.text}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`${currentTheme.text} text-lg flex items-center gap-2`}>
                  <Settings className="w-6 h-6 text-green-500" />
                  {t.technologies.backend}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technologies.backend.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={currentTheme.text}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`${currentTheme.text} text-lg flex items-center gap-2`}>
                  <GitBranch className="w-6 h-6 text-orange-500" />
                  {t.technologies.tools}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technologies.tools.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={currentTheme.text}>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`${currentTheme.text} text-lg flex items-center gap-2`}>
                  <Database className="w-6 h-6 text-purple-500" />
                  {t.technologies.databases}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technologies.databases.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${tech.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={currentTheme.text}>{tech.name}</span>
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
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${currentTheme.text} text-center mb-12`}>{t.projects.title}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* GitHub Projects */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Github className="w-8 h-8 text-purple-500" />
                  <CardTitle className={`${currentTheme.text} text-2xl`}>{t.projects.github}</CardTitle>
                </div>
                <CardDescription className={currentTheme.textSecondary}>{t.projects.githubDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {githubProjects.map((project, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${theme === "dark" ? "bg-white/5" : "bg-gray-100"} border ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                        <h4 className={`font-semibold ${currentTheme.text}`}>{project.name}</h4>
                      </div>
                      <p className={`text-sm ${currentTheme.textSecondary} mb-2`}>{project.description}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"}`}
                      >
                        {project.language}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  className={currentTheme.button}
                  onClick={() => window.open("https://github.com/AdryanMichel", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.viewGithub}
                </Button>
              </CardContent>
            </Card>

            {/* Roblox Portfolio */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="w-8 h-8 text-red-500" />
                  <CardTitle className={`${currentTheme.text} text-2xl`}>{t.projects.roblox}</CardTitle>
                </div>
                <CardDescription className={currentTheme.textSecondary}>{t.projects.robloxDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`p-6 rounded-lg ${theme === "dark" ? "bg-gradient-to-br from-red-500/10 to-orange-500/10" : "bg-gradient-to-br from-red-50 to-orange-50"} border ${theme === "dark" ? "border-red-500/20" : "border-red-200"} mb-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-bold ${currentTheme.text}`}>Portfolio Roblox</h4>
                      <p className={`text-sm ${currentTheme.textSecondary}`}>7 anos de experiência em Luau</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className={`text-center p-3 rounded ${theme === "dark" ? "bg-white/5" : "bg-white/50"}`}>
                      <div className={`text-xl font-bold ${currentTheme.text}`}>7+</div>
                      <div className={`text-xs ${currentTheme.textSecondary}`}>Anos</div>
                    </div>
                    <div className={`text-center p-3 rounded ${theme === "dark" ? "bg-white/5" : "bg-white/50"}`}>
                      <div className={`text-xl font-bold ${currentTheme.text}`}>Luau</div>
                      <div className={`text-xs ${currentTheme.textSecondary}`}>Especialidade</div>
                    </div>
                  </div>
                </div>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open("https://michelportfolio.carrd.co/", "_blank")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {t.projects.viewProject}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${currentTheme.text} text-center mb-12`}>{t.goals.title}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Short Term Goals */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-500" />
                  <CardTitle className={`${currentTheme.text} text-xl`}>{t.goals.shortTerm}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.goals.shortTermGoals.map((goal, index) => (
                    <li key={index} className={`flex items-start gap-2 ${currentTheme.textSecondary}`}>
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Long Term Goals */}
            <Card className={`${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-green-500" />
                  <CardTitle className={`${currentTheme.text} text-xl`}>{t.goals.longTerm}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.goals.longTermGoals.map((goal, index) => (
                    <li key={index} className={`flex items-start gap-2 ${currentTheme.textSecondary}`}>
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
