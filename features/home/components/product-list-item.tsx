
import Image from "next/image";

type ProductListItemProps = {
  product: {
    id: string;
    name: string;
    category: string;
    rating: number;
    price: number;
    image: string;
  };
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="size-4"
    fill={filled ? "#000" : "none"}
    stroke="#000"
    strokeWidth={1.5}
  >
    <path d="M12 2.5 14.7 8l5.8.5-4.4 3.9 1.3 5.6L12 15.9 6.6 18l1.2-5.6-4.3-3.9L9.2 8 12 2.5Z" />
  </svg>
);

const BagIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="size-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M6 8h12l-1 11H7L6 8Z" />
    <path d="M9 10V7a3 3 0 0 1 6 0v3" />
  </svg>
);

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const filledStars = Math.max(0, Math.min(5, Math.round(product.rating)));

  return (
    <article className="flex flex-col gap-2 text-sm text-neutral-800">
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 240px, 100vw"
        />
      </div>

      <div className="text-xs text-neutral-600">{product.category}</div>

      <div className="text-base font-semibold text-black">{product.name}</div>

      <div
        className="flex items-center gap-1"
        aria-label={`Rating ${product.rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} filled={idx < filledStars} />
        ))}
        <span className="text-xs text-neutral-600">({product.rating}/5)</span>
      </div>

      <div className="text-base font-medium text-black">
        ₹{product.price.toFixed(2)}
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-black">
        <BagIcon />
        <span className="underline decoration-black underline-offset-4 transition-colors hover:decoration-rose-400 cursor-pointer">
          Add to cart
        </span>
      </div>
    </article>
  );
};

export default ProductListItem;

