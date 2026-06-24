import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow CMS imagery served from Webflow's asset CDNs.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "assets.website-files.com" },
      { protocol: "https", hostname: "uploads-ssl.webflow.com" },
      { protocol: "https", hostname: "daks2k3a4ib2z.cloudfront.net" },
    ],
  },
};

export default nextConfig;
