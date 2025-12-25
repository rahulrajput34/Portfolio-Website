import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/**" },
    ],
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Turbopack (dev)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: "removeDimensions", active: true },
                  { name: "removeViewBox", active: false },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },

  // Webpack (prod build)
  webpack(config) {
    // Exclude SVG from Next's default file loader (otherwise it may still treat it like an asset)
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule?.test?.test?.(".svg")
    );
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeDimensions", active: true },
                { name: "removeViewBox", active: false },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
