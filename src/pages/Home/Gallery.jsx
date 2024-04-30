import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";
import { key } from "localforage";
import { useState } from "react";


const Gallery = () => {

    const loadeditems = useLoaderData();
    const [items, setItems] = useState(loadeditems);


    return (
        <div>
            <h2 className="text-6xl ">Gallery Items: {items.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
            {
                items.map(item => <SingleItem
                key={item._id}
                item={item}
                items={items}
                setItems={setItems}
                ></SingleItem>)
            }
            </div>
        </div>
    );
};

export default Gallery;