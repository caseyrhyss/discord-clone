/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            butterutil: "commonjs butterutil"
        });

        return config;
    },
    images: {
        domains: [
            "uploadthing.com",
            "utfs.io"
        ]
    }
}

module.exports = nextConfig
