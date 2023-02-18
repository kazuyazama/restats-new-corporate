/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader:'custom',
    disableStaticImages: true, // importした画像の型定義設定を無効にする
    unoptimized: true,
  },
  trailingSlash: true, // スラッシュ強制
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }, // スラッシュ強制したいのでpathにもスラッシュ入れる
      '/company': { page: '/company' }, // スラッシュ強制したいのでpathにもスラッシュ入れる
      '/partner': { page: '/partner' }, // スラッシュ強制したいのでpathにもスラッシュ入れる
      '/service': { page: '/service' }, // スラッシュ強制したいのでpathにもスラッシュ入れる
      '/privacy': { page: '/privacy' }, // スラッシュ強制したいのでpathにもスラッシュ入れる
      '/contact': { page: '/contact' }, // スラッシュ強制したいのでpathにもスラッシュ入れる
    }
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
 

}

module.exports = nextConfig
