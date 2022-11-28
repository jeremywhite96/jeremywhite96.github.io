import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <h2 className="mr-3 list-inside list-disc text-sm font-medium uppercase">
      {text.split(' ').join(' ')}
    </h2>
  )
}

export default Tag
