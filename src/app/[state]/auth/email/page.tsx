"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface EmailAuthPageProps {
  params: {
    state: string
  }
}

export default function EmailAuthPage({ params }: EmailAuthPageProps) {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleBack = () => {
    router.push(`/${params.state}/auth`)
  }

  const handleSendCode = () => {
    router.push(`/${params.state}/auth/email/verify?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-4">
            Enter your email address
          </h1>
          
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          
          <p className="text-sm text-gray-600">
            We&apos;ll send you a verification code
          </p>
        </div>

        <Button 
          variant="default" 
          size="lg" 
          className="w-full"
          onClick={handleSendCode}
          disabled={!email}
        >
          Send Code
        </Button>
      </main>

      <Footer />
    </div>
  )
}
