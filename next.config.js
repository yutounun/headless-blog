const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

module.exports = nextConfig;
