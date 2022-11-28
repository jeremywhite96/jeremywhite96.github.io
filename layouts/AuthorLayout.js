import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Buttonlink from '@/components/Buttonlink'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div>
        <div className="page-titleholder">
          <h1 className="page-title">About</h1>
        </div>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-start items-center pt-8 xl:items-start">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-max w-full rounded-3xl"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            {/* <div className="flex space-x-3 pt-4">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div> */}
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-3">{children}</div>
          <div className="flex xl:col-start-4 xl:justify-end">
            <Buttonlink linkURL="/" buttonText="CV / Resume" />
          </div>
        </div>
      </div>
    </>
  )
}
