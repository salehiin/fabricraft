import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemCard from './ItemCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TabCategories = () => {

    const [items, setItems] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/items`)
            setItems(data)
        }
        getData()
    }, [])

    return (
        
            <Tabs>
                <div className='container py-10 mx-auto'>
                    <h1 className='text-2xl font-semibold text-center capitalize lg:text-3xl'>Crafting Dreams: Your Gateway to Artistic Expression!</h1>
                    <p className='max-w-2xl mx-auto my-6 text-center '>Explore our featured section for unique arts and crafts, handpicked to inspire your creativity and help you create beautiful, one-of-a-kind pieces.</p>
                    {/* <div className='flex items-center justify-center'>
                        <TabList>
                            <Tab>Embroidery</Tab>
                            <Tab>Knitting & Crocheting</Tab>
                            <Tab>Quilting</Tab>
                            <Tab>Beadwork</Tab>
                            <Tab>Tie-Dyeing</Tab>
                            <Tab>Macrame</Tab>
                        </TabList>
                    </div> */}

                    <div className=''>
                        {/* <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(i=>i.subcategory_Name==='Embroidery').map(item=>(
                                    <ItemCard key={item._id} item={item}></ItemCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(i=>i.subcategory_Name==='Knitting & Crocheting').map(item=>(
                                    <ItemCard key={item._id} item={item}></ItemCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(i=>i.subcategory_Name==='Quilting').map(item=>(
                                    <ItemCard key={item._id} item={item}></ItemCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(i=>i.subcategory_Name==='Beadwork').map(item=>(
                                    <ItemCard key={item._id} item={item}></ItemCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(i=>i.subcategory_Name==='Tie-Dyeing').map(item=>(
                                    <ItemCard key={item._id} item={item}></ItemCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(i=>i.subcategory_Name==='Macrame').map(item=>(
                                    <ItemCard key={item._id} item={item}></ItemCard>
                                ))}
                            </div>
                        </TabPanel> */}
                        
                        {/* <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items.filter(item =>
                                    item.subcategory_Name === 'Embroidery' || item.subcategory_Name === 'Knitting & Crocheting' || item.subcategory_Name === 'Knitting & Crocheting' || item.subcategory_Name === 'Quilting' || item.subcategory_Name === 'Beadwork' || item.subcategory_Name === 'Tie-Dyeing' || item.subcategory_Name === 'Macrame'
                                ).map(item => (
                                    <ItemCard key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel> */}
                       
                        {/* <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {items
                                    .filter(item =>
                                        item.subcategory_Name === 'Embroidery' ||
                                        item.subcategory_Name === 'Knitting & Crocheting' ||
                                        item.subcategory_Name === 'Quilting' ||
                                        item.subcategory_Name === 'Beadwork' ||
                                        item.subcategory_Name === 'Tie-Dyeing' ||
                                        item.subcategory_Name === 'Macrame'
                                    )
                                    .sort(() => 0.5 - Math.random()) // Shuffle the array randomly
                                    .slice(0, 3) // Select the first 3 items from the shuffled array
                                    .map(item => (
                                        <ItemCard key={item._id} item={item} />
                                    ))}
                            </div>
                        </TabPanel> */}
                       
                        <TabPanel>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {(() => {
                                    // Define the subcategories of interest
                                    const subcategories = [
                                        'Embroidery',
                                        'Knitting & Crocheting',
                                        'Quilting',
                                        'Beadwork',
                                        'Tie-Dyeing',
                                        'Macrame'
                                    ];
                                    
                                    // Group items by subcategory
                                    const groupedItems = items.reduce((acc, item) => {
                                        if (subcategories.includes(item.subcategory_Name)) {
                                            if (!acc[item.subcategory_Name]) {
                                                acc[item.subcategory_Name] = [];
                                            }
                                            acc[item.subcategory_Name].push(item);
                                        }
                                        return acc;
                                    }, {});

                                    // Randomly select one item from each subcategory
                                    const selectedItems = Object.values(groupedItems).flatMap(group => {
                                        const randomIndex = Math.floor(Math.random() * group.length);
                                        return group[randomIndex];
                                    });

                                    // const requiredItems = 8;

                                    // Duplicate items until we have at least the required number
                                    // let itemsPool = [];
                                    // while (itemsPool.length < requiredItems) {
                                    // itemsPool = itemsPool.concat(selectedItems);
}

                                    // Shuffle the selected items and take up to 3
                                    const randomItems = selectedItems.sort(() => 0.5 - Math.random()).slice(0, 8);

                                    return randomItems.map(item => (
                                        <ItemCard key={item._id} item={item} />
                                    ));
                                })()}
                            </div>
                        </TabPanel>


                        
                    </div>
                </div>
            </Tabs>
        
    );
};

export default TabCategories;

