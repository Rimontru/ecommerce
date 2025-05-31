import { products, categories } from './lib/placeholder-data';
import Header from './components/layout/Header';
import MainBanner from './components/home/MainBanner';
import FeaturedCategories from './components/home/FeaturedCategories';
import FeaturedProducts from './components/home/FeaturedProducts';

export default function Home() {
	// Get some featured products for each section
	const bestSellers = products
		.sort((a, b) => b.rating.count - a.rating.count)
		.slice(0, 10);

	const newArrivals = products
		.sort((a, b) => b.rating.rate - a.rating.rate)
		.slice(0, 10);

	const onSale = products
		.filter((product) => product.price < 50) // Example condition for "on sale" products
		.slice(0, 10);

	return (
		<div className="min-h-screen bg-gray-100">
			<Header />

			<main>
				<MainBanner />

				<div className="space-y-6 py-6">
					<FeaturedCategories />

					<FeaturedProducts
						title="Los más vendidos"
						products={bestSellers}
					/>

					<FeaturedProducts
						title="Ofertas del día"
						products={onSale}
					/>

					<FeaturedProducts
						title="Novedades"
						products={newArrivals}
					/>
				</div>
			</main>

			<footer className="bg-white border-t border-gray-200 py-8">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="font-bold text-gray-900 mb-4">Sobre nosotros</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Quiénes somos
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Trabaja con nosotros
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Términos y condiciones
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-gray-900 mb-4">Ayuda</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Centro de ayuda
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Cómo comprar
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Métodos de pago
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-gray-900 mb-4">Redes sociales</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Facebook
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Instagram
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-gray-900 mb-4">Mi cuenta</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Mis compras
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Favoritos
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-600 hover:text-blue-600"
									>
										Mis reseñas
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
