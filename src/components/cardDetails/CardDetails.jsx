import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const {id} =useParams();
    const brands=useLoaderData();
    
     
    const brandDetail= brands.find(brandDetail=> brandDetail._id == id);
    return (
        <div>
              <div className="card card-side w-96 bg-base-100 shadow-xl">
            <figure><img src='' alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">{brandDetail.name}</h2>
                    <p>Brand Name</p>
                    <p>Price</p>
                    <p>Rating</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">Details </button>
                        <Link >
                        <button className="btn">Update</button>
                        </Link>
                      
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CardDetails;