"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Chrome, Apple, Facebook } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import type { Language } from "@/app/page"

type Props = {
  onContinueWithEmail: () => void
  onContinueWithPhone: () => void
  onContinueWithSSO: () => void
  onBack: () => void
  language: Language
  onLanguageChange: (language: Language) => void
  clinicName: string
}

export function AuthenticationScreen({
  onContinueWithEmail,
  onContinueWithPhone,
  onContinueWithSSO,
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
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-md flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Create Account or Sign In</h1>
          <p className="text-base text-muted-foreground">Get help with your Medicaid application</p>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 justify-start gap-3 bg-transparent"
            onClick={onContinueWithSSO}
          >
            <Chrome className="w-5 h-5" />
            <span>Continue with Google</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 justify-start gap-3 bg-transparent"
            onClick={onContinueWithSSO}
          >
            <Apple className="w-5 h-5" />
            <span>Continue with Apple</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 justify-start gap-3 bg-transparent"
            onClick={onContinueWithSSO}
          >
            <Facebook className="w-5 h-5" />
            <span>Continue with Facebook</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 justify-start gap-3 bg-transparent"
            onClick={onContinueWithSSO}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>Continue with X</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 justify-start gap-3 bg-transparent"
            onClick={onContinueWithEmail}
          >
            <Mail className="w-5 h-5" />
            <span>Continue with Email</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 justify-start gap-3 bg-transparent"
            onClick={onContinueWithPhone}
          >
            <Phone className="w-5 h-5" />
            <span>Continue with Phone</span>
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
