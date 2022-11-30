import Image from "next/image";

const BubIA = () => {
    return (
<div className="md:space-y-24 space-y-12">
        <div className='md:col-span-12 md:grid md:grid-cols-12 grid-cols-6 flex flex-col gap-8'>
        <div className="md:col-span-6 lg:col-span-4">
            <h1 className="subheading">Information Architecture</h1>
            <p>We generated a list of features we thought would be important to include within the application. As part of that, we assigned a value for each feature for how important it is, and how frequently it would be used. This was then mapped informally onto a graph. <br/> <br/>
            This graph provided a rationale for our design thinking when prototyping and wireframing.
            Later in the design process more emphasis was placed on the “Connection History” feature and so its importance increased.</p>
            </div>    
        <div className="md:col-span-6 lg:col-span-8 relative"><Image src='/static/images/bubble/IA/importancefrequency.png' className="object-contain object-left h-full w-full" width="750" height="1000"/></div>
        </div>

        <div className='md:col-span-12 md:grid md:grid-cols-12 flex auto-rows-auto flex gap-8 flex-col-reverse'>
        <div className="md:col-span-6 lg:col-span-8 relative"><Image src='/static/images/bubble/IA/featuregroup.png' className="object-contain object-left h-full w-full" width="750" height="1000"/></div>
        <div className="md:col-span-6 lg:col-span-4 md:mb-12">
            <h1 className="subheading">Feature Grouping</h1>
            <p>Another exercise was performed to informally group features based on their purpose and where they might be found within the application. This provided us with some rationale early in the design process, however we shifted away from this approach later after testing.</p>
            </div>    
        </div>

        <div className='md:col-span-12 md:grid md:grid-cols-12 grid-cols-6 flex flex-col gap-8'>
            <div className="md:col-span-12  md:self-center">
                <h1 className="subheading">Reframing Exercise</h1>
                <p className="xl:w-3/4">During the ideation phase another exercise was performed which utilised the perspectives of the personas - and which persona was more likely to use each feature. This led us to the categories of proactive and reactive features. 
                </p>
                </div>    
            <div className="md:col-span-6 relative grid sm:grid-cols-2 grid-cols-1 grid-rows-6 grid-flow-col-dense auto-rows-min">
                <h1 className="font-bold text-lg row-span-1 col-span-1">Proactive</h1>
                <li className="row-span-1">Creation</li>
                <li className="row-span-1">Search</li>
                <li className="row-span-1">Discover</li>
                <li className="row-span-1">Settings</li>
                <li className="row-span-1">Chat & Messages</li>
                <div className="row-span-full col-span-1 hidden sm:block"><Image src='/static/images/bubble/IA/proactive.png' className="object-contain h-max w-full aspect-square" width="750" height="1000"/></div>
            </div>
            <div className="md:col-span-6 relative grid sm:grid-cols-2 grid-cols-1 grid-rows-6 grid-flow-col-dense auto-rows-min">
                <h1 className="font-bold text-lg row-span-1 col-span-1">Proactive</h1>
                <li className="row-span-1">Notifications</li>
                <li className="row-span-1">Calendar</li>
                <li className="row-span-1">Group Schedule / Co-Schedule</li>
                <li className="row-span-1">View Events / Groups / Connections</li>
                <li className="row-span-1">History</li>
                <div className="row-span-full col-span-1 hidden sm:block"><Image src='/static/images/bubble/IA/reactive.png' className="object-contain h-max w-full aspect-square" width="750" height="1000"/></div>
            </div>
        </div>
        <div className='md:col-span-12 md:grid md:grid-cols-12 grid-cols-6 flex flex-col gap-8'>
            <div className="col-span-12"><Image src='/static/images/bubble/IA/infoarch.png' className="object-contain h-max w-full " width="750" height="1000"/></div>
        </div>
</div>   
    );
}
 
export default BubIA;