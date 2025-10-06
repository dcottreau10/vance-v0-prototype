"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2 } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import type { Language } from "@/app/page"

type Props = {
  onContinue: () => void
  onBack: () => void
  language: Language
  onLanguageChange: (language: Language) => void
}

export function SSOPlaceholder({ onContinue, onBack, language, onLanguageChange }: Props) {
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
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Loader2 className="w-12 h-12 text-muted-foreground animate-spin" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Signing in...</h1>
          <p className="text-base text-muted-foreground">Redirecting to provider...</p>
        </div>

        <Button size="lg" className="w-full h-12" onClick={onContinue}>
          Continue
        </Button>
      </main>
    </div>
  )
}
