/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	cleanDistDir: true,
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	compress: true,
};

module.exports = nextConfig;
