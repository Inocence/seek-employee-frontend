import backImage from '../../assets/common/search-bg.svg';

const Search = () => {
    const backStyles = {
        backgroundImage: `url('${backImage}')`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const searchInput = "block w-full p-2 rounded-md border-2 border-transparent ring-8 ring-transparent outline-none focus:ring-blue-300 focus:border-black"


    return (
        <div className="">
            <div className="bg-blue-950 py-5 flex justify-center items-center" style={backStyles}>
                <div className='w-4/6 text-lg'>
                    <div className='flex flex-col md:flex-row justify-between items-end'>
                        <div className='w-full md:w-1/3 pr-4'>
                            <span className='text-white font-medium block mb-2'>What</span>
                            <input type="text" placeholder='Enter Keywords' className={searchInput} />
                            {/* <div className='bg-white flex flex-col'>
                                <a href="">php</a>
                                <a href="">react</a>
                                <a href="">java</a>
                                <a href="">python</a>
                            </div> */}
                        </div>
                        <div className='w-full md:w-1/3 pr-4'>
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
                        <div className="w-full md:w-1/3 pr-4">
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
                        <div>
                            <button className='py-2 px-8 bg-pink-600 rounded-md text-white border-2 border-pink-600 hover:bg-pink-500 hover:border-pink-500'>SEEK</button>
                        </div>
                    </div>
                    <div className='flex justify-between mt-6 text-white'>
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
        </div>
    );
}

export default Search;