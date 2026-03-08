import { Link, NavLink } from 'react-router-dom';
import { useState, type MouseEvent } from 'react';
import logo from '../assets/sp-solution-logo.svg';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const serviceDropdown = [
  {
    title: 'Flooring Systems',
    to: '/products',
    subProducts: [
      { label: 'Architectural Coatings', to: '/products/architectural-coatings-epoxy-grouting' },
      { label: 'Epoxy Flooring', to: '/products/epoxy-flooring-systems' },
      { label: 'PU Concrete Flooring', to: '/products/pu-concrete-flooring' },
      { label: 'EPU Hybrid Flooring', to: '/products/epu-hybrid-flooring' },
  ],
  },
  {
    title: 'Protective Coatings',
    to: '/products',
    subProducts: [
      { label: 'ESD / Anti-Static Flooring', to: '/products/esd-anti-static-flooring' },
      { label: 'Acid & Chemical Resistant Flooring', to: '/products/acid-chemical-resistant-flooring' },
      { label: 'Industrial Painting', to: '/products/industrial-commercial-coatings' },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [submenuDirection, setSubmenuDirection] = useState<'left' | 'right'>('right');

  const handleServicesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setServicesMenuOpen((value) => !value);
  };

  const handleSubmenuEnter = (event: MouseEvent<HTMLDivElement>, key: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const submenuWidth = 260;
    const viewportPadding = 16;
    const hasRightSpace = window.innerWidth - rect.right >= submenuWidth + viewportPadding;
    const hasLeftSpace = rect.left >= submenuWidth + viewportPadding;

    if (hasRightSpace || !hasLeftSpace) {
      setSubmenuDirection('right');
    } else {
      setSubmenuDirection('left');
    }

    setActiveSubmenu(key);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="bg-[#4f81bd] text-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
          <a href="mailto:spsolutions.in.com@gmail.com" className="hidden truncate hover:text-[#ffc219] sm:inline-block">
            spsolutions.in.com@gmail.com
          </a>
          <a href="tel:+919890002239" className="hover:text-[#ffc219]">
            +91-9890002239
          </a>
        </div>
      </div>

      <div className="bg-transparent">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 lg:py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SP Solutions" className="h-[48px] w-auto rounded bg-white/95 p-1 sm:h-[58px] lg:h-[68px]" />
          </Link>

          <button className="rounded border border-white/60 px-3 py-2 text-white lg:hidden" onClick={() => setOpen((value) => !value)} type="button">
            Menu
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[14px] font-medium uppercase tracking-[0.3px] ${isActive ? 'bg-[#ffc219] px-3 py-2 text-[#1f3f68]' : 'text-white hover:text-[#ffc219]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div
              className="relative flex items-center gap-2"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => {
                setServicesMenuOpen(false);
                setActiveSubmenu(null);
              }}
            >
              <NavLink
                to="/products"
                onClick={handleServicesClick}
                className={({ isActive }) =>
                  `text-[14px] font-medium uppercase tracking-[0.3px] ${isActive ? 'bg-[#ffc219] px-3 py-2 text-[#1f3f68]' : 'text-white hover:text-[#ffc219]'}`
                }
              >
                Services
              </NavLink>

              <button
                type="button"
                onClick={() => setServicesMenuOpen((value) => !value)}
                className="rounded-full border border-white/70 px-2 py-0.5 text-white transition hover:border-[#ffc219] hover:text-[#ffc219]"
              >
                +
              </button>

              <div className={`absolute left-0 top-full z-50 w-[320px] pt-2 transition duration-200 ${servicesMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className="bg-white shadow-xl">
                  <Link to="/products" className="block border-b border-[#e5eef9] bg-[#f8fbff] px-4 py-3 text-[12px] font-semibold uppercase text-[#4f81bd] hover:bg-[#e9f2fb]">
                    All Services
                  </Link>
                  {serviceDropdown.map((item) => (
                    <div
                      key={item.title}
                      className="relative border-b border-[#e5eef9] last:border-b-0"
                      onMouseEnter={(event) => handleSubmenuEnter(event, item.title)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link to={item.to} className="flex items-center justify-between px-4 py-3 text-[13px] font-medium uppercase text-[#1f3f68] hover:bg-[#f8fbff]">
                        <span>{item.title}</span>
                        <span className="rounded-full border border-[#4f81bd] px-2 py-0.5 text-[#4f81bd]">+</span>
                      </Link>
                      <div
                        className={`absolute top-0 z-50 w-[260px] bg-white shadow-xl transition ${submenuDirection === 'right' ? 'left-full' : 'right-full'} ${
                          activeSubmenu === item.title ? 'visible opacity-100' : 'invisible opacity-0'
                        }`}
                      >
                        {item.subProducts.map((subProduct) => (
                          <Link
                            key={subProduct.label}
                            to={subProduct.to}
                            className="block border-b border-[#e5eef9] px-4 py-3 text-[12px] font-medium uppercase text-[#1f3f68] hover:bg-[#4f81bd] hover:text-white"
                          >
                            {subProduct.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(3).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[14px] font-medium uppercase tracking-[0.3px] ${isActive ? 'bg-[#ffc219] px-3 py-2 text-[#1f3f68]' : 'text-white hover:text-[#ffc219]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="bg-[#1f3f68] px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-3">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded px-3 py-2 text-sm font-medium uppercase ${isActive ? 'bg-[#ffc219] text-[#1f3f68]' : 'text-white hover:bg-white/10'}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded px-3 py-2 text-sm font-medium uppercase ${isActive ? 'bg-[#ffc219] text-[#1f3f68]' : 'text-white hover:bg-white/10'}`}
              >
                About Us
              </NavLink>

              <div className="rounded border border-white/20">
                <button
                  type="button"
                  onClick={() => setServicesOpen((value) => !value)}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium uppercase text-white"
                >
                  <span>Services</span>
                  <span className="rounded-full border border-white/70 px-2 py-0.5">+</span>
                </button>

                {servicesOpen && (
                  <div className="space-y-2 border-t border-white/20 bg-[#274d7b] px-3 py-3">
                    {serviceDropdown.map((item) => (
                      <div key={item.title}>
                        <Link to={item.to} onClick={() => setOpen(false)} className="block py-1 text-xs font-semibold uppercase text-[#ffc219]">
                          {item.title}
                        </Link>
                        <div className="ml-3 space-y-1">
                          {item.subProducts.map((subProduct) => (
                            <Link key={subProduct.label} to={subProduct.to} onClick={() => setOpen(false)} className="block py-1 text-xs uppercase text-white/90">
                              {subProduct.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded px-3 py-2 text-sm font-medium uppercase ${isActive ? 'bg-[#ffc219] text-[#1f3f68]' : 'text-white hover:bg-white/10'}`}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
