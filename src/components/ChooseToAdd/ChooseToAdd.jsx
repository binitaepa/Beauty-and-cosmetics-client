

const ChooseToAdd = () => {
    return (
        <div className="items-center text-center mt-5 mb-5">
            <h1 className="text-4xl font-semibold text-pink-500" >Choose your favorite Product and get Discount!!</h1>
            <div className="text-center form-control items-center">
  <div className="flex mt-5">
    <input type="text" placeholder="Search…" className="input input-bordered bg-pink-100" />
    <div className="">
    <button className="btn bg-pink-400 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChooseToAdd;