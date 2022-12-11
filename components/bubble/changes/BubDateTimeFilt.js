import Flicking from "@egjs/react-flicking";

const BubDateTimeFilt = () => {
    return (
        <div>
            <h1 className='subheading'>Date and Time Filters</h1>
            <div className='grid sm:grid-cols-12 gap-x-12 gap-y-8'>
                <div className="sm:col-span-3">
                    <div className="bg-red-500">version 1</div>
                </div>
                <Flicking className="sm:col-span-9" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="bg-red-500 lg:w-1/5 sm:w-2/5 pr-2">unavailable</div>
                    <div className="bg-red-500 lg:w-1/5 sm:w-2/5 px-2">available</div>
                    <div className="bg-red-500 lg:w-1/5 sm:w-2/5 px-2">cal overlay</div>
                    <div className="bg-red-500 lg:w-1/5 sm:w-2/5 px-2">cal + active</div>
                    <div className="bg-red-500 lg:w-1/5 sm:w-2/5 pl-2">applied filter</div>
                </Flicking>
                <div className="sm:col-span-12 bg-red-500">desc desc desc</div>
            </div>
        </div>
    );
}

export default BubDateTimeFilt;