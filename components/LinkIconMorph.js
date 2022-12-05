import { ArrowSquareOut, ArrowSquareIn } from 'phosphor-react'

const LinkIconMorph = () => {
    return (
        <div className='h-[2rem] relative'><ArrowSquareOut size="2rem" className="z-0 inline-block text-current transition ease-out morphout" />
                <ArrowSquareIn size="2rem" className="invisible z-10 text-current transition ease-out morphin" />
                </div>
    );
}
 
export default LinkIconMorph;