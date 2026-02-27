import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const productDropdown = [
  {
    title: 'Epoxy Floor Coating System',
    to: '/products',
    subProducts: ['Primers', 'Screed Coat', 'Self Level Top Coat'],
  },
  {
    title: 'Epoxy Paint / Coating System',
    to: '/products',
    subProducts: ['2 Pack Epoxy Primer', '2 Pack Epoxy Top/Finish Paint', 'Epoxy Clear Coating'],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="bg-[#4f81bd] text-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-2 text-sm">
          <a href="mailto:response@sakshicoating.com" className="hover:text-[#ffc219]">
            response@sakshicoating.com
          </a>
          <a href="tel:+919867143094" className="hover:text-[#ffc219]">
            +91-9867143094
          </a>
        </div>
      </div>

      <div className="bg-transparent">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 lg:py-4">
          <Link to="/" className="flex items-center">
            <img src="https://sakshicoating.com/images/logo.png" alt="Sakshi Coating" className="hidden h-[72px] w-auto sm:block lg:h-[85px]" />
            <img src="https://sakshicoating.com/images/logo-res.png" alt="Sakshi Coating" className="h-[45px] w-auto sm:hidden" />
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

            <div className="group relative flex items-center gap-2">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-[14px] font-medium uppercase tracking-[0.3px] ${isActive ? 'bg-[#ffc219] px-3 py-2 text-[#1f3f68]' : 'text-white hover:text-[#ffc219]'}`
                }
              >
                Products
              </NavLink>
              <span className="cursor-default rounded-full border border-white/70 px-2 py-0.5 text-white transition group-hover:border-[#ffc219] group-hover:text-[#ffc219]">
                +
              </span>

              <div className="invisible absolute left-0 top-full z-50 mt-2 w-[320px] translate-y-2 bg-white opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {productDropdown.map((item) => (
                  <div key={item.title} className="group/item relative border-b border-[#e5eef9] last:border-b-0">
                    <Link to={item.to} className="flex items-center justify-between px-4 py-3 text-[13px] font-medium uppercase text-[#1f3f68] hover:bg-[#f8fbff]">
                      <span>{item.title}</span>
                      <span className="rounded-full border border-[#4f81bd] px-2 py-0.5 text-[#4f81bd]">+</span>
                    </Link>
                    <div className="invisible absolute left-full top-0 z-50 ml-1 w-[260px] bg-white opacity-0 shadow-xl transition group-hover/item:visible group-hover/item:opacity-100">
                      {item.subProducts.map((subProduct) => (
                        <Link
                          key={subProduct}
                          to="/products"
                          className="block border-b border-[#e5eef9] px-4 py-3 text-[12px] font-medium uppercase text-[#1f3f68] hover:bg-[#4f81bd] hover:text-white"
                        >
                          {subProduct}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {navItems.slice(2).map((item) => (
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
                  onClick={() => setProductsOpen((value) => !value)}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium uppercase text-white"
                >
                  <span>Products</span>
                  <span className="rounded-full border border-white/70 px-2 py-0.5">+</span>
                </button>

                {productsOpen && (
                  <div className="space-y-2 border-t border-white/20 bg-[#274d7b] px-3 py-3">
                    {productDropdown.map((item) => (
                      <div key={item.title}>
                        <Link to="/products" onClick={() => setOpen(false)} className="block py-1 text-xs font-semibold uppercase text-[#ffc219]">
                          {item.title}
                        </Link>
                        <div className="ml-3 space-y-1">
                          {item.subProducts.map((subProduct) => (
                            <Link key={subProduct} to="/products" onClick={() => setOpen(false)} className="block py-1 text-xs uppercase text-white/90">
                              {subProduct}
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


