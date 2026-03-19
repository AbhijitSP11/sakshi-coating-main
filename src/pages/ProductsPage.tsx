import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const serviceHighlights = [
  {
    id: 'epoxy-flooring',
    productId: 'epoxy-flooring-systems',
    title: 'Industrial Epoxy Flooring',
    description: 'Seamless, durable flooring ideal for factories, warehouses, hospitals, and commercial areas. Resistant to chemicals, abrasion, and heavy traffic.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="3" width="20" height="18" rx="2"/>
        <path d="M2 9h20M9 21V9"/>
      </svg>
    ),
  },
  {
    id: 'self-levelling-flooring',
    productId: 'epoxy-flooring-systems',
    title: 'Self Levelling Flooring',
    description: 'High-gloss, flat-finish epoxy system applied at 2–3 mm for showrooms, clean rooms, and light industrial floors.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 12h18M3 17h18M3 7h18"/>
      </svg>
    ),
  },
  {
    id: 'pu-concrete-flooring',
    productId: 'pu-concrete-flooring',
    title: 'PU Concrete Flooring',
    description: 'Food-grade flooring designed for hygienic environments such as food processing plants and pharma facilities. High thermal and chemical resistance.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'epu-hybrid-flooring',
    productId: 'epu-hybrid-flooring',
    title: 'EPU Hybrid Flooring',
    description: 'A combination of epoxy and polyurethane properties offering flexibility, strength, and superior durability.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 'esd-anti-static-flooring',
    productId: 'esd-anti-static-flooring',
    title: 'ESD / Anti-Static Flooring',
    description: 'Specialized flooring for electronics and sensitive production environments requiring static control.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    id: 'polyurethane-flooring',
    productId: 'polyurethane-flooring',
    title: 'Polyurethane Flooring',
    description: 'Flexible, impact-resistant flooring suitable for dynamic industrial environments.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    id: 'car-park-deck-flooring',
    productId: 'car-park-deck-flooring',
    title: 'Anti-Skid Car Parking Flooring',
    description: 'Heavy-duty coating systems designed for parking structures, ramps, and decks with anti-skid features.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M4 18V8l3-4h10l3 4v10"/>
      </svg>
    ),
  },
  {
    id: 'acid-chemical-resistant-flooring',
    productId: 'acid-chemical-resistant-flooring',
    title: 'Acid & Chemical Resistant Flooring',
    description: 'Protection against aggressive chemicals used in laboratories and industrial processes.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9 3h6v11l4 7H5l4-7V3z"/>
      </svg>
    ),
  },
  {
    id: 'food-grade-epoxy',
    productId: 'pu-concrete-flooring',
    title: 'Food Grade Epoxy Flooring',
    description: 'Hygienic, seamless, and easy-to-clean flooring for food production areas meeting food safety standards.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: 'decorative-flooring',
    productId: 'decorative-metallic-flooring',
    title: 'Decorative Flooring',
    description: 'Aesthetic epoxy and designer coatings for commercial and retail spaces.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    id: 'underlay-screed-systems',
    productId: 'underlay-screed-systems',
    title: 'Underlay & Screed Systems',
    description: 'Surface leveling and strengthening solutions to prepare substrates for final flooring systems.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="14" width="20" height="6" rx="1"/>
        <path d="M6 14V8M12 14V6M18 14V10"/>
      </svg>
    ),
  },
  {
    id: 'industrial-commercial-coatings',
    productId: 'industrial-commercial-coatings',
    title: 'Industrial & Commercial Painting',
    description: 'Protective and decorative coating solutions for industrial structures and commercial facilities.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M2 20h20M4 20V8l8-5 8 5v12"/>
        <rect x="9" y="13" width="6" height="7"/>
      </svg>
    ),
  },
];

const technicalSystems = [
  { name: 'Self Levelling Epoxy', thickness: '2–3 mm', use: 'Factories, warehouses, showrooms', desc: 'Seamless, high-gloss surface ideal for medium-duty industrial and commercial areas requiring a clean, flat finish.' },
  { name: 'PU Concrete Flooring', thickness: '4–6 mm', use: 'Food & pharma, cold storage', desc: 'Thermal-shock resistant, hygienic, and chemical-resistant — the preferred system for demanding food-grade environments.' },
  { name: 'Heavy Duty Screed', thickness: '6–10 mm', use: 'Heavy manufacturing, logistics hubs', desc: 'High-build system engineered for extreme mechanical loads, forklift traffic, and heavy industrial use.' },
];

export default function ProductsPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">Industrial &amp; Commercial Flooring Services</h1>
        </div>
      </section>

      {/* ── SERVICES WITH ICON CARDS ── */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">Our <span className="text-[#ffc219]">Services</span></h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <article id={service.id} key={service.id} className="scroll-mt-[170px] flex flex-col rounded bg-[#f8fbff] p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex-shrink-0 text-[#ffc219]">{service.icon}</span>
                  <h3 className="text-[17px] font-semibold text-[#23244a]">{service.title}</h3>
                </div>
                <p className="flex-1 text-[14px] leading-7 text-[#444]">{service.description}</p>
                <Link to={`/products/${service.productId}`} className="mt-4 inline-block text-sm font-medium uppercase text-[#4f81bd] hover:text-[#1f3f68]">
                  View Details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL FLOORING SYSTEMS ── */}
      <section className="bg-[#1f3f68] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-white">Technical <span className="text-[#ffc219]">Flooring Systems</span></h2>
          <p className="mt-3 text-[15px] text-white/75">Engineered systems matched to your load, hygiene, and durability requirements.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {technicalSystems.map((sys) => (
              <article key={sys.name} className="rounded bg-white/10 p-7 text-white">
                <div className="mb-4 inline-block rounded bg-[#ffc219] px-3 py-1 text-xs font-bold uppercase text-[#1f3f68]">{sys.thickness}</div>
                <h4 className="text-[19px] font-semibold text-white">{sys.name}</h4>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#ffc219]/80">{sys.use}</p>
                <p className="mt-3 text-[14px] leading-7 text-white/75">{sys.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT RANGE ── */}
      <section className="bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]"><span className="text-[#ffc219]">Product</span> Range</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
