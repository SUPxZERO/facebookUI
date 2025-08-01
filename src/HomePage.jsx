import React from 'react';
import facebook from './assets/facebook.png';
import search from './assets/search.png';
import home from './assets/home.jsx';
import friends from './assets/friends.png';
import videoicon from './assets/videoicon.png';
import groupicon from './assets/groupicon.png';
import marketicon from './assets/marketicon.png';
import ben10pf from './assets/ben10pf.png';
import ben10pic from './assets/ben10pic.png';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-white shadow-md p-2 flex items-center justify-between">
        {/* Left: Logo and Search */}
        <div className="flex items-center gap-3">
          <img src={facebook} alt="Facebook" className="w-10 h-10 rounded-full" />
          <div className="bg-gray-200 flex items-center px-3 py-1 rounded-full w-64">
            <img src={search} alt="Search" className="w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Middle: Nav Icons */}
        <div className="flex gap-8">

            <div className=''>
                <img src={home} className="w-6 h-6 cursor-pointer" />
            </div>
            <div className='hover:bg-gray-200'>
                <img src={friends} className="w-6 h-6 cursor-pointer" />
            </div>
            <div className='hover:bg-gray-200'>
                <img src={videoicon} className="w-6 h-6 cursor-pointer" />
            </div>
            <div className='hover:bg-gray-200'>
                <img src={marketicon} className="w-6 h-6 cursor-pointer" />
            </div>
            <div className='hover:bg-gray-200'>
                <img src={groupicon} className="w-6 h-6 cursor-pointer" />
            </div>
          
        </div>

        {/* Right: Profile */}
        <div>
          <img src={facebook} alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex mt-4 px-6 gap-6">
        {/* Sidebar Left */}
        <div className="w-1/5 bg-white p-4 rounded-xl shadow-sm h-screen sticky top-0 hidden  ">
          <p className="mb-2 font-semibold">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li className="hover:bg-gray-200 hover:underline p-2 rounded">Friends</li>
            <li className="hover:bg-gray-200 hover:underline p-2 rounded">Memories</li>
            <li className="hover:bg-gray-200 hover:underline p-2 rounded">Groups</li>
            <li className="hover:bg-gray-200 hover:underline p-2 rounded">Videos</li>
            <li className="hover:bg-gray-200 hover:underline p-2 rounded">Marketplace</li>
            <li className="hover:bg-gray-200 hover:underline p-2 rounded">Events</li>
          </ul>
        </div>

        {/* Center Feed */}
        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm min-h-screen">
          <p className="text-xl font-bold mb-4">News Feed</p>

          {/* Stories Section */}
          <div className="flex gap-3 mb-6">
            <div className="w-28 h-44 bg-white rounded-xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
              <div className="h-3/5 w-full">
                <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
              </div>
              <div className="relative h-2/5 flex flex-col items-center justify-center px-2 text-center">
                <div className="absolute -top-5 bg-white rounded-full border-2 border-blue-600 p-1">
                  <span className="text-blue-600 text-xl font-bold">+</span>
                </div>
                <p className="text-xs font-semibold mt-4">Create story</p>
              </div>
            </div>

            {/* Sample Story Cards */}
            <div className="w-28 h-44 bg-white rounded-xl shadow overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
              <img src={ben10pic} alt="Story" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-xs text-center p-1 font-medium">
                Ben 10
              </div>
            </div>
            <div className="w-28 h-44 bg-white rounded-xl shadow overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
              <img src={ben10pf} alt="Story" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-xs text-center p-1 font-medium">
                Gwen
              </div>
            </div>
          </div>

          {/* Posts Feed Placeholder */}
          <div className="bg-gray-50 p-4 rounded shadow">
            <p>Hot New bio!</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-xl shadow-sm h-fit hidden md:block">
          <p className="font-semibold mb-3">Friend Requests</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={ben10pf} className="w-10 h-10 bg-gray-300 rounded-full" />
              <p className="text-sm">Ben 10</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">Confirm</button>
              <button className="bg-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-400">Delete</button>
            </div>
          </div>

          <hr className="my-3" />

          <p className="font-semibold mb-3">Sponsored</p>
          <div className="bg-gray-100 h-24 rounded mb-2" />
          <div className="bg-gray-100 h-24 rounded" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
