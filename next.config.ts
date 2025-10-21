import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
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
