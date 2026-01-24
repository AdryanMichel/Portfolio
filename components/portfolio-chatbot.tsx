'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Button } from '@/components/ui/button'
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react'

interface PortfolioChatbotProps {
  language: 'pt' | 'en'
}

export function PortfolioChatbot({ language }: PortfolioChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const texts = {
    pt: {
      title: 'Assistente AI',
      subtitle: 'Pergunte sobre mim',
      placeholder: 'Pergunte sobre minhas habilidades, projetos...',
      suggestions: [
        'Quais são suas habilidades?',
        'Fale sobre seus projetos',
        'Como entrar em contato?',
      ],
      thinking: 'Pensando...',
      greeting: 'Olá! Sou o assistente virtual do Adryan. Como posso ajudar?',
    },
    en: {
      title: 'AI Assistant',
      subtitle: 'Ask about me',
      placeholder: 'Ask about my skills, projects...',
      suggestions: [
        'What are your skills?',
        'Tell me about your projects',
        'How to get in touch?',
      ],
      thinking: 'Thinking...',
      greeting: "Hi! I'm Adryan's virtual assistant. How can I help you?",
    },
  }

  const t = texts[language]

  const handleSuggestion = (suggestion: string) => {
    sendMessage({ text: suggestion })
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-medium">AI Chat</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[500px] max-h-[calc(100vh-6rem)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-xs text-white/80">{t.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Initial greeting */}
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">{t.greeting}</p>
                  </div>
                </div>

                {/* Suggestions */}
                <div className="flex flex-wrap gap-2 ml-11">
                  {t.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestion(suggestion)}
                      className="text-xs px-3 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-blue-100 dark:bg-blue-900/30'
                      : 'bg-purple-100 dark:bg-purple-900/30'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Bot className="w-4 h-4 text-purple-600" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-purple-600 text-white rounded-tr-none'
                      : 'bg-muted rounded-tl-none'
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === 'text') {
                      return (
                        <p key={index} className="text-sm whitespace-pre-wrap">
                          {part.text}
                        </p>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-purple-600" />
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.thinking}</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (!input.trim() || isLoading) return
              sendMessage({ text: input })
              setInput('')
            }}
            className="p-4 border-t border-border"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="rounded-full bg-purple-600 hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
