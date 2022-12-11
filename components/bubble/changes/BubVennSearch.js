import Flicking from "@egjs/react-flicking";

const BubVennSearch = () => {
    return (
        <div>
            <h1 className='subheading'>Venn Search</h1>
            <div className="space-y-4">
            <div className='bg-red-500'>description</div>
            <div className='grid md:grid-cols-12 sm:gap-x-12 gap-y-4 gap-8'>
                <div className='md:col-span-4 bg-red-500'>Image image image Image image imageImage image image</div>
                <Flicking className="sm:col-span-9 md:col-span-8" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="bg-red-500 md:w-1/3 w-2/3 pr-2">image</div>
                    <div className="bg-red-500 md:w-1/3 w-2/3 px-2">image</div>
                    <div className="bg-red-500 md:w-1/3 w-2/3 px-2">image</div>
                </Flicking>
            </div>
            </div>
        </div>
    );
}

export default BubVennSearch;