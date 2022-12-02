import BubMaze from "./BubMaze";

const BubTest = () => {
    return (
        <div>
            <div className='pt-4'>
                <div className='subheading'>Usability Testing</div>
                <div className='flex flex-row flex-wrap flex-grow'>
                    <div className="prose max-w-none py-4 dark:prose-dark grow">
                        <h3>This is h2</h3>
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <div className='subheading'>Maze.co Testing</div>
                <div className='flex flex-row flex-wrap flex-grow'>
                    <div className="prose max-w-none py-4 dark:prose-dark grow">
                        <h3>This is h2</h3>
                    </div>
                </div>
            </div>
            <BubMaze />
        </div>
    );
}

export default BubTest;