import { Link } from 'react-router-dom';
import { products } from '../data/products';

const heroSlides = [
  {
    image: 'https://sakshicoating.com/images/bg/banner1.jpg',
    title: 'EPOXY Floor Coating',
    subtitle: 'Warehouse',
    link: '/products',
  },
  {
    image: 'https://sakshicoating.com/images/bg/banner2.jpg',
    title: 'Polyurethane Coating',
    subtitle: 'Wooden',
    link: '/products',
  },
  {
    image: 'https://sakshicoating.com/images/bg/banner6.jpg',
    title: 'Heat Resistant Coating',
    subtitle: 'Industrial Surface',
    link: '/products',
  },
];

const industries = [
  ['Anti Corrosion Coating', 'https://sakshicoating.com/images/portfolio/anti-resist.jpg'],
  ['Automobile Industry', 'https://sakshicoating.com/images/portfolio/automobile.jpg'],
  ['Food Grade Epoxy Coating', 'https://sakshicoating.com/images/portfolio/food-grade.jpg'],
  ['Heat Resistant Coatings', 'https://sakshicoating.com/images/portfolio/heat.jpg'],
  ['Off-shore and Marine Environment', 'https://sakshicoating.com/images/portfolio/marine.jpg'],
  ['Packaging Industry', 'https://sakshicoating.com/images/portfolio/packaging.jpg'],
  ['Petro Chemical Industry', 'https://sakshicoating.com/images/portfolio/petro-chemical.jpg'],
  ['Pharmaceuticals Industry', 'https://sakshicoating.com/images/portfolio/pharma.jpg'],
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[820px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className="hero-slide absolute inset-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity: index === 0 ? 1 : 0,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[820px] w-full max-w-[1200px] items-center px-4 pt-[130px]">
          <div className="w-full max-w-[660px]">
            <div className="bg-black/10 p-6 md:p-10">
              <h2 className="text-[42px] font-medium text-white md:text-[56px]">EPOXY Floor Coating</h2>
              <h2 className="hero-title-lg mt-2 font-medium text-white">Warehouse</h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/products" className="btn-theme rounded-full px-6 py-3 text-sm font-medium uppercase">Read More</Link>
                <Link to="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-medium uppercase text-white hover:bg-white hover:text-black">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">About Our <span className="text-[#ffc219]">Company</span></h2>
            <p className="mt-5 text-[16px] leading-8">
              <span className="text-[1.3em] font-bold text-[#ffc219]">Sakshi Coating</span> is a leading manufacturer, supplier, and applicator of epoxy flooring and PU coating systems and a wide range of epoxy pigments, providing complete industrial and commercial flooring and protective coating solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <img src="https://sakshicoating.com/images/about.jpg" alt="Sakshi Coating" className="w-[85%] rounded object-cover" />
              <div className="-mt-10 ml-auto w-[75%] rounded bg-[#ffc219] p-4">
                <h3 className="text-[30px] font-medium text-[#1f3f68]">15+ Years Experience</h3>
              </div>
            </div>
            <div className="bg-white p-5 shadow-[0_0_30px_rgba(0,0,0,0.09)] md:p-8">
              <h5 className="text-[20px] font-medium uppercase text-[#23244a]">Who We Are</h5>
              <p className="mt-3 text-[15px] leading-7">
                Established 15 years ago, Sakshi Coating Pvt. Ltd. has grown into a trusted partner for industrial, commercial, marine, architectural, and infrastructure sectors across India.
              </p>
              <h5 className="mt-5 text-[20px] font-medium uppercase text-[#23244a]">What We Do</h5>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                <li>Epoxy Flooring System and PU concrete flooring system</li>
                <li>Industrial, protective and UV-resistant coating systems</li>
                <li>Food-grade, anti-corrosive and waterproofing solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#385f8e] px-4 py-10">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div className="hidden lg:block" style={{ backgroundImage: 'url(https://sakshicoating.com/images/about2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 420 }} />
          <div className="text-white">
            <h6 className="text-[16px] uppercase tracking-wide text-[#ffc219]">Our Speciality</h6>
            <h2 className="mt-2 text-[42px] font-medium">Epoxy Floor coating</h2>
            <p className="mt-4 text-[15px] leading-8 text-white/90">
              We specialize in industrial epoxy/PU floor coating systems designed for heavy-duty performance, chemical resistance, and long-term durability.
            </p>
            <ul className="mt-5 space-y-2 text-[15px]">
              <li>Self-Leveling and Heavy-Duty Industrial Epoxy Flooring Systems</li>
              <li>Epoxy ESD/Conductive/Antistatic/Dielectric floor coating</li>
              <li>Phenolic epoxy novolac chemical resistance flooring</li>
              <li>PU Food grade floor coating</li>
            </ul>
            <Link to="/about" className="mt-6 inline-block rounded border border-white px-5 py-2 text-sm font-medium uppercase hover:bg-white hover:text-[#385f8e]">Read More</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]"><span className="text-[#ffc219]">Product</span> Range</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <article key={product.id} className="product-range-card bg-white shadow-sm">
                <img src={product.image} alt={product.title} className="h-[250px] w-full object-cover" />
                <div className="p-5">
                  <h4 className="text-[24px] font-medium uppercase text-[#23244a]">{product.category}</h4>
                  <p className="mt-2 text-[15px] leading-7">{product.shortDescription}</p>
                  <Link to={`/products/${product.id}`} className="mt-4 inline-block text-[15px] font-medium text-[#ffc219]">Read More ?</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] pb-0">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 text-center">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">Industry <span className="text-[#ffc219]">We Serve</span></h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(([title, image]) => (
            <div key={title} className="industry-card relative h-[300px] overflow-hidden">
              <img src={image} alt={title} className="h-full w-full object-cover" />
              <h4 className="absolute bottom-5 left-5 z-10 text-[22px] font-medium text-white">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-[34px] font-medium text-[#23244a]">
            Are You Looking Great Solution <span className="font-bold text-[#ffc219]">For Your Requirements?</span>
          </h3>
          <Link to="/contact" className="btn-theme rounded px-7 py-3 text-sm font-medium uppercase">Contact Us</Link>
        </div>
      </section>
    </>
  );
}



