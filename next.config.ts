import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La página índice de servicios se quitó: los servicios viven en la home.
  async redirects() {
    return [
      { source: "/servicios", destination: "/#servicios", permanent: true },
      // El desarrollo web ahora es un complemento de SEO, no un servicio aparte.
      { source: "/servicios/desarrollo-web", destination: "/servicios/seo#desarrollo-web", permanent: true },
    ];
  },
};

export default nextConfig;
