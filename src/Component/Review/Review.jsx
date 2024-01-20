import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { ImFacebook } from "react-icons/im";
import { FaStar, FaFoursquare, FaYelp } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import '../../css/review.css'
const Review = () => {
    const [clients, setClients] = useState([]);
    const [setIndex, setSetIndex] = useState(0);
    const [buttonStyles, setButtonStyles] = useState([
        { backgroundColor: '#E0540B', height: '20px', width: '20px', border: '1px solid gray', borderRadius: '50%' },
        { backgroundColor: '#000000', height: '20px', width: '20px', border: '1px solid gray', borderRadius: '50%' },
        { backgroundColor: '#000000', height: '20px', width: '20px', border: '1px solid gray', borderRadius: '50%' },
    ]);

    const showSet = (index) => {
        setSetIndex(index);
        setButtonStyles((prevStyles) =>
            prevStyles.map((style, i) => {
                if (i === index) {
                    return { ...style, backgroundColor: '#E0540B' };
                } else {
                    return { ...style, backgroundColor: '#000000' }; // Reset other buttons to their original color
                }
            })
        );
    };

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await import('../../../data/review.json');
                setClients(response.default)
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchdata();
    }, [])
    return (
        <div>
            <div className='w-full max-h-full bg-[#FAFAFA] pt-16 pb-20'>
                <div className='text-center  pb-10'>
                    <h2 className='font-sans font-bold text-3xl'>Here what Our Customer Have to Say</h2>
                    <p className='font-sans text-base font-normal text-[#5E5E5E] leading-7'>During Our Work We Have Accumulated <br /> Hundreds of Positive Reviews</p>
                </div>
                <div className='lg:flex lg:justify-center gap-2 mb-5'>
                    {
                        clients.slice(setIndex * 3, setIndex * 3 + 3).map(client => <ReviewCard key={client.id} client={client}></ReviewCard>)
                    }
                </div>
                <div className='flex justify-center gap-1'>
                    {buttonStyles.map((style, index) => (
                        <button
                            key={index}
                            style={{
                                backgroundColor: style.backgroundColor,
                                height: style.height,
                                width: style.width,
                                border: style.border,
                                borderRadius: style.borderRadius,
                            }}
                            onClick={() => showSet(index)}
                        ></button>
                    ))}
                </div>
            </div>
            <div style={{ height: '100px' }}></div>
            <section>
                <div className='lg:grid grid-cols-2 lg:grid-cols-4 flex flex-wrap gap-1 social-container' >
                    <div className='w-40 h-24 '>
                        <p className='text-semibold text-[#ffc711]  text-xl flex justify-center mb-4 ml-1'><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /></p>
                        <div className='flex justify-center'>
                            <p className='flex items-center justify-center mr-3 border-2 border-black rounded-full h-10 w-10'><ImFacebook /></p>
                            <p className='text-sm text-[#5B5B5B] font-sans font-normal leading-6'>Based on 270 <br />reviews</p>
                        </div>
                    </div>
                    <div className='w-40 h-24 '>
                        <p className='text-semibold text-[#ffc711]  text-xl flex justify-center mb-4 ml-1'><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /></p>
                        <div className='flex justify-center'>
                            <p className='flex items-center justify-center mr-3 border-2 border-black rounded-full h-10 w-10'><FaFoursquare /></p>
                            <p className='text-sm text-[#5B5B5B] font-sans font-normal leading-6'>Based on 270 <br />reviews</p>
                        </div>
                    </div>
                    <div className='w-40 h-24'>
                        <p className='text-semibold text-[#ffc711]  text-xl flex justify-center mb-4 ml-1'><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /></p>
                        <div className='flex justify-center'>
                            <p className='flex items-center justify-center mr-3 border-2 border-black rounded-full h-10 w-10'><FaYelp /></p>
                            <p className='text-sm text-[#5B5B5B] font-sans font-normal leading-6'>Based on 270 <br />reviews</p>
                        </div>
                    </div>
                    <div className='w-40 h-24'>
                        <p className='text-semibold text-[#ffc711]  text-xl flex justify-center mb-4 ml-1'><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /><FaStar className='w-3 h-3' /></p>
                        <div className='flex justify-center'>
                            <p className='flex items-center justify-center mr-3 border-2 border-black rounded-full h-10 w-10'><IoLogoGoogle /></p>
                            <p className='text-sm text-[#5B5B5B] font-sans font-normal leading-6'>Based on 270 <br />reviews</p>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ height: '100px' }}></div>
            <section>
                <div className='lg:grid lg:grid-cols-12 lg:gap-14 lg:ml-36' style={{width:'1200px'}}>
                    <div className='lg:col-span-6 th-image1' style={{height:'600px'}}>
                        <img className='rounded-lg th-image1' src="https://speedyrecon.com/customer_frontend/images/review11_1.WebP" style={{height:'438px', width:'638px'}}  alt="" />
                    </div>
                    <div className='col-span-6'>
          <div className='flex lg:justify-between lg:gap-6 '>
          <img className='rounded-lg th-image2' src="https://speedyrecon.com/customer_frontend/images/review22_1.WebP" height='500px' width='300px' alt="" />
                        <img className='rounded-lg th-image2' src="https://speedyrecon.com/customer_frontend/images/review33_1.WebP" height='500px' width='300px' alt="" />
          </div>
                    </div>
                </div>
            </section>
            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default Review;