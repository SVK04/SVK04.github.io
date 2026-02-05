/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        unoptimized: true,
    },
    compress: true,
    productionBrowserSourceMaps: false,
};

export default nextConfig;
