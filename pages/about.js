import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import PageTitle from '@/components/PageTitle'
import SectionProjectContainer from '@/components/SectionProjectContainer'
import Buttonlink from '@/components/Buttonlink'
import { ArrowSquareOut } from "phosphor-react"
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home() {
  return (

      <div className="customheight sm:table-cell inline-block align-middle w-full">
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
        <section className='md:grid grid-cols-12 gap-x-8'>
          <div className='col-span-12 pb-8 pt-4 space-y-4 border-t-2'>
            <h1 className='text-xl lg:text-2xl font-extrabold opacity-60 opacity-60'>My name is</h1>
            <div className='page-title'>Jeremy White</div>
          </div>
          <div className='col-span-6 py-8 space-y-4 border-t-2'>
            <h1 className='text-xl lg:text-2xl font-extrabold opacity-60'>Education</h1>
            <h1 className='align-baseline'><span className='font-extrabold text-2xl lg:text-3xl'>User Experience Design MSc / Distinction </span><br />Birmingham City University</h1>
            <h1><span className='font-extrabold text-2xl lg:text-3xl '>Industrial Product Design BSc / 2:1</span> <br />Aston University</h1>
          </div>
          <div className='col-span-6 py-8 space-y-4 h-full justify-between flex flex-col border-t-2'>
            <div className='space-y-4'>
              <h1 className='text-xl lg:text-2xl font-extrabold opacity-60'>Contact</h1>
              <h1 className='align-baseline'><span className='font-extrabold text-2xl lg:text-3xl'>jezw96@gmail.com </span></h1>
            </div>
            <div>
              <div className='lg:flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0'>
                <Buttonlink linkURL="/about" buttonText="Email Me" />
                <Buttonlink linkURL="/about" buttonText="LinkedIn" />
                <Buttonlink linkURL="/about" buttonText="Behance" />
              </div>
            </div>
          </div>
          <div className='col-span-12 py-4 space-y-4 border-b-2'>
            <div className='grid sm:grid-cols-3 md:gap-8'>
              <div className='col-span-1 space-y-2 border-t-2 py-8'>
                <h1 className='align-baseline font-extrabold text-xl lg:text-2xl font-extrabold opacity-60 pb-2'>Skilled With</h1>
                <ul className='grid lg:grid-cols-2  text-xl'>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>InDesign</li>
                  <li>Microsoft Office</li>
                  <li>Blender</li>
                  <li>3D Visualisation</li>
                </ul>
              </div>
              <div className='col-span-1 space-y-2 border-t-2 py-8'>
                <h1 className='align-baseline text-xl lg:text-2xl font-extrabold opacity-60 pb-2'>Familiar With</h1>
                <ul className='grid lg:grid-cols-2 grid-flow-row  text-xl'>
                  <li>Sketch</li>
                  <li>Adobe XD</li>
                  <li>HTML + CSS</li>
                  <li>Maze.co</li>
                  <li>Design Systems</li>
                  <li>Paper Prototyping</li>
                  <li>Webflow</li>
                  <li>Squarespace</li>
                </ul>
              </div>
              <div className='col-span-1 space-y-2 border-t-2 py-8'>
                <h1 className='align-baseline text-xl lg:text-2xl font-extrabold opacity-60 pb-2'>Experienced In</h1>
                <ul className='flex flex-col flex-wrap text-xl'>
                  <li>Self-directed work</li>
                  <li>Research directed work</li>
                  <li>Presentations</li>
                  <li>Usability Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
