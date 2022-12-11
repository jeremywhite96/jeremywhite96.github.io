import Flicking from "@egjs/react-flicking";

const BubDisplayUser = () => {
    return (
        <div className="space-y-8">
            <h1 className='subheading'>Displaying Users</h1>
            <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                <Flicking className="sm:col-span-7" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="bg-red-500 lg:w-1/3 sm:w-2/5 w-2/3 pr-2">v1</div>
                    <div className="bg-red-500 lg:w-1/3 sm:w-2/5 w-2/3 px-2">v1 second</div>
                    <div className="bg-red-500 lg:w-1/3 sm:w-2/5 w-2/3 px-2">v2</div>
                </Flicking>
                <div className="sm:col-span-5">
                    <div className="bg-red-500">drawing</div>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                <div className="sm:col-span-12 bg-red-500">
                    user image component sizing
                </div>
            </div>
            <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                <div className="sm:col-span-12 grid grid-cols-3 sm:grid-cols-6 sm:gap-x-12 gap-y-4 gap-8">
                    <div className="col-span-1 bg-red-500">apple share to group image</div>
                    <div className="col-span-1 bg-red-500">bubble 3</div>
                    <div className="col-span-1 bg-red-500">bubble 3 +5</div>
                    <div className="col-span-1 bg-red-500">bubble small</div>
                    <div className="col-span-1 bg-red-500">bubble 2 online</div>
                    <div className="col-span-1 bg-red-500">bubble 4 online</div>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8 gap-8'>
                <div className="sm:col-span-12 grid grid-cols-6 sm:gap-x-12 gap-y-8 gap-8">
                    <div className="col-span-6 sm:col-span-2 bg-red-500">description</div>
                    <div className="col-span-3 sm:col-span-2 bg-red-500">masonry idea</div>
                    <div className="col-span-3 sm:col-span-2 bg-red-500">user image card iterations</div>
                </div>
            </div>
            <div className='grid sm:grid-cols-3 sm:gap-x-12 gap-y-8 gap-8'>
                <div className="col-span-1 bg-red-500 ">v1 schedule user display</div>
                <div className="col-span-1 bg-red-500 ">v2 schedule user display</div>
                <div className="col-span-1 space-y-8">
                    <div className="bg-red-500">unavailable, available, filtered icons</div>
                    <div className="bg-red-500">description goes here and stuff</div>
                </div>
            </div>

        </div>
    );
}

export default BubDisplayUser;