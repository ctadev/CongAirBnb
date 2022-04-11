/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "a0.muscache.com", "links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiY3RhZGV2MjAyMiIsImEiOiJjbDF1OXIwZjAwc2U5M2JxY28xdGZoMmlkIn0.IwBn-1oXUIqM_xTlmKdggQ",
  },
};

module.exports = nextConfig;
