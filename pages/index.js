import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Rotatehead from '@/components/rotatehead'
import Buttonlink from '@/components/buttonlink'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="customheight inline-block table-cell align-middle">
        <div className="page-titleholder">
          {/* Welcome Message Component */}
          <Rotatehead />
          {/* / Welcome */}
        </div>
        <div>
          <p>
            I recently completed a masters degree in User Experience Design at{' '}
            <Link href="/" className="text-bg-fx text-bg-fx--underline-bold">
              Birmingham City University
            </Link>{' '}
            where I achieved a Distinction. This website is a place for me to display some of the
            work I completed during this program and additional projects I have completed in my own
            time. Have a look at the work I've done or learn more about me.
          </p>
          <br />
          <p>If you want to get in touch please feel free to contact me!</p>
        </div>
        <br />
        <div className="flex justify-end space-x-4">
          <Buttonlink linkURL="/about" buttonText="About Me" />
          <Buttonlink linkURL="/projects" buttonText="Projects" />
        </div>
        g
      </div>
    </>
  )
}
