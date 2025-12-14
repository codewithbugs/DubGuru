# Dubbinger - AI Video Dubbing Platform (Frontend Prototype)

This is a **Frontend-Only Prototype** for Dubbinger, an AI-powered SaaS platform for video dubbing and caption generation.

## 🚀 Quick Start

To run this application locally:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5000`.

## 📂 Project Structure

-   `client/src/pages/`: Contains all route components.
    -   `Home.tsx`: Main landing page.
    -   `Dashboard.tsx`: User dashboard overview.
    -   `captions/`: Generate Captions wizard flow.
    -   `dubbing/`: AI Dubbing studio interface.
    -   `auth/`: Login and Signup pages.
    -   `Pricing.tsx`: SaaS pricing tiers.
    -   `Enterprise.tsx`: Enterprise on-prem solutions page.
-   `client/src/components/layout/`:
    -   `DashboardLayout.tsx`: Sidebar navigation layout for the app.
    -   `Navbar.tsx`: Top navigation for public pages.

## 🎨 Design System

-   **Framework**: React + Tailwind CSS v4
-   **Theme**: Dark-First "Cyberpunk/Studio" Aesthetic.
-   **Typography**:
    -   Headings: `Outfit`
    -   Body: `Inter`
    -   Monospace: `JetBrains Mono`
-   **Colors**:
    -   Primary: Electric Purple (`#8b5cf6`)
    -   Accent: Neon Cyan (`#06b6d4`)
    -   Background: Deep Dark Blue (`#0f172a`)

## 🛠 Features Implemented (Mockup)

1.  **Caption Generation**: Multi-step wizard (Upload -> Configure -> Processing -> Edit).
2.  **AI Dubbing**: Studio interface for voice cloning and translation.
3.  **Authentication**: Mock login/signup flows.
4.  **Responsive Design**: Mobile-friendly sidebar and layouts.
