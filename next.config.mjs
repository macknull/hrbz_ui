/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/herbs",
        destination: "http://localhost:3000/herbs",
      },
    ];
  },
};

export default nextConfig;
