/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1600],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    const longCache = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/mn/:path*", headers: longCache },
      { source: "/projects/:path*.webp", headers: longCache },
      { source: "/hero/:path*", headers: longCache },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  async redirects() {
    // Häufige Suchbegriffe / alte URLs auf echte Seiten leiten
    return [
      { source: "/kontakt", destination: "/contact", permanent: true },
      { source: "/ueber-uns", destination: "/about", permanent: true },
      { source: "/projekte", destination: "/projects", permanent: true },
      { source: "/referenzen", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
