import React from 'react';
import { IoRemoveOutline } from "react-icons/io5";
const ReviewCard = ({client}) => {
    const {name,id,imageUrl,comments} = client;
    return (
        <div>
            <div className="card w-96 lg:w-[366px] lg:h-[368px] lg:py-5  bg-base-100 shadow-2xl">
  <figure className="px-5 pt-10">
    <img src={imageUrl} alt="Shoes" className="rounded-full" />
  </figure>
  <div className=" card-body  items-center text-center">
    <h2 className="text-sm text-center font-normal leading-6 p-3 ">{comments}</h2>
    <div className='bg-orange-600 w-16 h-1 items-center text-center'></div>
    <div className="card-title">
      <p>{name}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReviewCard;