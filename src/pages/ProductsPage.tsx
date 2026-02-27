import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://sakshicoating.com/images/bg/all-banner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">Products</h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[300px_1fr]">
          <aside>
            <div className="border border-[#ececec]">
              <h5 className="bg-[#f8f8f8] px-4 py-3 text-[15px] font-medium uppercase text-[#23244a]">Sakshi Epoxy Floor Coating System</h5>
              <ul className="space-y-2 px-4 py-4 text-[15px]">
                <li>Primer</li>
                <li>Screed Coat</li>
                <li>Coving Coat</li>
                <li>Grouting Compound</li>
                <li>Self Level Top Coat</li>
              </ul>
            </div>
            <div className="mt-3 border border-[#ececec]">
              <h5 className="bg-[#f8f8f8] px-4 py-3 text-[15px] font-medium uppercase text-[#23244a]">Sakshi Epoxy Paint / Coating System</h5>
              <ul className="space-y-2 px-4 py-4 text-[15px]">
                <li>2 Pack Epoxy Primer</li>
                <li>2 Pack Epoxy Top/Finish Paint</li>
                <li>Epoxy Clear Coating</li>
                <li>Epoxy Thinner</li>
              </ul>
            </div>
          </aside>

          <div>
            <h2 className="section-title inline-block text-[40px] font-medium text-[#23244a]">Our <span className="text-[#ffc219]">Products</span></h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


