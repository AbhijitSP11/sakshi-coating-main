import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const serviceHighlights = [
  {
    id: 'architectural-coatings',
    productId: 'architectural-coatings-epoxy-grouting',
    title: 'Architectural Coatings',
    description: 'Premium architectural coatings and epoxy grouting solutions with industrial-grade performance and long-term durability.',
  },
  {
    id: 'epoxy-flooring',
    productId: 'epoxy-flooring-systems',
    title: 'Epoxy Flooring',
    description: 'Seamless, durable flooring ideal for factories, warehouses, hospitals, and commercial areas. Resistant to chemicals, abrasion, and heavy traffic.',
  },
  {
    id: 'pu-concrete-flooring',
    productId: 'pu-concrete-flooring',
    title: 'PU Concrete Flooring',
    description: 'Food-grade flooring designed for hygienic environments such as food processing plants and pharma facilities. High thermal and chemical resistance.',
  },
  {
    id: 'epu-hybrid-flooring',
    productId: 'epu-hybrid-flooring',
    title: 'EPU Hybrid Flooring',
    description: 'A combination of epoxy and polyurethane properties offering flexibility, strength, and superior durability.',
  },
  {
    id: 'esd-anti-static-flooring',
    productId: 'esd-anti-static-flooring',
    title: 'ESD / Anti-Static Flooring',
    description: 'Specialized flooring for electronics and sensitive production environments requiring static control.',
  },
  {
    id: 'polyurethane-flooring',
    productId: 'polyurethane-flooring',
    title: 'Polyurethane Flooring',
    description: 'Flexible, impact-resistant flooring suitable for dynamic industrial environments.',
  },
  {
    id: 'car-park-deck-flooring',
    productId: 'car-park-deck-flooring',
    title: 'Car Park & Deck Flooring',
    description: 'Heavy-duty coating systems designed for parking structures, ramps, and decks with anti-skid features.',
  },
  {
    id: 'acid-chemical-resistant-flooring',
    productId: 'acid-chemical-resistant-flooring',
    title: 'Acid & Chemical Resistant Flooring',
    description: 'Protection against aggressive chemicals used in laboratories and industrial processes.',
  },
  {
    id: 'decorative-flooring',
    productId: 'decorative-metallic-flooring',
    title: 'Decorative Flooring',
    description: 'Aesthetic epoxy and designer coatings for commercial and retail spaces.',
  },
  {
    id: 'underlay-screed-systems',
    productId: 'underlay-screed-systems',
    title: 'Underlay & Screed Systems',
    description: 'Surface leveling and strengthening solutions to prepare substrates for final flooring systems.',
  },
  {
    id: 'industrial-commercial-coatings',
    productId: 'industrial-commercial-coatings',
    title: 'Industrial & Commercial Painting',
    description: 'Protective and decorative coating solutions for industrial structures and commercial facilities.',
  },
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
          <h1 className="text-[48px] font-medium">Industrial & Commercial Flooring Services</h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">Our <span className="text-[#ffc219]">Services</span></h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceHighlights.map((service) => (
              <article id={service.id} key={service.title} className="scroll-mt-[170px] rounded bg-[#f8fbff] p-6 shadow-sm">
                <h3 className="text-[20px] font-medium text-[#23244a]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#444]">{service.description}</p>
                <Link to={`/products/${service.productId}`} className="mt-4 inline-block text-sm font-medium uppercase text-[#4f81bd] hover:text-[#1f3f68]">
                  View Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

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
