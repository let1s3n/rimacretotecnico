// @ts-check
import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2dtyuc8nw4dj9.cloudfront.net',
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};
export default withPlaiceholder(nextConfig);
