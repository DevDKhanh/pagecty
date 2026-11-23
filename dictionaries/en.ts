import type { ProductSlug, LoadUnit, Category } from "@/lib/products";

export interface Dict {
  meta: { title: string; description: string };
  nav: { products: string; capabilities: string; process: string; industries: string; contact: string; quote: string; menu: string; language: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    tag: string;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: Record<"all" | Category, string>;
    load: string;
    details: string;
    quote: string;
    close: string;
    features: string;
    units: Record<LoadUnit, string>;
    items: Record<ProductSlug, { name: string; desc: string; features: [string, string, string] }>;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; desc: string }[];
    finishesTitle: string;
    finishes: string[];
  };
  why: { items: { title: string; desc: string }[] };
  process: { eyebrow: string; title: string; steps: { title: string; desc: string }[] };
  industries: { eyebrow: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      company: string;
      reach: string;
      product: string;
      productAny: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
      subject: string;
    };
    phone: string;
    email: string;
    wechat: string;
    address: string;
    addressValue: string;
  };
  footer: { tagline: string; rights: string; products: string; company: string };
}

const en: Dict = {
  meta: {
    title: "Faruit — Warehouse Racking & Shelving Manufacturer",
    description:
      "Faruit designs, manufactures and installs pallet racking, mezzanines, cantilever racks, mold racks and shelving from a 20,000 m² factory in Bac Ninh, Vietnam. Exported to Southeast Asia, Europe and the US.",
  },
  nav: { products: "Products", capabilities: "Factory", process: "Process", industries: "Industries", contact: "Contact", quote: "Get a quote", menu: "Menu", language: "Language" },
  hero: {
    eyebrow: "Storage systems manufacturer · Vietnam",
    titleA: "Racking built to carry",
    titleB: "your whole operation.",
    subtitle:
      "Faruit plans, designs, manufactures and installs warehouse storage systems — from a single shelf to a full high-bay warehouse — engineered for your loads, your space and your workflow.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "Explore products",
    stats: [
      { value: "20,000 m²", label: "Factory floor" },
      { value: "9", label: "Product lines" },
      { value: "3", label: "Export continents" },
    ],
    tag: "Selective pallet racking",
  },
  products: {
    eyebrow: "Product range",
    title: "One factory. Every kind of storage.",
    subtitle: "Standard sizes ship fast; every system can be customised to your dimensions, load and finish.",
    filters: { all: "All", heavy: "Heavy-duty", medium: "Light & medium", special: "Specialised", retail: "Retail" },
    load: "Load capacity",
    details: "View details",
    quote: "Quote this product",
    close: "Close",
    features: "Key features",
    units: { level: "kg / level", pallet: "kg / pallet", m2: "kg / m²", arm: "kg / arm", cage: "kg / cage" },
    items: {
      "pallet-rack": {
        name: "Selective Pallet Racking",
        desc: "The workhorse of modern warehouses: direct access to every pallet, forklift-friendly and easy to reconfigure.",
        features: ["100% direct access to each pallet position", "Beam heights adjustable in 50–75 mm steps", "Safety locks, row spacers and column guards included"],
      },
      "drive-in-rack": {
        name: "Drive-in Racking",
        desc: "High-density storage for large volumes of the same SKU — forklifts drive into the lanes, maximising cubic space.",
        features: ["Up to 75% more pallet positions than selective racking", "Ideal for cold storage and bulk goods", "Guide rails protect uprights during loading"],
      },
      "mezzanine-rack": {
        name: "Mezzanine Floor System",
        desc: "Adds a full working floor above your racking, doubling usable area without moving to a bigger building.",
        features: ["Steel deck, chequer plate or grating options", "Staircases, handrails and goods lifts integrated", "Column-free spans engineered to your layout"],
      },
      "cantilever-rack": {
        name: "Cantilever Racking",
        desc: "Open-front arms for long, bulky items — steel bars, pipes, aluminium profiles, timber and boards.",
        features: ["Single- or double-sided configurations", "Adjustable arm height and angle", "Arm end stops keep long loads secure"],
      },
      "mold-rack": {
        name: "Heavy Mold Rack",
        desc: "Drawer-type racks for dies and moulds, with full-extension pull-outs and optional overhead crane.",
        features: ["Full-extension drawers on bearing rollers", "Optional top-mounted chain hoist", "Safety locks on every drawer"],
      },
      "storage-cage": {
        name: "Steel Wire Storage Cage",
        desc: "Foldable, stackable wire containers for parts, logistics and turnover — galvanised for long service life.",
        features: ["Folds flat to save return freight", "Stackable up to 4 high when loaded", "Optional casters, labels and lids"],
      },
      "light-duty-shelf": {
        name: "Boltless Light & Medium-duty Shelving",
        desc: "Rivet-locking shelving that assembles in minutes without tools — for stockrooms, archives and spare parts.",
        features: ["Tool-free boltless assembly", "Shelf levels adjustable every 50 mm", "Steel, MDF or wire-mesh decking"],
      },
      "wire-shelving": {
        name: "Chrome Wire Shelving",
        desc: "Hygienic, open-wire shelving that lets air and light through — for kitchens, cleanrooms, clinics and retail backrooms.",
        features: ["Chrome or epoxy-coated finish", "Mobile version on lockable casters", "Height adjustable in 25 mm steps"],
      },
      "supermarket-shelf": {
        name: "Supermarket & Retail Gondola",
        desc: "Display shelving for supermarkets, convenience stores and pharmacies, with matching end caps and accessories.",
        features: ["Single- and double-sided gondolas", "Pegboard, mesh or solid back panels", "Price strips, hooks and dividers available"],
      },
    },
  },
  capabilities: {
    eyebrow: "Inside the factory",
    title: "Made in-house, from coil steel to finished rack.",
    body:
      "Our 20,000 m² plant runs the full process under one roof, so we control quality, lead time and cost at every step.",
    items: [
      { title: "Automatic cold-roll forming", desc: "Uprights and beams formed to tight tolerances on continuous roll-forming lines." },
      { title: "Continuous strip-steel stamping", desc: "Punching patterns and connectors stamped in one pass for perfect hole alignment." },
      { title: "Automatic beam welding", desc: "Automatic welding machines for consistent, full-strength beam connectors." },
      { title: "Powder-coating line", desc: "Electrostatic coating and oven curing for a hard, even, long-lasting finish." },
    ],
    finishesTitle: "Finishes available",
    finishes: ["Epoxy", "Polyester", "Metallic powder", "Anti-static", "Hot-dip galvanised", "Custom RAL colours"],
  },
  why: {
    items: [
      { title: "Factory-direct pricing", desc: "No middlemen between our production line and your warehouse." },
      { title: "Engineered to your space", desc: "Layout design and load calculation with every project." },
      { title: "Installed by our crews", desc: "Trained installation teams and on-site supervision." },
      { title: "Long-term support", desc: "Inspection, repair and expansion after handover." },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From first survey to final handover.",
    steps: [
      { title: "Site survey", desc: "We measure the space, review your goods, loads and handling equipment." },
      { title: "Design & quotation", desc: "2D/3D layout, load calculations and a clear itemised quote." },
      { title: "Manufacturing", desc: "Produced in our own factory with quality checks at every stage." },
      { title: "Delivery & installation", desc: "Shipped and installed by our teams, on schedule." },
      { title: "After-sales", desc: "Inspection, maintenance, spare parts and system expansion." },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Storage that fits the way you work.",
    subtitle: "Faruit systems are running in factories, distribution centres and stores across Southeast Asia, Europe and the United States.",
    items: [
      { title: "Logistics & 3PL", desc: "High-throughput pallet storage and order picking." },
      { title: "Manufacturing", desc: "Raw material, WIP and finished-goods storage." },
      { title: "Metal & aluminium profiles", desc: "Cantilever systems for long and heavy stock." },
      { title: "Automotive & tooling", desc: "Mold racks and parts cages for the shop floor." },
      { title: "Food & cold chain", desc: "Dense drive-in storage for chilled and frozen goods." },
      { title: "Retail & e-commerce", desc: "Store shelving and backroom fulfilment." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about your warehouse.",
    subtitle: "Send your floor size, goods and load requirements — our engineers will reply with a layout and quotation.",
    form: {
      name: "Your name",
      company: "Company",
      reach: "Phone or email",
      product: "Product of interest",
      productAny: "Not sure yet — please advise",
      message: "Project details",
      messagePlaceholder: "Floor area, ceiling height, pallet size, load per level, quantity…",
      submit: "Send enquiry",
      note: "Opens your email app with the details filled in.",
      subject: "Quotation request",
    },
    phone: "Phone",
    email: "Email",
    wechat: "WeChat",
    address: "Factory address",
    addressValue: "BT1-3, Phuc Ninh New Urban Area, Vu Ninh Ward, Bac Ninh Province, Vietnam",
  },
  footer: {
    tagline: "Planning, design, manufacturing, installation and maintenance of warehouse storage systems.",
    rights: "All rights reserved.",
    products: "Products",
    company: "Company",
  },
};

export default en;
