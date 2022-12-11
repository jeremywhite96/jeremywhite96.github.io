import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Image from 'next/image';

const BubHTA = () => {
    return ( <Tabs className='border-b border-gray-200 dark:border-gray-700 pb-6'>
        <TabList>
          <Tab>Rosie</Tab>
          <Tab>Samia</Tab>
          <Tab>Connor</Tab>
          <Tab>Matthew</Tab>
        </TabList>

        <TabPanel>
          <h1 className='subheading pt-6'>Rosie's Scenario</h1>
          <p className="mt-2 mb-4">Rosie and 3 friends from her French group want to participate in a pub quiz on Monday at her local pub. The quiz requires a minimum of 6 people per team and so she needs 2 more people to join them. Rosie creates a public event and invites 3 of her existing friends. She sets the event participant limit to 6 so that 2 new people from the app can join to complete the team.</p>
          <Image src='/static/images/bubble/hta/Rosiehta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
        <TabPanel>
         <h1 className='subheading pt-6'>Samia's Scenario</h1>
         <p className="mt-2 mb-4">Samia wants to go for dinner and drinks with 3 other people she has made friends with on the app who have similar interests to her. She creates a group with all of them to see if they all get along in the group chat and then invites them to a group event to cook together.</p>
          <Image src='/static/images/bubble/hta/samiahta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
        <TabPanel>
          <h1 className='subheading pt-6'>Matthew's 1st Scenario </h1>
          <p className="mt-2 mb-4">Matthew searches for new friends using the People filter to find someone who also has interests in gaming, live music and hiking.
            Matthew then messages someone and talks with them about their favourite bands, holidays.
            They play video games together online until he feels confident that he wants to meet them in person.</p>
          <Image src='/static/images/bubble/hta/matthew1hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
          <h1 className='subheading pt-6'>Matthew's 2nd Scenario</h1>
          <p className="mt-2 mb-4">Matthew would like to find a place to go bouldering in Birmingham. He finds Depot Bouldering Centre on the maps and looks at existing events there. He joins a chat and talks to the members about their experience level in bouldering (he is intermediate). He agrees to join them on a Tuesday at 3pm.</p>
          <Image src='/static/images/bubble/hta/matthew2hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
        <TabPanel>
         <h1 className='subheading pt-6'>Connor's 1st Scenario</h1>
         <p className="mt-2 mb-4">Connor wants to find out if there are any social football events happening on certain days which won’t clash with his part-time job schedule.He filters his search using a date and time constraint. If there are any events or groups that are organised for his preferred time, he is able to view and join them.</p>
          <Image src='/static/images/bubble/hta/connor1hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
          <h1 className='subheading pt-6'>Connor's 2nd Scenario</h1>
         <p className="mt-2 mb-4">Connor is part of a group that go to the cinema and watch movies together. He has previously discussed wanting to see Dune the day it is released with 3 other members of his group.
          He wants to know what days all 3 of them are free in order to go and see the movie together. He looks at the group schedule, filters to only show the 3 specific members and looks to see which days they are all free. He then selects a day and creates an event on that day.</p>
          <Image src='/static/images/bubble/hta/connor2hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
      </Tabs> 
      );
}
 
export default BubHTA;
