function Signup(){
    return(
        <div className="w-full flex justify-center py-20 bg-blue-200">
            <div className="flex flex-col w-3/5 bg-white">
                <img className="" src="https://files.jotform.com/jufs/ugurg/form_files/Pink%20Modern%20Dance%20Competition%20Poster%20(1).653fd007854806.52136831.png?md5=J8NSHJX-bS0uBbZhfbXnxA&expires=1724137137" alt="background" />
                <div className="mx-14">
                    <div className="">
                        <p className="text-4xl mt-6 font-semibold">Dance Registration</p>
                        <p className="text-lg mt-2">Fill the registration from below keenly to enter the dancing comptetion.</p>
                    </div>
                    <form className="mt-10 w-full">
                        <lebel className="text-xl font-semibold m-1">Name</lebel>
                        <div className="flex flex-row justify-between pt-2">
                            <div className="w-1/2 mr-6">
                                <input className="border-2 border-gray-300 w-full p-2 rounded-md"></input>
                                <p className="text-sm text-gray-500 p-1">First Name</p>
                            </div>
                            <div className="w-1/2">
                                <input className="border-2 border-gray-300 w-full p-2 rounded-md"></input>
                                <p className="text-sm text-gray-500 p-1">Last Name</p>
                            </div>
                        </div>
                        <div className="mt-5 flex flex-row justify-between pt-2">
                            <div className="w-1/2 mr-6">
                                <lebel  className="text-xl font-semibold m-1">E-mail</lebel>
                                <input  className="border-2 border-gray-300 w-full p-2 rounded-md mt-2" placeholder="ex: myname@example.com"></input>
                                <p className="text-sm text-gray-500 pt-1">example@example.com</p>
                            </div>
                            <div className="w-1/2">
                                <lebel  className="text-xl font-semibold m-1">Phone Number</lebel>
                                <input  className="border-2 border-gray-300 w-full p-2 rounded-md mt-2" placeholder="(000) 000-00000"></input>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col pt-2">
                            <p  className="text-xl font-semibold">Gender</p>
                            <div className="flex mt-2">
                                <div className="flex items-center space-x-2 w-1/2">
                                    <input className="size-5" type="radio" id="male" name="gender" />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="flex items-center space-x-2 ">
                                    <input  className="size-5" type="radio" id="female" name="gender" />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col pt-2 mr-6">
                                <lebel  className="text-xl font-semibold m-1">Address</lebel>
                                <input  className="border-2 border-gray-300 p-2 rounded-md mt-3 w-full"></input>
                                <p className="text-sm text-gray-500 pt-1">Street Address</p>
                                <input  className="border-2 border-gray-300 p-2 rounded-md mt-3"></input>
                                <p className="text-sm text-gray-500 pt-1">Street Address Lines 2</p>
                                <div className="w-full flex flex-row justify-between">
                                    <div className="flex flex-col w-1/2">
                                        <input  className="border-2 border-gray-300 p-2 rounded-md mt-3"></input>
                                        <p className="text-sm text-gray-500 pt-1">City</p>
                                    </div>
                                    <div className="flex flex-col w-1/2 ml-6">
                                        <input  className="border-2 border-gray-300 p-2 rounded-md mt-3"></input>
                                        <p className="text-sm text-gray-500 pt-1">State / Province</p>
                                    </div>
                                </div>
                                <input  className="border-2 border-gray-300 p-2 rounded-md mt-3"></input>
                                <p className="text-sm text-gray-500 pt-1">Postal / Zip Code</p>
                        </div>
                        <div className="mt-4 flex flex-col pt-2">
                            <p  className="text-xl font-semibold">Type of Dance</p>
                            <div className="flex mt-2">
                                <div className="flex items-center space-x-2 w-1/2">
                                    <input className="size-5" type="radio" id="male" name="gender" />
                                    <label htmlFor="male">Salsa</label>
                                </div>
                                <div className="flex items-center space-x-2 ">
                                    <input  className="size-5" type="radio" id="female" name="gender" />
                                    <label htmlFor="female">Bachata</label>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="flex items-center space-x-2 w-1/2">
                                    <input className="size-5" type="radio" id="male" name="gender" />
                                    <label htmlFor="male">Tango</label>
                                </div>
                                <div className="flex items-center space-x-2 ">
                                    <input  className="size-5" type="radio" id="female" name="gender" />
                                    <label htmlFor="female">Hip Hop</label>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="flex items-center space-x-2 w-1/2">
                                    <input className="size-5" type="radio" id="male" name="gender" />
                                    <label htmlFor="male">Club</label>
                                </div>
                                <div className="flex items-center space-x-2 ">
                                    <input  className="size-5" type="radio" id="female" name="gender" />
                                    <label htmlFor="female">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex pt-2 items-center">
                            <div className="w-1/2">
                                <p  className="text-xl font-semibold">Start Date & Time</p>
                            </div>
                            <div>
                                <input className="border-2 border-gray-300 rounded-md py-2 px-4" type="date"></input>
                                <input className="border-2 border-gray-300 rounded-md py-2 px-4 m-5 mr-20" type="time"></input>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col pt-2">
                            <p  className="text-xl font-semibold">Comments</p>
                            <textarea className="border-2 border-gray-300 mt-2.5 rounded-md h-40"></textarea>
                        </div>
                    </form>
                </div>
                <hr className="w-full m-4" />
                <div className="flex justify-center mb-10">
                    <button className="py-3 px-10 rounded-md bg-blue-900 font-semibold text-white">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;





