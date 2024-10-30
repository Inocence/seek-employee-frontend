import backImage from '../../assets/common/search-bg.svg';

const Search = () => {
    const backStyles = {
        backgroundImage: `url('${backImage}')`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }


    return (
        <div className="">
            <div className="bg-blue-950 h-48" style={backStyles}>
                <div>
                    <div className="">
                        <span>What</span>
                        <div>
                            <div>
                                <input type="text" placeholder='Enter Keywords' />
                                <div className='bg-white'>
                                    <a href="">php</a>
                                    <a href="">react</a>
                                    <a href="">java</a>
                                    <a href="">python</a>
                                </div>
                            </div>
                            <div>
                                <input type="text" placeholder='Any Classification' />
                                <div className='bg-white'>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <span>Where</span>
                        <div>
                            <input type="text" placeholder='Enter suburb, city, or region' />
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
                        </div>
                    </div>
                    <button>SEEK</button>
                </div>
                <div>
                    <div>
                        <div>
                            <button>All work types<i className=''></i></button>
                            <div>
                                <div><input type="checkbox" /><span>Full time</span></div>
                                <div><input type="checkbox" /><span>Part time</span></div>
                            </div>
                        </div>
                        <div>
                            <button>Paying $0</button>
                            <div>
                                <div><input type="checkbox" /><span>Full time</span></div>
                                <div><input type="checkbox" /><span>Part time</span></div>
                            </div>
                        </div>
                    </div>
                    <button>More options</button>
                </div>
            </div>
        </div>
    );
}

export default Search;