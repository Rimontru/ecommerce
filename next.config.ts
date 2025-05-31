import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				port: '',
				pathname: '/img/**',
			},
		],
	},
};

export default nextConfig;
