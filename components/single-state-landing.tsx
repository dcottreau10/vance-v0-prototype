"use client"

import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import type { Language } from "@/app/page"

type Props = {
  state: string
  onCheckEligibility: () => void
  onStartApplication: () => void
  onBack: () => void
  language: Language
  onLanguageChange: (language: Language) => void
  clinicName: string
}

export function SingleStateLanding({
  state,
  onCheckEligibility,
  onStartApplication,
  onBack,
  language,
  onLanguageChange,
  clinicName,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background font-bold text-sm">HC</span>
            </div>
            <span className="font-semibold text-foreground">{clinicName}</span>
          </button>
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-2xl flex flex-col justify-center">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">{clinicName}</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
            Medicaid Application Assistant
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-pretty mb-2">
            Check your eligibility and apply for Medicaid coverage
          </p>
          <p className="text-sm text-muted-foreground">{state}</p>
        </div>

        <div className="space-y-4 max-w-md mx-auto w-full">
          <Button
            variant="outline"
            size="lg"
            className="w-full h-14 text-base bg-transparent"
            onClick={onCheckEligibility}
          >
            Check Eligibility
          </Button>
          <Button size="lg" className="w-full h-14 text-base" onClick={onStartApplication}>
            Start Application
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
