import Image from 'next/image';
import Link from 'next/link';

export default function MainBanner() {
	return (
		<div className="relative w-full h-[300px] bg-gray-100">
			{/* Main banner image */}
			<div className="relative w-full h-full">
				<Image
					src="/banner-main.jpg"
					alt="Banner principal"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Banner content */}
			<div className="absolute inset-0 bg-black bg-opacity-30">
				<div className="container mx-auto px-4 h-full flex items-center">
					<div className="max-w-xl text-white">
						<h2 className="text-4xl font-bold mb-4">
							Descubre las mejores ofertas
						</h2>
						<p className="text-lg mb-6">
							Encuentra los productos que buscas al mejor precio
						</p>
						<Link
							href="/ofertas"
							className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
						>
							Ver ofertas
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
