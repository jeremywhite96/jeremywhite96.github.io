import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const BubHomeEvolution = () => {
    return (
        <div>
            <h1 className='subheading'>Home Screen Evolution</h1>
            <div className='grid sm:grid-cols-12 sm:gap-x-12 gap-y-8'>
                <div className='sm:col-span-3 bg-red-500'>desc desc desc desc</div>
                <Flicking align="prev" bound="true" panelsPerView={2.5} circular={false} onMoveEnd={e => { console.log(e); }}>
                    <div className="panel mr-2 item bg-red-500 w-3/5">Image image image Image image imageImage image image</div>
                    <div className="panel item mx-2 bg-red-500 w-3/5">blah blah blah blah blah blah blah blah</div>
                    <div className="panel item mx-2 bg-red-500 w-3/5">boop boop boop boop boop boop boop boop</div>
                </Flicking>
            </div>




        </div>
    );
}

export default BubHomeEvolution;