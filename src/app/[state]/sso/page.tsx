"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"

interface SSOPageProps {
  params: {
    state: string
  }
}

export default function SSOPage({ params }: SSOPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const provider = searchParams.get("provider") || "Provider"

  const handleContinue = () => {
    router.push(`/${params.state}/dashboard`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        showBackButton={false}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center animate-spin">
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-black mb-4">
            Signing in...
          </h1>
          
          <p className="text-gray-600">
            Redirecting to {provider}...
          </p>
        </div>

        <Button 
          variant="default" 
          size="lg" 
          className="w-full"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </main>

      <Footer showPoweredBy={false} />
    </div>
  )
}
