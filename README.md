# 🌐 Ivahnenko Portfolio

A personal portfolio website to showcase creative services, selected projects, and contact information. Built with Next.js 15, Tailwind CSS, Framer Motion, and modern React libraries. Includes a validated contact form with email delivery via Resend.

## 📋 Project Overview

This website allows visitors to:

- Learn about services such as sculpture, 3D panels, and decorative molding.
- View a gallery of completed projects.
- Contact the creator via a styled and validated form.
- Enjoy responsive layout and smooth animations across devices.

## 🧠 Key Features

- ⚙️ Built with Next.js 15 using the App Router
- 🎨 Animated UI with Framer Motion
- ✅ Form validation using React Hook Form + Zod
- ✉️ Contact form powered by Resend API
- 🌙 (Planned) Dark mode support
- 📱 Fully responsive design

## 🛠️ Tech Stack

### Frontend:

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion – animations**
- **Keen Slider – project carousel**
- **React Hook Form + Zod – form handling and validation**

### Backend:

- **Resend – for handling email submissions**

## Installation & Setup

Follow the steps below to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/elena-savitskaya/ivahnenko-portfolio.git
```

cd ivahnenko-portfolio

### 2. Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### 3. Setup Environment Variables

Create a .env.local file with:

- RESEND_API_KEY=your_resend_api_key
- EMAIL_FROM=your_resend_email_from
- EMAIL_TO=your_resend_email_to

### 4. Run the app

To start the development server with Hot Module Replacement (HMR), run:

```bash
npm run dev
```
