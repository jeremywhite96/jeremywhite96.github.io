import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Rotatehead from '@/components/Rotatehead'
import NewsletterForm from '@/components/NewsletterForm'
import Buttonlink from '@/components/Buttonlink'

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
          <div><Rotatehead /></div>
          {/* / Welcome */}
        </div>
        <div>
          <p>
            I recently completed a masters degree in User Experience Design at Birmingham City University
            where I achieved a Distinction. This website is a place for me to display some of the
            work I completed during this program and additional projects I have completed in my own
            time. Have a look at the work I've done or learn more about me.
          </p>
          <br />
          <p>If you want to get in touch please feel free to contact me!</p>
        </div>
        <br />
        <div className='sm:flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0 justify-end'>
          <Buttonlink linkURL="/about" buttonText="About Me" />
          <Buttonlink linkURL="/projects" buttonText="Projects" />
        </div>
      </div>
    </>
  )
}
