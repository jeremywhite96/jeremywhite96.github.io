import BubMaze from "./BubMaze";
import BubSUS from "./BubSUS";
import BubQual from "./BubQual";

const BubTest = () => {
    return (
        <div className="space-y-8">
            <section className='pt-4'>
                <div className='subheading'>Usability Testing</div>
                <div className='flex flex-row flex-wrap flex-grow'>
                    <div className="prose max-w-none py-4 dark:prose-dark grow">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Erat velit scelerisque in dictum non consectetur a erat nam.</h3>
                    </div>
                </div>
            </section>
            <section>
                <div className='space-y-4'>
                    <div className='subheading'>Maze.co Testing</div>
                    <div className='flex flex-row flex-wrap flex-grow'>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Erat velit scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                    </div>
                    <BubMaze />
                </div>
            </section>
            <section>
                <div className="lg:grid grid-cols-12 flex flex-col gap-4 pt-8">
                    <div className="col-span-4">
                        <h1 className="subheading">System Usability Scale</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Erat velit scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    {/* <BubSUS className="grid flex flex-row col-span-8"/> */}
                </div>
            </section>
            <section>
<BubQual />
            </section>
        </div>
    );
}

export default BubTest;