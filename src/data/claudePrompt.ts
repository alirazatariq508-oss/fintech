export const CLAUDE_PROMPT_TEXT = `Act as an expert Full-Stack Senior Web Developer and UI/UX Designer. Build a complete, production-ready, highly responsive website for "Fintech Edge Institute" (https://fintechedgeinstitute.ezycourse.com/en).

--------------------------------------------------
1. OVERVIEW & BRAND IDENTITY
--------------------------------------------------
Fintech Edge Institute is an online learning platform specializing in practical education for FinTech, Blockchain, Web3, and AI.
The design must be sleek, modern, authoritative, and tech-forward, matching the exact color palette, structural sections, pages, and UI components of the reference website.

--------------------------------------------------
2. EXACT COLOR PALETTE & DESIGN SYSTEM
--------------------------------------------------
- Main Canvas Background Color: #e2e8ef (Soft light gray-blue background)
- Card / Container Surface: #ffffff (Pure White cards with subtle border-slate-200)
- Primary Accent & Buttons: #0fa1a7 (Teal blue/cyan for buttons & brand elements)
- Text Colors: Dark Slate (#0f172a / Black Dark)
- Secondary Accent (Emerald Green / Success / Badges): #10b981
- Highlight Accent (Warm Gold / Star Rating / Best Seller): #f59e0b
- Border Styling: 1px subtle hairline border with border-slate-200 / border-slate-300.
- Corner Radii: 16px for cards, 12px for standard inputs/buttons, 9999px pill for tags and badges.

--------------------------------------------------
3. EXACT PAGES & SECTION BREAKDOWN
--------------------------------------------------

PAGE 1: HOME PAGE (/)
1. Navigation Bar (Header)
   - Brand Logo: "Fintech Edge Institute" icon + wordmark.
   - Links: Home, All Courses, About Us, Blog / Community, Contact Us.
   - Interactive Elements: Search trigger modal, Dark/Light Mode toggle, Login & Sign Up buttons, and "Enroll Now / All Access" CTA button.

2. Hero Section
   - Headline: "Master FinTech, Blockchain, Web3 & AI"
   - Subtitle: "Bridge traditional financial systems with modern decentralized technologies through practical, industry-driven education and 1-on-1 mentorship."
   - Action Buttons: Primary "Explore Courses" (Cyan pulse effect), Secondary "All Access Bundle" (Glass outline).
   - Live Metrics Strip:
     * 5,000+ Enrolled Students
     * 98% Completion & Satisfaction Rate
     * 20+ Practical Modules
     * 100% Industry Mentorship
   - Hero Visual: Glowing Web3/FinTech interactive card preview featuring live badge "Airdrop Mastery Active".

3. Key Pillars / Why Choose Us
   - 5 Core Value Props:
     1. Industry-Driven Curriculum
     2. Hands-On Project-Based Learning
     3. Mentors from the Industry
     4. Flexible Learning Models
     5. Career & Placement Support

4. Top Featured Courses
   - Category Filter Tabs: All, Web3 & Blockchain, FinTech & AI, Trading & Airdrops.
   - Course Cards featuring:
     * High-res image thumbnail with category pill badge ("Best Seller", "Featured", "Hot")
     * Rating stars (e.g. 4.9 ★) and enrolled count
     * Title, Tagline, Instructor Avatar + Name
     * Duration hours, Lesson count
     * Dual Currency Pricing: USD ($99) and PKR (Rs 28,000)
     * Hover zoom effect & "Enroll Now" CTA button opening course details.

5. All-Access Bundle & 1-on-1 Coaching Banner
   - Standout gradient card spotlighting the "All Access Pass".
   - Includes: Unlimited lifetime course access, 1-on-1 private video coaching sessions, VIP Telegram/Discord community channel, emergency airdrop alerts, and CV/portfolio reviews.

6. Student Testimonials / Reviews
   - Grid or interactive carousel of student stories highlighting practical career transformation and earnings from Lahore, Karachi, and globally.

7. Latest Insights & Blog Section
   - Recent articles on Airdrop farming, Web3 quest platforms, and AI risk analysis in FinTech with reading time tags and "Read More" drawer.

8. Frequently Asked Questions (FAQ)
   - Smooth accordion items addressing course lifetime access, prerequisites, certificates, drip schedules, and payment methods (Bank, EasyPaisa, JazzCash, Cards, Crypto).

9. Final CTA Banner
   - "Ready to Transform Your Career in FinTech & Web3?" with instant "Get Started Today" button.

10. Footer
   - Company Overview, Quick Links, Direct Contact Info (Email: info@fintechedgeinstitute.com, Phone: +923111222595, Address: Lahore, Pakistan), Newsletter subscribe box, Social Media links (Facebook, LinkedIn, X/Twitter, Telegram, YouTube), and Copyright notice.

PAGE 2: ALL COURSES CATALOG (/courses)
- Search filter bar (Instant title/keyword search).
- Filters by Category, Skill Level (Beginner, Intermediate, Advanced), and Price Range.
- Interactive course grid displaying course cards with instant detail modal and enrollment actions.

PAGE 3: COURSE DETAIL VIEW (/course/:slug)
- Hero section with video trailer player simulation, student count, instructor badge, and star ratings.
- Tabbed Navigation:
  * Overview & Course Description
  * Syllabus / Curriculum with collapsible drip module lists (video lessons, durations, preview tags)
  * What You'll Learn checkmark grid
  * Instructor Bio
  * Student Reviews & Ratings
- Sticky Sidebar Checkout Card with price, guarantee badge, included perks, and "Enroll Now" trigger.

PAGE 4: ABOUT US (/about)
- Fintech Edge Institute mission, vision, and core educational philosophy.
- Impact stats and Leadership & Mentor Profiles.

PAGE 5: BLOG / COMMUNITY (/blog)
- Category filter tags (Airdrop Guides, Web3 Marketing, FinTech Trends, Career).
- Full article view with markdown formatting, social share buttons, and recommended reads.

PAGE 6: CONTACT US (/contact)
- Interactive contact form with real-time feedback (Name, Email, Subject, Phone, Message).
- Direct email (info@fintechedgeinstitute.com), phone (+923111222595), and location details (Lahore, Pakistan).

PAGE 7: AUTHENTICATION MODAL / PAGE (/login & /signup)
- Student Login and Registration with tab switching, password visibility toggle, and instant user profile state.

--------------------------------------------------
4. ANIMATIONS & HOVER EFFECTS (MOTION)
--------------------------------------------------
- Card Hover: Slight upward translate (-4px), scale (1.02), subtle cyan glow box-shadow (0 10px 25px -5px rgba(0, 229, 255, 0.25)).
- Buttons: Smooth color transition (duration-200), subtle pulse ring on focus, icon arrow shift right on hover (translate-x-1).
- Motion Fade-In: Use Motion / Framer Motion for scroll-triggered reveal animations on sections and cards (y: 20 to 0, opacity: 0 to 1).
- Accordions: Smooth height expansion/collapse animation for FAQ items.

--------------------------------------------------
5. TECHNICAL STACK & LIBRARIES
--------------------------------------------------
- React 18+ with TypeScript
- Tailwind CSS v4 / v3 for utility styling
- Lucide React for consistent vector iconography
- Motion (framer-motion) for smooth layout transitions
- Clean modular file structure (types, components, data files)
`;
