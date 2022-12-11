import BubAB from "./BubAB";
import BubCalVariants from "./changes/BubCalVariants";
import BubHomeEvolution from "./changes/BubHomeEvolution";
import BubDateAvail from "./changes/BubDateAvail";
import BubDateAfford from "./changes/BubDateAfford";
import BubSchedFilt from "./changes/BubSchedFilt";
import BubDateTimeFilt from "./changes/BubDateTimeFilt";
import BubNumPick from "./changes/BubNumPick"
import BubDisplayUser from "./changes/BubDisplayUser";
import BubVennSearch from "./changes/BubVennSearch";
import BubShared from "./changes/BubShared";
import BubSchedIteration from "./changes/BubSchedIteration";
import BubStroke from "./changes/BubStroke";
import BubSearchFilters from "./changes/BubSearchFilters";
import BubIndicator from "./changes/BubIndicator";
import BubCustomise from "./changes/BubCustomise";

const BubChange = () => {
    return (
        <div className='space-y-8 py-8'>
            <BubHomeEvolution />
            <div>
                <h1 className='subheading'>Event and Group Creation - Condensing Pages</h1>
                <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                    <div className='sm:col-span-3 bg-red-500'>desc desc desc desc</div>
                    <ul className='sm:col-span-9 sm:grid grid-cols-4 sm:gap-x-12 gap-y-8 carouselflow overflow-scroll space-x-4 sm:space-x-0'>
                        <li className='col-span-1 bg-red-500 item w-[45%] sm:w-full'>Image image image Image image Image Image image image</li>
                        <li className='col-span-1 bg-red-500 item w-[45%] sm:w-full'>blah blah blah blah</li>
                        <li className='col-span-1 bg-red-500 item w-[45%] sm:w-full'>test test test test test</li>
                        <li className='col-span-1 bg-red-500 item w-[45%] sm:w-full'>boop boop boop boop</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Connections Page</h1>
                <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8 sm:grid-rows-2'>
                    <div className='sm:col-span-3 bg-red-500 row-span-2'>Image image image Image image Image Image image image</div>
                    <div className="sm:col-span-9 row-span-1">
                        <ul className='carouselflow overflow-auto space-x-4 sm:space-x-8'>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                        </ul>
                    </div>
                    <div className="sm:col-span-9 row-span-2">
                        <ul className='carouselflow overflow-auto space-x-4 sm:space-x-8'>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                            <li className='bg-red-500 item w-[45%]'>Image</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Map Search</h1>
                <div className="space-y-8">
                    <div className='grid sm:grid-cols-2 sm:gap-x-12 gap-y-8 gap-8'>
                        <div className='col-span-1 bg-red-500'>description description description description description description description description description description </div>
                        <div className='col-span-1 bg-red-500 hidden sm:inline-block'>saved component image</div>
                    </div>
                    <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                        <div className='sm:col-span-12'>
                            <ul className='carouselflow overflow-auto space-x-4 sm:space-x-8'>
                                <li className='bg-red-500 item sm:w-[25%] w-[35%]'>v1</li>
                                <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                                <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                                <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                                <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="subheading">Map Components</h1>
                <div className='sm:grid grid-cols-12 gap-x-12 gap-y-8 space-y-8 sm:space-y-0'>
                    <div className="col-span-12 sm:grid grid-cols-2">
                        <div className="sm:col-span-1 bg-red-500">Description Description Description Description Description</div>
                    </div>
                    <div className='col-span-12 grid sm:grid-cols-3 sm:gap-x-12 gap-y-8 gap-8'>
                        <div className="col-span-1 bg-red-500">component images</div>
                        <div className="col-span-1 bg-red-500">Image image image Image image Image Image image image</div>
                        <div className="col-span-1 bg-red-500">Image image image Image image Image Image image image</div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Group Schedule</h1>
                <div className="bg-red-500">desc desc desc</div>
                <div className='grid sm:grid-cols-12 sm:gap-x-8 gap-x-4 gap-y-8'>
                    <div className='sm:col-span-3 bg-red-500'>Image image image Image image image Image image image</div>
                    <div className='sm:col-span-9'>
                        <ul className='carouselflow overflow-auto space-x-4 sm:space-x-8'>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>v1</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                    <div className='sm:col-span-3 bg-red-500'>description</div>
                    <div className='sm:col-span-9'>
                    <ul className='carouselflow overflow-auto space-x-4 sm:space-x-8'>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>v1</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                            <li className='bg-red-500 item sm:w-[25%] w-[35%]'>Image</li>
                        </ul>
                    </div>
                </div>
            </div>
            <BubCalVariants />
            <BubDateAvail />
            <BubDateAfford />
            <BubSchedFilt />
            <BubDateTimeFilt />
            <BubNumPick />
            <BubDisplayUser />
            <BubVennSearch />
            <BubShared />
            <BubAB />
            <BubSchedIteration />
            <BubStroke />
            <BubSearchFilters />
            <BubIndicator />
            <BubCustomise />
            
        </div>
    );
}

export default BubChange;