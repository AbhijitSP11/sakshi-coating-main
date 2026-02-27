import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden bg-[#f8fbff] text-left shadow-sm transition hover:shadow-lg">
      <img src={product.image} alt={product.title} className="h-[220px] w-full object-cover" />
      <div className="p-5">
        <h4 className="text-[20px] font-medium uppercase text-[#23244a]">{product.code}</h4>
        <p className="mt-2 text-[15px] leading-7 text-[#505050]">{product.shortDescription}</p>
        <Link to={`/products/${product.id}`} className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-[#ffc219]">
          Read More
          <span aria-hidden>?</span>
        </Link>
      </div>
    </article>
  );
}


