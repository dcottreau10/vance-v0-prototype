"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface AuthPageProps {
  params: {
    state: string
  }
}

export default function AuthPage({ params }: AuthPageProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
  }

  const handleSSO = (provider: string) => {
    router.push(`/${params.state}/sso?provider=${provider}`)
  }

  const handleEmail = () => {
    router.push(`/${params.state}/auth/email`)
  }

  const handlePhone = () => {
    router.push(`/${params.state}/auth/phone`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">
            Create Account or Sign In
          </h1>
          <p className="text-gray-600">
            Get help with your Medicaid application
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full justify-start"
            onClick={() => handleSSO("google")}
          >
            <div className="w-5 h-5 bg-blue-500 rounded mr-3"></div>
            Continue with Google
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full justify-start"
            onClick={() => handleSSO("apple")}
          >
            <div className="w-5 h-5 bg-black rounded mr-3"></div>
            Continue with Apple
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full justify-start"
            onClick={() => handleSSO("facebook")}
          >
            <div className="w-5 h-5 bg-blue-600 rounded mr-3"></div>
            Continue with Facebook
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full justify-start"
            onClick={() => handleSSO("x")}
          >
            <div className="w-5 h-5 bg-black rounded mr-3"></div>
            Continue with X
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full justify-start"
            onClick={handleEmail}
          >
            <div className="w-5 h-5 bg-gray-500 rounded mr-3"></div>
            Continue with Email
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full justify-start"
            onClick={handlePhone}
          >
            <div className="w-5 h-5 bg-gray-500 rounded mr-3"></div>
            Continue with Phone
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
