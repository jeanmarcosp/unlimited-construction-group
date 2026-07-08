// Single source of truth for all site content, in English (en) and Spanish (es).
//
// - `business` holds language-neutral facts (phone, address, license, etc.).
// - `content.en` / `content.es` hold all translatable copy.
// - Components read the active language via the useLang() hook (see src/i18n).
//
// To edit copy: change the matching string in BOTH `en` and `es`.

import {
  Building2,
  HardHat,
  Home,
  Layers,
  Wrench,
  ShieldCheck,
  Ruler,
  PanelsTopLeft,
  Droplets,
  ClipboardList,
  Users,
  TreePine,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Language-neutral business facts
// ---------------------------------------------------------------------------
export const business = {
  name: 'Unlimited Construction Group',
  shortName: 'UCG',
  established: 2000,
  license: 'CGC1524964',
  phone: '(305) 978-2996',
  phoneHref: 'tel:+13059782996',
  email: 'info@ucgroupfl.com',
  emailHref: 'mailto:info@ucgroupfl.com',
  address: {
    line1: '13810 SW 142nd Ave, Suite 39',
    city: 'Miami',
    state: 'FL',
    zip: '33186',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=13810+SW+142nd+Ave+Suite+39+Miami+FL+33186',
  // Interactive map embed (no API key required).
  mapEmbedUrl:
    'https://maps.google.com/maps?q=13810%20SW%20142nd%20Ave%20Suite%2039%20Miami%20FL%2033186&output=embed',
}

// Icons are shared across languages, keyed by service slug so translated
// service lists stay in sync without duplicating icon references.
const SERVICE_ICONS = {
  'general-construction': HardHat,
  'building-envelope': PanelsTopLeft,
  roofing: Home,
  'consulting-engineering': Ruler,
  'construction-management': ClipboardList,
  'owners-representation': Users,
  'remodeling-restoration': Wrench,
  'glass-glazing': Layers,
  waterproofing: Droplets,
  'general-interiors': Building2,
  'property-management': Building2,
  'landscape-architecture': TreePine,
}
const withIcons = (list) => list.map((s) => ({ ...s, icon: SERVICE_ICONS[s.slug] }))

const TRUST_ICONS = [ShieldCheck, ClipboardList, ShieldCheck, Home]
const withTrustIcons = (list) => list.map((p, i) => ({ ...p, icon: TRUST_ICONS[i] }))

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------
const en = {
  serviceArea: 'South Florida',
  tagline: 'Building the Future, Restoring the Past',

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],

  hero: {
    eyebrow: 'Est. 2000 · South Florida',
    headline: 'Building the Future, Restoring the Past',
    subhead:
      'A licensed Miami general contractor delivering luxury homes, commercial projects, and expert renovations across South Florida since 2000.',
    primaryCta: { label: 'Request a Quote', to: '/contact' },
    secondaryCta: { label: 'Explore Our Services', to: '/services' },
    licensedNote: `Licensed · Bonded · Insured — License ${business.license}`,
    featuredPhoto: 'Featured project photo',
    yearsBuilding: 'Years Building',
  },

  trustPoints: withTrustIcons([
    { label: 'Established 2000' },
    { label: `Licensed ${business.license}` },
    { label: 'Bonded & Insured' },
    { label: 'Serving South Florida' },
  ]),

  servicesSection: {
    eyebrow: 'What We Do',
    heading: 'Full-service construction, one trusted partner',
    body: 'From the ground up or down to the details, we manage every phase of the build for luxury homes, commercial projects, and renovations.',
    viewAll: 'View all services',
  },

  servicesPage: {
    eyebrow: 'Our Services',
    title: 'Every phase of construction, handled by one team',
    subtitle:
      'From luxury homes to commercial builds, we bring the expertise, licensing, and reliability your project deserves across South Florida.',
    coreTitle: 'Core Services',
    additionalTitle: 'Additional Capabilities',
  },

  coreServices: withIcons([
    {
      slug: 'general-construction',
      title: 'General Construction',
      summary:
        'Licensed, bonded, and insured, with deep experience delivering residential and commercial building projects throughout South Florida.',
    },
    {
      slug: 'building-envelope',
      title: 'Building Envelope',
      summary:
        'Engineering, consulting, and installation of exterior glazing, railings, stairwells, handrails, wind-screen and composite panels — built for safety, compliance, and lasting value.',
    },
    {
      slug: 'roofing',
      title: 'Roofing',
      summary:
        'Installation, repair, and full reconstruction of all roofing systems. We know how stressful roof problems are, so we deliver fast, reliable work you can count on.',
    },
    {
      slug: 'consulting-engineering',
      title: 'Consulting Engineering',
      summary:
        'Independent engineering, science, and technical expertise for governments, developers, and construction firms — always focused on your best interest.',
    },
  ]),

  allServices: withIcons([
    {
      slug: 'general-construction',
      title: 'General Construction',
      summary:
        'Licensed, bonded, and insured, with deep experience delivering residential and commercial building projects throughout South Florida.',
    },
    {
      slug: 'building-envelope',
      title: 'Building Envelope',
      summary:
        'Engineering, consulting, and installation of exterior glazing, railings, stairwells, handrails, wind-screen and composite panels — built for safety, compliance, and lasting value.',
    },
    {
      slug: 'roofing',
      title: 'Roofing',
      summary:
        'Installation, repair, and full reconstruction of all roofing systems. We know how stressful roof problems are, so we deliver fast, reliable work you can count on.',
    },
    {
      slug: 'consulting-engineering',
      title: 'Consulting Engineering',
      summary:
        'Independent engineering, science, and technical expertise for governments, developers, and construction firms — always focused on your best interest.',
    },
    {
      slug: 'construction-management',
      title: 'Construction Management',
      summary:
        'End-to-end oversight of scheduling, budgets, and trades so your project stays on time and on budget from groundbreaking to handover.',
    },
    {
      slug: 'owners-representation',
      title: "Owner's Representation",
      summary:
        'We represent your interests at every stage, coordinating design, permitting, and construction so decisions always protect your investment.',
    },
    {
      slug: 'remodeling-restoration',
      title: 'Remodeling & Restoration',
      summary:
        'Thoughtful renovations and restorations that modernize spaces and preserve character — from home improvements to full rebuilds.',
    },
    {
      slug: 'glass-glazing',
      title: 'Glass & Glazing',
      summary:
        'Commercial and residential glass services, including impact-rated systems engineered for South Florida conditions.',
    },
    {
      slug: 'waterproofing',
      title: 'Waterproofing',
      summary:
        'Protective waterproofing systems that safeguard structures against moisture, humidity, and the demands of the coastal climate.',
    },
    {
      slug: 'general-interiors',
      title: 'General Interiors',
      summary:
        'Complete interior build-outs and finishes for residential and commercial spaces, executed with precision and care.',
    },
    {
      slug: 'property-management',
      title: 'Property Management',
      summary:
        'Reliable property management and maintenance that keeps your buildings performing and their value protected.',
    },
    {
      slug: 'landscape-architecture',
      title: 'Landscape Architecture',
      summary:
        'Exterior and site design that completes your project with functional, inviting outdoor spaces.',
    },
  ]),

  process: {
    eyebrow: 'How We Work',
    heading: 'A clear path from vision to completion',
    steps: [
      {
        number: '01',
        title: 'Plan & Consult',
        description:
          'We start by understanding your goals, budget, and vision — then handle the permitting and administrative details that keep projects moving.',
      },
      {
        number: '02',
        title: 'Build with Precision',
        description:
          'Our specialized team and trusted subcontractors execute every phase with quality craftsmanship, safety, and cutting-edge techniques.',
      },
      {
        number: '03',
        title: 'Deliver & Support',
        description:
          'We finish on time and communicate clearly throughout, resolving issues quickly and standing behind the work we deliver.',
      },
    ],
  },

  about: {
    eyebrow: 'About Us',
    heading: 'Taking Construction to Whole New Heights',
    lead: "Since 2000, Unlimited Construction Group has grown into one of South Florida's trusted general contractors, building sound structures for a wide range of clients.",
    body: [
      'We are a certified general contractor with a broad range of experience across the construction industry. From luxury homes and home improvements to commercial projects, we manage every phase of the process with quality, innovation, and attention to detail.',
      'Our clients count on us for more than construction. We bring administrative expertise to navigate permitting quickly, a network of specialized subcontractors, and the personalized attention that keeps communication smooth from the first meeting to final walkthrough.',
    ],
    missionLabel: 'Our Mission',
    mission: 'Bringing Your Vision to Life',
    valuesEyebrow: 'Why Clients Choose Us',
    valuesHeading: 'Built on trust, delivered with expertise',
    values: [
      {
        title: 'Client-Focused',
        description:
          'We listen first, then build around your needs — keeping you informed at every step.',
      },
      {
        title: 'Quality & Innovation',
        description:
          'Cutting-edge techniques and meticulous craftsmanship in everything we deliver.',
      },
      {
        title: 'Reliable Execution',
        description:
          'On-time delivery and quick resolution of the administrative issues that stall other projects.',
      },
      {
        title: 'Trusted & Certified',
        description: `Licensed (${business.license}), bonded, and insured — with a track record since ${business.established}.`,
      },
    ],
    teaserPhoto: 'Team / job site photo',
    learnMore: 'Learn more about us',
    companyPhoto: 'Company / project photo',
    credentials: {
      years: 'Years in Business',
      license: 'State License',
      area: 'Service Area',
      areaValue: 'South FL',
    },
  },

  cta: {
    heading: 'Ready to start your project?',
    body: "Tell us about your vision and we'll help bring it to life — on time, on budget, and built to last.",
    requestQuote: 'Request a Quote',
  },

  footer: {
    explore: 'Explore',
    services: 'Services',
    contact: 'Contact',
    rightsReserved: 'All rights reserved.',
    licensedGC: 'Licensed General Contractor',
  },

  portfolio: {
    eyebrow: 'Our Work',
    heading: 'Projects that speak for themselves',
    subtitle:
      'A look at the range of work we deliver across South Florida — from custom luxury homes to commercial builds and restorations.',
    categories: ['All', 'Luxury Homes', 'Commercial', 'Roofing', 'Renovation', 'Building Envelope'],
    empty: 'No projects in this category yet — check back soon.',
    photoLabel: 'photo',
    projects: [
      {
        id: 'coastal-residence',
        title: 'Coastal Modern Residence',
        category: 'Luxury Homes',
        location: 'Coral Gables, FL',
        year: '2024',
        description:
          'Ground-up custom build featuring open living spaces, impact glazing, and a resort-style exterior.',
      },
      {
        id: 'office-buildout',
        title: 'Corporate Office Build-Out',
        category: 'Commercial',
        location: 'Doral, FL',
        year: '2023',
        description:
          'Full interior build-out of a multi-floor commercial office, delivered on an accelerated schedule.',
      },
      {
        id: 'roof-replacement',
        title: 'Tile Roof Replacement',
        category: 'Roofing',
        location: 'Kendall, FL',
        year: '2024',
        description:
          'Complete tear-off and reconstruction of a residential tile roof, engineered for hurricane resistance.',
      },
      {
        id: 'kitchen-renovation',
        title: 'Whole-Home Renovation',
        category: 'Renovation',
        location: 'Pinecrest, FL',
        year: '2023',
        description:
          'Interior renovation modernizing kitchen, baths, and living areas while preserving original character.',
      },
      {
        id: 'glazing-facade',
        title: 'Exterior Glazing & Facade',
        category: 'Building Envelope',
        location: 'Brickell, Miami, FL',
        year: '2022',
        description:
          'Installation of exterior glazing systems, railings, and composite panels on a mid-rise building.',
      },
      {
        id: 'retail-center',
        title: 'Mixed-Use Retail Center',
        category: 'Commercial',
        location: 'Miami, FL',
        year: '2022',
        description:
          'Construction management for a mixed-use retail and dining center from permitting through delivery.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact Us',
    title: "Let's build something great together",
    subtitle:
      'Reach out for a quote or to discuss your project. We respond quickly and are happy to answer any questions.',
    phone: 'Phone',
    email: 'Email',
    office: 'Office',
    hours: 'Hours',
    hoursValue: 'Mon–Fri, 8:00 AM – 5:00 PM',
    viewOnMaps: 'View on Google Maps',
  },

  form: {
    fullName: 'Full name',
    fullNamePlaceholder: 'Jane Doe',
    phone: 'Phone',
    phonePlaceholder: '(305) 000-0000',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    service: 'Service of interest',
    selectService: 'Select a service',
    serviceOptions: [
      'General Construction',
      'Building Envelope',
      'Roofing',
      'Remodeling & Restoration',
      'Consulting Engineering',
      'Other',
    ],
    projectDetails: 'Project details',
    projectPlaceholder: 'Tell us about your project, timeline, and location…',
    send: 'Send Message',
    callNote: 'Prefer to talk now? Call us — we respond quickly to every inquiry.',
  },
}

// ---------------------------------------------------------------------------
// Spanish
// ---------------------------------------------------------------------------
const es = {
  serviceArea: 'Sur de la Florida',
  tagline: 'Construyendo el Futuro, Restaurando el Pasado',

  nav: [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', to: '/services' },
    { label: 'Proyectos', to: '/portfolio' },
    { label: 'Nosotros', to: '/about' },
    { label: 'Contacto', to: '/contact' },
  ],

  hero: {
    eyebrow: 'Desde 2000 · Sur de la Florida',
    headline: 'Construyendo el Futuro, Restaurando el Pasado',
    subhead:
      'Un contratista general con licencia en Miami que construye casas de lujo, proyectos comerciales y renovaciones expertas en el Sur de la Florida desde el año 2000.',
    primaryCta: { label: 'Solicite una Cotización', to: '/contact' },
    secondaryCta: { label: 'Explore Nuestros Servicios', to: '/services' },
    licensedNote: `Con Licencia · Garantizado · Asegurado — Licencia ${business.license}`,
    featuredPhoto: 'Foto de proyecto destacado',
    yearsBuilding: 'Años Construyendo',
  },

  trustPoints: withTrustIcons([
    { label: 'Establecidos en 2000' },
    { label: `Con Licencia ${business.license}` },
    { label: 'Garantizado y Asegurado' },
    { label: 'Servicio en el Sur de la Florida' },
  ]),

  servicesSection: {
    eyebrow: 'Lo Que Hacemos',
    heading: 'Construcción integral, un socio de confianza',
    body: 'Desde los cimientos hasta los últimos detalles, gestionamos cada fase de la obra para casas de lujo, proyectos comerciales y renovaciones.',
    viewAll: 'Ver todos los servicios',
  },

  servicesPage: {
    eyebrow: 'Nuestros Servicios',
    title: 'Cada fase de la construcción, en manos de un solo equipo',
    subtitle:
      'Desde casas de lujo hasta obras comerciales, aportamos la experiencia, las licencias y la confiabilidad que su proyecto merece en el Sur de la Florida.',
    coreTitle: 'Servicios Principales',
    additionalTitle: 'Capacidades Adicionales',
  },

  coreServices: withIcons([
    {
      slug: 'general-construction',
      title: 'Construcción General',
      summary:
        'Con licencia, garantizado y asegurado, con amplia experiencia en proyectos de construcción residencial y comercial en todo el Sur de la Florida.',
    },
    {
      slug: 'building-envelope',
      title: 'Envolvente del Edificio',
      summary:
        'Ingeniería, consultoría e instalación de acristalamiento exterior, barandas, escaleras, pasamanos, paneles cortavientos y compuestos — con enfoque en seguridad, cumplimiento y valor duradero.',
    },
    {
      slug: 'roofing',
      title: 'Techado',
      summary:
        'Instalación, reparación y reconstrucción completa de todo tipo de techos. Sabemos lo estresantes que son los problemas de techo, por eso ofrecemos un trabajo rápido y confiable en el que puede confiar.',
    },
    {
      slug: 'consulting-engineering',
      title: 'Ingeniería de Consultoría',
      summary:
        'Experiencia independiente en ingeniería, ciencia y áreas técnicas para gobiernos, desarrolladores y empresas de construcción — siempre enfocada en su mejor interés.',
    },
  ]),

  allServices: withIcons([
    {
      slug: 'general-construction',
      title: 'Construcción General',
      summary:
        'Con licencia, garantizado y asegurado, con amplia experiencia en proyectos de construcción residencial y comercial en todo el Sur de la Florida.',
    },
    {
      slug: 'building-envelope',
      title: 'Envolvente del Edificio',
      summary:
        'Ingeniería, consultoría e instalación de acristalamiento exterior, barandas, escaleras, pasamanos, paneles cortavientos y compuestos — con enfoque en seguridad, cumplimiento y valor duradero.',
    },
    {
      slug: 'roofing',
      title: 'Techado',
      summary:
        'Instalación, reparación y reconstrucción completa de todo tipo de techos. Sabemos lo estresantes que son los problemas de techo, por eso ofrecemos un trabajo rápido y confiable en el que puede confiar.',
    },
    {
      slug: 'consulting-engineering',
      title: 'Ingeniería de Consultoría',
      summary:
        'Experiencia independiente en ingeniería, ciencia y áreas técnicas para gobiernos, desarrolladores y empresas de construcción — siempre enfocada en su mejor interés.',
    },
    {
      slug: 'construction-management',
      title: 'Gestión de Construcción',
      summary:
        'Supervisión integral de cronogramas, presupuestos y oficios para que su proyecto se mantenga a tiempo y dentro del presupuesto, desde el inicio hasta la entrega.',
    },
    {
      slug: 'owners-representation',
      title: 'Representación del Propietario',
      summary:
        'Representamos sus intereses en cada etapa, coordinando el diseño, los permisos y la construcción para que cada decisión proteja su inversión.',
    },
    {
      slug: 'remodeling-restoration',
      title: 'Remodelación y Restauración',
      summary:
        'Renovaciones y restauraciones cuidadas que modernizan los espacios y preservan su carácter — desde mejoras del hogar hasta reconstrucciones completas.',
    },
    {
      slug: 'glass-glazing',
      title: 'Vidrio y Acristalamiento',
      summary:
        'Servicios de vidrio comercial y residencial, incluyendo sistemas de impacto diseñados para las condiciones del Sur de la Florida.',
    },
    {
      slug: 'waterproofing',
      title: 'Impermeabilización',
      summary:
        'Sistemas de impermeabilización que protegen las estructuras contra la humedad y las exigencias del clima costero.',
    },
    {
      slug: 'general-interiors',
      title: 'Interiores Generales',
      summary:
        'Acabados y construcción de interiores completos para espacios residenciales y comerciales, ejecutados con precisión y cuidado.',
    },
    {
      slug: 'property-management',
      title: 'Administración de Propiedades',
      summary:
        'Administración y mantenimiento de propiedades confiables que mantienen sus edificios en óptimo estado y protegen su valor.',
    },
    {
      slug: 'landscape-architecture',
      title: 'Arquitectura Paisajista',
      summary:
        'Diseño exterior y de sitio que completa su proyecto con espacios exteriores funcionales y acogedores.',
    },
  ]),

  process: {
    eyebrow: 'Cómo Trabajamos',
    heading: 'Un camino claro desde la idea hasta la entrega',
    steps: [
      {
        number: '01',
        title: 'Planificar y Asesorar',
        description:
          'Comenzamos por entender sus objetivos, presupuesto y visión — luego gestionamos los permisos y trámites administrativos que mantienen el proyecto en marcha.',
      },
      {
        number: '02',
        title: 'Construir con Precisión',
        description:
          'Nuestro equipo especializado y subcontratistas de confianza ejecutan cada fase con mano de obra de calidad, seguridad y técnicas de vanguardia.',
      },
      {
        number: '03',
        title: 'Entregar y Respaldar',
        description:
          'Terminamos a tiempo y comunicamos con claridad en todo momento, resolviendo los problemas con rapidez y respaldando el trabajo que entregamos.',
      },
    ],
  },

  about: {
    eyebrow: 'Nosotros',
    heading: 'Llevando la Construcción a Nuevas Alturas',
    lead: 'Desde el año 2000, Unlimited Construction Group se ha convertido en uno de los contratistas generales de confianza del Sur de la Florida, construyendo estructuras sólidas para una amplia variedad de clientes.',
    body: [
      'Somos un contratista general certificado con amplia experiencia en toda la industria de la construcción. Desde casas de lujo y mejoras del hogar hasta proyectos comerciales, gestionamos cada fase del proceso con calidad, innovación y atención al detalle.',
      'Nuestros clientes cuentan con nosotros para mucho más que construir. Aportamos experiencia administrativa para agilizar los permisos, una red de subcontratistas especializados y la atención personalizada que mantiene una comunicación fluida desde la primera reunión hasta la entrega final.',
    ],
    missionLabel: 'Nuestra Misión',
    mission: 'Hacemos Realidad Su Visión',
    valuesEyebrow: 'Por Qué Nos Eligen',
    valuesHeading: 'Basado en la confianza, entregado con experiencia',
    values: [
      {
        title: 'Enfoque en el Cliente',
        description:
          'Primero escuchamos y luego construimos en torno a sus necesidades, manteniéndolo informado en cada paso.',
      },
      {
        title: 'Calidad e Innovación',
        description: 'Técnicas de vanguardia y mano de obra meticulosa en todo lo que entregamos.',
      },
      {
        title: 'Ejecución Confiable',
        description:
          'Entrega a tiempo y resolución rápida de los trámites administrativos que retrasan otros proyectos.',
      },
      {
        title: 'Confiable y Certificado',
        description: `Con licencia (${business.license}), garantizado y asegurado — con una trayectoria desde el año ${business.established}.`,
      },
    ],
    teaserPhoto: 'Foto del equipo / obra',
    learnMore: 'Conozca más sobre nosotros',
    companyPhoto: 'Foto de la empresa / proyecto',
    credentials: {
      years: 'Años de Experiencia',
      license: 'Licencia Estatal',
      area: 'Área de Servicio',
      areaValue: 'Sur de FL',
    },
  },

  cta: {
    heading: '¿Listo para comenzar su proyecto?',
    body: 'Cuéntenos su visión y le ayudaremos a hacerla realidad — a tiempo, dentro del presupuesto y construida para durar.',
    requestQuote: 'Solicite una Cotización',
  },

  footer: {
    explore: 'Explorar',
    services: 'Servicios',
    contact: 'Contacto',
    rightsReserved: 'Todos los derechos reservados.',
    licensedGC: 'Contratista General con Licencia',
  },

  portfolio: {
    eyebrow: 'Nuestro Trabajo',
    heading: 'Proyectos que hablan por sí solos',
    subtitle:
      'Un vistazo a la variedad de obras que realizamos en el Sur de la Florida — desde casas de lujo personalizadas hasta obras comerciales y restauraciones.',
    categories: ['Todos', 'Casas de Lujo', 'Comercial', 'Techado', 'Renovación', 'Envolvente del Edificio'],
    empty: 'Aún no hay proyectos en esta categoría — vuelva pronto.',
    photoLabel: 'foto',
    projects: [
      {
        id: 'coastal-residence',
        title: 'Residencia Moderna Costera',
        category: 'Casas de Lujo',
        location: 'Coral Gables, FL',
        year: '2024',
        description:
          'Construcción personalizada desde cero con espacios abiertos, acristalamiento de impacto y un exterior estilo resort.',
      },
      {
        id: 'office-buildout',
        title: 'Adecuación de Oficina Corporativa',
        category: 'Comercial',
        location: 'Doral, FL',
        year: '2023',
        description:
          'Adecuación completa del interior de una oficina comercial de varios pisos, entregada en un cronograma acelerado.',
      },
      {
        id: 'roof-replacement',
        title: 'Reemplazo de Techo de Tejas',
        category: 'Techado',
        location: 'Kendall, FL',
        year: '2024',
        description:
          'Remoción completa y reconstrucción de un techo residencial de tejas, diseñado para resistir huracanes.',
      },
      {
        id: 'kitchen-renovation',
        title: 'Renovación Integral del Hogar',
        category: 'Renovación',
        location: 'Pinecrest, FL',
        year: '2023',
        description:
          'Renovación interior que moderniza la cocina, los baños y las áreas sociales conservando su carácter original.',
      },
      {
        id: 'glazing-facade',
        title: 'Acristalamiento y Fachada Exterior',
        category: 'Envolvente del Edificio',
        location: 'Brickell, Miami, FL',
        year: '2022',
        description:
          'Instalación de sistemas de acristalamiento exterior, barandas y paneles compuestos en un edificio de mediana altura.',
      },
      {
        id: 'retail-center',
        title: 'Centro Comercial de Uso Mixto',
        category: 'Comercial',
        location: 'Miami, FL',
        year: '2022',
        description:
          'Gestión de construcción de un centro comercial y gastronómico de uso mixto, desde los permisos hasta la entrega.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contáctenos',
    title: 'Construyamos algo grandioso juntos',
    subtitle:
      'Comuníquese para una cotización o para hablar sobre su proyecto. Respondemos rápidamente y con gusto atendemos cualquier pregunta.',
    phone: 'Teléfono',
    email: 'Correo',
    office: 'Oficina',
    hours: 'Horario',
    hoursValue: 'Lun–Vie, 8:00 AM – 5:00 PM',
    viewOnMaps: 'Ver en Google Maps',
  },

  form: {
    fullName: 'Nombre completo',
    fullNamePlaceholder: 'Juan Pérez',
    phone: 'Teléfono',
    phonePlaceholder: '(305) 000-0000',
    email: 'Correo electrónico',
    emailPlaceholder: 'correo@ejemplo.com',
    service: 'Servicio de interés',
    selectService: 'Seleccione un servicio',
    serviceOptions: [
      'Construcción General',
      'Envolvente del Edificio',
      'Techado',
      'Remodelación y Restauración',
      'Ingeniería de Consultoría',
      'Otro',
    ],
    projectDetails: 'Detalles del proyecto',
    projectPlaceholder: 'Cuéntenos sobre su proyecto, plazos y ubicación…',
    send: 'Enviar Mensaje',
    callNote: '¿Prefiere hablar ahora? Llámenos — respondemos rápidamente a cada consulta.',
  },
}

export const content = { en, es }

// Names shown in the language toggle.
export const languageNames = { en: 'English', es: 'Español' }
