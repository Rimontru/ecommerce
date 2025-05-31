import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/lib/placeholder-data';
import { StarIcon } from '@heroicons/react/20/solid';

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	const mainImage =
		product.images.find((img) => img.isMain) || product.images[0];

	return (
		<Link
			href={`/products/${product.id}`}
			className="group"
		>
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
				<Image
					src={mainImage.url}
					alt={mainImage.alt}
					width={500}
					height={500}
					className="h-full w-full object-cover object-center group-hover:opacity-75"
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">{product.name}</h3>
					<p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
				</div>
				<div className="text-right">
					<p className="text-sm font-medium text-gray-900">
						${product.price.toFixed(2)}
					</p>
					<div className="mt-1 flex items-center">
						<StarIcon className="h-4 w-4 text-yellow-400" />
						<span className="ml-1 text-sm text-gray-500">
							{product.rating.rate} ({product.rating.count})
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
