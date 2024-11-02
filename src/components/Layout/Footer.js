const Footer = () => {
    return (
        <div className="flex justify-center mt-16">
            <div className="w-11/12 text-gray-500">
                <div className="flex">
                    <div className="flex flex-col basis-1/4">
                        <div className="text-lg text-gray-800">Job seekers</div>
                        <div className="flex flex-col text-base">
                            <a href="" className="hover:underline mt-5">Profile</a>
                            <a href="" className="hover:underline mt-5">Recommended jobs</a>
                            <a href="" className="hover:underline mt-5">Saved searches</a>
                            <a href="" className="hover:underline mt-5">Saved jobs</a>
                            <a href="" className="hover:underline mt-5">Applied jobs</a>
                            <a href="" className="hover:underline mt-5">Career advice</a>
                            <a href="" className="hover:underline mt-5">Explore careers</a>
                            <a href="" className="hover:underline mt-5">Explore salaries</a>
                            <a href="" className="hover:underline mt-5">Explore companies</a>
                            <a href="" className="hover:underline mt-5">Download apps<i className="fa-solid fa-chevron-down ml-1"></i></a>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/4">
                        <div className="text-lg text-gray-800">Employers</div>
                        <div className="flex flex-col text-base">
                            <a href="" className="hover:underline mt-5">Register for free</a>
                            <a href="" className="hover:underline mt-5">Post a job ad</a>
                            <a href="" className="hover:underline mt-5">Products & prices</a>
                            <a href="" className="hover:underline mt-5">Customer service</a>
                            <a href="" className="hover:underline mt-5">Hiring advice</a>
                            <a href="" className="hover:underline mt-5">Market insights</a>
                            <a href="" className="hover:underline mt-5">Recruitment software partners</a>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/4">
                        <div className="text-lg text-gray-800">About us</div>
                        <div className="flex flex-col text-base">
                            <a href="" className="hover:underline mt-5">About SEEK</a>
                            <a href="" className="hover:underline mt-5">Newsroom</a>
                            <a href="" className="hover:underline mt-5">Investors</a>
                            <a href="" className="hover:underline mt-5">Careers</a>
                            <a href="" className="hover:underline mt-5">International partners<i className="fa-solid fa-chevron-down ml-1"></i></a>
                            <a href="" className="hover:underline mt-5">Partner services<i className="fa-solid fa-chevron-down ml-1"></i></a>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/4">
                        <div className="text-lg text-gray-800">Contact</div>
                        <div className="flex flex-col text-base">
                            <a href="" className="hover:underline mt-5">Help centre</a>
                            <a href="" className="hover:underline mt-5">Contact us</a>
                            <a href="" className="hover:underline mt-5">Product & tech blog</a>
                            <a href="" className="hover:underline mt-5">SEEK videos</a>
                            <a href="" className="hover:underline mt-5">Social<i className="fa-solid fa-chevron-down ml-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-sm  border-t-2 border-gray-200 mt-8 py-8">
                    <div className="text-base"><i className="fa-solid fa-location-dot mr-1"></i>Australia<i className="fa-solid fa-chevron-up ml-1"></i></div>
                    <div className="flex space-x-4">
                        <a href="" className=" hover:underline">Terms & conditions</a>
                        <a href="" className=" hover:underline">Security & Privacy</a>
                        <span className="">© SEEK. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;