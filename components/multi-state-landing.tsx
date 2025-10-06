"use client"
import { Card } from "@/components/ui/card"
import { LanguageSelector } from "@/components/language-selector"
import type { Language } from "@/app/page"

type Props = {
  onSelectState: (state: string) => void
  language: Language
  onLanguageChange: (language: Language) => void
  clinicName: string
}

const states = [
  { name: "California", code: "CA" },
  { name: "Nevada", code: "NV" },
  { name: "Arizona", code: "AZ" },
]

export function MultiStateLanding({ onSelectState, language, onLanguageChange, clinicName }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background font-bold text-sm">HC</span>
            </div>
            <span className="font-semibold text-foreground">{clinicName}</span>
          </div>
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">{clinicName}</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
            Medicaid Application Assistant
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Check your eligibility and apply for Medicaid coverage
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Select your state</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {states.map((state) => (
            <Card
              key={state.code}
              className="p-6 hover:bg-accent cursor-pointer transition-colors border-2 border-border"
              onClick={() => onSelectState(state.name)}
            >
              <div className="text-center">
                <h4 className="text-xl font-semibold text-foreground">{state.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{state.code}</p>
              </div>
            </Card>
          ))}
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
