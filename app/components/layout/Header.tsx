import Link from 'next/link';
import Image from 'next/image';
import {
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
	return (
		<header className="bg-[#fff159] shadow-md">
			{/* Top bar with logo and search */}
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center gap-4">
					{/* Logo */}
					<Link
						href="/"
						className="flex-shrink-0"
					>
						<h1 className="text-2xl font-bold text-[#333]">Ecommerce</h1>
					</Link>

					{/* Search bar */}
					<div className="flex-1 max-w-2xl">
						<div className="relative">
							<input
								type="text"
								placeholder="Buscar productos, marcas y más..."
								className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
							/>
							<button className="absolute right-0 top-0 h-full px-4 bg-gray-100 rounded-r-md hover:bg-gray-200">
								<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
							</button>
						</div>
					</div>

					{/* Promo banner */}
					<div className="hidden lg:block">
						<Image
							src="/promo-banner.png"
							alt="Promociones"
							width={340}
							height={39}
							className="object-contain"
						/>
					</div>
				</div>
			</div>

			{/* Navigation bar */}
			<nav className="bg-white border-t border-gray-200">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-10">
						{/* Categories menu */}
						<div className="flex items-center space-x-6">
							<Link
								href="/categories"
								className="text-sm text-gray-600 hover:text-blue-600"
							>
								Categorías
							</Link>
							<Link
								href="/ofertas"
								className="text-sm text-gray-600 hover:text-blue-600"
							>
								Ofertas
							</Link>
							<Link
								href="/historial"
								className="text-sm text-gray-600 hover:text-blue-600"
							>
								Historial
							</Link>
							<Link
								href="/supermercado"
								className="text-sm text-gray-600 hover:text-blue-600"
							>
								Supermercado
							</Link>
							<Link
								href="/moda"
								className="text-sm text-gray-600 hover:text-blue-600"
							>
								Moda
							</Link>
						</div>

						{/* User menu */}
						<div className="flex items-center space-x-4">
							<Link
								href="/cart"
								className="flex items-center text-gray-600 hover:text-blue-600"
							>
								<ShoppingCartIcon className="h-5 w-5" />
								<span className="ml-1 text-sm">Carrito</span>
							</Link>
							<Link
								href="/account"
								className="flex items-center text-gray-600 hover:text-blue-600"
							>
								<UserIcon className="h-5 w-5" />
								<span className="ml-1 text-sm">Mi cuenta</span>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
