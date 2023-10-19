import {  useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import CardProducts from "../../CardProducts/CardProducts";
import ChooseToAdd from "../../ChooseToAdd/ChooseToAdd";
import WhyUs from "../../WhyUs/WhyUs";

const Home = () => {
   
    const cards=useLoaderData();
    return (
        <div>
            
                <Banner></Banner>  
                
                <ChooseToAdd></ChooseToAdd>
             
              <div className="grid md:grid-cols-3 gap-5 justify-evenly ">
               {
                    cards.map(card=><CardProducts key={card._id} card={card}></CardProducts>)
                }
               </div>
                   <WhyUs></WhyUs>
        </div>
    );
};

export default Home;