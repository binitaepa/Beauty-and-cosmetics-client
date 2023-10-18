

const CardProducts = ({card}) => {
    const {photo,name}=card;
    return (
        <div>
<div className="card w-96 bg-pink-100 shadow-xl">
  <figure className="px-2 pt-2">
    <img src={photo} alt="Shoes" className="rounded-xl w-auto h-[240px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl italic text-red-500">{name}</h2>
    
    
  </div>
</div>
        </div>
    );
};

export default CardProducts;