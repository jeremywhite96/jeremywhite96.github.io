import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const BubCalVariants = () => {
    return (
        <div>
            <h1 className='subheading'>Calendar Variants</h1>
            <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8'>
                <div className='sm:col-span-12 bg-red-500'>desc desc desc desc</div>
                <Flicking className="sm:col-span-7" align="center" bound={true} panelsPerView="2.1" noPanelStyleOverride={false} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="item bg-red-500 ">Image image image Image image imageImage image image</div>
                    <div className="item px-4 bg-red-600 ">blah blah blah blah blah blah blah blah</div>
                    <div className="item bg-red-700 ">boop boop boop boop boop boop boop boop</div>
                </Flicking>
                <Flicking className="sm:col-span-5" align="prev" bound={true} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="pr-2 item bg-red-500 w-3/4 sm:w-auto">Image image image Image image imageImage image image</div>
                    <div className="pl-2 item bg-red-600 w-3/4 sm:w-auto">blah blah blah blah blah blah blah blah</div>
                </Flicking>
            </div>
        </div>
    );
}

export default BubCalVariants;