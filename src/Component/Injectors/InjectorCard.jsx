import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
const InjectorCard = ({injector}) => {
  const  {name, sku, price, ratings,imageUrl } = injector;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedName = isExpanded ? name : name.slice(0, 28);
    return (
        <div className="card card-compact w-60 bg-base-100 shadow-xl">
        <figure><img src={imageUrl} style={{height:'236px',width:'236px'}} alt="Shoes" /></figure>
        <div className="card-body">
            <p className='text-xs text-[#999] '>SKU: {sku}</p>
          <h2 className="card-title text-bold text-sm  font-serif">{truncatedName}
            {!isExpanded && name.length > 28 && (
              <span
                className="text-black cursor-pointer "
                onClick={() => setIsExpanded(true)}
              >...
              </span>
            )}</h2>
          <p className='text-semibold text-[#ffc711]  text-xl flex'><FaStar className='w-4 h-4'/><FaStar className='w-4 h-4'/><FaStar className='w-4 h-4'/><FaStar className='w-4 h-4'/><FaStar className='w-4 h-4'/></p>
          <div className='flex w-full justify-around mx-auto'>
          <h2 className='w-44 text-xl font-sans font-bold'>£{price}</h2>
          <div className=" ">     
          <Link to={`#`}><button className="">
            <FiShoppingCart></FiShoppingCart>
    </button></Link>
        </div>
          </div>
         
        </div>
      </div>
    );
};

export default InjectorCard;