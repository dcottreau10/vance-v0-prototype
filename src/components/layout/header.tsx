"use client"

import { Button } from "@/components/ui/button"
import { Globe, Menu } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  showMenu?: boolean
  showBackButton?: boolean
  onBack?: () => void
  onMenuClick?: () => void
  clinicName?: string
}

export function Header({ 
  showMenu = false, 
  showBackButton = false, 
  onBack, 
  onMenuClick,
  clinicName = "Community Health Clinic"
}: HeaderProps) {
  const [language, setLanguage] = useState("English")

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <header className="flex items-center justify-between p-4 border-b border-border bg-background">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button variant="ghost" size="icon" onClick={onBack} className="h-9 w-9">
            ←
          </Button>
        )}
        {clinicName && !showBackButton && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-primary">CHC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">{clinicName}</span>
          </div>
        )}
        {showBackButton && !clinicName && (
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-primary">CHC</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {showMenu && (
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="h-9 w-9">
            <Menu className="h-4 w-4" />
          </Button>
        )}
        
        <div className="relative">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="appearance-none bg-background border border-input rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-ring shadow-sm"
          >
            <option value="English">English</option>
            <option value="Español">Español</option>
            <option value="中文">中文</option>
            <option value="العربية">العربية</option>
          </select>
          <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>
    </header>
  )
}
