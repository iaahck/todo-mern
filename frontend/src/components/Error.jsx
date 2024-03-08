const Error = () => {
    return(
        <div className='p-12 text-center rounded-lg bg-red-600 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className="flex items-center justify-center text-[40px]">
            🤦‍♂️
            </div>
            <p className="text-center capitalize text-2xl text-white">sorry something wrong</p>
            <button className="bg-green-500 p-3 text-white mt-3">Try Again</button>
        </div>
    );
}

export default Error;