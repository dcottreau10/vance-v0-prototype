"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface PhoneAuthPageProps {
  params: {
    state: string
  }
}

export default function PhoneAuthPage({ params }: PhoneAuthPageProps) {
  const router = useRouter()
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+1")

  const handleBack = () => {
    router.push(`/${params.state}/auth`)
  }

  const handleSendCode = () => {
    router.push(`/${params.state}/auth/phone/verify?phone=${encodeURIComponent(phone)}&code=${encodeURIComponent(countryCode)}`)
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
            Enter your phone number
          </h1>
          
          <div className="flex gap-2 mb-4">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 py-3 border border-gray-300 rounded-md bg-white"
            >
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+33">+33</option>
            </select>
            <Input
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1"
            />
          </div>
          
          <p className="text-sm text-gray-600">
            We&apos;ll send you a verification code via SMS
          </p>
        </div>

        <Button 
          variant="default" 
          size="lg" 
          className="w-full"
          onClick={handleSendCode}
          disabled={!phone}
        >
          Send Code
        </Button>
      </main>

      <Footer />
    </div>
  )
}
