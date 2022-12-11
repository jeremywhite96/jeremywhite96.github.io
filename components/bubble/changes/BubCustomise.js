import Flicking from "@egjs/react-flicking";

const BubCustomise = () => {
    return (
        <div>
            <h1 className='subheading'>Customisable Modes</h1>
            <div className='grid sm:grid-cols-3 gap-x-12 gap-y-4 sm:gap-y-8'>
                <div className="col-span-1 bg-red-500">Description Description Description Description Description</div>
                <Flicking className="sm:col-span-9 md:col-span-8" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="bg-red-500 md:w-1/3 w-2/3 pr-2">image</div>
                    <div className="bg-red-500 md:w-1/3 w-2/3 px-2">image</div>
                    <div className="bg-red-500 md:w-1/3 w-2/3 px-2">image</div>
                    <div className="bg-red-500 md:w-1/3 w-2/3 px-2">image</div>
                </Flicking>
            </div>
        </div>
    );
}

export default BubCustomise;