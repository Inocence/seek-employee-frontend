import classNames from "classnames";
import { useEffect, useState } from "react";
import ClearToast from "../common/ClearToast";

const WhatList = ({ searchInput }) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleClear = () => {
        setInputValue("");
        setIsMouseOn(false);
    };

    const handleMouseEnter = () => {
        setTimeout(() => {
            setIsMouseOn(true);
        }, 200);
    };

    const handleMouseLeave = () => {
        setIsMouseOn(false);
    };

    return (
        <div className='w-full relative'>
            <span className='text-white font-medium block mb-2'>What</span>
            <div className="relative">
                <input
                    type="text"
                    placeholder='Enter Keywords'
                    className={searchInput}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    value={inputValue}
                />
                {inputValue && <div
                    className={classNames([
                        "absolute flex justify-center items-center right-0 top-1/2 -translate-y-1/2 -translate-x-3 hover:cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8",
                    ])}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClear}
                ><i className="fa-solid fa-xmark"></i></div>}
                {isMouseOn && <ClearToast />}
            </div>
            {inputValue && <div className={classNames([
                'w-full rounded-md bg-white flex flex-col absolute top-full translate-y-3 left-0 overflow-y-scroll h-48 shadow-md',
            ])}>
                <div className="flex flex-col">
                    <a href="" className="p-3 text-lg hover:bg-blue-100">php</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">react</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">java</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">python</a>
                </div>
            </div>}
        </div>
    );
};

const Search = () => {
    const backStyles = {
        backgroundImage: `url('/assets/common/search-bg.svg')`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const searchInput = "block w-full py-2 px-3 rounded-md border-2 border-transparent ring-8 ring-transparent outline-none focus:ring-blue-300 focus:border-black"


    return (
        <div className="flex text-lg px-3 py-6 m-auto bg-blue-950 justify-center items-center" style={backStyles}>
            <div className='w-full text-lg md:max-w-5xl'>
                <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4  md:flex-row justify-between items-end'>
                    <WhatList searchInput={searchInput} />
                    <div className='w-full'>
                        <input type="text" placeholder='Any Classification' className={searchInput} />
                        {/* <div className='bg-white'>
                                <div>
                                    <div>
                                        <div>
                                            <input type="checkbox" value="accounting" />
                                            <span>Accounting</span>
                                        </div>
                                        <div>6095</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <input type="checkbox" value="accounting" />
                                                <span>All Accounting</span>
                                            </div>
                                            <div>6095</div>
                                        </div>
                                        <div>
                                            <div>
                                                <div>
                                                    <input type="checkbox" value="accounting" />
                                                    <span>All Accounting</span>
                                                </div>
                                                <div>615</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <input type="checkbox" value="accounting" />
                                                    <span>All Accounting</span>
                                                </div>
                                                <div>235</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    <div className="w-full">
                        <span className='text-white font-medium block mb-2'>Where</span>
                        <input type="text" placeholder='Enter suburb, city, or region' className={searchInput} />
                        {/* <div>
                                <div>
                                    <span>Remote</span>
                                    <div className='bg-white'>
                                        <a href="">Work from home</a>
                                    </div>
                                </div>
                                <div>
                                    <span>Recent</span>
                                    <div className='bg-white'>
                                        <a href="">Sydney NSW 2000</a>
                                        <a href="">All Australia</a>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    <button className='w-full md:w-auto text-center py-2 px-8 bg-pink-600 rounded-md text-white border-2 border-pink-600 hover:bg-pink-500 hover:border-pink-500'>SEEK</button>
                </div>
                <div className='hidden md:flex justify-between mt-6 text-white'>
                    <div className='flex justify-between text-base'>
                        <div>
                            <button className='border-2 border-white rounded-3xl px-3 py-2'>All work types<i className="fa-solid fa-chevron-down ml-2"></i></button>
                            {/* <div>
                                    <div><input type="checkbox" /><span>Full time</span></div>
                                    <div><input type="checkbox" /><span>Part time</span></div>
                                </div> */}
                        </div>
                        <div>
                            <button className='border-2 border-white rounded-3xl px-3 py-2 ml-2'>Paying $0<i className="fa-solid fa-chevron-down ml-2"></i></button>
                            {/* <div>
                                    <div><input type="checkbox" /><span>Full time</span></div>
                                    <div><input type="checkbox" /><span>Part time</span></div>
                                </div> */}
                        </div>
                    </div>
                    <button>More options<i className="fa-solid fa-sliders ml-2"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Search;