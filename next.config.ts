import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.alaminterior.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.metalmarkhandicrafts.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.solarisui.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.hypenestcreative.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.calsinas.app",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.juviem.tech",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.naseemansari.me",
        port: "",
        pathname: "/**"
      },
    ],
  }
};

export default nextConfig;
