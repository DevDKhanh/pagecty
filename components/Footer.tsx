import Logo from "./Logo";
import { contact, products } from "@/lib/products";
import type { Dict } from "@/dictionaries/en";
import type { Locale } from "@/lib/i18n";

export default function Footer({ t, locale }: { t: Dict; locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <Logo light />
        <p>{t.footer.tagline}</p>
      </div>
      <div>
        <h4>{t.footer.products}</h4>
        <ul>
          {products.map((p) => (
            <li key={p.slug}>
              <a href={`/${locale}/products/${p.slug}`}>{t.products.items[p.slug].name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>{t.footer.company}</h4>
        <ul>
          <li><a href={`/${locale}#factory`}>{t.nav.capabilities}</a></li>
          <li><a href={`/${locale}#process`}>{t.nav.process}</a></li>
          <li><a href={`/${locale}#industries`}>{t.nav.industries}</a></li>
          <li><a href={`/${locale}#contact`}>{t.nav.contact}</a></li>
        </ul>
      </div>
      <div>
        <h4>{t.nav.contact}</h4>
        <ul>
          {contact.phones.map((p) => (
            <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></li>
          ))}
          <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        </ul>
      </div>
    </div>
    <div className="container footer__bottom">
      <span>© {year} Faruit Shelving Equipment Co., Ltd. {t.footer.rights}</span>
    </div>
  </footer>
  );
}
