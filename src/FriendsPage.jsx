
import SettingIcon from './assets/SettingIcon.jsx';
import Bar from './Bar.jsx';

import ben10pic from './assets/ben10pic.png';
import { Link } from 'react-router-dom';





export default function FriendsPage() {

    return(<>
        <div className="min-h-screen bg-gray-100 w-full space-y-0.5">
          <Bar/>
            <div className='flex'>
                <div className="w-1/5 bg-white p-4 shadow-md h-screen sticky top-0 hidden md:block shadow-black">
                    <p className="mb-2 font-semibold flex justify-between">Friend
                                                        <SettingIcon/>      
                    </p>
                    <div className="space-y-2 text-sm flex flex-col">
                        <Link to="/FriendsPage" className="hover:bg-gray-200 hover:underline hover:m-4 w-full  p-2 rounded flex">Home</Link>
                        <Link to="/FriendsPage" className="hover:bg-gray-200 hover:underline hover:m-4 w-full  p-2 rounded"> Friend Requests</Link>
                        <Link to="/FriendsPage" className="hover:bg-gray-200 hover:underline hover:m-4 w-full  p-2 rounded">Suggestions</Link>
                        <Link to="/FriendsPage" className="hover:bg-gray-200 hover:underline hover:m-4 w-full  p-2 rounded">All Friends</Link>
                        <Link to="/FriendsPage" className="hover:bg-gray-200 hover:underline hover:m-4 w-full  p-2 rounded">Birthday</Link>
                        <Link to="/FriendsPage" className="hover:bg-gray-200 hover:underline hover:m-4 w-full  p-2 rounded">Custom Lists</Link>
                    </div>
                </div>
                <div>
                    <div className='pl-7'>
                        <p className='my-5 font-semibold '>Friend Requests</p>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-5'>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                        <div className='flex gap-5'>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-6">
                                    <div className="w-40 h-72 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <div className="h-3/5 w-full">
                                            <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="relative h-2/5 flex flex-col items-center justify-center gap-2 p-2">
                                            <div className=" static text-black text-xs font-bold p-1">
                                                Ben 10
                                            </div>
                                            <button className="bg-blue-500 text-white px-2 py-1 w-full rounded text-xs hover:bg-blue-600">Confirm</button>                                            
                                            <button className="bg-gray-300 px-2 py-1 rounded text-xs w-full hover:bg-gray-400">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            
        </div>

        </>)
}