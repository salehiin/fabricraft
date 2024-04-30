import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const item = useLoaderData();
  const { _id, name, quantity, supplier, material, category, details, photo } =
    item;

  const handleUpdateItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const material = form.material.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedItem = {
      name,
      quantity,
      supplier,
      material,
      category,
      details,
      photo,
    };
    // console.log(newItem);

    // send data to the server
    fetch(`http://localhost:5000/item/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] p-24">
      <form onSubmit={handleUpdateItem}>
        <h2>Update item: {name}</h2>
        {/* Name & Quantity row */}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Item Name</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Item Name"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <label className="form-control md:w-1/2 md:ml-4">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        {/* Supplier & type row */}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Supplier Name</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Supplier Name"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <label className="form-control md:w-1/2 md:ml-4">
            <div className="label">
              <span className="label-text">Material Used</span>
            </div>
            <input
              type="text"
              name="material"
              defaultValue={material}
              placeholder="Material Used"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        {/* Category & Details row */}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Category"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <label className="form-control md:w-1/2 md:ml-4">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        {/* Photo Url row */}
        <div className="">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
        </div>
        {/* Button row */}
        <input type="submit" value="Update Item" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateItem;
