import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import { IconWritingSign } from '@tabler/icons-react'

const BlogPageLayout = ({ children }) => {
  return (
    <Container>
      <Heading title="Blog" className="relative">
        <IconWritingSign
          className="absolute -right-[10%] top-0 opacity-5"
          size="80%"
          stroke={1}
        />
        <p className="leading-6 md:w-3/4 md:leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          magnam vero est aperiam dolores. Officia ab a, atque voluptatum odit
          possimus exercitationem necessitatibus quam praesentium eligendi
          dolorem ea! Quas, nesciunt?
        </p>
      </Heading>
      {children}
    </Container>
  )
}

export default BlogPageLayout