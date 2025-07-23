# Service Page UI Consistency Checklist

## Overview
This checklist ensures all service pages maintain consistent design patterns, colors, and components for a cohesive user experience. We now use the `ServicesLayout` component to enforce consistency across all service pages.

## Implementation Guidelines

### For New Service Pages
1. **Use the ServicesLayout component** - All new service pages should use the `ServicesLayout` component
2. **Required Props** - Ensure all required props are provided:
   - `title`: Page title for meta tags
   - `description`: Meta description
   - `heroTitle`: Main heading text
   - `heroDescription`: Subheading text
   - `serviceFeatures`: Array of feature objects with title and description
   - `plans`: Array of service plan objects (if applicable)
   - `seasonalCare`: Array of seasonal care items (if applicable)
   - `faq`: Array of FAQ items
   - `ctaTitle`: Call-to-action heading
   - `ctaDescription`: Call-to-action description

### For Refactoring Existing Pages
1. **Migrate to ServicesLayout** - Replace existing layout code with the `ServicesLayout` component
2. **Content Migration** - Move existing content into the appropriate props
3. **Custom Components** - Use the `children` prop for any page-specific components
4. **Visual Verification** - Verify the page matches the design system after migration
5. **Testing** - Test all interactive elements (buttons, forms, etc.)

## Design Standards Reference
Based on analysis of `/pages/index.tsx` and home page components:

## Home Page Design Standards (Reference)
Based on analysis of `/pages/index.tsx` and home page components:

### Color Palette
- **Primary Purple**: `bg-rhinamic-primary` / `text-rhinamic-primary` (purple-800)
- **Dark Purple**: `bg-rhinamic-dark` (purple-900)
- **Lavender**: `bg-rhinamic-lavender` / `text-rhinamic-lavender` (purple-100)
- **Hero Background**: `bg-gradient-to-b from-purple-50 to-white`
- **Section Backgrounds**: `bg-white`, `bg-gray-50`
- **Text Colors**: `text-white`, `text-gray-700`, `text-gray-900`, `text-purple-900`

### Button Styles
- **Primary CTA**: `bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50`
- **Secondary CTA**: `bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 border border-white/40`
- **Phone Button**: `border-2 border-rhinamic-primary text-rhinamic-primary px-8 py-4 rounded-lg font-semibold hover:bg-rhinamic-lavender/20 transition-colors`

### Typography
- **Main Heading**: `text-5xl md:text-7xl font-bold text-white drop-shadow-md`
- **Section Headings**: `text-3xl font-bold text-purple-900 mb-8 text-center`
- **Subheadings**: `text-xl md:text-2xl text-white drop-shadow-md`
- **Body Text**: `text-xl text-gray-700`

### Layout Patterns
- **Container**: `container-custom max-w-4xl mx-auto px-4`
- **Hero Section**: `py-20 bg-gradient-to-b from-purple-50 to-white`
- **Content Sections**: `py-16 bg-gray-50` (alternating with `bg-white`)

---

## Service Pages Checklist

### Refactoring Status
- [ ] **All existing pages** - Update to use the new `ServicesLayout` component
- [ ] **New pages** - Implement using the `ServicesLayout` component from the start

### Completed Pages
- [x] **Drip Irrigation Systems** (`/services/drip-irrigation-systems.tsx`) - Converted to use ServicesLayout with standardized design

### Verification Process
After completing each page, the following verification steps must be performed:
1. **Visual Inspection**: Check that all UI elements match the design specifications
2. **Responsive Testing**: Verify layout on mobile, tablet, and desktop breakpoints
3. **Functionality Check**: Test all interactive elements (buttons, forms, etc.)
4. **Performance Audit**: Ensure page load time is optimized
5. **SEO Validation**: Verify meta tags and structured data
6. **Accessibility Check**: Ensure proper contrast and screen reader compatibility
7. **Cross-browser Testing**: Verify consistent rendering across major browsers

Mark the page as complete only after all verification steps pass.

### 15. Mulching Services (`/services/mulching-services.tsx`) (Needs Refactoring)
- [ ] **Migrate to ServicesLayout**: Convert to use the new layout component
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Move any unique components to children prop
- [ ] **Visual Verification**: Ensure design matches existing implementation
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Verify meta tags and structured data
- [ ] **Performance**: Check page load and responsiveness

### 16. Lawn Installation (`/services/lawn-installation.tsx`) (Needs Refactoring)
- [ ] **Migrate to ServicesLayout**: Convert to use the new layout component
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Move any unique components to children prop
- [ ] **Visual Verification**: Ensure design matches existing implementation
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Verify meta tags and structured data
- [ ] **Performance**: Check page load and responsiveness
- [ ] **Typography**: Ensure headings match home page font sizes and colors
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Ensure icons use consistent purple theme
- [ ] **Button Styles**: Update primary CTA to match home page button style
- [ ] **Phone Button**: Update to match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed

