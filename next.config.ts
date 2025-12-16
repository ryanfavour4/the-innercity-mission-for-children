import type { NextConfig } from 'next'

// const nextConfig:NextConfig = {
/* config options here */
// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'images.unsplash.com',
//       port: '',
//       pathname: '/**',
//     },
//     {
//       protocol: 'https',
//       hostname: 'dummyimage.com',
//       port: '',
//       pathname: '/**',
//     },
//     {
//       protocol: 'https',
//       hostname: 'i.vimeocdn.com',
//       port: '',
//       pathname: '/**',
//     },
//     {
//       protocol: 'https',
//       hostname: 'playlist.dacast.com',
//       port: '',
//       pathname: '/**',
//     },
//   ],
// },
//   turbopack: {},
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.vimeocdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'playlist.dacast.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // 1. Force Webpack for now because Turbopack + SVGR is buggy
  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  // 2. This allows you to use your custom webpack config in Next 16
  turbopack: {},
}

export default nextConfig
