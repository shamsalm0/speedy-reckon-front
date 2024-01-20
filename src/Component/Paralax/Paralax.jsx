import React from 'react';

const Paralax = () => {
    return (
        <div>
        <div className="mx-auto bg-fixed bg-[url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVb4fx7sY1m3Y0XOwRMbivQ7uBEZq5KJzSm5wtDl9hR3d6E_FQ')]">
           <div className="parallax mx-auto w-full">
        <h2 className=" text-center mb-2 font-bold text-3xl">Why Choose Us</h2> <br />
        <p className="block-parallax__item-details text-sm font-sans font-serif font-semibold text-center mx-2 mx-md-0">
            We have been distributing an outstanding QUALITY of products in the outomotive market - specializing in the
            remanufacture, supply and <br className="d-none d-md-block"/> servicing of diesel fuel injections and automotive
            vehicle parts and
            accessories.
        </p>
        <div className="flex justify-center mt-5 m-5 flex-wrap">
            <div className="block-parallax-card py-3 px-2 px-md-5 border-2 flex justify-around items-center mx-4 mb-3 w-96 lg:mb-0">
                <div>
                    <div className="block-parallax-icon mx-3">
                        <img className='h-8 w-6' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaz4OwFuAh6KhV-CQf-MqzIwr86M0aIrWkk1LKiZtgAWvMWm0L" alt="" />
                            
                        
                    </div>
                </div>
                <div className="block-parallax-card-text  p-2 mx-3">
                    <p className="text-base font-sans font-bold">
                        Guarantee Service
                    </p>
                    <p className="block-parallax-card-text-details">
                        We assure best quality customer <br/> services after sales.
                    </p>
                </div>
                <div>

                </div>
            </div>
            <div className="block-parallax-card py-3 px-2 px-md-5  mx-4">
                <div>

                </div>
                <div className="block-parallax-card-text mx-3 text-center py-3 px-2 w-96 border-2">
                    <p className="text-base font-sans font-bold">
                        Request Call Back
                    </p>
                    <input className="email-in w-100" placeholder=" Email" type="text"/> <br />
                    <button type="submit" className="btn btn-secondary w-3/4 bg-[#FF8545] mt-2">SUBSCRIBE</button>
                </div>
                <div>

                </div>
            </div>


        </div>
    </div> 
   
        </div>
        <div style={{height:'52px'}}></div>
        </div>
    );
};

export default Paralax;