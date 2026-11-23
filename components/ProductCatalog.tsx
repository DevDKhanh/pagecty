"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products, type Category } from "@/lib/products";
import type { Dict } from "@/dictionaries/en";
import type { Locale } from "@/lib/i18n";

type Filter = "all" | Category;
const filters: Filter[] = ["all", "heavy", "medium", "special", "retail"];

export default function ProductCatalog({ t, locale }: { t: Dict["products"]; locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = products.filter((p) => filter === "all" || p.category === filter);

  return (
    <>
      <div className="filters" role="tablist" aria-label={t.eyebrow}>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`chip${filter === f ? " chip--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {t.filters[f]}
            <span className="chip__count">{f === "all" ? products.length : products.filter((p) => p.category === f).length}</span>
          </button>
        ))}
      </div>

      <ul className="grid-products">
        {visible.map((p) => (
          <li key={p.slug}>
            <ProductCard p={p} t={t} locale={locale} />
          </li>
        ))}
      </ul>
    </>
  );
}

export function ProductCard({
  p,
  t,
  locale,
  compact = false,
}: {
  p: (typeof products)[number];
  t: Dict["products"];
  locale: Locale;
  compact?: boolean;
}) {
  const it = t.items[p.slug];
  return (
    <Link href={`/${locale}/products/${p.slug}`} className={`card${compact ? " card--compact" : ""}`}>
      <div className={`card__media${p.cutout ? " card__media--cutout" : ""}`}>
        <Image src={p.image} alt={it.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="card__code">{p.code}</span>
      </div>
      <div className="card__body">
        <span className="card__cat">{t.filters[p.category]}</span>
        <h3>{it.name}</h3>
        {!compact && <p>{it.desc}</p>}
        <div className="card__foot">
          <div className="spec">
            <span className="spec__label">{t.load}</span>
            <span className="spec__value">
              {p.load} <small>{t.units[p.unit]}</small>
            </span>
          </div>
          <span className="card__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
