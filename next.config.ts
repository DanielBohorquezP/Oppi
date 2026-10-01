import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La página índice de servicios se quitó: los servicios viven en la home.
  async redirects() {
    return [{ source: "/servicios", destination: "/#servicios", permanent: true }];
  },
};

export default nextConfig;
