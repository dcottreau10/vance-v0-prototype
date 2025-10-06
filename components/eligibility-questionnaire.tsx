"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import type { Language } from "@/app/page"

type Props = {
  onEligible: () => void
  onNotEligible: () => void
  onBack: () => void
  language: Language
  onLanguageChange: (language: Language) => void
}

export function EligibilityQuestionnaire({ onEligible, onNotEligible, onBack, language, onLanguageChange }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={onBack} className="p-2 hover:bg-accent rounded-md transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-1 bg-foreground rounded-full" />
              <div className="w-8 h-1 bg-muted rounded-full" />
              <div className="w-8 h-1 bg-muted rounded-full" />
            </div>
          </div>
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-2xl flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Eligibility Questionnaire</h1>

          <div className="bg-muted border border-border rounded-lg p-6 md:p-8 mb-8">
            <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
              This is the Eligibility Questionnaire placeholder. In the full version, you would answer questions about
              your income, household size, and other factors to determine if you qualify for Medicaid.
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto w-full">
            <Button size="lg" className="w-full h-14 text-base" onClick={onEligible}>
              I'm Eligible
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 text-base bg-transparent"
              onClick={onNotEligible}
            >
              I'm Not Eligible
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
