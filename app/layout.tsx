import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Ecommerce - Tu tienda online',
	description: 'Encuentra los mejores productos al mejor precio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<body>{children}</body>
			</body>
		</html>
	);
}
