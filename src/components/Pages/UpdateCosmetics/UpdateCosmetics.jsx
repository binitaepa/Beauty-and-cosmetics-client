import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCosmetics = () => {
    const cosmetics = useLoaderData();
    const { _id,productImage, productName, name, type, price,  rating } = cosmetics;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        
        const productImage = form.photo.value;
        const name = form.brandName.value;
        const productName = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
       
        const rating = form.rating.value;
       

        const newProduct = {  name,price,productName,rating,type,productImage }
        console.log(newProduct)
        // send data to the server
        fetch(`https://cosmetics-and-beauty-server.vercel.app/cards/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    
    return (
        <div>
             <div className="bg-gray-100 p-24">
            <h2 className=" font-extrabold text-center mb-5 text-4xl text-pink-500">Update a Cosmetics Brand</h2>
            <form onSubmit={handleUpdate}>
                {/* form Photo url row */}
            <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={productImage} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                

                {/* form name and Brand Name row */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={productName} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                        
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" defaultValue={name} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>
                {/* form type and price row */}
                <div className="md:flex mb-8">
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Type Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form description and ratings row */}
                <div className="md:flex mb-8">
                   
                   
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                
                <input type="submit" value="Update" className="btn btn-block bg-pink-400 text-white" />

            </form>
        </div>
        </div>
    );
};

export default UpdateCosmetics;