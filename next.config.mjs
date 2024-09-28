/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // webpack(config) {
  //   // Add rule to handle GLSL files
  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs)$/, // Match GLSL, vertex, and fragment shader files
  //     exclude: /node_modules/, // Exclude node_modules
  //     use: [
  //       'raw-loader', // Import GLSL as plain text
  //       'glslify-loader', // Process GLSL files with glslify
  //     ],
  //   });
  //   return config;
  // },
};

export default nextConfig;
