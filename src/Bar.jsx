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


import ben10pic from './assets/ben10pic.png';
import { Link } from 'react-router-dom';

export default function Bar(){
    return(<>
        <div className="w-full bg-white shadow-md p-2 flex items-center justify-between">
        {/* Left: Logo and Search */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <FacebookIcon />
          </Link>
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

            
            <Link to="/HomePage">
                <HomeIcon />
            </Link>
            <Link to="/FriendsPage">
                <FriendsIcon />
            </Link>
            <Link to="/VideoPage">
                <VideoIcon />
            </Link>
            <Link to="/FriendsPage">
                <MarketIcon />
            </Link>
            <Link to="/FriendsPage">
                <GroupIcon />
            </Link>
          
        </div>

        {/* Right: Profile */}
        <div className='hidden md:flex gap-2'>
          <div>
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
        
        </>)
}