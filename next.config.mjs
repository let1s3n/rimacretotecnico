// @ts-check
import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d2fap8ni6v2bu4.cloudfront.net'],
  },
  devIndicators: {
    buildActivity: false,
  },
};
export default withPlaiceholder(nextConfig);
