import React from 'react';
import Image from 'next/image';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';

const BubSystems = () => {
    return (
        <div className='space-y-8 py-8'>
            <h1 className='subheading'>Design Systems</h1>
            <div className='sm:grid grid-cols-12 gap-12'>
                <div className='col-span-6 content-center'>
                    <Accordion preExpanded={['a']}>
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Research
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We changed our approach before moving onto the second iteration of the high fidelity design and elected to use elements in an atomic design system.<br /><br />This involved looking into companies with public design systems and policies of “coding in the open”. We looked at how they operated, and general best practices.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Insights
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We identified that many of our pages reuse similar content which is an opportunity to utilise reusable components - in an atomic design system, these would be called atoms.<br /><br />Creating variations of these atoms would help encourage affordance and glance value readability across the application, which is something the feedback suggested was an issue.<br /><br />Karri Saarinen, a technical writer of the Airbnb visual language documentation, suggests that a downside to this approach is the creation of too many atoms, and thus molecules, potentially reduces the cohesiveness of the app experience as a whole
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Justification
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Implementing this new design system could solve some of the issues that our usability test identified by tackling the root causes. Primarily focusing on the spacing and crowding issues and points of confusion with our system image.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='col-span-6 justify-end hidden sm:block'>
                    <Image src="/static/images/bubble/system/examplebad.png" className="object-contain h-max w-full" width="500" height="500" />
                </div>
            </div>
            <div>
                <h1 className='subheading'>Translating V1 → V2</h1>
                <div className='sm:grid sm:grid-cols-3 gap-8 py-8'>
                    <div className='col-span-1'>
                        <h1 className='align-baseline pb-2'>Decided to design for a single device:</h1>
                        <ul className='list-disc md:list-outside list-inside'>
                            <li>Apple iOS</li>
                            <li>Used Apple's documentation to inform our own design transition</li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='align-baseline pb-2'>iOS apps are built using UIKit components, and strongly tied to the system.</h1>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='align-baseline  pb-2'>Utilised standard Apple components in order to focus on designing and iterating on unique elements of our app</h1>
                    </div>
                </div>
                <div>
                    <Image src="/static/images/bubble/system/appleuikit.png" className="object-contain h-max w-full" width="500" height="500" />
                </div>
            </div>
            <div>
                <h1 className='subheading'>V1 → V2 - New Dimensions</h1>
                <div className='sm:grid grid-cols-3 gap-12 py-8'>
                    <div className='col-span-3'>The original carousel navigation system led to a cramped and narrow feeling.<br />It also conflicted with Apple’s guidelines, interfering with the system wide margin navigation system.<br />New dimensions were created, including the maximum width of components.<br /><br />These dimensions enabled more considered design apporaches regarding spacing - a key complaint following the first usability test.</div>
                    <div className='col-span-1'><Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-contain h-max w-full" width="500" height="500" /></div>
                    <div className='col-span-1'><Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-contain h-max w-full" width="500" height="500" /></div>
                    <div className='col-span-1'><Image src="/static/images/bubble/wire/con1/Search Home.png" className="object-contain h-max w-full" width="500" height="500" /></div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Event Card → V2</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-8 bg-red-500'>_</div>
                    <div className='col-span-4 bg-red-500'>_</div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Scalable & Accessible</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-4 bg-red-500'>_</div>
                    <div className='col-span-8 bg-red-500'>_</div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Group Card → V2</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-8 bg-red-500 sm:grid grid-cols-2 gap-12'>
                        <div className='col-span-2'>description text here</div>
                        <div className='bg-red-900 col-span-1'>Image image image</div>
                        <div className='bg-red-900 col-span-1'>Image image image</div>
                    </div>
                    <div className='col-span-4 bg-red-500'>Image image image Image image imageImage image image</div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Moving to the rest of the app</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-6 bg-red-500 grid grid-cols-3 gap-12'>
                        <div className='col-span-2 bg-red-900'>description text here</div>
                    </div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Application of Colour</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-6 bg-red-500 sm:grid grid-cols-3 gap-12'>
                        <div className='col-span-2 bg-red-900'>description text here</div>
                    </div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                </div>
            </div>
            <div>
                <div className='sm:grid grid-cols-12 gap-x-12 gap-y-8 flex-col-reverse flex'>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                    <div className='col-span-6 bg-red-500'>description text here</div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>V2 Colour Palette & Rules</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-6 bg-red-500 gap-12'>
                        <div className='col-span-2'>description text here</div>
                    </div>
                    <div className='col-span-6 bg-red-500'>Image image image Image image imageImage image image</div>
                </div>
            </div>
            <div>
                <h1 className='subheading'>Applying the Palette</h1>
                <div className='sm:grid grid-cols-12 gap-12'>
                    <div className='col-span-6 bg-red-500'>
                        <div>description text here</div>
                    </div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                    <div className='col-span-3 bg-red-500'>Image image image Image image imageImage image image</div>
                </div>
            </div>
        </div>
    );
}

export default BubSystems;