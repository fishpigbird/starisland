import Container from '@/components/container/Container'
import PostWrapper from '@/components/post/PostWrapper'
import { getAllBlogPostsMetas } from '@/lib/sanity/get-blog-posts'
import { getPostDetails } from '@/lib/sanity/get-post-details'

export const revalidate = 3600

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const metas = await getAllBlogPostsMetas()
  return metas.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params
  const post = await getPostDetails(slug)

  return {
    metadataBase: new URL(process.env.WEBSITE_URL),
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${process.env.WEBSITE_URL}/blog/${slug}`,
      siteName: 'Craig Hart',
      locale: 'en_US',
      type: 'article',
      publishedTime: post._createdAt
    }
  }
}

const PostDetails = async ({ params }) => {
  const { slug } = params
  const post = await getPostDetails(slug)
  return (
    <Container className="max-w-2xl">
      <PostWrapper post={post} />
    </Container>
  )
}

export default PostDetails