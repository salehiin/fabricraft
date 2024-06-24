import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const AddItems = () => {

    const {user} = useContext(AuthContext)

    const item = useLoaderData()
    const {
        _id,
        // item_name,
        // subcategory_Name,
        // short_description,
        // price,
        // rating,
        // customization,
        // processing_time,
        // stockStatus,
      } = item || {}


      const handleFormSubmission = async e =>{
        e.preventDefault()
        const form = e.target
        const itemId = _id
        const item_name = form.item_name.value
        // const name = form.item_name.value
        const subcategory_Name = form.subcategory_Name.value
        // const category = form.subcategory_Name.value
        // const short_description = form.short_description.value
        const price = parseFloat(form.price.value)
        const rating = form.rating.value
        const customization = form.customization.value
        const image = form.image.value
        const processing_time = form.processing_time.value
        const stockStatus = form.stockStatus.value
        const short_description = form.short_description.value
        const email = user?.email
        // const name = form.item_name ? form.item_name.value : '';
        // const description = form.description ? form.description.value : '';
        // const price = form.price ? parseFloat(form.price.value) : 0;

        const newItem = {
            itemId,
            item_name,
            image,
            subcategory_Name,
            short_description,
            price,
            rating,
            customization,
            processing_time,
            stockStatus,
            email
        }
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/item`, newItem)
            console.log(data)
        }catch(err){
            console.log(err)
        }

      }


    return (
      <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
        {/* Job Details */}
        {/* <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-light text-gray-800 '>
              Deadline: 12/08/2024
            </span>
            <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
              {subcategory_Name}
            </span>
          </div>
  
          <div>
            <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
              {item_name}
            </h1>
  
            <p className='mt-2 text-lg text-gray-600 '>
              {short_description}
            </p>
            <p className='mt-6 text-sm font-bold text-gray-600 '>
              Buyer Details:
            </p>
            <div className='flex items-center gap-5'>
              <div>
                <p className='mt-2 text-sm  text-gray-600 '>Name: Jhankar Vai.</p>
                <p className='mt-2 text-sm  text-gray-600 '>
                  Email: jhankar@mahbub.com
                </p>
              </div>
              <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                <img src='' alt='' />
              </div>
            </div>
            <p className='mt-6 text-lg font-bold text-gray-600 '>
              Price: {price}
            </p>
          </div>
        </div> */}
        {/* Place A Bid Form */}
        <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Place A Bid
          </h2>
  
          <form onSubmit={handleFormSubmission}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
  
              
                {/* 1 */}
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                  Name
                </label>
                <input
                  id='item_name'
                  name='item_name'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              {/* 2 */}
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                    Category
                </label>
                <input
                  id='subcategory_Name'
                  name='subcategory_Name'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              {/* 3 */}
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                    Rating
                </label>
                <input
                  id='rating'
                  name='rating'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              {/* 4 */}
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                Customization
                </label>
                <input
                  id='customization'
                  name='customization'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              {/* 5 */}
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                Processing time
                </label>
                <input
                  id='processing_time'
                  name='processing_time'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> 
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                  Stock status
                </label>
                <input
                  id='stockStatus'
                  name='stockStatus'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  disabled
                  defaultValue={user?.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                  Image
                </label>
                <input
                  id='image'
                  type='text'
                  name='image'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                  Price
                </label>
                <input
                  id='price'
                  type='text'
                  name='price'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                 Description
                </label>
                <input
                  id='short_description'
                  name='short_description'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              {/* <div className='flex flex-col gap-2 '> */}
                {/* <label className='text-gray-700'>Deadline</label> */}
  
                {/* Date Picker Input Field */}
              {/* </div> */}
            </div>
  
            <div className='flex justify-end mt-6'>
              <button
                type='submit'
                className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
                Place Bid
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  }
  
  export default AddItems

  // d1/v5 28:30