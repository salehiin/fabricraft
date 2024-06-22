import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabCategories = () => {
    return (
        
            <Tabs>
                <div className='container py-10 mx-auto'>
                    <h1 className='text-2xl font-semibold text-center capitalize lg:text-3xl'>Browse Items By Categories</h1>
                    <p className='max-w-2xl mx-auto my-6 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id inventore, numquam repellendus iusto sint dolorum repudiandae necessitatibus amet ullam.</p>
                    <div className='flex items-center justify-center'>
                        <TabList>
                            <Tab>Embroidery</Tab>
                            <Tab>Knitting & Crocheting</Tab>
                            <Tab>Quilting</Tab>
                            <Tab>Beadwork</Tab>
                            <Tab>Tie-Dyeing</Tab>
                            <Tab>Macrame</Tab>
                        </TabList>
                    </div>

                    <div className=''>
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
                        <TabPanel>
                            <h2>Any content 5</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 6</h2>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        
    );
};

export default TabCategories;