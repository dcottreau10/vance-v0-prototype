"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

interface PhoneVerifyPageProps {
  params: {
    state: string
  }
}

export default function PhoneVerifyPage({ params }: PhoneVerifyPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phone = searchParams.get("phone") || "(555) 123-4567"
  const countryCode = searchParams.get("code") || "+1"
  const [code, setCode] = useState("")

  const handleBack = () => {
    router.push(`/${params.state}/auth/phone`)
  }

  const handleVerify = () => {
    router.push(`/${params.state}/dashboard`)
  }

  const handleResend = () => {
    // In a real app, this would resend the code
    console.log("Resending code...")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">
            Enter verification code
          </h1>
          
          <p className="text-gray-600 mb-6">
            We sent a code to {countryCode} {phone}
          </p>
          
          <div className="flex gap-2 mb-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <Input
                key={index}
                type="text"
                maxLength={1}
                className="text-center text-lg font-mono"
                value={code[index] || ""}
                onChange={(e) => {
                  const newCode = code.split("")
                  newCode[index] = e.target.value
                  setCode(newCode.join(""))
                }}
              />
            ))}
          </div>
          
          <button
            onClick={handleResend}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Resend code
          </button>
        </div>

        <Button 
          variant="default" 
          size="lg" 
          className="w-full"
          onClick={handleVerify}
          disabled={code.length !== 6}
        >
          Verify
        </Button>
      </main>

      <Footer />
    </div>
  )
}
