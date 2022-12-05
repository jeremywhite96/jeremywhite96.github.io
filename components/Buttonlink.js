import Link from 'next/link'
import { CaretRight  } from 'phosphor-react'

export default function Buttonlink({ buttonText, linkURL }) {
  return (
    <a href={linkURL} className="navbutton items-center group">
      <span className="px-1 text-base">{buttonText}</span>
      <div className="px-1">
      <CaretRight size="1rem" color="currentColor" weight="bold" className='group-hover:flex group-hover:flex-grow group-hover:flex-row'/>
      </div>
    </a>
  )
}
