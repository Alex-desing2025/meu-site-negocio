/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- A LINHA DA SOLUÇÃO
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
