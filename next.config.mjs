const userConfig = (() => {
  try {
    return require("./v0-user-next.config");
  } catch (e) {
    return undefined;
  }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export statique pour GitHub Pages
  basePath: "/sejouris", // 🔹 Nom du repo GitHub
  assetPrefix: "/sejouris/", // 🔹 Assure que les assets sont bien chargés
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Fusionner les configs
mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (typeof nextConfig[key] === "object" && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
