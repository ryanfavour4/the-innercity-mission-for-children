/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: ['dummyimage.com'], // Add the domain of your image source
  // You can add more domains here if needed, separated by commas
 },
 webpack(config) {
  config.module.rules.push({
   test: /\.svg$/,
   use: ["@svgr/webpack"],
  });

  return config;
 },
};

export default nextConfig;