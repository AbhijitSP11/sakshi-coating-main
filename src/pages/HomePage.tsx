import { Link } from 'react-router-dom';
import { products } from '../data/products';

const industries = [
  'Manufacturing & Engineering Units',
  'Automotive Industry',
  'Pharmaceutical & Healthcare Facilities',
  'Food & Beverage Plants',
  'Warehouses & Logistics',
  'Commercial Buildings',
  'Hospitals & Laboratories',
  'Parking Structures',
];

const capabilities = [
  'Surface preparation and treatment',
  'Industrial epoxy flooring installation',
  'Polyurethane flooring systems',
  'Decorative and protective coatings',
  'Car park and deck flooring',
  'Chemical and abrasion-resistant flooring',
  'Industrial painting solutions',
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative min-h-[760px] overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(18,22,40,0.66), rgba(18,22,40,0.66)), url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1200px] items-center px-4 pt-[130px]">
          <div className="w-full max-w-[760px]">
            <div className="bg-black/20 p-6 md:p-10">
              <h2 className="text-[42px] font-medium text-white md:text-[56px]">Industrial & Commercial Flooring Solutions</h2>
              <p className="mt-4 text-[18px] leading-8 text-white/95">
                Trusted service provider for epoxy, polyurethane, and protective coating systems designed for durability, safety, and performance.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/products" className="btn-theme rounded-full px-6 py-3 text-sm font-medium uppercase">Our Services</Link>
                <Link to="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-medium uppercase text-white hover:bg-white hover:text-black">
                  Request Site Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">About Our <span className="text-[#ffc219]">Company</span></h2>
            <p className="mt-5 text-[16px] leading-8">
              We are a trusted service provider specializing in industrial and commercial flooring solutions. With strong technical expertise and skilled supervision, we deliver high-quality epoxy, polyurethane, and protective coating systems.
            </p>
            <p className="mt-3 text-[16px] leading-8">
              Our objective is simple: provide reliable flooring solutions that extend floor life, improve safety, and reduce long-term maintenance costs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="bg-white p-6 shadow-[0_0_30px_rgba(0,0,0,0.09)] md:p-8">
              <h5 className="text-[20px] font-medium uppercase text-[#23244a]">What Do We Do</h5>
              <ul className="arrow-list mt-4 space-y-2 text-[15px] leading-7">
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="bg-[#f8fbff] p-6 shadow-[0_0_30px_rgba(0,0,0,0.09)] md:p-8">
              <h5 className="text-[20px] font-medium uppercase text-[#23244a]">From Consultation To Final Finish</h5>
              <p className="mt-4 text-[15px] leading-8">
                Our team brings years of hands-on experience in installing flooring systems across manufacturing, automotive, healthcare, and commercial spaces. We focus on precision execution, quality materials, and timely completion to ensure maximum client satisfaction.
              </p>
              <Link to="/about" className="mt-6 inline-block rounded border border-[#23244a] px-5 py-2 text-sm font-medium uppercase text-[#23244a] hover:bg-[#23244a] hover:text-white">
                Read More
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]"><span className="text-[#ffc219]">Product</span> Range</h2>
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

      <section className="bg-[#eef3f9] pb-0">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 text-center">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">Industries <span className="text-[#ffc219]">We Serve</span></h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((title) => (
            <div key={title} className="rounded bg-white p-5 shadow-sm">
              <h4 className="text-[18px] font-medium text-[#23244a]">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-[34px] font-medium text-[#23244a]">
            Request A Site Visit <span className="font-bold text-[#ffc219]">Today</span>
          </h3>
          <Link to="/contact" className="btn-theme rounded px-7 py-3 text-sm font-medium uppercase">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
