const SingleImageBox = ({ imageId }) => {
    return (
        <div className="border-2 border-gray-200 rounded-2xl p-5 flex-1 relative">
            <div>
                <div className='h-16 relative flex justify-start' >
                    <img
                        src={require(`../../../src/assets/company/company-logo${imageId}.png`)}
                        className="object-contain w-full h-full absolute bottom-0" />
                </div>
                <div className='mt-2 text-lg'>Google</div>
                <button className='mt-8 text-sm px-3 py-1 rounded-lg bg-gray-300 text-center'>21 Jobs</button>
            </div>
            <a href="" className='absolute inset-0 cursor-pointer'></a>
        </div>
    );
}

const CompanySlides = () => {
    const imageBoxs = [];
    for (let i = 0; i < 5; i++) {
        imageBoxs.push(<SingleImageBox imageId={i + 1} />);
    }

    return (
        <div className='mt-10 flex justify-center'>
            <div className='w-11/12'>
                <div className="text-2xl">Find your next employer</div>
                <div className='mt-3 mb-5'>Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.</div>
                <div>
                    <div className='flex justify-between space-x-3'>
                        {imageBoxs}
                    </div>
                </div>
                <div className='flex justify-center mt-5'>
                    <div className='flex space-x-4'>
                        <div className='bg-gray-400 rounded-full w-2 h-2 hover:cursor-pointer'></div>
                        <div className='bg-gray-400 rounded-full w-2 h-2 hover:cursor-pointer'></div>
                        <div className='bg-gray-400 rounded-full w-2 h-2 hover:cursor-pointer'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanySlides;