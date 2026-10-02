// export const designSkill = [
//   { title: "PHOTOSHOP", value: 100 },
//   { title: "FIGMA", value: 95 },
//   { title: "ADOBE XD", value: 70 },
//   { title: "ADOBE ILLUSTRATOR", value: 80 },
//   { title: "UI/UX DESIGN", value: 90 },
// ];

export const developmentSkill = [
  { title: "HTML", value: 90 },
  { title: "CSS", value: 85 },
  { title: "JAVASCRIPT", value: 90 },
  { title: "TYPESCRIPT", value: 80 },
  { title: "REACT", value: 90 },
  { title: "NEXT.JS", value: 80 },
  { title: "TAILWIND CSS", value: 85 },
  { title: "BOOTSTRAP", value: 80 },
  { title: "DAISYUI", value: 75 },
  { title: "MATERIAL UI", value: 80 },
  { title: "REACT QUERY", value: 85 },
  { title: "FIREBASE", value: 75 },
  { title: "MERN STACK", value: 85 },
  { title: "NODE BASICS", value: 60 },
  { title: "GITHUB", value: 85 },
  { title: "API INTEGRATION", value: 80 },
];

export const navItems = [
  { title: "HOME", path: "#home" },
  { title: "FEATURES", path: "#features" },
  { title: "PORTFOLIO", path: "#portfolio" },
  { title: "RESUME", path: "#resume" },
  { title: "CONTACT", path: "#contact" },
];

export type Project = {
  id: number;
  category: string;
  title: string;
  image: string;
  link: string;
  linkLabel?: string; // Button text in the details dialog
  status?: string; // Optional badge, e.g. "In progress"
  description: string;
  features: string[];
  tech: string[];
};

export const portfolioData: Project[] = [
  {
    id: 1,
    category: "HEALTHCARE · WELLNESS",
    title: "Medilife Wellness Clinic",
    image: "/assets/images/projects/medilifeclinic.jpg",
    link: "https://medilifewellnessclinic.ae/en/",
    description:
      "Website for a DHA-licensed wellness clinic in Business Bay, Dubai. It presents longevity care, IV drips, hormone and weight-loss treatment, aesthetics, dermatology and dentistry, and turns visitors into bookings through WhatsApp and appointment calls to action.",
    features: [
      "Bilingual site in English and Arabic",
      "Services grouped into Wellness, Aesthetics and Medical care, each with its own page",
      "WhatsApp and Book an Appointment calls to action throughout",
      "SEO-focused page structure built around what patients search for",
      "Premium dark and gold design with smooth animations",
    ],
    tech: ["Next.js", "React", "SEO", "i18n"],
  },
  {
    id: 2,
    category: "HEALTHCARE · MIGRATION",
    title: "Medilife Global Healthcare",
    image: "/assets/images/projects/medilifeglobal.jpg",
    link: "https://salmon-coyote-626864.hostingersite.com/",
    linkLabel: "View Staging Site",
    status: "In progress",
    description:
      "Migrating Medilife Healthcare Group's website from WordPress to Next.js. The group offers home healthcare, clinics, pharmacy, medical tourism and air ambulance services across Dubai, London, Australia and India. The new site gives patients a clearer path to the right service.",
    features: [
      "Full rebuild of the existing WordPress site in Next.js",
      "Redesigned homepage that guides patients to the right healthcare service",
      "Multi-language support with a language switcher",
      "Book an appointment and WhatsApp contact on every page",
      "Faster load times and cleaner SEO than the WordPress version",
    ],
    tech: ["Next.js", "React", "MongoDB", "WordPress migration", "SEO"],
  },
  {
    id: 3,
    category: "SAAS APPLICATION",
    title: "StoreMate POS SaaS",
    image: "/assets/images/projects/storemate.jpg",
    link: "https://storemate-test.onrender.com/",
    description:
      "Cloud point-of-sale platform for running an entire retail business: sales, inventory, purchases, vendors, customers, ledgers and reports, across multiple stores, with a 15-day free trial.",
    features: [
      "Sales, purchases, returns and expense tracking",
      "Inventory and multi-store management",
      "Customer and vendor ledgers",
      "Live business dashboard and reports",
      "Invoice sharing over WhatsApp",
    ],
    tech: ["React", "Node.js", "MongoDB", "REST API"],
  },
  {
    id: 4,
    category: "ADMIN DASHBOARD",
    title: "E-Commerce Admin Dashboard",
    image: "/assets/images/projects/ecommerce.jpg",
    link: "https://e-commerce-admin-lovat.vercel.app/",
    description:
      "Admin panel for running an online store, with secure sign-in and tools for managing products and orders.",
    features: [
      "Admin login, sign-up and password recovery",
      "Product and order management",
      "Clean, responsive dashboard layout",
    ],
    tech: ["React", "REST API"],
  },
  {
    id: 5,
    category: "LEARNING PLATFORM",
    title: "Soofy Language Learning",
    image: "/assets/images/projects/soofiy.jpg",
    link: "https://soofiy-io-pi.vercel.app",
    description:
      "Platform that helps learners practise speaking a new language fluently, with new expressions, discussions and writing tools.",
    features: [
      "Landing page with a friendly, illustrated design",
      "Sections for new expressions, discussions and writing tools",
      "Sign-in and get-started onboarding flow",
    ],
    tech: ["React", "Responsive UI"],
  },
  {
    id: 6,
    category: "BUSINESS WEBSITE",
    title: "Nexzon Shipping & Sourcing",
    image: "/assets/images/projects/nexzon.jpg",
    link: "https://nexzon-shipping.vercel.app/",
    description:
      "Company website for a China sourcing and logistics business, presenting its shipping services and process and collecting quote requests.",
    features: [
      "Hero image slider",
      "Services and step-by-step process sections",
      "Request a quote form and contact details",
      "Live chat widget",
    ],
    tech: ["React", "Responsive UI"],
  },
  {
    id: 7,
    category: "SOCIAL PLATFORM",
    title: "Single Muslim Dating App",
    image: "/assets/images/dating.jpg",
    link: "https://single-muslim.vercel.app/",
    description:
      "Matchmaking platform for Muslim singles looking for a compatible partner.",
    features: [
      "Member profiles and sign-up",
      "Browse and match with other members",
      "Responsive design for mobile users",
    ],
    tech: ["React"],
  },
  {
    id: 8,
    category: "CHAT APPLICATION",
    title: "Real-Time Chat App",
    image: "/assets/images/chating.jpg",
    link: "https://chat-a-pp-xi.vercel.app",
    description:
      "Messaging app where users can sign in and chat with each other in real time.",
    features: [
      "Real-time one-to-one messaging",
      "User accounts and authentication",
      "Responsive chat interface for desktop and mobile",
    ],
    tech: ["React", "Firebase"],
  },
  {
    id: 9,
    category: "AUTHENTICATION",
    title: "Travelwise Login & Auth",
    image: "/assets/images/projects/auth.jpg",
    link: "https://auth-ten-chi.vercel.app/login",
    description:
      "Authentication flow for a travel app, covering login, sign-up and social sign-in with a polished, illustrated layout.",
    features: [
      "Login with remember me and show/hide password",
      "Social sign-in buttons for Facebook, Google and Apple",
      "Sign-up and forgot-password flows",
      "Form validation and responsive layout",
    ],
    tech: ["React", "Material UI"],
  },
];
