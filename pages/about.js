import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import PageTitle from '@/components/PageTitle'
import SectionProjectContainer from '@/components/SectionProjectContainer'
import Buttonlink from '@/components/Buttonlink'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home () {
  return (
    <>
      <SectionProjectContainer>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <header className="pt-6 pb-6">
            <div className="text- space-y-1">
              <div>
                <PageTitle ><span className='text-9xl'>About</span></PageTitle>
              </div>
            </div>
          </header>
          <section className='grid grid-cols-12 divide-y divide-y-2'>
            <div className='col-span-12'></div>
            <div className='col-span-12 pb-8 pt-4 space-y-4'>
              <h1>My name is</h1>
              <div className='page-title'>Jeremy White</div>
            </div>
            <div className='col-span-6 py-8 space-y-4'>
              <h1 className='subheading'>Education</h1>
              <h1 className='align-baseline'>Birmingham City University <br /><span className='font-extrabold text-3xl'>User Experience Design MSc / Distinction </span></h1>
              <h1>Aston University <br /><span className='font-extrabold text-3xl '>Industrial Product Design MSc / 2:1</span></h1>
            </div>
            <div className='col-span-6 py-8 space-y-4'>
              <h1 className='subheading'>Education</h1>
              <h1 className='align-baseline'>Birmingham City University <br /><span className='font-extrabold text-3xl'>User Experience Design MSc / Distinction </span></h1>
              <h1>Aston University <br /><span className='font-extrabold text-3xl '>Industrial Product Design MSc / 2:1</span></h1>
            </div>
            <div className='grid col-span-12 py-8 space-y-4'>
                <h1 className='subheading'>Contact Me</h1>
                <h1 className='align-baseline'>Birmingham City University <br /><span className='font-extrabold text-3xl'>User Experience Design MSc / Distinction </span></h1>
              <div className='flex flex-row justify-between items-end'><Buttonlink linkURL="/about" buttonText="Email Me" />
                  <Buttonlink linkURL="/about" buttonText="LinkedIn" />
                  <Buttonlink linkURL="/about" buttonText="Behance" />
                  <Buttonlink linkURL="/about" buttonText="Elsewhere" />
                  </div>              
            </div>
            <div className='col-span-12 py-8'></div>
            
          </section>
          </SectionProjectContainer>
    </>
  )
}
