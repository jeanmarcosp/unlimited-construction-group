// Single source of truth for all business content.
// Edit copy, contact details, and services here — components read from this file.

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

export const business = {
  name: 'Unlimited Construction Group',
  shortName: 'UCG',
  tagline: 'Building the Future, Restoring the Past',
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
  serviceArea: 'South Florida',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=13810+SW+142nd+Ave+Suite+39+Miami+FL+33186',
  // Interactive map embed (no API key required).
  mapEmbedUrl:
    'https://maps.google.com/maps?q=13810%20SW%20142nd%20Ave%20Suite%2039%20Miami%20FL%2033186&output=embed',
}

export const hero = {
  headline: 'Building the Future, Restoring the Past',
  subhead:
    'A licensed Miami general contractor delivering luxury homes, commercial projects, and expert renovations across South Florida since 2000.',
  primaryCta: { label: 'Request a Quote', to: '/contact' },
  secondaryCta: { label: 'Explore Our Services', to: '/services' },
}

export const trustPoints = [
  { label: `Established ${business.established}`, icon: ShieldCheck },
  { label: `Licensed ${business.license}`, icon: ClipboardList },
  { label: 'Bonded & Insured', icon: ShieldCheck },
  { label: 'Serving South Florida', icon: Home },
]

// Core services surfaced prominently across the site.
export const coreServices = [
  {
    slug: 'general-construction',
    title: 'General Construction',
    icon: HardHat,
    summary:
      'Licensed, bonded, and insured, with deep experience delivering residential and commercial building projects throughout South Florida.',
  },
  {
    slug: 'building-envelope',
    title: 'Building Envelope',
    icon: PanelsTopLeft,
    summary:
      'Engineering, consulting, and installation of exterior glazing, railings, stairwells, handrails, wind-screen and composite panels — built for safety, compliance, and lasting value.',
  },
  {
    slug: 'roofing',
    title: 'Roofing',
    icon: Home,
    summary:
      'Installation, repair, and full reconstruction of all roofing systems. We know how stressful roof problems are, so we deliver fast, reliable work you can count on.',
  },
  {
    slug: 'consulting-engineering',
    title: 'Consulting Engineering',
    icon: Ruler,
    summary:
      'Independent engineering, science, and technical expertise for governments, developers, and construction firms — always focused on your best interest.',
  },
]

// Full catalog shown on the Services page.
export const allServices = [
  ...coreServices,
  {
    slug: 'construction-management',
    title: 'Construction Management',
    icon: ClipboardList,
    summary:
      'End-to-end oversight of scheduling, budgets, and trades so your project stays on time and on budget from groundbreaking to handover.',
  },
  {
    slug: 'owners-representation',
    title: "Owner's Representation",
    icon: Users,
    summary:
      'We represent your interests at every stage, coordinating design, permitting, and construction so decisions always protect your investment.',
  },
  {
    slug: 'remodeling-restoration',
    title: 'Remodeling & Restoration',
    icon: Wrench,
    summary:
      'Thoughtful renovations and restorations that modernize spaces and preserve character — from home improvements to full rebuilds.',
  },
  {
    slug: 'glass-glazing',
    title: 'Glass & Glazing',
    icon: Layers,
    summary:
      'Commercial and residential glass services, including impact-rated systems engineered for South Florida conditions.',
  },
  {
    slug: 'waterproofing',
    title: 'Waterproofing',
    icon: Droplets,
    summary:
      'Protective waterproofing systems that safeguard structures against moisture, humidity, and the demands of the coastal climate.',
  },
  {
    slug: 'general-interiors',
    title: 'General Interiors',
    icon: Building2,
    summary:
      'Complete interior build-outs and finishes for residential and commercial spaces, executed with precision and care.',
  },
  {
    slug: 'property-management',
    title: 'Property Management',
    icon: Building2,
    summary:
      'Reliable property management and maintenance that keeps your buildings performing and their value protected.',
  },
  {
    slug: 'landscape-architecture',
    title: 'Landscape Architecture',
    icon: TreePine,
    summary:
      'Exterior and site design that completes your project with functional, inviting outdoor spaces.',
  },
]

export const process = {
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
}

export const about = {
  eyebrow: 'About Us',
  heading: 'Taking Construction to Whole New Heights',
  lead: `Since ${business.established}, Unlimited Construction Group has grown into one of South Florida's trusted general contractors, building sound structures for a wide range of clients.`,
  body: [
    'We are a certified general contractor with a broad range of experience across the construction industry. From luxury homes and home improvements to commercial projects, we manage every phase of the process with quality, innovation, and attention to detail.',
    'Our clients count on us for more than construction. We bring administrative expertise to navigate permitting quickly, a network of specialized subcontractors, and the personalized attention that keeps communication smooth from the first meeting to final walkthrough.',
  ],
  mission: 'Bringing Your Vision to Life',
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
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
