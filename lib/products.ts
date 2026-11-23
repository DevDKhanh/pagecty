// Product catalogue shared by every language.
// Load figures are typical values — adjust them to match Faruit's own spec sheets.

export type Category = "heavy" | "medium" | "special" | "retail";
export type LoadUnit = "level" | "pallet" | "m2" | "arm" | "cage";

export type ProductSlug =
  | "pallet-rack"
  | "drive-in-rack"
  | "mezzanine-rack"
  | "cantilever-rack"
  | "mold-rack"
  | "storage-cage"
  | "light-duty-shelf"
  | "wire-shelving"
  | "supermarket-shelf";

export interface Product {
  slug: ProductSlug;
  code: string;
  image: string;
  category: Category;
  load: string;
  unit: LoadUnit;
  /** true when the photo is a cut-out on white, so it is shown contained instead of cropped */
  cutout?: boolean;
}

export const products: Product[] = [
  { slug: "pallet-rack", code: "FR-01", image: "/products/pallet-rack.webp", category: "heavy", load: "1,000–4,000", unit: "level" },
  { slug: "drive-in-rack", code: "FR-02", image: "/products/drive-in-rack.webp", category: "heavy", load: "1,000–1,500", unit: "pallet" },
  { slug: "mezzanine-rack", code: "FR-03", image: "/products/mezzanine-rack.webp", category: "heavy", load: "300–1,000", unit: "m2" },
  { slug: "cantilever-rack", code: "FR-04", image: "/products/cantilever-rack.webp", category: "special", load: "300–1,000", unit: "arm" },
  { slug: "mold-rack", code: "FR-05", image: "/products/mold-rack.webp", category: "special", load: "500–2,000", unit: "level", cutout: true },
  { slug: "storage-cage", code: "FR-06", image: "/products/storage-cage.webp", category: "special", load: "500–1,000", unit: "cage" },
  { slug: "light-duty-shelf", code: "FR-07", image: "/products/light-duty-shelf.webp", category: "medium", load: "100–500", unit: "level", cutout: true },
  { slug: "wire-shelving", code: "FR-08", image: "/products/wire-shelving.webp", category: "medium", load: "150–250", unit: "level" },
  { slug: "supermarket-shelf", code: "FR-09", image: "/products/supermarket-shelf.webp", category: "retail", load: "80–150", unit: "level" },
];

export const contact = {
  phones: ["+84 399 639 516", "+84 333 207 886"],
  email: "faruit86@gmail.com",
  wechat: "+84 399 639 516",
};
