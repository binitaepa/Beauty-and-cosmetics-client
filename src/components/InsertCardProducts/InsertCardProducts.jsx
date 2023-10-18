

const InsertCardProducts = () => {
    const handleInsertProduct=(event)=>{
        event.preventDefault();

        const form = event.target;
        
        const photo = form.photo.value;
        const name = form.name.value;
        const product={photo,name};
        console.log(product)
        fetch('http://localhost:5000/cards', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }
    return (
        <div>
            <form onSubmit={handleInsertProduct} >
            <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full" />
                        </label>
                        </div>
                
            <div className="form-control md:w-1/2 ml-4 mb-5">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                        </label>
                        </div>
                        <input type="submit" value="Add Product" className="btn btn-block" />
            </form>
        </div>
    );
};

export default InsertCardProducts;