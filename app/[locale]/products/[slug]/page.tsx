import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { ProductCard } from "@/components/ProductCatalog";
import { getDetails, getDict, htmlLang, isLocale, locales } from "@/lib/i18n";
import { contact, products } from "@/lib/products";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function find(slug: string) {
  return products.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = find(slug);
  if (!isLocale(locale) || !p) return {};
  const t = getDict(locale);
  const item = t.products.items[p.slug];
  return {
    title: `${item.name} — Faruit`,
    description: item.desc,
    alternates: {
      canonical: `/${locale}/products/${slug}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}/products/${slug}`])),
    },
    openGraph: { title: `${item.name} — Faruit`, description: item.desc, images: [p.image] },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const p = find(slug);
  if (!isLocale(locale) || !p) notFound();

  const t = getDict(locale);
  const d = getDetails(locale);
  const item = t.products.items[p.slug];
  const detail = d.items[p.slug];
  const L = d.labels;
  const home = `/${locale}`;

  const related = [
    ...products.filter((x) => x.slug !== p.slug && x.category === p.category),
    ...products.filter((x) => x.slug !== p.slug && x.category !== p.category),
  ].slice(0, 3);

  const specs: [string, string][] = [
    [L.structure, detail.structure],
    [L.config, detail.config],
    [L.components, detail.components],
    [L.finish, detail.finish],
    [L.load, `${p.load} ${t.products.units[p.unit]}`],
    [L.custom, L.customValue],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.desc,
    image: p.image,
    sku: p.code,
    brand: { "@type": "Brand", name: "Faruit" },
  };

  return (
    <>
      <Header locale={locale} nav={t.nav} base={home} path={`/products/${p.slug}`} solid quoteHref="#inquiry" />

      <main className="pd">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div className="pd-band">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href={home}>{L.home}</Link></li>
                <li><Link href={`${home}#products`}>{t.nav.products}</Link></li>
                <li><Link href={`${home}#products`}>{t.products.filters[p.category]}</Link></li>
                <li aria-current="page">{item.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container pd-layout">
          {/* SIDEBAR */}
          <aside className="pd-side">
            <div className="side-box">
              <h2 className="side-box__title">{L.productList}</h2>
              <ul className="side-list">
                {products.map((x) => (
                  <li key={x.slug}>
                    <Link
                      href={`${home}/products/${x.slug}`}
                      className={x.slug === p.slug ? "is-active" : undefined}
                      aria-current={x.slug === p.slug ? "page" : undefined}
                    >
                      <span className="side-list__code">{x.code}</span>
                      {t.products.items[x.slug].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-cta">
              <p className="side-cta__title">{L.talk}</p>
              {contact.phones.map((ph) => (
                <a key={ph} href={`tel:${ph.replace(/\s/g, "")}`} className="side-cta__phone">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
                  {ph}
                </a>
              ))}
              <a href={`mailto:${contact.email}`} className="side-cta__mail">{contact.email}</a>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="pd-main">
            <section className="pd-hero">
              <div className={`pd-hero__media${p.cutout ? " card__media--cutout" : ""}`}>
                <Image src={p.image} alt={item.name} fill priority sizes="(max-width: 1000px) 100vw, 480px" />
                <span className="card__code">{p.code}</span>
              </div>
              <div className="pd-hero__info">
                <span className="card__cat">{t.products.filters[p.category]}</span>
                <h1>{item.name}</h1>
                <p className="pd-hero__desc">{item.desc}</p>
                <dl className="pd-quick">
                  {specs.slice(0, 4).map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="pd-load">
                  <span>{L.load}</span>
                  <strong>{p.load} <small>{t.products.units[p.unit]}</small></strong>
                </div>
                <p className="pd-custom">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  {L.custom}: {L.customValue}
                </p>
                <div className="pd-ctas">
                  <a href="#inquiry" className="btn btn--primary btn--lg">
                    {t.products.quote}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                  <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="btn btn--outline btn--lg">
                    {contact.phones[0]}
                  </a>
                </div>
              </div>
            </section>

            <section className="pd-section">
              <h2>{L.overview}</h2>
              <p className="pd-overview">{detail.overview}</p>
              <div className="pd-cols">
                <div>
                  <h3>{t.products.features}</h3>
                  <ul className="ticks">
                    {item.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h3>{L.applications}</h3>
                  <ul className="ticks ticks--dot">
                    {detail.applications.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            <section className="pd-section">
              <h2>{L.specs}</h2>
              <table className="spec-table">
                <tbody>
                  {specs.map(([k, v]) => (
                    <tr key={k}>
                      <th scope="row">{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="inquiry" className="pd-section pd-inquiry">
              <div>
                <p className="eyebrow">{t.contact.eyebrow}</p>
                <h2>{L.inquiryTitle}</h2>
                <p className="section__sub">{L.inquirySub}</p>
              </div>
              <div className="contact__card">
                <QuoteForm t={t.contact.form} names={t.products.items} initialProduct={p.slug} />
              </div>
            </section>
          </div>
        </div>

        <section className="pd-related">
          <div className="container">
            <h2>{L.related}</h2>
            <ul className="grid-products">
              {related.map((x) => (
                <li key={x.slug}>
                  <ProductCard p={x} t={t.products} locale={locale} compact />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer t={t} locale={locale} />
    </>
  );
}
