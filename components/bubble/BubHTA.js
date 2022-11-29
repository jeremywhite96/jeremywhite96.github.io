import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Image from 'next/image';

const BubHTA = () => {
    return ( <Tabs>
        <TabList>
          <Tab>Rosie</Tab>
          <Tab>Samia</Tab>
          <Tab>Connor</Tab>
          <Tab>Matthew</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
          <Image src='/static/images/bubble/hta/Rosiehta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <Image src='/static/images/bubble/hta/samiahta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
          <Image src='/static/images/bubble/hta/connor1hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
          <Image src='/static/images/bubble/hta/connor2hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
          <Image src='/static/images/bubble/hta/matthew1hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
          <Image src='/static/images/bubble/hta/matthew2hta.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
        </TabPanel>
      </Tabs> );
}
 
export default BubHTA;
