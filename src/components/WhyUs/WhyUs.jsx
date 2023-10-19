
import {IoIosContacts,IoIosHappy} from 'react-icons/io'
import {ImShield,ImUserTie} from "react-icons/im";
const WhyUs = () => {
    return (
        <div className="mt-10 items-center text-center mb-10">
            <div>
                <h2 className="text-3xl font-bold text-pink-400 ">Why Choose US?</h2>
                <hr />
            </div>
            <div className="flex flex-col text-red-400 mt-5 font-semibold border text-xl">
                
                <div className='flex items-center justify-center'>
                <h2>Exceptional Quality</h2>
                <IoIosHappy></IoIosHappy>
                </div>
                <div className='flex items-center justify-center'>
                <h2>Outstanding Customer Service</h2>
                <IoIosContacts></IoIosContacts> 
                </div>
                <div  className='flex items-center justify-center'>
                <h2>Innovation and Uniqueness</h2>
                <ImShield></ImShield>
                </div>
               <div className='flex items-center justify-center'>
               <h2>Social Responsibility and Ethics</h2>
               <ImUserTie></ImUserTie></div> 
               
                <hr />
            </div>
            <hr />
        </div>
    );
};

export default WhyUs;