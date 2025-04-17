# Website Expansion Checklist (Updated)

## Pages to Add/Update
- [x] `/about` - Use content from about.md (pages/about.tsx)
- [x] `/services` - Reference services.md; do NOT generate individual service subpages yet (pages/services.tsx)
- [x] `/gallery` - Placeholder for gallery (pages/gallery.tsx)
- [x] `/contact` - Display business info:  
  - Rhinamic  
  - email: rhinamic@gmail.com  
  - phone: 2012544911  
  (pages/contact.tsx)
- [x] Global styling/layout applied to all above pages
- [x] Implement interactive expandable service categories (accordion) on Services page, with sub-services shown on click. (pages/services.tsx)
- [ ] Create individual pages for each sub-service under every main service category (pages/services/[slug].tsx)
- [ ] Create admin portal for project gallery management (login, add/edit/delete projects, file-based, password protected)

## Components/Navigation
- [x] Update `components/layout/Navbar.tsx`:  
  - Remove testimonials link  
  - Remove blog link  
  - Ensure links: Home, About, Services, Gallery, Contact only
- [x] Update `components/layout/Footer.tsx`:  
  - Add blog link to the footer

## Removed/Deferred
- [x] Do NOT create testimonials page or link
- [x] Do NOT generate individual service subpages yet (SEO optimization to come later)

## Workflow
1. Create/modify pages as above.
2. Update Navbar and Footer as above.
3. Confirm navigation works and each page is accessible.
4. Refine content/sections as needed.

---

**Mark each item as complete after implementation.**

---

**Approved by user:** YES

---

*Last updated: 2025-04-17*
