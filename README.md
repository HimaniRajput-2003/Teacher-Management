# 🧑‍🏫 Teacher Management Interface

A modern, responsive, and user-friendly Teacher Management Interface built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This project modernizes an outdated UI into a clean, scalable interface that includes dynamic schedules, qualification management, and smooth UX.

---

## 🔗 Live Demo

👉 [View Live on Vercel](https://your-vercel-link.vercel.app) *(Update this after deployment)*

---

## 🎥 Loom Video Walkthrough

🎬 [Watch the Walkthrough](https://www.loom.com/share/your-video-id) *(Update this after recording)*

---

## 🚀 Features

- ✨ **Modern UI/UX Design** using Tailwind & responsive layout
- 🧾 **Teacher Profile** section with contact and personal details
- ✅ **Add Qualifications** with validation and toast notifications
- 📅 **Weekly Schedule Grid** – Click-to-toggle availability
- 📱 **Mobile-First Design** – Works beautifully on all screen sizes
- 🔔 **Feedback System** – Success and error alerts using `react-hot-toast`
- ♿ **Accessibility** – WCAG-compliant colors, labels, and structure

---

## 🧰 Tech Stack

| Tech              | Purpose                         |
|-------------------|----------------------------------|
| **Next.js 14**     | React framework for routing & SSR |
| **TypeScript**     | Static typing                   |
| **Tailwind CSS**   | Utility-first styling           |
| **React Hot Toast**| User feedback                   |
| **Vercel**         | Deployment                      |

---

## 📁 Folder Structure (app/)

teacher-management-ui/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── Header.tsx
│ │ │ ├── Sidebar.tsx
│ │ │ ├── TeacherProfile.tsx
│ │ │ ├── ScheduleGrid.tsx
│ │ │ └── AddQualificationModal.tsx
│ │ ├── globals.css
│ │ └── layout.tsx
│ │ └── page.tsx
├── public/
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── README.md


## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/HimaniRajput-2003/Teacher-Management.git

# Navigate into the project directory
cd Teacher-Management

# Install dependencies
npm install

# Run the dev server
npm run dev