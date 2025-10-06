# CoverageCare Patient App Prototype

A comprehensive React/TypeScript prototype for the CoverageCare Patient App, built with Next.js, Tailwind CSS, and shadcn/ui design system.

## 🚀 Overview

This prototype demonstrates the complete user journey for a Medicaid application assistant app, featuring:

- **Multi-state support** (California, Nevada, Arizona)
- **Authentication flows** (email, phone, social SSO)
- **Eligibility screening** system
- **Application management** dashboard
- **Multi-language support** (7 languages including RTL)
- **Mobile-first responsive design**
- **Professional shadcn/ui styling**

## 🎨 Design System

Built with a complete shadcn/ui design system featuring:

- **Semantic color palette** with light/dark mode support
- **Consistent typography** and spacing
- **Professional shadows** and micro-interactions
- **Touch-friendly** 48px minimum touch targets
- **Accessible** focus states and keyboard navigation

## 📱 Screens & User Journey

### 1. **State Selection**
- Multi-state landing page
- Single-state focused landing

### 2. **Authentication**
- Email/Phone authentication
- Social SSO (Google, Apple, Facebook, X)
- OTP verification flows

### 3. **Eligibility & Application**
- Quick eligibility screening
- Full application process
- Document upload and management

### 4. **Dashboard States**
- Initial state
- Not covered
- In progress
- Submitted
- Covered

### 5. **Profile Management**
- Personal information
- Contact details
- Application status

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks
- **Routing**: Next.js dynamic routes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dcottreau10/vance-v0-prototype.git
cd vance-v0-prototype

# Install dependencies
npm install

# Start development server
npm run dev
```

### Quick Start Script

```bash
# Make the start script executable
chmod +x start.sh

# Run the quick start script
./start.sh
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [state]/           # Dynamic state routes
│   │   ├── auth/          # Authentication flows
│   │   ├── dashboard/     # Main dashboard
│   │   ├── eligibility/   # Eligibility screening
│   │   └── profile/       # Profile management
│   ├── globals.css        # Global styles + design tokens
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer components
│   └── ui/                # shadcn/ui components
└── lib/
    └── utils.ts           # Utility functions
```

## 🎯 Key Features

### Multi-Tenant Architecture
- Supports different clinic brandings
- State-specific rules and workflows
- Configurable clinic information

### Authentication System
- **Email/Phone OTP**: Secure verification flows
- **Social SSO**: Google, Apple, Facebook, X integration
- **Session Management**: Secure token handling

### Eligibility Screening
- Quick 5-question screening
- State-specific eligibility rules
- Immediate feedback and next steps

### Application Management
- **Multi-step forms**: Guided application process
- **Document upload**: Secure file handling
- **Progress tracking**: Real-time status updates
- **Save & resume**: Continue applications later

### Dashboard States
- **Initial**: Welcome and setup
- **Not Covered**: Eligibility guidance
- **In Progress**: Application tracking
- **Submitted**: Review and next steps
- **Covered**: Coverage management

## 🌍 Internationalization

Supports 7 languages with RTL support:

- English
- Español (Spanish)
- 中文 (Chinese)
- العربية (Arabic) - RTL
- Français (French)
- 한국어 (Korean)
- Português (Portuguese)

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Touch-friendly**: 48px minimum touch targets
- **Adaptive layouts**: Works on all screen sizes
- **Progressive enhancement**: Enhanced on larger screens

## 🎨 Design Tokens

Complete design system with:

- **Colors**: Semantic color palette with light/dark variants
- **Typography**: Consistent font scales and weights
- **Spacing**: 8px grid system
- **Shadows**: Subtle depth and hierarchy
- **Border Radius**: Consistent rounded corners
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript**: Strict type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Conventional Commits**: Standardized commit messages

## 📄 License

This project is part of the CoverageCare Patient App development for PointCare, LLC.

## 🤝 Contributing

This is a prototype for demonstration purposes. For production development, please refer to the main CoverageCare project documentation.

---

**Built with ❤️ for better healthcare access**