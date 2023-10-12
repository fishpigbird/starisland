import withPlaiceholder from '@plaiceholder/next'
import { Redis } from '@upstash/redis'

const upstashClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})
const getSocialRedirects = async () => {
  const response = (await upstashClient.hgetall('social-links')) || {}
  return Object.entries(response).map(([key, value]) => ({
    source: '/' + key,
    destination: value,
    permanent: true
  }))
}

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    try {
      return (await getSocialRedirects()) ?? []
    } catch {
      return []
    }
  },

  images: {
    domains: [
      'cdn.sanity.io',
      's3.us-west-2.amazonaws.com',
      'static.pocketcasts.com',
      'images.unsplash.com',
      'www.notion.so'
    ]
  }
}

export default withPlaiceholder(nextConfig)
