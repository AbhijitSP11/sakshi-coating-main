import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const serviceItems = [
  'Surface Preparation',
  'Epoxy Flooring Installation',
  'PU Flooring Systems',
  'Decorative Coatings',
  'Industrial Painting',
];

const productItems = [
  'Epoxy Flooring Systems',
  'PU Concrete Flooring',
  'EPU Hybrid Flooring',
  'ESD / Anti-Static Flooring',
  'Car Park & Deck Flooring',
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/products' },
  { label: 'Contact', to: '/contact' },
  { label: 'Send Enquiry', to: '/enquiry' },
];

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ffc219]/45 bg-[#1a2743] text-[#ffc219]">
      {children}
    </span>
  );
}

function ArrowBullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-white/90">
      <span className="mt-0.5 text-[#ffc219]">{'->'}</span>
      <span>{text}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#121628] text-white">
      <section className="border-b border-white/10 bg-[#1a2138] px-4 py-6">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[1.2px] text-[#ffc219]">Need Flooring Guidance?</p>
            <h3 className="mt-1 text-2xl font-semibold text-white">Get a Site Visit and Expert Recommendation</h3>
          </div>
          <Link to="/enquiry" className="btn-theme rounded border border-[#ffc219] px-6 py-3 text-sm font-semibold uppercase shadow-[0_6px_18px_rgba(255,194,25,0.25)]">
            Request Enquiry
          </Link>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="border-b border-white/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <h5 className="text-xl font-semibold uppercase text-white">SP Solutions</h5>
            <p className="mt-4 max-w-[420px] text-sm leading-7 text-white/80">
              Trusted industrial and commercial flooring partner for epoxy, PU, and protective coating systems designed for durability, safety, and performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products" className="rounded border border-[#4f81bd] px-4 py-2 text-xs font-semibold uppercase text-[#8eb5e0] hover:border-[#ffc219] hover:text-[#ffc219]">
                Explore Services
              </Link>
              <Link to="/enquiry" className="rounded border border-[#ffc219] px-4 py-2 text-xs font-semibold uppercase text-[#ffc219] hover:bg-[#ffc219] hover:text-[#121628]">
                Send Enquiry
              </Link>
            </div>
          </div>

          <div>
            <h5 className="mb-4 border-l-4 border-[#ffc219] pl-3 text-sm font-semibold uppercase tracking-wide text-white">What We Do</h5>
            <ul className="space-y-2">
              {serviceItems.map((item) => (
                <ArrowBullet key={item} text={item} />
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 border-l-4 border-[#4f81bd] pl-3 text-sm font-semibold uppercase tracking-wide text-white">Product Range</h5>
            <ul className="space-y-2">
              {productItems.map((item) => (
                <ArrowBullet key={item} text={item} />
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 border-l-4 border-[#4f81bd] pl-3 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="flex items-start gap-2 text-sm text-white/90 hover:text-white">
                    <span className="mt-0.5 text-[#ffc219]">{'->'}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-6">
        <div className="mx-auto grid w-full max-w-[1200px] gap-5 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <IconWrap>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </IconWrap>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#ffc219]">Address</p>
              <p className="mt-1 text-sm text-white/90">Silver Plaza, Pathardi Phata, Nashik</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IconWrap>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.8v2.9a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.3 4.2 2 2 0 0 1 4.3 2h2.9a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2L8.1 9.2a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2-.5c.8.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2Z" />
              </svg>
            </IconWrap>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#ffc219]">Phone</p>
              <a href="tel:+919890002239" className="mt-1 block text-sm text-white/90 hover:text-white">
                +91-9890002239
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IconWrap>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </IconWrap>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#ffc219]">Email</p>
              <a href="mailto:spsolutions.in.com@gmail.com" className="mt-1 block text-sm text-white/90 hover:text-white">
                spsolutions.in.com@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-2 text-xs text-white/70 sm:flex-row sm:items-center">
          <p>SP Solutions | Industrial & Commercial Flooring Services</p>
          <p>Designed for durability, safety, and performance.</p>
        </div>
      </div>
    </footer>
  );
}

