const BottomBanner = () => {

    return (
        <div className='flex justify-center mt-20'>
            <div className="w-11/12 relative">
                <img className="max-h-64 object-cover w-full rounded-2xl" src='/assets/common/bottom-banner.jpg' />
                <div className="text-6xl text-white absolute top-1/2 left-10 transform -translate-y-1/2">Better job matches.</div>
            </div>
        </div>
    );
}

export default BottomBanner;