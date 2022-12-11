import Flicking from "@egjs/react-flicking";

const BubDateAfford = () => {
    return (
        <div>
            <h1 className='subheading'>Date Availability Affordance</h1>
            <div className='grid sm:grid-cols-12 gap-x-12 gap-y-8'>
                <div className="col-span-6 bg-red-900">desc</div>
                <div className="col-span-6  grid grid-cols-6 sm:gap-x-8 gap-y-8 gap-8">
                    <div className="col-span-3 bg-red-500">date not selected</div>
                    <div className="col-span-3 vertical">
                        <Flicking className="h-full" align="center" horizontal={false} bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                            <div className="bg-red-400 h-4/5 sm:h-auto">Image image image Image image imageImage image image</div>
                            <div className="bg-red-500 h-4/5 my-4 sm:h-auto">boop boop boop boop boop boop boop boop</div>
                            <div className="bg-red-600 h-4/5 sm:h-auto">Image image image Image image imageImage image image</div>
                        </Flicking>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BubDateAfford;