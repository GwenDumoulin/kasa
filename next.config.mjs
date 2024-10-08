/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-eu-west-1.amazonaws.com',
        port: '',
        pathname: '/course.oc-static.com/projects/front-end-kasa-project/**',
      },
    ],
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/kasa',
}

export default nextConfig
