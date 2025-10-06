"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import type { Language } from "@/app/page"

type Props = {
  onSendCode: (email: string) => void
  onBack: () => void
  language: Language
  onLanguageChange: (language: Language) => void
}

export function EmailInput({ onSendCode, onBack, language, onLanguageChange }: Props) {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={onBack} className="p-2 hover:bg-accent rounded-md transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-md flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Enter your email address</h1>
          <p className="text-base text-muted-foreground">We'll send you a verification code</p>
        </div>

        <div className="space-y-6">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
          />

          <Button size="lg" className="w-full h-12" onClick={() => onSendCode(email)} disabled={!email}>
            Send Code
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">Powered by PointCare</p>
        </div>
      </footer>
    </div>
  )
}
