import BubFilterBold from "./BubFilterBold";
import BubColBlack from "./BubColBlack";
import BubSchedChart from "./BubSchedChart"

const BubAB = () => {
    return (
        <div className='space-y-8 py-8'>
            <div>
                <h1 className='subheading'>A/B Results - Filters</h1>
                <div className="space-y-4">
                    <div className='grid sm:grid-cols-2 gap-x-8 gap-y-4'>
                        <div className="col-span-2 sm:col-span-1 bg-red-500">Description Description Description Description Description</div>
                        <div className='col-span-2 grid grid-cols-4 gap-4'>
                            <div className="col-span-2 sm:col-span-1 bg-red-500">Image image image Image image imageImage image image</div>
                            <div className="col-span-2 sm:col-span-1 bg-red-500">Image image image Image image imageImage image image</div>
                            <div className="col-span-4 sm:col-span-2">
                                <BubFilterBold />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="space-y-4">
                    <div className='grid sm:grid-cols-2 gap-x-8 gap-y-4'>
                        <div className="col-span-2 sm:col-span-1 bg-red-500">Description Description Description Description Description</div>
                        <div className='col-span-2 grid grid-cols-4 gap-4'>
                            <div className="col-span-2 sm:col-span-1 bg-red-500">Image image image Image image imageImage image image</div>
                            <div className="col-span-2 sm:col-span-1 bg-red-500">Image image image Image image imageImage image image</div>
                            <div className="col-span-4 sm:col-span-2">
                                <BubColBlack />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="space-y-4">
                    <div className='grid sm:grid-cols-2 gap-x-8 gap-y-4'>
                        <div className="col-span-2 sm:col-span-1 bg-red-500">Description Description Description Description Description</div>
                        <div className='col-span-2 grid grid-cols-4 gap-4'>
                            <div className="col-span-2 sm:col-span-1 bg-red-500">Image image image Image image imageImage image image</div>
                            <div className="col-span-2 sm:col-span-1 bg-red-500">Image image image Image image imageImage image image</div>
                            <div className="col-span-4 sm:col-span-2">
                                <BubSchedChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BubAB;