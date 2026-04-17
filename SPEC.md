# Exquisite Energies - Website Specification

## Project Overview
- **Project Name**: Exquisite Energies Website
- **Type**: Single-page React website
- **Core Functionality**: Professional landing page for a South Africa-based rubble removal company with lead generation focus
- **Target Users**: Homeowners, contractors, construction companies needing rubble removal and TLB hire services in South Africa

## UI/UX Specification

### Layout Structure

**Page Sections (in order):**
1. Sticky Navigation Bar
2. Hero Section
3. Services Section
4. Equipment Showcase
5. Service Areas
6. Why Choose Us
7. Testimonials
8. Quote Request Form
9. Contact Section
10. Footer

**Responsive Breakpoints:**
- Mobile: 0-479px
- Tablet: 480-767px
- Desktop: 768px+

### Visual Design

**Color Palette:**
- Primary Dark: `#1a1a1a` (charcoal)
- Primary: `#2d2d2d` (dark gray)
- Secondary: `#404040` (medium gray)
- Accent: `#f59e0b` (construction amber/yellow)
- Accent Hover: `#d97706` (darker amber)
- White: `#ffffff`
- Off-White: `#f9fafb`
- Light Gray: `#e5e7eb`
- Text Primary: `#1f2937`
- Text Secondary: `#6b7280`
- Success: `#10b981`

**Typography:**
- Headings: "Archivo Black", sans-serif (bold, industrial feel)
- Body: "DM Sans", sans-serif (clean, readable)
- Font Sizes:
  - Hero Title: 48px mobile / 64px desktop
  - Section Title: 32px mobile / 42px desktop
  - Subtitle: 18px mobile / 20px desktop
  - Body: 16px
  - Small: 14px

**Spacing System:**
- Section Padding: 80px vertical (mobile: 60px)
- Container Max Width: 1200px
- Card Padding: 24px
- Element Gap: 16px / 24px / 32px

**Visual Effects:**
- Card Shadow: `0 4px 20px rgba(0,0,0,0.08)`
- Card Hover Shadow: `0 8px 30px rgba(0,0,0,0.12)`
- Border Radius: 8px (cards), 6px (buttons), 4px (inputs)
- Transitions: 0.3s ease for all interactive elements

### Components

**1. Navigation Bar**
- Sticky position at top
- Logo on left
- Nav links center (Services, Equipment, Areas, About, Contact)
- CTA button right ("Get Quote")
- Mobile: Hamburger menu with slide-in drawer
- Background: Semi-transparent dark with blur on scroll
- Height: 70px desktop, 60px mobile

**2. Hero Section**
- Full viewport height minus nav
- Dark overlay background with industrial image
- Headline: "Reliable Rubble Removal & TLB Hire"
- Subheadline: "Fast, Affordable & Professional Site Clearing Services Across South Africa"
- Three CTA buttons: "Request Quote" (primary), "Call Now", "WhatsApp"
- Trust badges below CTAs: "Same-Day Service", "Affordable Rates", "Professional Team"

**3. Services Section**
- Section title with accent underline
- 4 service cards in grid (2x2 mobile, 4x1 desktop)
- Services:
  1. Rubble Removal - icon: truck, description: "Efficient debris and waste removal"
  2. Site Clearing - icon: layers, description: "Complete site preparation services"
  3. TLB Hire - icon: excavator, description: "Tractor-Loader-Backhoe machine rental"
  4. Waste Disposal - icon: recycle, description: "Eco-friendly disposal solutions"
- Cards have icon, title, description, subtle hover lift

**4. Equipment Showcase**
- Section title: "Our Fleet"
- Equipment cards in responsive grid
- Equipment:
  1. 8-Ton Tipper Truck - capacity: 8 cubic meters, "Ideal for large rubble jobs"
  2. 6-Ton Tipper Truck - capacity: 6 cubic meters, "Perfect for medium projects"
  3. TLB 4x4 Machine - capacity: 1.2 cubic meter bucket, "All-terrain capability"
  4. TLB 4x2 Machine - capacity: 1.0 cubic meter bucket, "Cost-effective option"
