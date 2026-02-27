import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="px-4 pb-20 pt-[190px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-3xl font-semibold text-[#23244a]">Product not found</h1>
          <Link to="/products" className="mt-4 inline-block text-[#ffc219]">Back to products</Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://sakshicoating.com/images/bg/all-banner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">{product.code}</h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h6 className="text-[20px] font-medium uppercase text-[#ffc219]">{product.subCategory}</h6>
          <h2 className="mt-2 text-[40px] font-medium text-[#23244a]">SAKSHI <span className="text-[#ffc219]">{product.code.replace('SAKSHI ', '')}</span></h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="rounded border border-[#ececec] p-5 shadow-[5px_8px_30px_0_rgba(31,35,37,0.08)]">
                <h5 className="mb-3 text-[16px] font-medium uppercase text-[#23244a]">Product Description</h5>
                <p className="text-[15px] leading-7">{product.description}</p>
              </div>

              <div className="mt-5 rounded border border-[#ececec] p-5 shadow-[5px_8px_30px_0_rgba(31,35,37,0.08)]">
                <h5 className="mb-3 text-[16px] font-medium uppercase text-[#23244a]">Principal Characteristics</h5>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-[15px] leading-7">• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <img src={product.image} alt={product.title} className="w-full border-4 border-[#4f81bd] object-cover" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {product.tds ? (
              <a href={product.tds} target="_blank" rel="noreferrer" className="btn-blue inline-flex items-center justify-center rounded px-5 py-4 text-center text-sm font-semibold uppercase">
                Technical Data Sheet Download
              </a>
            ) : null}
            {product.msds ? (
              <a href={product.msds} target="_blank" rel="noreferrer" className="btn-blue inline-flex items-center justify-center rounded px-5 py-4 text-center text-sm font-semibold uppercase">
                Material Safety Data Sheet Download
              </a>
            ) : null}
            <Link to="/contact" className="btn-theme inline-flex items-center justify-center rounded px-5 py-4 text-center text-sm font-semibold uppercase">
              Request A Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="section-title inline-block text-[34px] font-medium text-[#23244a]">Related <span className="text-[#ffc219]">Products</span></h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/products/${related.id}`} className="overflow-hidden bg-white shadow-sm transition hover:shadow-md">
                <img src={related.image} alt={related.title} className="h-[200px] w-full object-cover" />
                <div className="p-4">
                  <h4 className="text-[20px] font-medium uppercase text-[#23244a]">{related.code}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


