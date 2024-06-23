import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const {
    _id,
    item_name,
    subcategory_Name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = item || {};

  return (
    <div>
      <Link
        to={`/item/${_id}`}
        className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <div className="px-4 py-2">
          <h1 className="text-sm font-bold text-gray-800 uppercase dark:text-white">
            {item_name}
          </h1>
          <p
            title={short_description}
            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
          >
            {short_description.substring(0, 200)}...
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">${price}</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
