"use client"

import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ApplicationPageProps {
  params: {
    state: string
  }
}

export default function ApplicationPage({ params }: ApplicationPageProps) {
  const router = useRouter()
  const [progress, setProgress] = useState(60)

  const handleBack = () => {
    router.push(`/${params.state}/dashboard`)
  }

  const handleMarkComplete = () => {
    router.push(`/${params.state}/dashboard`)
  }

  const handleSaveAndContinue = () => {
    router.push(`/${params.state}/dashboard`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-black">
              Medicaid Application
            </h1>
            <div className="text-sm text-gray-600">
              {progress}% complete
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              
              <h2 className="text-lg font-semibold text-black mb-4 text-center">
                Application Flow Placeholder
              </h2>
              
              <p className="text-gray-700 leading-relaxed">
                This is the Application Flow placeholder. In the full version, you would complete 
                a multi-step form with sections for Personal Information, Income Details, Household 
                Information, and Document Upload.
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={handleMarkComplete}
              >
                Mark as Complete
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full"
                onClick={handleSaveAndContinue}
              >
                Save and Continue Later
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
