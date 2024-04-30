import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleItem = ({ item, items, setItems }) => {
  const { _id, name, quantity, supplier, material, category, details, photo } =
    item;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/item/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = items.filter(itm => itm._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <h2 className="3xl">{name}</h2>
        <div className="flex">
          <img className="" src={photo} alt="" />
          <div className="join join-vertical">
            <button className="btn bg-warning join-item">View</button>
            <Link to={`update/${_id}`}>
                <button className="btn bg-secondary join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
