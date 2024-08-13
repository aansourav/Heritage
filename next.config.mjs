/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["img.daisyui.com", "via.placeholder.com", "i.ibb.co"],
    },
    webpack5: true,
};

export default nextConfig;
