# Rhinamic Landscape Design

A modern, professional website for Rhinamic Landscape Design — serving San Antonio, TX with expert landscaping, hardscaping, lighting, and more.

## Features

- **Public Website**
  - Home, About, Services, Gallery, Testimonials, and Contact pages
  - Responsive, mobile-friendly design
  - Project gallery with beautiful images
  - Modern contact form (with validation and success feedback)
  - SEO-friendly and fast-loading

- **Admin Portal**
  - Secure login for admin access
  - Project Gallery Dashboard: add new projects with image upload, service type, and description
  - Sidebar navigation with Home and Log Out options
  - Clean, easy-to-use dashboard UI

## Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- TypeScript for type safety
- Lucide React Icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Admin Portal

- Go to `/admin` to log in. (Default password: `rhinamic2024` — change this in production!)
- Access the Project Gallery Dashboard at `/admin/projects` to manage projects.
- Add new projects with images (uploads are local for MVP).
- Log out and return to the homepage from the sidebar.

## Project Structure

- `/pages` — Main Next.js pages (public and admin)
- `/components` — Reusable UI components and sections
- `/public/data/projects.json` — Project gallery data (edit for persistent changes)
- `/public` — Static assets (images, favicon, etc.)

## Customization

- **Services:** Edit `/components/sections/ServicesSection.tsx`
- **Projects:** Use the admin dashboard or edit `/public/data/projects.json`
- **Site Content:** Update text/images in the relevant components or pages

## Contact

For questions or support, email [rhinamic@gmail.com](mailto:rhinamic@gmail.com) or use the contact form on the site.

---

Built with ❤️ by the Rhinamic team.