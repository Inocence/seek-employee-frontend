import { useState } from "react";

const SingleImageBox = ({ imageId }) => {
    return (
        <div className="border-2 border-gray-200 rounded-2xl p-5 flex-1 relative">
            <div className="">
                <div className='h-12 w-48 relative' >
                    <img
                        src={require(`../../../src/assets/company/company-logo${imageId}.png`)}
                        className="object-contain h-full absolute bottom-0" />
                </div>
                <div className='mt-2 text-lg'>Google</div>
                <button className='mt-8 text-sm px-3 py-1 rounded-lg bg-gray-300 text-center'>21 Jobs</button>
            </div>
            <a href="" className='absolute inset-0 cursor-pointer'></a>
        </div>
    );
}


const CompanySlides = () => {
    const imageBoxs1 = [];
    for (let i = 0; i < 5; i++) {
        imageBoxs1.push(<SingleImageBox imageId={i + 1} />);
    }
    const imageBoxs2 = [];
    for (let i = 5; i < 10; i++) {
        imageBoxs2.push(<SingleImageBox imageId={i + 1} />);
    }

    return (
        <div className='mt-10 flex justify-center'>
            <div className='w-11/12'>
                <div className="text-2xl">Find your next employer</div>
                <div className='mt-3 mb-5'>Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.</div>
                <div className="relative">
                    <div className="overflow-hidden flex">
                        <div className='flex justify-between space-x-3 w-full'>
                            {imageBoxs1}
                        </div>
                        <div className='flex justify-between space-x-3 w-full'>
                            {imageBoxs2}
                        </div>
                    </div>
                    <div className="left-6 top-1/2 transform -translate-y-1/2 border-2 border-gray-500 rounded-full w-12 h-12 absolute flex justify-center items-center">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div className='flex justify-center mt-5'>
                    <div className='flex space-x-4'>
                        <div className='bg-gray-600 rounded-full w-2 h-2 hover:cursor-pointer'></div>
                        <div className='bg-gray-400 rounded-full w-2 h-2 hover:cursor-pointer'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanySlides;