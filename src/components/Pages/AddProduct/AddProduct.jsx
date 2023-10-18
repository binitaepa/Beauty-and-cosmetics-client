import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        
        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
       

        const newProduct = { photo, name, brandName, type, price, description, rating }

        console.log(newProduct);
        fetch('http://localhost:5000/cosmetics', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    
    }
    return (
        <div>
              <div className="bg-pink-100 p-24">
            <h2 className=" font-extrabold text-center mb-5 text-4xl text-pink-500">Add a Cosmetics Brand</h2>
            <form onSubmit={handleAddProduct}>
                {/* form Photo url row */}
            <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                        
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
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
                            <input type="text" name="type" placeholder="Type Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="rating" placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                
                <input type="submit" value="Add Product" className="btn btn-block bg-pink-400 text-white" />

            </form>
        </div>
        </div>
    );
};

export default AddProduct;