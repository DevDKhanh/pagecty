import type { ProductSlug } from "@/lib/products";

export interface ProductDetail {
  overview: string;
  structure: string;
  config: string;
  components: string;
  finish: string;
  applications: [string, string, string];
}

export interface DetailDict {
  labels: {
    home: string;
    overview: string;
    specs: string;
    structure: string;
    config: string;
    components: string;
    finish: string;
    load: string;
    custom: string;
    customValue: string;
    applications: string;
    related: string;
    productList: string;
    viewProduct: string;
    inquiryTitle: string;
    inquirySub: string;
    talk: string;
  };
  items: Record<ProductSlug, ProductDetail>;
}

const en: DetailDict = {
  labels: {
    home: "Home",
    overview: "Overview",
    specs: "Specifications",
    structure: "Main structure",
    config: "Configuration",
    components: "Components",
    finish: "Finish & colour",
    load: "Load capacity",
    custom: "Customisation",
    customValue: "Supported — dimensions, load and colour",
    applications: "Typical applications",
    related: "Related products",
    productList: "Product list",
    viewProduct: "View product",
    inquiryTitle: "Get a quotation for this product",
    inquirySub: "Tell us your dimensions and loads — we reply with a layout and price, usually within 24 hours.",
    talk: "Talk to an engineer",
  },
  items: {
    "pallet-rack": {
      overview:
        "Selective pallet racking is the most widely used storage system for palletised goods. Every pallet position can be reached directly by forklift, which makes it ideal for warehouses with many SKUs and frequent picking. Bolt-free beam connections let you change level heights as your products change.",
      structure: "Upright frames and load beams",
      config: "Single row, back-to-back or multiple rows",
      components: "Uprights, beams, safety pins, row spacers, bracing, base plates and anchors",
      finish: "Blue uprights, orange beams, or any RAL colour",
      applications: ["Distribution centres and 3PL warehouses", "Factory raw-material and finished-goods stores", "Building materials and FMCG storage"],
    },
    "drive-in-rack": {
      overview:
        "Drive-in racking removes the aisles between rows: forklifts drive into the rack and place pallets on continuous rails, one behind another. It stores the maximum number of pallets in the minimum floor area — the best choice for large quantities of the same product and for expensive cold-storage space.",
      structure: "Upright frames, support rails and top ties",
      config: "Drive-in (single entry, LIFO) or drive-through (two entries, FIFO)",
      components: "Uprights, pallet rails, rail brackets, top beams, guide rails and column guards",
      finish: "Powder-coated blue and orange, or galvanised for cold rooms",
      applications: ["Cold and frozen storage", "Beverage and food warehouses", "Seasonal and bulk stock"],
    },
    "mezzanine-rack": {
      overview:
        "A mezzanine system builds a second (or third) floor inside your existing building, supported by racking or free-standing columns. The upper level can be used for storage, picking or packing, while the space below stays fully usable — a fast, cost-effective way to multiply floor area.",
      structure: "Columns, main and secondary beams with steel floor decking",
      config: "Rack-supported or free-standing, one or more levels",
      components: "Columns, beams, floor panels, staircases, handrails, kick plates and loading gates",
      finish: "Powder-coated steel; floor in steel panel, chequer plate or grating",
      applications: ["E-commerce picking and packing floors", "Spare-parts and small-item storage", "Workshop offices above production"],
    },
    "cantilever-rack": {
      overview:
        "Cantilever racking has no front uprights, so long and irregular items can be loaded from the side without obstruction. Arms can be moved up or down along the column to fit each load, and the system can be built single- or double-sided to suit the aisle layout.",
      structure: "Columns, bases, arms and horizontal bracing",
      config: "Single-sided against a wall or double-sided in an aisle",
      components: "Columns, base legs, straight or inclined arms, arm end stops and bracing",
      finish: "Blue and orange powder coating, or hot-dip galvanised for outdoor use",
      applications: ["Steel bars, pipes and tubes", "Aluminium profiles for doors and windows", "Timber, boards and plastic sheets"],
    },
    "mold-rack": {
      overview:
        "Mold racks store heavy dies and moulds safely in drawers that pull out completely, so a crane or hoist can lift them straight up. Each drawer runs on heavy-duty bearing rollers and locks in place, keeping your tooling organised, protected and quick to change over.",
      structure: "Heavy-duty welded frame with pull-out drawers",
      config: "Single or multiple bays, 2–5 drawers per bay",
      components: "Frame, drawers with bearing rollers, drawer locks, handles and optional top hoist",
      finish: "Blue powder coating or customised colour",
      applications: ["Injection and stamping die stores", "Automotive and electronics tooling rooms", "Heavy machine-part storage"],
    },
    "storage-cage": {
      overview:
        "Wire storage cages are rigid, see-through containers for parts and goods. They fold flat when empty, stack securely when full, and can be handled by forklift or pallet truck — reducing packaging waste and making stock easy to count at a glance.",
      structure: "Welded steel wire mesh panels on a reinforced base",
      config: "Foldable, stackable; with or without casters",
      components: "Mesh walls, base frame, stacking feet, half-drop front gate, label holder",
      finish: "Zinc-plated or hot-dip galvanised",
      applications: ["Automotive and electronic components", "Logistics turnover and returns", "Supermarket and warehouse backstock"],
    },
    "light-duty-shelf": {
      overview:
        "Boltless shelving assembles in minutes with a rubber mallet — no bolts, no tools. Shelf levels click into the uprights every 50 mm, so the unit can be adjusted for boxes, files or spare parts and extended with add-on bays as storage grows.",
      structure: "Angle-steel uprights with riveted shelf beams",
      config: "Starter and add-on bays, single or double-sided",
      components: "Uprights, beams, shelf panels, foot plates and connectors",
      finish: "Blue uprights with orange beams, grey, or any RAL colour",
      applications: ["Stockrooms and spare-parts stores", "Archives and document storage", "Garages, workshops and shops"],
    },
    "wire-shelving": {
      overview:
        "Chrome wire shelving is strong, light and easy to keep clean. The open design allows air and light to circulate and stops dust from collecting, while split sleeves on the posts let you set each shelf exactly where you need it.",
      structure: "Round posts with wire-grid shelves",
      config: "Static or mobile on lockable casters",
      components: "Posts, wire shelves, split sleeves, levelling feet or casters",
      finish: "Chrome-plated, or epoxy-coated for humid areas",
      applications: ["Commercial kitchens and food service", "Clinics, labs and cleanrooms", "Retail back rooms and offices"],
    },
    "supermarket-shelf": {
      overview:
        "Gondola shelving gives retail stores a clean, modular display system. Shelves adjust to any product height, back panels come in several styles, and end caps, hooks and price strips help present products attractively and sell more.",
      structure: "Uprights, base and back panels with cantilever shelves",
      config: "Wall units, single- or double-sided island gondolas, end caps",
      components: "Uprights, shelves, back panels, brackets, hooks, price strips and dividers",
      finish: "White, black, grey or brand colours",
      applications: ["Supermarkets and minimarts", "Convenience stores and pharmacies", "Stationery, cosmetics and hardware shops"],
    },
  },
};

export default en;
