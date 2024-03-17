/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  publicRuntimeConfig: {
    LIARA_IMAGE_S3_HOST: process.env.LIARA_IMAGE_S3_HOST ?? 'https://acoland-project.storage.iran.liara.space'
  },
  transpilePackages: ['@mui/x-charts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acoland-project.storage.iran.liara.space',
        port: '',
      },
    ],
  },
};

export default nextConfig;