- Card content: Image placeholder, name, capacity badge, description, use cases

**5. Service Areas**
- Map-style section with area badges
- Coverage: Johannesburg, Pretoria, East Rand, West Rand, Midrand, Centurion, Surrounding Areas
- Clean badge layout showing service coverage

**6. Why Choose Us**
- 4-column feature grid (1x4 mobile, 2x2 tablet, 4x1 desktop)
- Features:
  1. Fast Response - "Same-day service available"
  2. Affordable Pricing - "Competitive rates, no hidden costs"
  3. Professional Team - "Experienced operators"
  4. Reliable Service - "On-time, every time"
- Each with icon and brief description

**7. Testimonials**
- Section title: "What Our Clients Say"
- 3 testimonial cards in carousel/grid
- Testimonial content: Quote, client name, service type
- Clean card with quote icon, text, author info

**8. Quote Request Form**
- Split layout: Form left, contact info right (stacked mobile)
- Form fields:
  - Name (text input)
  - Phone Number (tel input)
  - Location (text input)
  - Service Type (select dropdown)
  - Message (textarea)
- Submit button: "Request Free Quote"
- Side: Phone number, WhatsApp, business hours

**9. Contact Section**
- Dark background
- Quick contact buttons: Call, WhatsApp, Email
- Physical address placeholder
- Large WhatsApp floating button (bottom right)

**10. Footer**
- 4-column layout (stacked mobile)
- Columns: About, Quick Links, Services, Contact Info
- Social media links
- Copyright notice
- Dark background with subtle border top

### Interactive Behaviors

**Animations:**
- Fade-in on scroll for sections (using Chakra's motion)
- Button hover: scale(1.02), darker background
- Card hover: translateY(-4px), elevated shadow
- Nav background: solid on scroll
- Smooth scroll to sections on nav click

**Floating WhatsApp Button:**
- Fixed position bottom-right
- Green WhatsApp color
- Pulse animation on hover
- Opens WhatsApp with pre-filled message

**Mobile Quick Actions:**
- Fixed bottom bar on mobile with Call and WhatsApp buttons
- Appears only on mobile viewport

## Functionality Specification

### Core Features
1. Smooth scroll navigation to all sections
2. Mobile-responsive hamburger menu
3. Quote request form with validation
4. WhatsApp quick contact (opens wa.me link)
5. Phone call functionality (tel: link)
6. Form submission feedback (success message)
7. Skeleton loading states for images

### User Interactions
- Click nav links → smooth scroll to section
- Click "Request Quote" → scroll to form section
- Click "Call Now" → initiate phone call
- Click WhatsApp → open WhatsApp chat
- Submit form → show success message, clear form
- Hover cards → elevation effect

### Form Validation
- Name: Required, min 2 characters
- Phone: Required, valid format
- Location: Required
- Service Type: Required
- Message: Optional

## Technical Architecture

### File Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Equipment.jsx
│   ├── ServiceAreas.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── QuoteForm.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── FloatingWhatsApp.jsx
│   ├── MobileQuickCall.jsx
│   └── SectionHeading.jsx
├── theme/
│   └── index.js
├── App.jsx
└── main.jsx
```

### Dependencies
- React 18
- Vite
- @chakra-ui/react
- @emotion/react, @emotion/styled
- framer-motion
- react-icons

## Acceptance Criteria

1. ✓ Page loads without errors
2. ✓ All sections render correctly
3. ✓ Navigation is sticky and functional
4. ✓ Mobile menu opens/closes properly
5. ✓ All CTA buttons are clickable
6. ✓ Form validates and shows feedback
7. ✓ WhatsApp button opens correctly
8. ✓ Phone links work on mobile
9. ✓ Responsive design works on all breakpoints
10. ✓ Animations are smooth
11. ✓ Color scheme matches specification
12. ✓ Typography is consistent
13. ✓ No console errors
