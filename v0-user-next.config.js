/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a GitHub Pages project site with a custom domain or username.github.io/repo-name
  // Uncomment and adjust the following line:
  // basePath: '/repo-name',
  trailingSlash: true,
}

module.exports = nextConfig

