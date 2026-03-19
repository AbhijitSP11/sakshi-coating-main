import { Link } from 'react-router-dom';
import { products } from '../data/products';

const trustedClients = [
  'Mahindra',
  'Bosch',
  'ThyssenKrupp',
  'MSS India',
  'Vaishnavi Auto',
];

const whyChooseUs = [
  { icon: '🏆', title: '25+ Years Experience', desc: 'Decades of proven expertise in industrial flooring systems across Maharashtra.' },
  { icon: '🤝', title: 'Pidilite CIPY Dealer', desc: 'Authorised dealer of Pidilite CIPY products, ensuring premium material quality.' },
  { icon: '👷', title: 'Skilled Application Team', desc: 'Trained and supervised applicators for precise, consistent results every project.' },
  { icon: '🏭', title: 'Industrial Client Experience', desc: 'Trusted by automobile plants, pharma, warehouses, and food processing units.' },
  { icon: '⚡', title: 'Fast Project Completion', desc: 'Efficient scheduling and execution to minimise your operational downtime.' },
];

const processSteps = [
  { step: '01', title: 'Site Inspection', desc: 'We assess the site condition, substrate quality, and project requirements on-site.' },
  { step: '02', title: 'Surface Preparation', desc: 'Diamond grinding, shot blasting, or scarification to prepare the substrate.' },
  { step: '03', title: 'Primer Application', desc: 'Suitable primer coat applied to ensure proper adhesion of the flooring system.' },
  { step: '04', title: 'Epoxy / PU Installation', desc: 'Application of epoxy or PU flooring system in specified thickness and layers.' },
  { step: '05', title: 'Final Inspection', desc: 'Quality check and handover with post-installation support.' },
];

const industries = [
  { label: 'Automobile Plants', icon: '🚗' },
  { label: 'Pharma Plants', icon: '💊' },
  { label: 'Warehouses & Logistics', icon: '📦' },
  { label: 'Food Processing Units', icon: '🏭' },
  { label: 'Engineering Plants', icon: '⚙️' },
  { label: 'Parking Decks', icon: '🅿️' },
  { label: 'Hospitals & Laboratories', icon: '🏥' },
  { label: 'Commercial Buildings', icon: '🏢' },
];

const technicalSystems = [
  {
    name: 'Self Levelling Epoxy',
    thickness: '2–3 mm',
    use: 'Factories, warehouses, showrooms',
    desc: 'Seamless, high-gloss surface ideal for medium-duty industrial and commercial areas.',
  },
  {
    name: 'PU Concrete Flooring',
    thickness: '4–6 mm',
    use: 'Food & pharma, cold storage',
    desc: 'Thermal-shock resistant, hygienic, and chemical-resistant flooring for demanding environments.',
  },
  {
    name: 'Heavy Duty Screed',
    thickness: '6–10 mm',
    use: 'Heavy manufacturing, logistics hubs',
    desc: 'High-build system designed for extreme mechanical loads and heavy traffic.',
  },
];

