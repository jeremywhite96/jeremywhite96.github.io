import Flicking from "@egjs/react-flicking";

const BubSchedFilt = () => {
    return (
        <div>
            <h1 className='subheading'>Schedule Filtering</h1>
            <div className='grid sm:grid-cols-12 grid-cols-1 gap-x-12 gap-y-8'>
                <div className="col-span-1 sm:col-span-5 grid grid-cols-2 sm:gap-x-12 gap-y-8 gap-8">
                    <div className="col-span-1 bg-red-500">version 1</div>
                    <div className="col-span-1 bg-red-500">version 2 component only</div>
                </div>
                <div className="col-span-1 sm:col-span-7 grid grid-cols-3 sm:gap-x-12 gap-y-8 gap-8">
                    <div className="col-span-1 bg-red-500">v2</div>
                    <div className="col-span-1 bg-red-500">v2</div>
                    <div className="col-span-1 bg-red-500">v2</div>
                </div>
                <div className="sm:col-span-6">Pressing the eye “reveals” the schedule visibility screen; create a connection in the user’s mind that the eye reveals.
                </div>
                <div className="sm:col-span-6">Apply turns the eye green, again creating a connection in the user’s mind
                    green = active or applied
                </div>
            </div>
        </div>
    );
}

export default BubSchedFilt;