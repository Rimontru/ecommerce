import { Product } from '@/app/lib/placeholder-data';
import ProductCard from '../products/ProductCard';

type FeaturedProductsProps = {
	title: string;
	products: Product[];
	showViewAll?: boolean;
};

export default function FeaturedProducts({
	title,
	products,
	showViewAll = true,
}: FeaturedProductsProps) {
	return (
		<section className="py-8 bg-white">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-2xl font-bold text-gray-900">{title}</h2>
					{showViewAll && (
						<a
							href="#"
							className="text-blue-600 hover:text-blue-800 text-sm font-medium"
						>
							Ver todo
						</a>
					)}
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
