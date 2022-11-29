import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

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
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs> );
}
 
export default BubHTA;
