import { Trophy, XCircle, Cursor, Target } from "phosphor-react"
import Image from '@/components/Image'

const BubMaze = () => {
    return (
<div className='grid md:grid-cols-4 grid-cols-2 xl:flex-col flex auto-rows-auto flex-row md:gap-8 gap-4'>
        <div className="group space-y-4 py-8 px-4 dark:bg-white bg-gray-100 border border-2 border-current rounded">
            <Trophy size={48} className="hidden sm:block dark:text-black text-current dark:group-hover:text-green-800" />
            <div className="lg:text-6xl md:text-4xl sm:text-6xl text-3xl font-extrabold text-green-800">80%</div>
            <div className="dark:text-black text-current font-bold">Direct Sucess</div>
        </div>
        <div className="group space-y-4 py-8 px-4 dark:bg-white bg-gray-100 border border-2 border-current rounded">
            <XCircle size={48} className="hidden sm:block dark:text-black text-current dark:group-hover:text-green-800" />
            <div className="lg:text-6xl md:text-4xl sm:text-6xl text-3xl font-extrabold text-green-800">0%</div>
            <div className="dark:text-black text-current font-bold">Failure Rate</div>
        </div>
        <div className="group space-y-4 py-8 px-4 dark:bg-white bg-gray-100 border border-2 border-current rounded">
            <Cursor size={48} className="hidden sm:block dark:text-black text-current dark:group-hover:text-[#DA9B25]"/>
            <div className="lg:text-6xl md:text-4xl sm:text-6xl text-3xl font-extrabold text-[#DA9B25]">31%</div>
            <div className="dark:text-black text-current font-bold">Misclick Rate</div>
        </div>
        <div className="group space-y-4 py-8 px-4 dark:bg-white bg-gray-100 border border-2 border-current rounded">
            <Target size={48} className="hidden sm:block dark:text-black text-current dark:group-hover:text-[#DA9B25]"/>
            <div className="lg:text-6xl md:text-4xl sm:text-6xl text-3xl font-extrabold text-[#DA9B25]">72<span className="sm:text-2xl text-base tracking-wide">/100</span></div>
            <div className="dark:text-black text-current font-bold">Maze.co Score</div>
        </div>
    </div>
        
    );
}
 
export default BubMaze;