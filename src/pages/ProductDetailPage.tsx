import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const renderArrowList = (items: string[]) => (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[15px] leading-7 text-[#1f3f68]">
          <span className="mt-1 text-[#ffc219]">➜</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  if (!product) {
    return (
      <section className="px-4 pb-20 pt-[190px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-3xl font-semibold text-[#23244a]">Service not found</h1>
          <Link to="/products" className="mt-4 inline-block text-[#ffc219]">Back to services</Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">{product.title}</h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h6 className="text-[20px] font-medium uppercase text-[#ffc219]">{product.subCategory}</h6>
          <h2 className="mt-2 text-[40px] font-medium text-[#23244a]">{product.category}</h2>
          <p className="mt-2 text-[16px] font-semibold uppercase text-[#4f81bd]">{product.code}</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="rounded border border-[#ececec] p-5 shadow-[5px_8px_30px_0_rgba(31,35,37,0.08)]">
                <h5 className="content-heading mb-4">Service Description</h5>
                {product.descriptionParagraphs?.length ? (
                  <div className="space-y-4">
                    {product.descriptionParagraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[15px] leading-7">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-[15px] leading-7">{product.description}</p>
                )}
              </div>

              {product.applications?.length ? (
                <div className="mt-5 rounded border border-[#ececec] p-5 shadow-[5px_8px_30px_0_rgba(31,35,37,0.08)]">
                  <h5 className="content-heading mb-4">Applications</h5>
                  {renderArrowList(product.applications)}
                </div>
              ) : null}

              {product.benefits?.length ? (
                <div className="mt-5 rounded border border-[#ececec] p-5 shadow-[5px_8px_30px_0_rgba(31,35,37,0.08)]">
                  <h5 className="content-heading mb-4">{product.benefitsTitle ?? 'Benefits'}</h5>
                  {renderArrowList(product.benefits)}
                </div>
              ) : (
                <div className="mt-5 rounded border border-[#ececec] p-5 shadow-[5px_8px_30px_0_rgba(31,35,37,0.08)]">
                  <h5 className="content-heading mb-4">Key Features</h5>
                  {renderArrowList(product.features)}
                </div>
              )}
            </div>

            <div>
              <img src={product.image} alt={product.title} className="w-full border-4 border-[#4f81bd] object-cover" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link to="/contact" className="btn-theme inline-flex items-center justify-center rounded px-5 py-4 text-center text-sm font-semibold uppercase">
              Request A Site Visit
            </Link>
            <Link to="/enquiry" className="btn-blue inline-flex items-center justify-center rounded px-5 py-4 text-center text-sm font-semibold uppercase">
              Send Enquiry
            </Link>
          </div>

          {product.ctaText ? (
            <h3 className="mt-10 text-[28px] font-medium text-[#23244a]">
              {product.ctaText}
            </h3>
          ) : null}
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="section-title inline-block text-[34px] font-medium text-[#23244a]">Related <span className="text-[#ffc219]">Services</span></h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/products/${related.id}`} className="overflow-hidden bg-white shadow-sm transition hover:shadow-md">
                <img src={related.image} alt={related.title} className="h-[200px] w-full object-cover" />
                <div className="p-4">
                  <h4 className="text-[20px] font-medium text-[#23244a]">{related.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

