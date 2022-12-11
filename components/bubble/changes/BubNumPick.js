import Flicking from "@egjs/react-flicking";

const BubNumPick = () => {
    return (
        <div>
            <h1 className='subheading'>Number Pickers</h1>
            <div className='grid sm:grid-cols-3 sm:gap-x-12 gap-8'>
                <div className="col-span-1 bg-red-500">overlay</div>
                <div className="col-span-1 bg-red-500">calendar</div>
                <div className="col-span-1 vertical">
                    <Flicking className="h-full" align="prev" horizontal={false} bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                        <div className="bg-red-400 h-4/5 sm:h-auto">Image image image Image image imageImage image image</div>
                        <div className="bg-red-500 h-4/5 my-4 sm:h-auto">boop boop boop boop boop boop boop boop</div>
                        <div className="bg-red-600 h-4/5 sm:h-auto">Image image image Image image imageImage image image</div>
                    </Flicking>
                </div>
            </div>
        </div>
    );
}

export default BubNumPick;