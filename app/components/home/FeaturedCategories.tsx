import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/app/lib/placeholder-data';

export default function FeaturedCategories() {
	return (
		<section className="py-8 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold text-gray-900 mb-6">
					Categorías destacadas
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
					{categories.map((category) => (
						<Link
							key={category.id}
							href={`/categories/${category.slug}`}
							className="group"
						>
							<div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
								<div className="w-16 h-16 mb-3 relative">
									<Image
										src={`/categories/${category.slug}.png`}
										alt={category.name}
										fill
										className="object-contain"
									/>
								</div>
								<span className="text-sm text-gray-600 text-center group-hover:text-blue-600">
									{category.name}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
