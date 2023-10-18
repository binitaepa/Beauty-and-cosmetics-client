import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import CardProducts from "../../CardProducts/CardProducts";
import ChooseToAdd from "../../ChooseToAdd/ChooseToAdd";

const Home = () => {
   
    const cards=useLoaderData();
    return (
        <div>
            
                <Banner></Banner>  
                <ChooseToAdd></ChooseToAdd>
               <div className="grid md:grid-cols-2 gap-4 m-16 ">
               {
                    cards.map(card=><CardProducts key={card._id} card={card}></CardProducts>)
                }
               </div>
        </div>
    );
};

export default Home;