"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface SingleStatePageProps {
  params: {
    state: string
  }
}

const stateNames: { [key: string]: string } = {
  ca: "California",
  nv: "Nevada", 
  az: "Arizona"
}

export default function SingleStateLandingPage({ params }: SingleStatePageProps) {
  const router = useRouter()
  const stateName = stateNames[params.state] || params.state.toUpperCase()

  const handleCheckEligibility = () => {
    router.push(`/${params.state}/eligibility`)
  }

  const handleStartApplication = () => {
    router.push(`/${params.state}/auth`)
  }

  const handleBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        clinicName="Community Health Clinic" 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Community Health Clinic
          </h1>
          <h2 className="text-xl font-semibold text-foreground/80 mb-4">
            Medicaid Application Assistant
          </h2>
          <p className="text-muted-foreground mb-8">
            Check your eligibility and apply for Medicaid coverage in {stateName}
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full h-12"
            onClick={handleCheckEligibility}
          >
            Check Eligibility
          </Button>
          
          <Button 
            variant="default" 
            size="lg" 
            className="w-full h-12"
            onClick={handleStartApplication}
          >
            Start Application
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
