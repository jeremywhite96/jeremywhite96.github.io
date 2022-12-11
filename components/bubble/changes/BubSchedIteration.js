import Flicking from "@egjs/react-flicking";

const BubSchedIteration = () => {
    return (
        <div>
            <h1 className='subheading'>Group Schedule - Iteration</h1>
            <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                <div className="col-span-2 sm:col-span-1 bg-red-500">Description Description Description Description Description</div>
                <Flicking className="col-span-2" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="bg-red-500 w-2/5 pr-2">image</div>
                    <div className="bg-red-500 w-2/5 px-2">image</div>
                    <div className="bg-red-500 w-2/5 px-2">image</div>
                    <div className="bg-red-500 w-2/5 px-2">image</div>
                </Flicking>
            </div>
        </div>
    );
}

export default BubSchedIteration;