import { useNavigate, Routes, Route } from 'react-router-dom';
import FacebookIcon from './assets/FacebookIcon.jsx';
import HomeIcon from './assets/HomeIcon.jsx';
import SearchIcon from './assets/SearchIcon.jsx';
import FriendsIcon from './assets/FriendsIcon.jsx';
import VideoIcon from './assets/VideoIcon.jsx';
import MarketIcon from './assets/MarketIcon.jsx';
import GroupIcon from './assets/GroupIcon.jsx';
import MenuIcon from './assets/MenuIcon.jsx';
import MessengerIcon from './assets/MessengerIcon.jsx';
import NotificationIcon from './assets/NotificationIcon.jsx';


import ben10pf from './assets/ben10pf.png';
import ben10pic from './assets/ben10pic.png';

function HomePage() {
  return (  
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="w-full bg-white shadow-md p-2 flex items-center justify-between">
        {/* Left: Logo and Search */}
        <div className="flex items-center gap-3">
          <FacebookIcon />
          <div className="bg-gray-200 items-center px-3 py-1 rounded-full w-64 gap-1 md:flex hidden">
            <SearchIcon />
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
                <HomeIcon />
            </div>
            <div className=''>
                <FriendsIcon />
            </div>
            <div className=''>
                <VideoIcon />
            </div>
            <div className=''>
                <MarketIcon />
            </div>
            <div className=''>
                <GroupIcon />
            </div>
          
        </div>

        {/* Right: Profile */}
        <div className='hidden md:flex gap-2'>
          <div className='bg-gray-600 rounded-full'>
            <MenuIcon />
          </div>
          <div>
            <MessengerIcon />
          </div>
          <div>
            <NotificationIcon />
          </div>
          
            
              <div className="w-12 h-12 rounded-full  shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                <div className="h-full w-full static">
                  <img src={ben10pic} alt="Me" className="h-full w-full object-cover" />
                </div>
              </div>
        </div>
      </div>
      

      {/* Main Layout */}
      <div className="flex mt-4 px-6 gap-6 justify-center items-center w-full">
        {/* Sidebar Left */}
        <div className="w-1/5 bg-white p-4 rounded-xl shadow-sm h-screen sticky top-0 hidden md:block ">
          <p className="mb-2 font-semibold">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li className="hover:bg-gray-200 hover:underline hover:m-4   p-2 rounded">Friends</li>
            <li className="hover:bg-gray-200 hover:underline hover:m-4 p-2 rounded">Memories</li>
            <li className="hover:bg-gray-200 hover:underline hover:m-4 p-2 rounded">Groups</li>
            <li className="hover:bg-gray-200 hover:underline hover:m-4 p-2 rounded">Videos</li>
            <li className="hover:bg-gray-200 hover:underline hover:m-4 p-2 rounded">Marketplace</li>
            <li className="hover:bg-gray-200 hover:underline hover:m-4 p-2 rounded">Events</li>
          </ul>
        </div>

        {/* Center Feed */}
        <div>
          {/* Stories Section */}
            <div className="flex gap-3 mb-6">
              <div className="w-24 h-40 bg-white rounded-2xl shadow-sm overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
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
              <div className="w-24 h-40 bg-white rounded-xl shadow overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                <img src={ben10pic} alt="Story" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-xs text-center p-1 font-medium">
                  Ben 10
                </div>
              </div>
              <div className="w-24 h-40 bg-white rounded-xl shadow overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                <img src={ben10pic} alt="Story" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-xs text-center p-1 font-medium">
                  Gwen
                </div>
              </div>
              <div className="w-24 h-40 bg-white rounded-xl shadow overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200">
                <img src={ben10pic} alt="Story" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-xs text-center p-1 font-medium">
                  Gwen
                </div>
              </div>
              <div className="w-24 h-40  bg-white rounded-xl shadow overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200 hidden lg:block">
                <img src={ben10pic} alt="Story" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-xs text-center p-1 font-medium">
                  Gwen
                </div>
              </div>
              
            </div>
          <div className="flex-1 bg-white rounded-xl p-4 shadow-sm min-h-screen">
            <p className="text-xl font-bold mb-4">News Feed</p>
            {/* Posts Feed Placeholder */}
            <div className="bg-gray-50 p-4 rounded shadow">
              <p>Hot New bio!</p>
            </div>
          </div>    
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-xl shadow-sm h-fit hidden md:block">
          <p className="font-semibold mb-3">Friend Requests</p>
          <div className="flex-rwo items-center justify-between mb-4 lg:flex space-y-1">
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
