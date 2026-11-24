// ─────────────────────────────────────────────────────────────────────────────
// Central business data & configuration
// Replace placeholder values with real information when available.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name:      'I Square Spaces',
  tagline:   'Designing Spaces. Defining Lives.',
  shortDesc: 'A professional interior design firm crafting elegant, functional spaces for homes and businesses.',
  // ── Contact ─────────────────────────────────────────────────────────────
  phone:    '[PLACEHOLDER — Add phone number]',
  email:    '[PLACEHOLDER — Add email address]',
  address:  '[PLACEHOLDER — Add business address]',
  whatsapp: null,   // Set to phone number string to enable WhatsApp button
  // ── Social ───────────────────────────────────────────────────────────────
  social: {
    instagram: null,  // e.g. 'https://instagram.com/isquarespaces'
    facebook:  null,
    youtube:   null,
    linkedin:  null,
  },
  // ── SEO ──────────────────────────────────────────────────────────────────
  siteUrl: 'https://isquarespaces.com',
};

export const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Services',   path: '/services' },
  { label: 'Projects',   path: '/projects' },
  { label: 'Training',   path: '/training' },
  { label: 'Site Visit', path: '/site-visit' },
  { label: 'Contact',    path: '/contact' },
];

export const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    shortDesc: 'Transforming houses into cherished homes with personalised design that reflects your lifestyle.',
    icon: 'Home',
    features: ['Space planning & layout', 'Mood board & concept design', 'Material & finish selection', 'Furniture & décor curation', 'Complete project management'],
  },
  {
    id: 'commercial',
    title: 'Commercial Interior Design',
    shortDesc: 'Creating inspiring workplaces and commercial spaces that elevate brand identity and productivity.',
    icon: 'Building2',
    features: ['Brand-aligned design', 'Ergonomic workspace planning', 'Lighting & acoustics', 'Custom furniture solutions', 'Turnkey execution'],
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    shortDesc: 'Precision-crafted modular kitchens that balance aesthetics with everyday functionality.',
    icon: 'ChefHat',
    features: ['3D design visualisation', 'Premium cabinet systems', 'Countertop & backsplash selection', 'Appliance integration', 'Smart storage solutions'],
  },
  {
    id: 'bedroom-living',
    title: 'Bedroom & Living Room Design',
    shortDesc: 'Curated living and sleeping spaces designed for comfort, elegance and personal expression.',
    icon: 'Sofa',
    features: ['Custom wardrobe & storage', 'Upholstery & soft furnishings', 'Lighting design', 'False ceiling & wall panelling', 'Art & accessory styling'],
  },
  {
    id: 'complete-home',
    title: 'Complete Home Interiors',
    shortDesc: 'End-to-end interior solutions for new homes — from bare walls to a fully finished, move-in-ready home.',
    icon: 'KeyRound',
    features: ['Comprehensive space design', 'All room coordination', 'Turnkey delivery', 'Single point of contact', 'Post-handover support'],
  },
];

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Modern Minimalist Living Room',
    category: 'Residential',
    location: '[Location]',
    year: '2024',
    description: 'A serene living space defined by clean lines, a restrained palette and carefully selected materials that prioritise calm and function.',
    tags: ['Living Room', 'Minimalist', 'Residential'],
    // Replace with actual project images
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Contemporary Modular Kitchen',
    category: 'Kitchen',
    location: '[Location]',
    year: '2024',
    description: 'A high-specification modular kitchen with integrated appliances, handleless cabinetry and a dramatic waterfall island.',
    tags: ['Kitchen', 'Modular', 'Contemporary'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format',
    featured: true,
  },
  {
    id: 'p3',
    title: 'Executive Office Interior',
    category: 'Commercial',
    location: '[Location]',
    year: '2024',
    description: 'An executive office suite that communicates authority and calm through dark-toned millwork, leather accents and curated art.',
    tags: ['Office', 'Commercial', 'Executive'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format',
    featured: true,
  },
  {
    id: 'p4',
    title: 'Master Bedroom Retreat',
    category: 'Residential',
    location: '[Location]',
    year: '2023',
    description: 'A master bedroom conceived as a private retreat — layered textures, ambient lighting and bespoke joinery create a sanctuary.',
    tags: ['Bedroom', 'Luxury', 'Residential'],
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80&auto=format',
    featured: false,
  },
  {
    id: 'p5',
    title: 'Complete Home — 3BHK',
    category: 'Residential',
    location: '[Location]',
    year: '2023',
    description: 'A complete 3BHK interior delivered from concept to handover, with a consistent design language across all rooms.',
    tags: ['Complete Home', '3BHK', 'Residential'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&auto=format',
    featured: false,
  },
  {
    id: 'p6',
    title: 'Boutique Retail Interior',
    category: 'Commercial',
    location: '[Location]',
    year: '2023',
    description: 'A boutique retail environment designed to enhance the brand experience and encourage exploration through thoughtful spatial sequencing.',
    tags: ['Retail', 'Commercial', 'Boutique'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format',
    featured: false,
  },
];

export const PROJECT_CATEGORIES = ['All', 'Residential', 'Commercial', 'Kitchen'];

export const STATS = [
  { value: '150+', label: 'Projects Completed' },
  { value: '8+',   label: 'Years of Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5',    label: 'Design Specialisations' },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'I Square Spaces transformed our apartment into a home we are truly proud of. Every detail was considered and the execution was flawless.',
    author: '[Client Name]',
    role:   'Homeowner',
  },
  {
    id: 't2',
    quote: 'Our new office reflects exactly who we are as a brand. The team at I Square Spaces listened, understood and delivered beyond expectations.',
    author: '[Client Name]',
    role:   'Business Owner',
  },
  {
    id: 't3',
    quote: 'The modular kitchen they designed for us is both beautiful and incredibly practical. We use and love every inch of it.',
    author: '[Client Name]',
    role:   'Homeowner',
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Initial Consultation', desc: 'We begin with a detailed conversation to understand your vision, lifestyle, budget and timeline.' },
  { step: '02', title: 'Concept & Design',     desc: 'Our designers develop space plans, mood boards and 3D visualisations tailored to your brief.' },
  { step: '03', title: 'Selection & Approval', desc: 'We guide you through material, finish and furniture selections — presenting clear options.' },
  { step: '04', title: 'Execution',            desc: 'Our trusted contractors and craftspeople bring the design to life with precision and care.' },
  { step: '05', title: 'Handover',             desc: 'We walk you through the finished space and provide post-project support to ensure satisfaction.' },
];

export const TRAINING_HIGHLIGHTS = [
  'Industry-relevant curriculum developed by practising designers',
  'Hands-on project work from day one',
  'Software training: AutoCAD, SketchUp & 3ds Max',
  'Site visits and industry exposure',
  'Placement guidance and portfolio development',
  'Flexible batch timings',
];

export const SITE_VISIT_STEPS = [
  { step: '01', title: 'Submit Your Request',   desc: 'Fill in a brief about your space, project scope and preferred dates.' },
  { step: '02', title: 'Confirmation',          desc: 'Our team will contact you within 24 hours to confirm your site visit appointment.' },
  { step: '03', title: 'Site Visit',            desc: 'A designer visits your space, takes measurements and discusses your requirements.' },
  { step: '04', title: 'Free Quotation',        desc: 'You receive a detailed, transparent quotation within 48 hours of the site visit.' },
];
