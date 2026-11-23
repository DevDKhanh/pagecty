"use client";

import { useState } from "react";
import { contact, products } from "@/lib/products";
import type { Dict } from "@/dictionaries/en";

export default function QuoteForm({
  t,
  names,
  initialProduct = "",
}: {
  t: Dict["contact"]["form"];
  names: Dict["products"]["items"];
  initialProduct?: string;
}) {
  const [product, setProduct] = useState(initialProduct);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const productName = product ? names[product as keyof typeof names].name : t.productAny;
    const body = [
      `${t.name}: ${f.get("name")}`,
      `${t.company}: ${f.get("company") || "-"}`,
      `${t.reach}: ${f.get("reach")}`,
      `${t.product}: ${productName}`,
      "",
      `${t.message}:`,
      String(f.get("message") || ""),
    ].join("\n");
    const subject = `${t.subject} — ${productName}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label className="field">
          <span>{t.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>{t.company}</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <label className="field">
        <span>{t.reach}</span>
        <input name="reach" required autoComplete="email" />
      </label>
      <label className="field">
        <span>{t.product}</span>
        <select name="product" value={product} onChange={(e) => setProduct(e.target.value)}>
          <option value="">{t.productAny}</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {names[p.slug].name}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>{t.message}</span>
        <textarea name="message" rows={4} placeholder={t.messagePlaceholder} />
      </label>
      <button type="submit" className="btn btn--primary btn--block">
        {t.submit}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>
      <p className="form__note">{t.note}</p>
    </form>
  );
}
