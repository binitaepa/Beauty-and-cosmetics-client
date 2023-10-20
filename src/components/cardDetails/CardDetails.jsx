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
        <div  className="items-center">
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

      <div className="flex items-center justify-center align-middle"> 
<div className="card w-96 bg-pink-100  shadow-xl">
  <figure className="px-2 pt-2">
    <img src={brandDetail.productImage} alt="Shoes" className="rounded-xl w-full h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl  text-red-500">NAME: {brandDetail.productName}</h2>
    <p className="text-pink-400 font-bold">BRAND NAME: {brandDetail.name}</p>
    <p className="text-pink-400 font-bold"> TYPE: {brandDetail.type}</p>
    <p className="text-pink-400 font-bold">PRICE: {brandDetail.price}$</p>
    <p className="text-red-400 font-bold">Rating: {brandDetail.rating}</p>
   
   <div className="flex justify-evenly gap-8 mt-5 mb-5">
    <Link to={`/productdetail`}> <button className="bg-gray-400 btn text-white" >Details</button></Link>
    <Link to={`/updatecosmetics/${brandDetail._id}`}><button className="bg-red-400 btn text-white">update</button></Link></div>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default CardDetails;