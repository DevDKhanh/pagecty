import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteForm from "@/components/QuoteForm";
import { getDict, isLocale } from "@/lib/i18n";
import { contact, products } from "@/lib/products";

const whyIcons = [
  <path key="a" d="M4 20V9l8-5 8 5v11M9 20v-6h6v6" />,
  <path key="b" d="M3 3h18v18H3zM3 9h18M9 21V9" />,
  <path key="c" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  <path key="d" d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5" />,
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);

  return (
    <>
      <Header locale={locale} nav={t.nav} />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__grid" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">{t.hero.eyebrow}</p>
              <h1>
                {t.hero.titleA} <em>{t.hero.titleB}</em>
              </h1>
              <p className="hero__lead">{t.hero.subtitle}</p>
              <div className="hero__ctas">
                <a href="#contact" className="btn btn--primary btn--lg">
                  {t.hero.ctaPrimary}
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a href="#products" className="btn btn--ghost btn--lg">
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <dl className="stats">
                {t.hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero__visual">
              <div className="hero__photo">
                <Image src="/products/pallet-rack.webp" alt={t.hero.tag} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="hero__tag">
                <span className="hero__tag-code">FR-01</span>
                <span>{t.hero.tag}</span>
                <span className="hero__tag-load">
                  {products[0].load} {t.products.units.level}
                </span>
              </div>
              <div className="hero__thumb">
                <Image src="/products/light-duty-shelf.webp" alt="" fill sizes="160px" />
              </div>
            </div>
          </div>
        </section>

        {/* WHY BAR */}
        <section className="why" aria-label="Faruit">
          <div className="container why__grid">
            {t.why.items.map((w, i) => (
              <div className="why__item" key={w.title}>
                <svg viewBox="0 0 24 24" aria-hidden="true">{whyIcons[i]}</svg>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="section">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">{t.products.eyebrow}</p>
                <h2>{t.products.title}</h2>
              </div>
              <p className="section__sub">{t.products.subtitle}</p>
            </div>
            <ProductCatalog t={t.products} locale={locale} />
          </div>
        </section>

        {/* FACTORY */}
        <section id="factory" className="factory">
          <div className="container factory__inner">
            <div className="factory__media">
              <Image src="/products/mezzanine-rack.webp" alt={t.products.items["mezzanine-rack"].name} fill sizes="(max-width: 900px) 100vw, 45vw" />
              <div className="factory__badge">
                <strong>20,000</strong>
                <span>m²</span>
              </div>
            </div>
            <div className="factory__copy">
              <p className="eyebrow eyebrow--light">{t.capabilities.eyebrow}</p>
              <h2>{t.capabilities.title}</h2>
              <p className="factory__lead">{t.capabilities.body}</p>
              <ol className="caps">
                {t.capabilities.items.map((c, i) => (
                  <li key={c.title}>
                    <span className="caps__n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="finishes">
                <span className="finishes__title">{t.capabilities.finishesTitle}</span>
                <ul>
                  {t.capabilities.finishes.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="eyebrow">{t.process.eyebrow}</p>
              <h2>{t.process.title}</h2>
            </div>
            <ol className="steps">
              {t.process.steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="industries">
          <div className="industries__bg" aria-hidden="true">
            <Image src="/products/drive-in-rack.webp" alt="" fill sizes="100vw" />
          </div>
          <div className="container industries__inner">
            <div className="industries__head">
              <p className="eyebrow eyebrow--light">{t.industries.eyebrow}</p>
              <h2>{t.industries.title}</h2>
              <p>{t.industries.subtitle}</p>
            </div>
            <ul className="industries__grid">
              {t.industries.items.map((it, i) => (
                <li key={it.title}>
                  <span className="industries__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container contact__inner">
            <div className="contact__info">
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p className="section__sub">{t.contact.subtitle}</p>
              <ul className="contact__list">
                <li>
                  <span className="contact__label">{t.contact.phone}</span>
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
                      {p}
                    </a>
                  ))}
                </li>
                <li>
                  <span className="contact__label">{t.contact.email}</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <span className="contact__label">{t.contact.wechat}</span>
                  <span>{contact.wechat}</span>
                </li>
                <li>
                  <span className="contact__label">{t.contact.address}</span>
                  <span>{t.contact.addressValue}</span>
                </li>
              </ul>
            </div>
            <div className="contact__card">
              <QuoteForm t={t.contact.form} names={t.products.items} />
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} locale={locale} />
    </>
  );
}
