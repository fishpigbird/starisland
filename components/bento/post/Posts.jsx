import Card from '@/components/bento/card/Card'
import { Button } from '@/components/ui/button'
import { getBlogPosts } from '@/lib/sanity/get-blog-posts'

import { IconChevronRight, IconRss } from '@tabler/icons-react'
import Link from 'next/link'

const PostsCard = async ({ delay }) => {
  const posts = await getBlogPosts(4)

  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="flex h-full flex-col rounded-md border bg-background shadow-none transition-shadow hover:shadow-xl hover:shadow-muted/60 dark:bg-muted/20">
        <div className="shrink-0 overflow-hidden pb-4">
          <div
            className="relative z-10 flex items-center justify-between rounded-t-md border-b bg-muted/30 p-3 shadow-sm
         after:absolute after:-bottom-5 after:-left-4 after:text-3xl after:font-black after:tracking-widest after:text-foreground/5 after:content-['...................................']"
          >
            <p className="z-10 font-medium uppercase text-primary/70">Posts</p>
            <div className="z-10 flex items-center">
              <Button
                size="icon"
                variant="custom"
                className="ml-2 h-auto w-auto rounded-sm p-1 text-xs leading-6 text-[#0005119e] hover:bg-[#f9900026]"
                asChild
              >
                <a href={'/feed'} target="_blank">
                  <IconRss size={16} color="#d14e00" />
                </a>
              </Button>
              <Button
                variant="custom"
                className="ml-2 h-auto rounded-full bg-[#ffffffcc] px-2 py-0 text-xs leading-6 text-[#0005119e] shadow-[inset_0_0_0_1px_#01073132] hover:bg-[#ffffffcc] hover:shadow-[inset_0_0_0_1px_#00082f46]"
                asChild
              >
                <Link href={'/blog'}>
                  All Posts
                  <IconChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full grow rounded-b-md bg-background after:absolute after:bottom-0 after:left-4 after:h-[calc(100%+1rem)] after:w-2  after:border-x after:border-border/70 after:content-[''] ">
          <ul className="flex h-full w-full flex-col justify-center px-2">
            {posts.map(item => {
              return (
                <li
                  key={item._id}
                  className="border-borde r cursor-default truncate border-b py-2 pl-4 pr-2 text-sm text-primary/70 last:border-b-0 hover:bg-muted/20"
                >
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default PostsCard
