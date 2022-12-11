import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const BubDateAvail = () => {
    return (
        <div>
            <h1 className='subheading'>Date Availability</h1>
            <div className='grid sm:grid-cols-12 gap-x-12 gap-y-8'>
                <Flicking className="sm:col-span-12" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="pr-4 bg-red-500 w-3/4 sm:w-1/2">Image image image Image image imageImage image image</div>
                    <div className="pl-4 bg-red-700 w-3/4 sm:w-1/2">boop boop boop boop boop boop boop boop</div>
                </Flicking>
                <div className="sm:col-span-12 grid sm:grid-cols-12">
                    <div className="sm:col-span-6 md:col-span-3 bg-red-500">desc desc desc desc desc desc desc desc</div>
                    <div className="sm:col-span-6 md:col-span-3 bg-red-700">boop boop boop boop boop boop boop boop</div>
                    <div className="sm:col-span-6 md:col-span-3 bg-red-500">desc desc desc desc desc desc desc desc</div>
                    <div className="sm:col-span-6 md:col-span-3 bg-red-700 ">boop boop boop boop boop boop boop boop</div>
                </div>
            </div>
        </div>
    );
}

export default BubDateAvail;