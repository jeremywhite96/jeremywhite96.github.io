import Flicking from "@egjs/react-flicking";

const BubSearchFilters = () => {
    return (
        <div>
            <h1 className='subheading'>Search Filters</h1>
            <div className='grid sm:grid-cols-3 gap-x-12 gap-y-4'>
                <div className="sm:col-span-1 bg-red-500">Description Description Description Description Description</div>
                <div className='sm:col-span-2 grid grid-rows-4 sm:gap-x-12 gap-y-4 sm:gap-y-8'>
                    <div className="row-span-1 bg-red-500">Image image image Image image Image Image image image</div>
                    <div className="row-span-1 bg-red-500">Image image image Image image Image Image image image</div>
                    <div className="row-span-1 bg-red-500">Image image image Image image Image Image image image</div>
                    <div className="row-span-1 bg-red-500">Image image image Image image Image Image image image</div>
                </div>
            </div>
        </div>
    );
}

export default BubSearchFilters;