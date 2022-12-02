import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionProjectContainer from '@/components/SectionProjectContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import BubPersonas from '@/components/bubble/BubPersonas'
import BubHTA from '@/components/bubble/BubHTA'
import { Tabs } from 'react-tabs'
import BubIA from '@/components/bubble/BubIA'
import BubSketches from '@/components/bubble/BubSketches'
import BubWire from '@/components/bubble/BubWire'
import BubHF1 from '@/components/bubble/BubHF1'
import BubTest from '@/components/bubble/BubTest'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function bubble({ frontMatter, authorDetails, next, prev, children }) {

  return (
    <SectionProjectContainer>
      <ScrollTopAndComment />
      <article>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <header className="pt-6 pb-6">
            <div className="text- space-y-1">
              <div>
                <PageTitle>Bubble</PageTitle>
              </div>
            </div>
          </header>
          <div className='py-2 lg:grid lg:grid-cols-12 h-full gap-12 space-y-2'>
            <div className="prose max-w-none dark:prose-dark auto-cols-max col-span-7">
                <div className='subheading'>Synopsis</div>
                <h5>As part of my User Experience Design MSc we were tasked with designing and evaluating an app loosely around the theme of “health”. Following a short period of research our group settled on the idea of tackling isolation commonly found in students and young graduates when moving to a new area.</h5>
            </div>
            <div className="prose max-w-none dark:prose-dark auto-cols-max col-start-9 col-span-4">
            <div className='subheading'>Project Information</div>
                <h5>Project Timeframe: 3 Months</h5>
                <h5>Team Size: 2-3 Members</h5>
                <h5>Deliverables: 2 Presentations</h5>
            </div>
            </div>
        <div className='pt-4'>
            <div className='subheading'>Contents</div>
                <div className='flex flex-row flex-wrap flex-grow'>
                <div className="prose max-w-none py-4 dark:prose-dark grow">{children}
                <h3>This is h2</h3>
                </div>
                </div>
            </div>
        <main className="pb-8 h-full">
            <section className='w-full h-auto relative space-y-12'>
                <div className="xl:grid xl:grid-cols-12 xl:pb-0">
                    <div className="prose max-w-none pt-10 pb-8 dark:prose-dark lg:col-span-5">
                    <div className='subheading'>User requirements</div>
                    <p>As part of our process for determining the user requirements for the project, four personas were created. Two of the four personas had a specific impairment or accessibility concern.</p>
                        </div>
                <BubPersonas />
                </div>
            
            <BubHTA />
            <BubIA />
            </section>
            <section>
              <div className='pt-4'>
              <div className='subheading'>Paper Prototyping</div>
                  <div className='flex flex-row flex-wrap flex-grow'>
                    <div className="prose max-w-none py-4 dark:prose-dark grow">{children}
                    <h3>This is h2</h3>
                    </div>
                  </div>
              </div>
              {/* <BubSketches /> */}
            </section>
            <section>
              <BubWire />
            </section>
            <section>
              <BubHF1 />
            </section>
            <section>
              <BubTest />
            </section>
          </main>
        </div>
      </article>
    </SectionProjectContainer>
  )
}
