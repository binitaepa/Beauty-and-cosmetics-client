import { Link, useLoaderData, useParams } from "react-router-dom";
import img1 from '../../assets/firstslide.jpg'
import img2 from '../../assets/secondslide.jpg'
import img3 from '../../assets/thirdimage.jpg'
import img4 from '../../assets/forthimage.jpg'



const CardDetails = () => {
    const {id} =useParams();
    const brands=useLoaderData();
    
     
    const brandDetail= brands.find(brandDetail=> brandDetail._id == id);
    return (
        <div>
      <div className='items-center  flex align-middle justify-center'>
      <div className="carousel w-3/5 h-[1000px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </div>

              <div className="card card-side w-96 bg-base-100 shadow-xl mb-10 mt-10">
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