### 18. Fence Installation (`/services/fence-installation.tsx`) (Needs Refactoring)
- [ ] **Migrate to ServicesLayout**: Convert to use the new layout component
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Move any unique components to children prop
- [ ] **Visual Verification**: Ensure design matches existing implementation
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Verify meta tags and structured data
- [ ] **Performance**: Check page load and responsiveness
- [ ] **Typography**: Ensure headings match home page font sizes and colors
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Ensure icons use consistent purple theme
- [ ] **Button Styles**: Update primary CTA to match home page button style
- [ ] **Phone Button**: Update to match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed

### 19. Drainage Solutions (`/services/drainage-solutions.tsx`) (Needs Refactoring)
- [ ] **Migrate to ServicesLayout**: Convert to use the new layout component
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Move any unique components to children prop
- [ ] **Visual Verification**: Ensure design matches existing implementation
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Verify meta tags and structured data
- [ ] **Performance**: Check page load and responsiveness
- [ ] **Typography**: Ensure headings match home page font sizes and colors
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Ensure icons use consistent purple theme
- [ ] **Button Styles**: Update primary CTA to match home page button style
- [ ] **Phone Button**: Update to match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Ensure icons use consistent purple theme
- [ ] **Button Styles**: Update primary CTA to match home page button style
- [ ] **Phone Button**: Update to match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 20. Decks (`/services/decks.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets
- [ ] **Typography**: Follow home page heading and text styles
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Use consistent purple theme
- [ ] **Button Styles**: Match home page button styles
- [ ] **Phone Button**: Match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 21. Pergolas (`/services/pergolas.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets
- [ ] **Typography**: Follow home page heading and text styles
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Use consistent purple theme
- [ ] **Button Styles**: Match home page button styles
- [ ] **Phone Button**: Match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 15. Mulching Services (`/services/mulching-services.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 23. Cactus (`/services/cactus.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 29. Rusted Iron Walls (`/services/rusted-iron-walls.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets
- [ ] **Typography**: Ensure headings match home page font sizes and colors
- [ ] **Section Backgrounds**: Alternate between `bg-white` and `bg-gray-50`
- [ ] **Icon Colors**: Ensure icons use consistent purple theme
- [ ] **Button Styles**: Update primary CTA to match home page button style
- [ ] **Phone Button**: Update to match home page secondary button style

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 16. Landscape Installation (`/services/landscape-installation.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 21. Concrete Work (`/services/concrete-work.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed

### 22. Artificial Turf Installation (`/services/artificial-turf-installation.tsx`) (New Page)
- [ ] **Implement with ServicesLayout**: Use the new layout component from the start
- [ ] **Content Structure**: Organize content into required props
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets

**Verification Steps**
- [ ] Visual inspection matches design specs
- [ ] Responsive behavior verified on all device sizes
- [ ] All interactive elements function as expected
- [ ] Page load time is within acceptable limits
- [ ] SEO elements are properly implemented
- [ ] Accessibility requirements are met
- [ ] Cross-browser testing completed
- [ ] **COMPLETE**: ✅ All checks passed
- [ ] **Custom Components**: Add any unique components as children
- [ ] **Visual Design**: Ensure design matches brand guidelines
- [ ] **Testing**: Test all interactive elements
- [ ] **SEO**: Add meta tags and structured data
- [ ] **Performance**: Optimize images and assets

---

## Common Issues to Fix

### Color Inconsistencies
- [ ] Replace any green, blue, orange, or other colored buttons with purple theme
- [ ] Ensure all primary buttons use `bg-rhinamic-primary hover:bg-rhinamic-dark`
- [ ] Update icon colors to use purple theme consistently
- [ ] Fix any section backgrounds that don't follow the white/gray-50 pattern

### Button Style Issues
- [ ] Standardize button padding to `px-8 py-3` or `px-8 py-4`
- [ ] Add consistent hover effects and transitions
- [ ] Ensure phone buttons have proper border styling
- [ ] Add shadow effects to primary buttons

### Typography Issues
- [ ] Ensure main headings use `text-5xl font-bold text-purple-900`
- [ ] Section headings should be `text-3xl font-bold text-purple-900 mb-8 text-center`
- [ ] Body text should be `text-xl text-gray-700`
- [ ] Ensure proper text hierarchy and spacing

### Layout Issues
- [ ] Verify container classes use `container-custom max-w-4xl mx-auto px-4`
- [ ] Ensure proper section spacing with `py-16` or `py-20`
- [ ] Check responsive design with proper grid layouts
- [ ] Verify proper spacing between elements

---

## Progress Tracking

**Total Service Pages**: 29
**Completed**: 8
**Remaining**: 21

**Last Updated**: 2025-07-22
**Status**: Ready to begin systematic updates

---

## Notes
- Each service page should maintain its unique content while following the home page design patterns
- All changes should be tested for responsive design
- Phone number should consistently be (201) 254-4911
- Contact form integration should work properly on all pages
