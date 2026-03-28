import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  env: {
    SC_DISABLE_SPEEDY: 'false',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Ajustado a res.cloudinary que es el estándar
      },
    ],
    unoptimized: true
  },
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);