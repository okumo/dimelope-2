/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.vaope.com",
      "cdn.joinnus.com",
      "s3.us-west-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
