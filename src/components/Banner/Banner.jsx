import { Link } from "react-router-dom";
import img from '../Banner/ImageBanner/close-up-collection-make-up-beauty-products.jpg'


const Banner = () => {
    return (
        <div>
            <div className="hero md:min-h-screen w-auto bg-pink-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-w-[400px] h-full rounded-lg shadow-2xl" />
    <div className="w-[500px]">
      <h1 className="text-4xl font-bold text-red-600">Grab known Famouse Brand !</h1>
      <p className="lg:py-6 ">Welcome to BeautyHUb - Where Innovation Meets Excellence. We are your trusted source for your cosmetics. Discover a world of possibilities with us</p>
      <Link to='/register'><button className="btn btn-primary bg-pink-500">Register</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;