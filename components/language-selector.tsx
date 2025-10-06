"use client"

import type { Language } from "@/app/page"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"

type Props = {
  language: Language
  onLanguageChange: (language: Language) => void
  compact?: boolean
}

const languages = [
  { code: "en" as Language, name: "English" },
  { code: "es" as Language, name: "Español" },
  { code: "zh" as Language, name: "中文" },
  { code: "vi" as Language, name: "Tiếng Việt" },
  { code: "ar" as Language, name: "العربية" },
  { code: "ru" as Language, name: "Русский" },
  { code: "fr" as Language, name: "Français" },
]

export function LanguageSelector({ language, onLanguageChange, compact = false }: Props) {
  if (compact) {
    return (
      <div className="w-full">
        <span className="text-sm text-muted-foreground">Language</span>
      </div>
    )
  }

  return (
    <Select value={language} onValueChange={(value) => onLanguageChange(value as Language)}>
      <SelectTrigger className="w-[140px] h-10">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
