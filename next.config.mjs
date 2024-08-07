/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental',
        serverActions: {
          // edit: updated to new key. Was previously `allowedForwardedHosts`
          allowedOrigins: ['localhost:3000'],
        },
      },
};

export default nextConfig;
