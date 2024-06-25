import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";


const ItemDetails = () => {

    const {user} = useContext(AuthContext)

    const item = useLoaderData()
    const {
        _id,
        image,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        email
      } = item || {};

    return (
      <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
        
        {/* Place A Bid Form */}
        <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
          <img
            className="object-cover w-full mt-2"
            src={image || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"} 
            alt="Crafted Item"
          />
        </section>
        {/* Place A Bid Form */}
        {/* <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'> */}
          {/* <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Place A Bid
          </h2> */}
  
          {/* <form> */}
            {/* <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'> */}
              {/* <div>
                <label className='text-gray-700 ' htmlFor='price'>
                  Price
                </label>
                <input
                  id='price'
                  type='text'
                  name='price'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> */}
  
              {/* <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  disabled
                  defaultValue={user?.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> */}
  
              {/* <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                  Comment
                </label>
                <input
                  id='comment'
                  name='comment'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> */}
              {/* <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Deadline</label>
  
                
              </div> */}
            {/* </div> */}
  
            {/* <div className='flex justify-end mt-6'>
              <button
                type='submit'
                className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
                Place Bid
              </button>
            </div> */}
          {/* </form> */}
        {/* </section> */}
        {/* Job Details */}
        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
          <h3 className='text-lg font-light text-[#36454F] py-2 font-semibold'>
              {/* Deadline: 12/08/2024 Explore the Full Spectrum of Fabric Arts with Our Beautifully Crafted Items */}
              Explore the Full Spectrum of Our Beautifully Crafted Items
          </h3>
          <div className='flex items-center justify-between'>
            <h1 className='mt-2 text-2xl font-semibold text-[#40E0D0] '>
              {item_name}
            </h1>
            <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
              {subcategory_Name}
            </span>
          </div>
  
          <div>
            {/* <h1 className='mt-2 text-2xl font-semibold text-gray-800 '>
              {item_name}
            </h1> */}
  
            <p className='mt-2 text-md text-gray-600 '>
              {short_description}
            </p>
            <p className='mt-6 text-sm font-bold text-gray-600 '>
              Stock Status: {stockStatus}
            </p>
            <div className='flex items-center gap-5 text-lg'>
              <div>
                <p className='mt-2  text-gray-600 '>Processing Time: {processing_time}</p>
                <p className='mt-2  text-gray-600 '>
                  Owner Email: {email}
                </p>
              </div>
              <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                <img src='' alt='' />
              </div>
            </div>
            <div className="flex items-center justify-between text-lg">
              <p>Rating: {rating}</p>
              <p className='mt-6 text-lg font-bold text-gray-600 '>
                Price: {price}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  export default ItemDetails