"use client"

import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface EligibilityPageProps {
  params: {
    state: string
  }
}

export default function EligibilityPage({ params }: EligibilityPageProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push(`/${params.state}`)
  }

  const handleEligible = () => {
    router.push(`/${params.state}/eligible`)
  }

  const handleNotEligible = () => {
    router.push(`/${params.state}/ineligible`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-black mb-6">
            Eligibility Questionnaire
          </h1>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              This is the Eligibility Questionnaire placeholder. In the full version, 
              you would answer questions about your income, household size, and other 
              factors to determine if you qualify for Medicaid.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            variant="default" 
            size="lg" 
            className="w-full"
            onClick={handleEligible}
          >
            I&apos;m Eligible
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full"
            onClick={handleNotEligible}
          >
            I&apos;m Not Eligible
          </Button>
        </div>
      </main>
    </div>
  )
}
