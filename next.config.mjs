import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: [""],
  },
};

export default withNextIntl(nextConfig);
