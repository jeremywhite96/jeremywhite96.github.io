import Flicking from "@egjs/react-flicking";

const BubShared = () => {
    return (
        <div>
            <div className="space-y-4">
                <h1 className='subheading'>Shared Interests</h1>
                <div className='bg-red-500'>description</div>
                <div className='grid grid-cols-3 md:col-span-4 sm:gap-x-12 gap-y-8 gap-4'>
                    <div className='col-span-1 md:col-span-1 bg-red-500'>Image image image Image image image Image image image</div>
                    <div className='col-span-1 md:col-span-1 bg-red-500'>Image image image Image image image Image image image</div>
                    <div className='col-span-1 md:col-span-1 bg-red-500'>Image image image Image image image Image image image</div>
                </div>
            </div>
        </div>
    );
}

export default BubShared;