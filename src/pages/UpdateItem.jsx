import { useContext, useState } from 'react'
// import DatePicker from 'react-datepicker'

// import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../providers/AuthProvider'
// import { AuthContext } from '../provider/AuthProvider'

const UpdateItem = () => {
  const navigate = useNavigate()
  const item = useLoaderData()

  const {
    _id,
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
    // userEmail,
    // donar,
  } = item || {}

  const { user } = useContext(AuthContext)
//   const [startDate, setStartDate] = useState(new Date(expiredDateTime) || new Date())
  const handleFormSubmit = async e => {
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
    const itemData = {
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

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/item/${_id}`,
        itemData
      )
      console.log(data)
      toast.success('Item Data Updated Successfully!')
      navigate('/myItems')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update an Item
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Item Name
              </label>
              <input
                id='item_name'
                name='item_name'
                defaultValue={item_name}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
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
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* I */}

            
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Item Image
              </label>
              <input
                id='image'
                name='image'
                defaultValue={image}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Rating
              </label>
              <input
                id='rating'
                name='rating'
                defaultValue={rating}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Customization
              </label>
              <input
                id='customization'
                name='customization'
                defaultValue={customization}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
               Processing time
              </label>
              <input
                id='processing_time'
                name='processing_time'
                defaultValue={processing_time}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Stock status
              </label>
              <input
                id='stockStatus'
                name='stockStatus'
                defaultValue={stockStatus}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Price
              </label>
              <input
                id='price'
                name='price'
                defaultValue={price}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Item Name
              </label>
              <input
                id='item_name'
                name='item_name'
                defaultValue={item_name}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Item Name
              </label>
              <input
                id='item_name'
                name='item_name'
                defaultValue={item_name}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div> */}
          </div>

          <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                    Category
                </label>
                {/* <input
                  id='subcategory_Name'
                  name='subcategory_Name'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                /> */}
                <select
                name='subcategory_Name'
                id='subcategory_Name'
                defaultValue={subcategory_Name}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              >
                <option value='Embroidery'>Embroidery</option>
                <option value='Knitting & Crocheting'>Knitting & Crocheting</option>
                <option value='Quilting'>Quilting</option>
                <option value='Beadwork'>Beadwork</option>
                <option value='Tie-Dyeing'>Tie-Dyeing</option>
                <option value='Macrame'>Macrame</option>
              </select>
              </div>
          
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              defaultValue={short_description}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='short_description'
              id='short_description'
              cols='30'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateItem