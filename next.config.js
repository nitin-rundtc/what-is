/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: isProduction ? '/what-is' : '', // Use '/blog' only in production
    output: 'export', // Enable static export
    distDir: 'dist',
    images: {
        unoptimized: true
    }
};
