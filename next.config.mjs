import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dgblq0ba7cx3huq6.public.blob.vercel-storage.com',
            pathname: '/profile.jpg',
          },
        ],
      },
}

export default nextMDX()(nextConfig)
