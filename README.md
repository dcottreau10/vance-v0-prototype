# CoverageCare Patient App - Prototype

This is a React/TypeScript/Tailwind prototype for the CoverageCare Patient App, demonstrating the complete user journey for Medicaid enrollment and coverage management.

## Features Implemented

### 🏠 Landing Pages
- **Multi-State Landing Page** (`/`) - Clinic branding with state selection (CA, NV, AZ)
- **Single-State Landing Page** (`/[state]`) - State-specific landing with eligibility check and application start options

### 🔍 Eligibility Flow
- **Eligibility Questionnaire** (`/[state]/eligibility`) - Placeholder questionnaire
- **Eligible Result Screen** (`/[state]/eligible`) - Success state with application start option
- **Ineligible Result Screen** (`/[state]/ineligible`) - Alternative path with "apply anyway" option

### 🔐 Authentication
- **Authentication Screen** (`/[state]/auth`) - Multiple SSO options (Google, Apple, Facebook, X) plus email/phone
- **Email Authentication** (`/[state]/auth/email`) - Email input with verification
- **Email Verification** (`/[state]/auth/email/verify`) - 6-digit OTP input
- **Phone Authentication** (`/[state]/auth/phone`) - Phone number input with country code
- **Phone Verification** (`/[state]/auth/phone/verify`) - 6-digit SMS code input
- **SSO Placeholder** (`/[state]/sso`) - Loading state for social login

### 📊 Dashboard States
- **Initial State** - Check coverage and start application options
- **Not Covered State** - Coverage status with last/next check times
- **Application In Progress** - Progress bar with continue option
- **Application Submitted** - Submitted status with new application option
- **Covered State** - Success with aid code, plan, and provider details

### 👤 Profile & Application
- **Profile Completion** (`/[state]/profile`) - Personal information form
- **Application Flow** (`/[state]/application`) - Placeholder multi-step form

## Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#ffffff)
- **Grays**: 50%, 75% grey for hierarchy
- **Status Colors**: Green (success), Red (error), Yellow (warning), Blue (info)

### Components
- Clean, modern design inspired by shadcn/ui
- Mobile-first responsive design
- 48px minimum touch targets
- Consistent spacing (8px, 16px, 24px, 32px scale)

### Typography
- Clean, readable fonts with clear hierarchy
- Sixth-grade reading level for accessibility
- Support for multiple languages and RTL

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the prototype directory:
```bash
cd /Users/denniscottreau/AI-PM/projects/vance/prototype
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## User Journey Demo

### Complete Flow
1. **Start**: Visit `/` (multi-state landing)
2. **Select State**: Click "California" → `/ca`
3. **Check Eligibility**: Click "Check Eligibility" → `/ca/eligibility`
4. **Get Result**: Click "I'm Eligible" → `/ca/eligible`
5. **Start Application**: Click "Start Application" → `/ca/auth`
6. **Authenticate**: Choose email → `/ca/auth/email`
7. **Enter Email**: Enter email → `/ca/auth/email/verify`
8. **Verify Code**: Enter 6-digit code → `/ca/dashboard`
9. **Complete Profile**: Click "Complete Profile" → `/ca/profile`
10. **Save Profile**: Fill form and save → `/ca/dashboard`
11. **Start Application**: Click "Start Application" → `/ca/application`
12. **Complete Application**: Click "Mark as Complete" → `/ca/dashboard`

### Dashboard States
Use the demo controls on the dashboard to switch between different states:
- **Initial**: New user experience
- **Not Covered**: Profile completed, no coverage
- **In Progress**: Application started but not finished
- **Submitted**: Application submitted, processing
- **Covered**: Successfully enrolled with coverage details

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom components inspired by shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useRouter)

## File Structure

```
src/
├── app/
│   ├── [state]/
│   │   ├── auth/
│   │   │   ├── email/
│   │   │   └── phone/
│   │   ├── dashboard/
│   │   ├── eligibility/
│   │   ├── profile/
│   │   └── application/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
└── lib/
    └── utils.ts
```

## Prototype Notes

### What's Included
- ✅ Complete user journey flow
- ✅ All 17 screens from design brief
- ✅ Mobile-first responsive design
- ✅ Interactive navigation
- ✅ Form interactions and validation
- ✅ Dashboard state management
- ✅ Language selector (UI only)
- ✅ Clinic branding integration

### What's Not Included (By Design)
- ❌ Real authentication or data storage
- ❌ Actual API integrations
- ❌ HIPAA compliance implementation
- ❌ Production-level security
- ❌ Real form validation or error handling
- ❌ Multi-language content (UI only)

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for 3G connections
- Mobile-first responsive design
- Minimal bundle size
- Fast loading times

## Accessibility

- WCAG 2.1 AA compliant design
- Keyboard navigation support
- High contrast themes
- Semantic HTML structure
- Screen reader friendly

---

**Note**: This is a prototype for demonstration purposes only. It does not include real functionality, data storage, or HIPAA compliance features required for production use.