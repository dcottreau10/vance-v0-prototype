"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const states = [
  { name: "California", code: "CA" },
  { name: "Nevada", code: "NV" },
  { name: "Arizona", code: "AZ" },
]

export default function MultiStateLandingPage() {
  const router = useRouter()

  const handleStateSelect = (stateCode: string) => {
    router.push(`/${stateCode.toLowerCase()}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header clinicName="Community Health Clinic" />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Community Health Clinic
          </h1>
          <h2 className="text-xl font-semibold text-foreground/80 mb-4">
            Medicaid Application Assistant
          </h2>
          <p className="text-muted-foreground mb-8">
            Check your eligibility and apply for Medicaid coverage
          </p>
          
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Select your state
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {states.map((state) => (
            <Card key={state.code} className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-0 justify-start"
                  onClick={() => handleStateSelect(state.code)}
                >
                  <div className="text-left">
                    <div className="text-lg font-semibold text-foreground">
                      {state.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {state.code}
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}