"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface EligiblePageProps {
  params: {
    state: string
  }
}

export default function EligiblePage({ params }: EligiblePageProps) {
  const router = useRouter()

  const handleStartApplication = () => {
    router.push(`/${params.state}/auth`)
  }

  const handleCheckAgain = () => {
    router.push(`/${params.state}/eligibility`)
  }

  const handleBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        showBackButton={false}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
          </div>
          
          <h1 className="text-2xl font-bold text-black mb-4">
            You&apos;re Eligible!
          </h1>
          
          <p className="text-gray-700 mb-8">
            Based on your responses, you appear to qualify for Medicaid coverage.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="default" 
            size="lg" 
            className="w-full"
            onClick={handleStartApplication}
          >
            Start Application
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full"
            onClick={handleCheckAgain}
          >
            Check Again
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
