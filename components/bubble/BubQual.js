import Image from "next/image";

const BubQual = () => {
    return (
        <div className="grid sm:grid-cols-3 flex flex-cols gap-24 pt-8">
            <div className="flex flex-col col-span-1 space-y-4">
                <Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-contain h-max w-full" width="500" height="500" />
                <h1 className="font-bold">"What do you think about how the content is shown on the Connections to another person page?"</h1>
                <p>“I think it's a very creative way of showing mutual connections”<br /><br />
                    “It's very messy and it's not clear. It's mixing events, people when it should be tiered/listed”<br /><br />


                    “Understanding what the connections meant was a bit confusing, needed more explanation”<br /><br />


                    “I think there is lack of consistency, the boxes are too large including text as well. And the blue vibrant colour is not a great choice.”<br /><br />


                    “No need to improve. It looks decent”<br /><br />


                    “Looks a bit too crowded, there's no spacing/separator between people, events and groups”<br /><br />


                    “In the middle it says 7. But It would be better to have a few bubble images of them with another bubble saying 7+ for example.”</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-4">
                <Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-contain h-max w-full" width="500" height="500" />
                <h1 className="font-bold">“What are your thoughts on using the filter to search events by their date and time?”</h1>
                <p>“I like it! If you don't have plans on a certain day it’s a great way of finding out what's going on near you” <br /><br />

                    “I like that you can select time as well so that I can search for nights or day events” <br /><br />

                    “I think this is a useful feature, although I think date would probably be more universally utilised than time.” <br /><br />

                    “It's good to have it. Wording might need to change? This could be a personal preference thing. Maybe have *Dates* elsewhere. Above the event?”</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-4">
                <Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-contain h-max w-full" width="500" height="500" />
                <h1 className="font-bold">“How did you feel about the features of the group schedule? i.e. the highlighted dates, the eye icons, the search bar and filter etc.”</h1>
                <p>“I can't say for sure what the eye icons represent.” <br /><br />

                    “Was a bit confused at first about the highlighted dates and whether they signified dates that were available or unavailable… I still don't know the function of the eye icon. ”<br /><br />

                    “I thought white meant they were not free. Small groups would be good above the calander to make this flow better. This is tricky to balance for teams of 7+ for example.”<br /><br />

                    “I think each part occupied way too much area, for instance group schedule title too large and the logo which is used for visibility i would rather prefer with low opacity to show if person is visible or not.”<br /><br />

                    “Risk of not always being up to date because who updates their calendar that often? maybe if you could sync the calendar to your google calendar. I think all of the contrasting colors are a bit harsh on the eye.”<br /><br />

                    “Not clear what the eye icon represents.” </p>
            </div>
        </div>
    );
}

export default BubQual;