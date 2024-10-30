const LoginTips = () => {
    return (
        <div className="mt-16 text-lg">
            <div className="bg-gray-100 rounded-3xl w-11/12 mx-auto p-11">
                <div className="flex justify-center space-x-20">
                    <button className="px-16 py-2 rounded-md border-2 border-black hover:bg-gray-200">Sign in</button>
                    <button className="underline">Register</button>
                </div>
                <div className="flex justify-center mt-4">
                    <span>Sign in to manage your SEEK Profile, save searches and view your recommended jobs.</span>
                </div>
            </div>
        </div>
    );
}

export default LoginTips;