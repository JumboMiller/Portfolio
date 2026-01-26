import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./shared/i18n/request.ts");

const nextConfig: NextConfig = {
  // Оптимизация production build
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental оптимизации
  experimental: {
    optimizePackageImports: ["animate.css"],
  },

  env: {
    RESEND_KEY: process.env.RESEND_KEY,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  },
};

export default withNextIntl(nextConfig);
