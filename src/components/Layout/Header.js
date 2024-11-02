const Header = () => {
    return (
        <nav className="flex justify-between px-16 py-3">
            <div className="flex">
                <a href="" className="flex items-center">
                    <img src="./web-logo.jpg" className="h-12 w-12 mr-1" />
                    <span className="mr-4 text-2xl font-bold">Geek</span>
                </a>
                <div className="flex items-center space-x-6">
                    <a href="" className="border-b-2 border-black py-1 font-medium">Job Search</a>
                    <a href="" className="border-b-2 border-transparent hover:border-gray-200 py-1">Profile</a>
                    <a href="" className="border-b-2 border-transparent hover:border-gray-200 py-1">Career advice</a>
                    <a href="" className="border-b-2 border-transparent hover:border-gray-200 py-1">Explore companies</a>
                </div>
            </div>
            <div className="flex hidden md:block items-center space-x-4">
                <button className="text-blue-800 border-2 border-blue-800 px-3 py-1.5 rounded-md font-medium hover:bg-blue-100">Sign in</button>
                <a href="" className="font-medium text-blue-800">Employer site</a>
            </div>
        </nav>
    );
}

export default Header;