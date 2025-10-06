"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Menu, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import type { Language, DashboardState } from "@/app/page"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Props = {
  state: DashboardState
  profileComplete: boolean
  onCompleteProfile: () => void
  onStartApplication: () => void
  onContinueApplication: () => void
  applicationProgress: number
  coverageStatus: "not-covered" | "covered"
  lastChecked: string | null
  nextCheck: string | null
  aidCode: string | null
  plan: string | null
  provider: string | null
  submittedDate: string | null
  language: Language
  onLanguageChange: (language: Language) => void
  onLogout: () => void
  clinicName: string
  onSimulateCoverage: () => void
}

export function Dashboard({
  state,
  profileComplete,
  onCompleteProfile,
  onStartApplication,
  onContinueApplication,
  applicationProgress,
  coverageStatus,
  lastChecked,
  nextCheck,
  aidCode,
  plan,
  provider,
  submittedDate,
  language,
  onLanguageChange,
  onLogout,
  clinicName,
  onSimulateCoverage,
}: Props) {
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 hover:bg-accent rounded-md transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <LanguageSelector language={language} onLanguageChange={onLanguageChange} compact />
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Dashboard</h1>

        <div className="space-y-4">
          {/* Initial State - Check Coverage and Start Application */}
          {state === "initial" && (
            <>
              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Check Coverage</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {profileComplete
                        ? "Check your current Medicaid coverage status"
                        : "Complete your profile to check your current Medicaid coverage status"}
                    </p>
                    {!profileComplete && <Button onClick={onCompleteProfile}>Complete Profile</Button>}
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Start Application</h3>
                    <p className="text-sm text-muted-foreground mb-4">Begin your Medicaid application process</p>
                    <Button onClick={onStartApplication}>Start Application</Button>
                  </div>
                </div>
              </Card>
            </>
          )}

          {/* In Progress State */}
          {state === "in-progress" && (
            <>
              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Coverage Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Status:</span>
                        <span className="text-sm text-muted-foreground">Not Covered</span>
                      </div>
                      {lastChecked && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Last checked:</span>
                          <span className="text-sm text-muted-foreground">{lastChecked}</span>
                        </div>
                      )}
                      {nextCheck && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Next check:</span>
                          <span className="text-sm text-muted-foreground">{nextCheck}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Application Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Status:</span>
                        <span className="text-sm text-muted-foreground">In Progress</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{applicationProgress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-foreground h-2 rounded-full transition-all"
                            style={{ width: `${applicationProgress}%` }}
                          />
                        </div>
                      </div>
                      <Button onClick={onContinueApplication} className="mt-2">
                        Continue Application
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}

          {/* Completed State */}
          {state === "completed" && (
            <>
              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Coverage Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Status:</span>
                        <span className="text-sm text-muted-foreground">Not Covered</span>
                      </div>
                      {lastChecked && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Last checked:</span>
                          <span className="text-sm text-muted-foreground">{lastChecked}</span>
                        </div>
                      )}
                      {nextCheck && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Next check:</span>
                          <span className="text-sm text-muted-foreground">{nextCheck}</span>
                        </div>
                      )}
                    </div>
                    <Button onClick={onSimulateCoverage} variant="outline" className="mt-4 bg-transparent" size="sm">
                      Simulate Coverage (Demo)
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Application Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Status:</span>
                        <span className="text-sm text-muted-foreground">Submitted</span>
                      </div>
                      {submittedDate && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Submitted on:</span>
                          <span className="text-sm text-muted-foreground">{submittedDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Start New Application</h3>
                    <p className="text-sm text-muted-foreground mb-4">Need to submit another application?</p>
                    <Button variant="outline" onClick={onStartApplication}>
                      Start New Application
                    </Button>
                  </div>
                </div>
              </Card>
            </>
          )}

          {/* Covered State */}
          {state === "covered" && (
            <>
              <Card className="p-6 border-2 border-foreground bg-accent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Coverage Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Status:</span>
                        <span className="text-sm font-semibold text-foreground">Covered ✓</span>
                      </div>
                      {aidCode && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Aid Code:</span>
                          <span className="text-sm text-foreground">{aidCode}</span>
                        </div>
                      )}
                      {plan && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Plan:</span>
                          <span className="text-sm text-foreground">{plan}</span>
                        </div>
                      )}
                      {provider && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Provider:</span>
                          <span className="text-sm text-foreground">{provider}</span>
                        </div>
                      )}
                      {lastChecked && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Last checked:</span>
                          <span className="text-sm text-muted-foreground">{lastChecked}</span>
                        </div>
                      )}
                      {nextCheck && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Next check:</span>
                          <span className="text-sm text-muted-foreground">{nextCheck}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Application Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Status:</span>
                        <span className="text-sm text-muted-foreground">Submitted</span>
                      </div>
                      {submittedDate && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Submitted on:</span>
                          <span className="text-sm text-muted-foreground">{submittedDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Start New Application</h3>
                    <p className="text-sm text-muted-foreground mb-4">Need to submit another application?</p>
                    <Button variant="outline" onClick={onStartApplication}>
                      Start New Application
                    </Button>
                  </div>
                </div>
              </Card>
            </>
          )}
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
