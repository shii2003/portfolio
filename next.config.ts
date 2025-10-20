import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid bundling sharp in serverless functions (reduces trace size)
  images: {
    unoptimized: true,
  },
  // Exclude non-runtime files from output tracing to keep serverless bundles small
  outputFileTracingExcludes: {
    "*": [
      "**/*.md",
      "**/*.map",
      "**/LICENSE*",
      "**/README*",
      "**/__tests__/**",
      "**/test/**",
      "**/tests/**",
      "**/docs/**",
      "**/examples/**",
      "**/benchmark/**",
    ],
  },
};

export default nextConfig;
