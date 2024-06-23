import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";


const Home = () => {
    // const items = useLoaderData()
    // console.log(items)
    return (
        <div>
            <Carousel></Carousel>
            <TabCategories ></TabCategories>
        </div>
    );
};

export default Home;