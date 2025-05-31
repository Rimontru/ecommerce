import { PrismaClient } from '../src/generated/prisma';
import { products, categories } from '../app/lib/placeholder-data';

const prisma = new PrismaClient();

async function main() {
	console.log('🌱 Iniciando el proceso de seeding...');

	// Limpiar la base de datos
	console.log('🧹 Limpiando la base de datos...');
	await prisma.orderItem.deleteMany();
	await prisma.order.deleteMany();
	await prisma.cartItem.deleteMany();
	await prisma.cart.deleteMany();
	await prisma.review.deleteMany();
	await prisma.favorite.deleteMany();
	await prisma.productImage.deleteMany();
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();
	await prisma.user.deleteMany();

	// Crear categorías
	console.log('📦 Creando categorías...');
	for (const category of categories) {
		await prisma.category.create({
			data: {
				id: category.id,
				name: category.name,
				slug: category.slug,
				description: category.description,
			},
		});
	}

	// Crear productos
	console.log('📦 Creando productos...');
	for (const product of products) {
		await prisma.product.create({
			data: {
				id: product.id,
				name: product.name,
				description: product.description,
				price: product.price,
				stock: product.stock,
				categoryId: product.categoryId,
				images: {
					create: product.images.map((image) => ({
						id: image.id,
						url: image.url,
						alt: image.alt,
						isMain: image.isMain,
					})),
				},
			},
		});
	}

	// Crear un usuario de prueba
	console.log('👤 Creando usuario de prueba...');
	const testUser = await prisma.user.create({
		data: {
			name: 'Usuario de Prueba',
			email: 'test@example.com',
			password: '$2a$10$K8L1J45K6i4Dq0hF1Qxw5e6QJQZQZQZQZQZQZQZQZQZQZQZQZQZQZ', // password: test123
		},
	});

	// Crear algunas reseñas de prueba
	console.log('⭐ Creando reseñas de prueba...');
	for (const product of products) {
		await prisma.review.create({
			data: {
				productId: product.id,
				userId: testUser.id,
				rating: product.rating.rate,
				comment: `Excelente producto ${product.name}!`,
			},
		});
	}

	console.log('✅ Seeding completado exitosamente!');
}

main()
	.catch((e) => {
		console.error('❌ Error durante el seeding:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
