import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./shared/i18n/request.ts");


const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        });
        return config;
      },
};

export default withNextIntl(nextConfig);