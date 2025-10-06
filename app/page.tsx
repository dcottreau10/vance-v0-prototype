"use client"

import { useState } from "react"
import { MultiStateLanding } from "@/components/multi-state-landing"
import { SingleStateLanding } from "@/components/single-state-landing"
import { EligibilityQuestionnaire } from "@/components/eligibility-questionnaire"
import { EligibleResult } from "@/components/eligible-result"
import { IneligibleResult } from "@/components/ineligible-result"
import { AuthenticationScreen } from "@/components/authentication-screen"
import { EmailInput } from "@/components/email-input"
import { EmailOTP } from "@/components/email-otp"
import { PhoneInput } from "@/components/phone-input"
import { PhoneOTP } from "@/components/phone-otp"
import { SSOPlaceholder } from "@/components/sso-placeholder"
import { Dashboard } from "@/components/dashboard"
import { CompleteProfile } from "@/components/complete-profile"
import { ApplicationFlow } from "@/components/application-flow"

export type Screen =
  | "multi-state-landing"
  | "single-state-landing"
  | "eligibility-questionnaire"
  | "eligible-result"
  | "ineligible-result"
  | "authentication"
  | "email-input"
  | "email-otp"
  | "phone-input"
  | "phone-otp"
  | "sso-placeholder"
  | "dashboard"
  | "complete-profile"
  | "application-flow"

export type DashboardState = "initial" | "in-progress" | "completed" | "covered"

export type Language = "en" | "es" | "zh" | "vi" | "ar" | "ru" | "fr"

export type AppState = {
  currentScreen: Screen
  selectedState: string | null
  selectedClinic: string
  language: Language
  isAuthenticated: boolean
  dashboardState: DashboardState
  profileComplete: boolean
  email: string | null
  phone: string | null
  applicationProgress: number
  coverageStatus: "not-covered" | "covered"
  lastChecked: string | null
  nextCheck: string | null
  aidCode: string | null
  plan: string | null
  provider: string | null
  submittedDate: string | null
}

