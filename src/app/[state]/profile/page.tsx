"use client"

import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ProfilePageProps {
  params: {
    state: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    ssn: "",
    medicaidId: ""
  })

  const handleBack = () => {
    router.push(`/${params.state}/dashboard`)
  }

  const handleSave = () => {
    // In a real app, this would save the profile
    console.log("Saving profile:", formData)
    router.push(`/${params.state}/dashboard`)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = formData.firstName && formData.lastName && formData.dateOfBirth && formData.ssn

  return (
    <div className="min-h-screen bg-white">
      <Header 
        showBackButton={true}
        onBack={handleBack}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">
            Your Profile
          </h1>
          <p className="text-gray-600">
            Update your information to check your coverage status
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <Input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Social Security Number *
              </label>
              <Input
                type="text"
                placeholder="XXX-XX-XXXX"
                value={formData.ssn}
                onChange={(e) => handleInputChange("ssn", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medicaid Subscriber ID (Optional)
              </label>
              <Input
                type="text"
                placeholder="Enter your Medicaid ID if you have one"
                value={formData.medicaidId}
                onChange={(e) => handleInputChange("medicaidId", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Button 
            variant="default" 
            size="lg" 
            className="w-full"
            onClick={handleSave}
            disabled={!isFormValid}
          >
            Save Profile
          </Button>
        </div>
      </main>
    </div>
  )
}
