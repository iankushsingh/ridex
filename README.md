# 🚗 RIDEX — All-in-One Vehicle Rental & Mobility Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ridex--phi.vercel.app-blue?style=for-the-badge&logo=vercel)](https://ridex-phi.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.12-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

**RIDEX** is an end-to-end vehicle booking, rental, and ride-hailing ecosystem designed for modern mobility. From daily city commutes (bikes, cars, SUVs) to heavy transport and logistics (trucks, vans), RIDEX seamlessly connects passengers, fleet partners, and administrators on a single platform.

🔗 **Live Application URL**: [https://ridex-phi.vercel.app/](https://ridex-phi.vercel.app/)

---

## 📸 Screenshots & Preview

<div align="center">
  <img src="rydex/public/snapshots/hero-preview.png" alt="RIDEX Hero Landing Page" width="100%" />
  <p><em>Hero Landing Section — Book Any Vehicle with Instant Location Search</em></p>
</div>

<br />

<div align="center">
  <img src="rydex/public/snapshots/fleet-preview.png" alt="RIDEX Vehicle Categories" width="100%" />
  <p><em>Vehicle Categories Fleet Overview — Bikes, Cars, SUVs, Vans & More</em></p>
</div>

---

## ✨ Key Features

### 👤 Customer Features
- **Instant Vehicle Search & Booking**: Search for nearby vehicles with interactive Leaflet maps and route previews.
- **Multi-Category Fleet**: Choose from Bikes, Comfort Cars, Premium SUVs, Vans, and Transport Trucks.
- **Secure Payments**: Integrated Razorpay & Stripe checkout workflows.
- **Live Ride Tracking**: Real-time GPS location tracking and status updates via WebSockets.
- **In-Ride Chat**: Instant two-way messaging between passenger and driver.
- **OTP Verification**: Secure pickup and drop-off OTP validation.

### 🚘 Partner / Vendor Portal
- **Guided Onboarding**: Step-by-step registration for vehicle details, document upload (Cloudinary), and banking setup.
- **Video KYC Verification**: Integrated ZEGO Cloud video rooms for identity verification.
- **Dynamic Pricing & Fleet Management**: Set per-km pricing, toggle vehicle availability, and review earnings analytics.
- **Ride Dispatch**: Receive, accept, or reject incoming ride requests in real-time.

### 🛡️ Admin Dashboard
- **Vendor Approval Workflow**: Review partner documents, inspect video KYC requests, and approve/reject applications.
- **Platform Analytics**: Comprehensive dashboard charts (Recharts) displaying total revenue, active rides, and fleet metrics.
- **Vehicle Audit**: Monitor registered fleet vehicles across all categories.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & UI** | Next.js 15 (App Router), React 19, Tailwind CSS v4, Lucide Icons, Framer Motion |
| **State Management** | Redux Toolkit, React-Redux |
| **Database & Auth** | MongoDB, Mongoose, NextAuth.js v5 (Google OAuth & Credentials with bcryptjs) |
| **Maps & Location** | Leaflet, React-Leaflet, OpenStreetMap GeoJSON |
| **Real-time & Video** | Socket.IO Client, ZEGO Cloud UIKit (Video KYC) |
| **Payments & Media** | Razorpay, Stripe, Cloudinary SDK, Nodemailer |
| **Deployment** | Vercel Serverless Architecture |

---

## 📁 Repository Structure

```text
Ridex/
├── README.md                      # Primary Project Documentation
├── package.json                   # Root Monorepo Configuration
├── vercel.json                    # Vercel Monorepo Output Directive
└── rydex/                         # Primary Next.js Application
    ├── public/
    │   └── snapshots/             # Screenshot previews
    ├── src/
    │   ├── app/                   # Next.js App Router (Routes & API Endpoints)
    │   │   ├── admin/             # Admin Control Center
    │   │   ├── api/               # Serverless API Routes
    │   │   ├── book/              # Booking Flow
    │   │   ├── checkout/          # Payment Checkout
    │   │   ├── partner/           # Vendor Portal & Onboarding
    │   │   ├── search/            # Vehicle Search & Map View
    │   │   └── video-kyc/         # ZEGO Cloud Video Room
    │   ├── components/            # Reusable React UI Components
    │   ├── lib/                   # Database & SDK Lazy Proxy Handlers
    │   ├── models/                # Mongoose Database Schemas
    │   └── redux/                 # Global Application State
    ├── next.config.ts             # Next.js Configuration
    └── package.json               # Frontend Dependencies
```

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- **Node.js**: `v20.x` or later
- **npm** or **bun**
- **MongoDB Database**: Connection URI (Atlas or local instance)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iankushsingh/ridex.git
   cd ridex
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file inside the `rydex/` directory:
   ```env
   # Database & Auth
   MONGODB_URL=mongodb+srv://your_user:your_password@cluster.mongodb.net/ridex
   AUTH_SECRET=your_nextauth_secret
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Payments
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # ZEGO Cloud (Video KYC)
   ZEGO_APP_ID=your_zego_app_id
   ZEGO_SERVER_SECRET=your_zego_server_secret
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

RIDEX is deployed on **Vercel**. To deploy your own instance:
1. Import the repository into your Vercel Account.
2. Set Environment Variables in your Vercel Project Settings.
3. Deploy!

Live Site: [https://ridex-phi.vercel.app/](https://ridex-phi.vercel.app/)
