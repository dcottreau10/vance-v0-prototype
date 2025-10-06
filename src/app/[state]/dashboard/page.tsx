"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface DashboardPageProps {
  params: {
    state: string
  }
}

type DashboardState = "initial" | "not-covered" | "in-progress" | "submitted" | "covered"

export default function DashboardPage({ params }: DashboardPageProps) {
  const router = useRouter()
  const [dashboardState, setDashboardState] = useState<DashboardState>("initial")

  const handleCheckCoverage = () => {
    router.push(`/${params.state}/profile`)
  }

  const handleStartApplication = () => {
    router.push(`/${params.state}/application`)
  }

  const handleContinueApplication = () => {
    router.push(`/${params.state}/application`)
  }

  const handleStartNewApplication = () => {
    router.push(`/${params.state}/application`)
  }

  const handleMenuClick = () => {
    // In a real app, this would show a menu
    console.log("Menu clicked")
  }

  const renderInitialState = () => (
    <div className="space-y-4">
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">📋</span>
            </div>
            Check Coverage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Complete your profile to check your current Medicaid coverage status
          </p>
          <Button 
            variant="default" 
            className="w-full h-10"
            onClick={handleCheckCoverage}
          >
            Complete Profile
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">📝</span>
            </div>
            Start Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Begin your Medicaid application process
          </p>
          <Button 
            variant="outline" 
            className="w-full h-10"
            onClick={handleStartApplication}
          >
            Start Application
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderNotCoveredState = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
              ❌
            </div>
            Coverage Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-600 mb-2">Not Covered</div>
            <div className="text-sm text-gray-600 mb-1">
              Last checked: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm text-gray-600">
              Next check: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleCheckCoverage}
          >
            Check Again
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              📝
            </div>
            Start Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Begin your Medicaid application process
          </p>
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={handleStartApplication}
          >
            Start Application
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderInProgressState = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
              ❌
            </div>
            Coverage Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-600 mb-2">Not Covered</div>
            <div className="text-sm text-gray-600 mb-1">
              Last checked: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm text-gray-600">
              Next check: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
              ⏳
            </div>
            Application Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-yellow-600 mb-2">In Progress</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="text-sm text-gray-600">60% complete</div>
          </div>
          <Button 
            variant="default" 
            className="w-full"
            onClick={handleContinueApplication}
          >
            Continue Application
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderSubmittedState = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
              ❌
            </div>
            Coverage Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-red-600 mb-2">Not Covered</div>
            <div className="text-sm text-gray-600 mb-1">
              Last checked: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm text-gray-600">
              Next check: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              📄
            </div>
            Application Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-600 mb-2">Submitted</div>
            <div className="text-sm text-gray-600">
              Submitted on {new Date().toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={handleStartNewApplication}
          >
            Start New Application
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderCoveredState = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
              ✅
            </div>
            Coverage Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-green-600 mb-2">Covered</div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Aid Code:</span> ABC123</div>
              <div><span className="font-medium">Plan:</span> Medi-Cal</div>
              <div><span className="font-medium">Provider:</span> HealthNet</div>
              <div><span className="font-medium">Last checked:</span> {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</div>
              <div><span className="font-medium">Next check:</span> {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              📄
            </div>
            Application Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-600 mb-2">Submitted</div>
            <div className="text-sm text-gray-600">
              Submitted on {new Date().toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={handleStartNewApplication}
          >
            Start New Application
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderDashboardContent = () => {
    switch (dashboardState) {
      case "not-covered":
        return renderNotCoveredState()
      case "in-progress":
        return renderInProgressState()
      case "submitted":
        return renderSubmittedState()
      case "covered":
        return renderCoveredState()
      default:
        return renderInitialState()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        clinicName="Community Health Clinic"
        showMenu={true}
        onMenuClick={handleMenuClick}
      />
      
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Community Health Clinic
          </h1>
          <p className="text-muted-foreground">
            Medicaid Application Dashboard
          </p>
        </div>

        {renderDashboardContent()}

        {/* State controls for demo */}
        <Card className="mt-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Demo Controls:</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={() => setDashboardState("initial")}>Initial</Button>
              <Button size="sm" variant="outline" onClick={() => setDashboardState("not-covered")}>Not Covered</Button>
              <Button size="sm" variant="outline" onClick={() => setDashboardState("in-progress")}>In Progress</Button>
              <Button size="sm" variant="outline" onClick={() => setDashboardState("submitted")}>Submitted</Button>
              <Button size="sm" variant="outline" onClick={() => setDashboardState("covered")}>Covered</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
