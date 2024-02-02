import React, { useEffect, useRef, useState } from 'react';
import './slide.css'
const Slide = () => {
    const delay = 2500;
    const [index, setIndex] = React.useState(0);
    const timeOutRef = useRef(null);
    const images = ['https://speedyreconstorage.ams3.digitaloceanspaces.com/images/banner/banner3.WebP', 'https://speedyreconstorage.ams3.digitaloceanspaces.com/images/banner/banner1.WebP', 'https://speedyreconstorage.ams3.digitaloceanspaces.com/images/banner/banner3_3.png'];

    function resetTimeout() {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeOutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => { resetTimeout() };
    }, [index]);
    return (
        <div className=''>
            <div className="slideshow">
                <div className="myForm">
                    <div className="text-center">
                        <span className="form-header">Find Your</span>
                        <h2 className="form-header-2">Desired Car Parts</h2>

                        <div className="or my-1">
                            <span className="por ">
                                <span style={{color:'#B6B6B6'}}>✦</span>
                            </span>
                        </div>

                        <span className="form-text2">Enter Your Number Plate Below</span>

                    </div>
                    <form name="searchProductByVrm" id="searchProductByVrm" action="https://speedyrecon.com/searched_productFromVrm" method="post" encType="multipart/form-data"><input type="hidden" name="_token" value="XrNcZoGzr5uQva9bOrmGBk3yOTiXQ2LlhVNXCWrg"/>
                    <div className="row mt-2">
                        <div className="form-group col-8 w-5 mb-0 px-1">
                            <input type="text" className="form-control reg-num" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="YOUR REG" name="vrm" style={{fontFamily:'Oswald,sans-serif',width:'180px',textAlign:'center',color:'white'}}/>

                        </div>
                        <div className="form-group mb-0 px-5 relative bg-black col-4">
                            <button type="submit" className=" btn-go w-100 go">GO</button>
                        </div>
                        <div className="form-group col-12">
                        </div>
                    </div>
                    </form>

                    <div className="or2 mb-1">
                        <span className="por2 ">
                            <small className="mx-2" style={{color:'#FF8545',fontWeight:'700'}}>OR</small>
                        </span>
                    </div>
                    <div className="mt-3">
                        <span className="select-vehicle">
                            SELECT YOUR VEHICLE
                        </span>
                        <form name="searchProduct" id="searchProduct" action="https://speedyrecon.com/searched_product" method="post" encType="multipart/form-data">
                            <input type="hidden" name="_token" value="XrNcZoGzr5uQva9bOrmGBk3yOTiXQ2LlhVNXCWrg"></input><div className="row myForm-select">
                            <div className="w-full bg-white px-1">
                                <select className="form-control w-full mt-1 mb-1 " name="brand_id" id="brand_id" required="">
                                    <option disabled="" value="" selected="">Select Car</option>
                                    <option value="MERCEDES">MERCEDES</option>
                                    <option value="BMW">BMW</option>
                                    <option value="AUDI">AUDI</option>
                                    <option value="PEUGEOT">PEUGEOT</option>
                                    <option value="FORD">FORD</option>
                                    <option value="FIAT">FIAT</option>
                                    <option value="MAZDA">MAZDA</option>
                                    <option value="RENAULT">RENAULT</option>
                                    <option value="JEEP">JEEP</option>
                                    <option value="LAND ROVER">LAND ROVER</option>
                                    <option value="NISSAN">NISSAN</option>
                                    <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                    <option value="VAUXHALL">VAUXHALL</option>
                                    <option value="JAGUAR">JAGUAR</option>
                                    <option value="DACIA">DACIA</option>
                                    <option value="KIA">KIA</option>
                                    <option value="HYUNDAI">HYUNDAI</option>
                                    <option value="MITSUBISHI">MITSUBISHI</option>
                                    <option value="IVECO">IVECO</option>
                                    <option value="HONDA">HONDA</option>
                                    <option value="VOLVO">VOLVO</option>
                                    <option value="SUBARU">SUBARU</option>
                                    <option value="TOYOTA">TOYOTA</option>
                                </select>
                            </div>
                            <div className="col-12 px-1 w-full">
                                <select className="form-control w-full mt-1 mb-1" name="model" id="model" required="">
                                    <option value="" id="select-dialog">Select Model</option>
                                </select>
                            </div>

                            <div className="col-6 px-1 w-1/2">
                                <select className="form-control w-full mt-1 mb-1" name="engine" id="engine" required="">
                                    <option value="">Engine</option>
                                </select>
                            </div>

                            <div className="col-6 px-1 w-1/2">
                                <select className="form-control w-full mt-1 mb-1" name="year" id="year" required="">
                                    <option value="">Year</option>
                                </select>
                            </div>
                            <div className="col-6 px-1 w-1/2">
                                <select className="form-control w-full mt-1 mb-1" name="subRange" id="subRange" required="">
                                    <option value="">Sub Model</option>
                                </select>
                            </div>
                            <div className="col-6 px-1 w-1/2">
                                <select className="form-control w-full mt-1 mb-1" name="series" id="series" required="">
                                    <option value="">Series</option>
                                </select>
                            </div>
                            <div className="col-6 px-1 w-1/2">
                                <select className="form-control w-full mt-1 mb-1" name="fuel" id="fuel" required="">
                                    <option selected="" value="">Select Fuel</option>
                                    <option value="diesel">Diesel</option>
                                </select>
                            </div>
                            <div className="col-6 px-1 w-1/2">
                                <button type="submit" className="btn-go2 bg-black text-[#ff8545] w-full mt-1 mb-1 go">GO</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="slideshowSlider " style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {images.map((img, index) => (
                        <img className='slide ' style={{height:'500px'}} key={index} src={img}></img>
                    ))}
                </div>
                <div className="slideshowDots">
                    {images.map((_, idx) => (
                        <div key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}></div>
                    ))}
                </div>
            </div>
            <div className=" mt-12"></div>
        </div>
    );
};

export default Slide;