export default function Home() {
  const [appState, setAppState] = useState<AppState>({
    currentScreen: "multi-state-landing",
    selectedState: null,
    selectedClinic: "HealthFirst Clinic",
    language: "en",
    isAuthenticated: false,
    dashboardState: "initial",
    profileComplete: false,
    email: null,
    phone: null,
    applicationProgress: 0,
    coverageStatus: "not-covered",
    lastChecked: null,
    nextCheck: null,
    aidCode: null,
    plan: null,
    provider: null,
    submittedDate: null,
  })

  const navigateTo = (screen: Screen) => {
    setAppState((prev) => ({ ...prev, currentScreen: screen }))
  }

  const selectState = (state: string) => {
    setAppState((prev) => ({ ...prev, selectedState: state, currentScreen: "single-state-landing" }))
  }

  const setLanguage = (language: Language) => {
    setAppState((prev) => ({ ...prev, language }))
  }

  const authenticate = (method: "email" | "phone", value: string) => {
    setAppState((prev) => ({
      ...prev,
      isAuthenticated: true,
      [method]: value,
      currentScreen: "dashboard",
    }))
  }

  const completeProfile = () => {
    const now = new Date()
    const nextCheckDate = new Date(now.getTime() + 24 * 60 * 60 * 1000) // 24 hours later

    setAppState((prev) => ({
      ...prev,
      profileComplete: true,
      lastChecked: now.toLocaleString(),
      nextCheck: nextCheckDate.toLocaleString(),
      currentScreen: "dashboard",
    }))
  }

  const startApplication = () => {
    setAppState((prev) => ({
      ...prev,
      dashboardState: "in-progress",
      applicationProgress: 0,
      currentScreen: "application-flow",
    }))
  }

  const saveApplicationProgress = (progress: number) => {
    setAppState((prev) => ({
      ...prev,
      applicationProgress: progress,
      dashboardState: "in-progress",
      currentScreen: "dashboard",
    }))
  }

  const completeApplication = () => {
    const now = new Date()
    setAppState((prev) => ({
      ...prev,
      dashboardState: "completed",
      applicationProgress: 100,
      submittedDate: now.toLocaleDateString(),
      currentScreen: "dashboard",
    }))
  }

  const simulateCoverage = () => {
    setAppState((prev) => ({
      ...prev,
      dashboardState: "covered",
      coverageStatus: "covered",
      aidCode: "MC-12345",
      plan: "Medi-Cal Managed Care",
      provider: "Blue Shield Promise Health Plan",
    }))
  }

  const logout = () => {
    setAppState({
      currentScreen: "multi-state-landing",
      selectedState: null,
      selectedClinic: "HealthFirst Clinic",
      language: "en",
      isAuthenticated: false,
      dashboardState: "initial",
      profileComplete: false,
      email: null,
      phone: null,
      applicationProgress: 0,
      coverageStatus: "not-covered",
      lastChecked: null,
      nextCheck: null,
      aidCode: null,
      plan: null,
      provider: null,
      submittedDate: null,
    })
  }

  const renderScreen = () => {
    switch (appState.currentScreen) {
      case "multi-state-landing":
        return (
          <MultiStateLanding
            onSelectState={selectState}
            language={appState.language}
            onLanguageChange={setLanguage}
            clinicName={appState.selectedClinic}
          />
        )
      case "single-state-landing":
        return (
          <SingleStateLanding
            state={appState.selectedState!}
            onCheckEligibility={() => navigateTo("eligibility-questionnaire")}
            onStartApplication={() => navigateTo("authentication")}
            onBack={() => navigateTo("multi-state-landing")}
            language={appState.language}
            onLanguageChange={setLanguage}
            clinicName={appState.selectedClinic}
          />
        )
      case "eligibility-questionnaire":
        return (
          <EligibilityQuestionnaire
            onEligible={() => navigateTo("eligible-result")}
            onNotEligible={() => navigateTo("ineligible-result")}
            onBack={() => navigateTo("single-state-landing")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "eligible-result":
        return (
          <EligibleResult
            onStartApplication={() => navigateTo("authentication")}
            onCheckAgain={() => navigateTo("eligibility-questionnaire")}
            onBack={() => navigateTo("multi-state-landing")}
            language={appState.language}
            onLanguageChange={setLanguage}
            clinicName={appState.selectedClinic}
          />
        )
      case "ineligible-result":
        return (
          <IneligibleResult
            onApplyAnyway={() => navigateTo("authentication")}
            onCheckAgain={() => navigateTo("eligibility-questionnaire")}
            onBack={() => navigateTo("multi-state-landing")}
            language={appState.language}
            onLanguageChange={setLanguage}
            clinicName={appState.selectedClinic}
          />
        )
      case "authentication":
        return (
          <AuthenticationScreen
            onContinueWithEmail={() => navigateTo("email-input")}
            onContinueWithPhone={() => navigateTo("phone-input")}
            onContinueWithSSO={() => navigateTo("sso-placeholder")}
            onBack={() => navigateTo("single-state-landing")}
            language={appState.language}
            onLanguageChange={setLanguage}
            clinicName={appState.selectedClinic}
          />
        )
      case "email-input":
        return (
          <EmailInput
            onSendCode={(email) => {
              setAppState((prev) => ({ ...prev, email }))
              navigateTo("email-otp")
            }}
            onBack={() => navigateTo("authentication")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "email-otp":
        return (
          <EmailOTP
            email={appState.email!}
            onVerify={() => authenticate("email", appState.email!)}
            onBack={() => navigateTo("email-input")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "phone-input":
        return (
          <PhoneInput
            onSendCode={(phone) => {
              setAppState((prev) => ({ ...prev, phone }))
              navigateTo("phone-otp")
            }}
            onBack={() => navigateTo("authentication")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "phone-otp":
        return (
          <PhoneOTP
            phone={appState.phone!}
            onVerify={() => authenticate("phone", appState.phone!)}
            onBack={() => navigateTo("phone-input")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "sso-placeholder":
        return (
          <SSOPlaceholder
            onContinue={() => authenticate("email", "sso@example.com")}
            onBack={() => navigateTo("authentication")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "dashboard":
        return (
          <Dashboard
            state={appState.dashboardState}
            profileComplete={appState.profileComplete}
            onCompleteProfile={() => navigateTo("complete-profile")}
            onStartApplication={startApplication}
            onContinueApplication={() => navigateTo("application-flow")}
            applicationProgress={appState.applicationProgress}
            coverageStatus={appState.coverageStatus}
            lastChecked={appState.lastChecked}
            nextCheck={appState.nextCheck}
            aidCode={appState.aidCode}
            plan={appState.plan}
            provider={appState.provider}
            submittedDate={appState.submittedDate}
            language={appState.language}
            onLanguageChange={setLanguage}
            onLogout={logout}
            clinicName={appState.selectedClinic}
            onSimulateCoverage={simulateCoverage}
          />
        )
      case "complete-profile":
        return (
          <CompleteProfile
            onSave={completeProfile}
            onBack={() => navigateTo("dashboard")}
            language={appState.language}
            onLanguageChange={setLanguage}
          />
        )
      case "application-flow":
        return (
          <ApplicationFlow
            onComplete={completeApplication}
            onSaveProgress={saveApplicationProgress}
            onBack={() => navigateTo("dashboard")}
            language={appState.language}
            onLanguageChange={setLanguage}
            currentProgress={appState.applicationProgress}
          />
        )
      default:
        return (
          <MultiStateLanding
            onSelectState={selectState}
            language={appState.language}
            onLanguageChange={setLanguage}
            clinicName={appState.selectedClinic}
          />
        )
    }
  }

  return <div className="min-h-screen bg-background">{renderScreen()}</div>
}
