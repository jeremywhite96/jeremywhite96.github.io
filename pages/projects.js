import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import { ArrowSquareOut, ArrowSquareIn } from 'phosphor-react'
import LinkIconMorph from '@/components/LinkIconMorph'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="page-titleholder">
          <PageTitle className="page-title">Projects</PageTitle>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A selection of work I produced during my masters program and in my own time.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <a href="projects/bubble"className='group flex flex-col border-2 rounded-md dark:border-white border-black cardbutton overflow-hidden'>
            {/* <Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-cover h-max w-full aspect-square" width="500" height="500" /> */}
            <img src="https://via.placeholder.com/500" className='object-cover'></img>
            <div className='px-4 py-6 space-y-6 group-hover:bg-slate-100 dark:group-hover:bg-gray-800'>
              <div className='flex items-end justify-between text-current'>Small description that belongs here.</div>
              <div className='subheading text-current flex items-end justify-between'>Bubble
                <LinkIconMorph />
                </div>
            </div>
          </a>
          
        </div>
      </div>
    </>
  )
}