const galleryItems = [
  { caption: 'Warehouse Epoxy Flooring – Nashik', before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80', after: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=80' },
  { caption: 'Automobile Plant Flooring – Pune', before: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=80', after: 'https://images.unsplash.com/photo-1565793979792-83cbdc2d8b6d?auto=format&fit=crop&w=700&q=80' },
  { caption: 'Pharma Grade Flooring – Nashik', before: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=80', after: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80' },
];

const serviceCards = [
  { title: 'Industrial Epoxy Flooring', icon: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M9 21V9"/></svg> },
  { title: 'Self Levelling Flooring', icon: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 12h18M3 17h18M3 7h18"/></svg> },
  { title: 'PU Concrete Flooring', icon: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
  { title: 'Anti-Skid Car Parking', icon: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M2 18H4M8 18h8m2 0h2M4 18V8l3-4h10l3 4v10"/></svg> },
  { title: 'ESD Flooring', icon: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: 'Food Grade Epoxy Flooring', icon: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[760px] overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(18,22,40,0.70), rgba(18,22,40,0.70)), url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1200px] items-center px-4 pt-[130px]">
          <div className="w-full max-w-[780px]">
            <div className="bg-black/20 p-6 md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-[#ffc219]">Nashik's Trusted Flooring Partner</p>
              <h1 className="text-[40px] font-bold leading-tight text-white md:text-[58px]">Industrial Epoxy &amp; PU Flooring Experts</h1>
              <p className="mt-4 text-[17px] leading-8 text-white/90">
                Specialists in factory, warehouse &amp; pharma flooring — delivering durable epoxy, PU, and protective coating systems for over 25 years.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="tel:+919890002239" className="btn-theme rounded-full px-7 py-3 text-sm font-semibold uppercase">Get Free Site Inspection</a>
                <Link to="/enquiry" className="rounded-full border border-white px-7 py-3 text-sm font-semibold uppercase text-white hover:bg-white hover:text-black">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED CLIENTS ── */}
      <section className="border-b border-[#e8eef6] bg-white px-4 py-10">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[2px] text-[#7a8faa]">Trusted by Leading Industrial Companies</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {trustedClients.map((client) => (
              <div
                key={client}
                className="rounded border border-[#dde8f4] bg-[#f8fbff] px-6 py-3 text-[15px] font-semibold text-[#1f3f68]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / COMPANY ── */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]">About <span className="text-[#ffc219]">SP Solutions</span></h2>
            <p className="mt-5 text-[16px] leading-8">
              SP Solutions (Sakshi Coating) is a Nashik-based industrial flooring contractor with over <strong>25 years of experience</strong>. We specialise in epoxy, polyurethane, and protective coating systems for factories, warehouses, pharma plants, and commercial spaces. As an authorised dealer of <strong>Pidilite CIPY products</strong>, we guarantee material quality and performance on every project.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="bg-white p-6 shadow-[0_0_30px_rgba(0,0,0,0.09)] md:p-8">
              <h5 className="text-[20px] font-medium uppercase text-[#23244a]">What We Do</h5>
              <ul className="arrow-list mt-4 space-y-2 text-[15px] leading-7">
                <li>Industrial epoxy flooring installation</li>
                <li>Self levelling flooring systems</li>
                <li>PU concrete &amp; food-grade flooring</li>
                <li>ESD / anti-static flooring</li>
                <li>Car park &amp; deck anti-skid coatings</li>
                <li>Surface preparation and treatment</li>
                <li>Industrial painting solutions</li>
              </ul>
            </article>
            <article className="bg-[#f8fbff] p-6 shadow-[0_0_30px_rgba(0,0,0,0.09)] md:p-8">
              <h5 className="text-[20px] font-medium uppercase text-[#23244a]">From Consultation To Final Finish</h5>
              <p className="mt-4 text-[15px] leading-8">
                Our team brings 25+ years of hands-on experience across manufacturing, automotive, healthcare, and pharma spaces. We focus on precision execution, quality Pidilite CIPY materials, and timely completion for maximum client satisfaction.
              </p>
              <Link to="/about" className="mt-6 inline-block rounded border border-[#23244a] px-5 py-2 text-sm font-medium uppercase text-[#23244a] hover:bg-[#23244a] hover:text-white">
                Read More
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── SERVICES (ICON CARDS) ── */}
      <section className="bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]">Our <span className="text-[#ffc219]">Services</span></h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((svc) => (
              <article key={svc.title} className="flex items-start gap-4 rounded bg-white p-6 shadow-sm transition hover:shadow-md">
                <span className="mt-1 flex-shrink-0 text-[#ffc219]">{svc.icon}</span>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#23244a]">{svc.title}</h4>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/products" className="btn-theme rounded-full px-8 py-3 text-sm font-semibold uppercase">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]">Why Choose <span className="text-[#ffc219]">Us</span></h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="rounded bg-[#f8fbff] p-6 text-center shadow-sm">
                <div className="mb-3 text-4xl">{item.icon}</div>
                <h4 className="text-[16px] font-semibold text-[#23244a]">{item.title}</h4>
                <p className="mt-2 text-[13px] leading-6 text-[#55647a]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="bg-[#1f3f68] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-white">Our <span className="text-[#ffc219]">Process</span></h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s) => (
              <article key={s.step} className="relative rounded bg-white/10 p-6 text-white">
                <div className="mb-3 text-[36px] font-bold text-[#ffc219]/60">{s.step}</div>
                <h4 className="text-[16px] font-semibold text-white">{s.title}</h4>
                <p className="mt-2 text-[13px] leading-6 text-white/75">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER GALLERY ── */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]">Project <span className="text-[#ffc219]">Gallery</span></h2>
          <p className="mt-2 text-[15px] text-[#55647a]">Before &amp; after results from our completed projects.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={item.caption} className="overflow-hidden rounded shadow-sm">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt={`Before – ${item.caption}`} className="h-[180px] w-full object-cover" />
                    <span className="absolute left-2 top-2 rounded bg-[#1f3f68]/80 px-2 py-0.5 text-[11px] font-semibold uppercase text-white">Before</span>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt={`After – ${item.caption}`} className="h-[180px] w-full object-cover" />
                    <span className="absolute left-2 top-2 rounded bg-[#ffc219] px-2 py-0.5 text-[11px] font-semibold uppercase text-[#1f3f68]">After</span>
                  </div>
                </div>
                <div className="bg-[#f8fbff] px-4 py-3 text-[13px] font-medium text-[#23244a]">{item.caption}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT RANGE ── */}
      <section className="bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]"><span className="text-[#ffc219]">Product</span> Range</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <article key={product.id} className="product-range-card bg-white shadow-sm">
                <img src={product.image} alt={product.title} className="h-[210px] w-full object-cover" />
                <div className="p-5">
                  <h4 className="text-[20px] font-medium uppercase text-[#23244a]">{product.title}</h4>
                  <p className="mt-2 text-[15px] leading-7">{product.shortDescription}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="bg-[#eef3f9] pb-0">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 text-center">
          <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]">Industries <span className="text-[#ffc219]">We Serve</span></h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-2 gap-4 px-4 pb-16 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ label, icon }) => (
            <div key={label} className="flex items-center gap-3 rounded bg-white p-5 shadow-sm">
              <span className="text-2xl">{icon}</span>
              <h4 className="text-[15px] font-medium text-[#23244a]">{label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL FLOORING SYSTEMS ── */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[38px] font-medium text-[#23244a]">Technical <span className="text-[#ffc219]">Flooring Systems</span></h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {technicalSystems.map((sys) => (
              <article key={sys.name} className="rounded border border-[#dde8f4] bg-white p-7 shadow-sm">
                <div className="mb-4 inline-block rounded bg-[#ffc219] px-3 py-1 text-xs font-bold uppercase text-[#1f3f68]">{sys.thickness}</div>
                <h4 className="text-[19px] font-semibold text-[#23244a]">{sys.name}</h4>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#4f81bd]">{sys.use}</p>
                <p className="mt-3 text-[14px] leading-7 text-[#55647a]">{sys.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#f8fbff] px-4 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-[32px] font-medium text-[#23244a]">
              Get a <span className="font-bold text-[#ffc219]">Free Site Inspection</span> Today
            </h3>
            <p className="mt-2 text-[15px] text-[#55647a]">Call us at <a href="tel:+919890002239" className="font-semibold text-[#1f3f68] hover:text-[#ffc219]">+91-9890002239</a> or send an enquiry online.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919890002239" className="btn-theme rounded px-7 py-3 text-sm font-semibold uppercase">Call Now</a>
            <Link to="/enquiry" className="rounded border border-[#1f3f68] px-7 py-3 text-sm font-semibold uppercase text-[#1f3f68] hover:bg-[#1f3f68] hover:text-white">Request Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
