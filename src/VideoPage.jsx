import Bar from './Bar.jsx'
import SettingIcon from './assets/SettingIcon.jsx';
import ben10pf from './assets/ben10pf.png';
import YOASOBI from './assets/YOASOBI-Monster.mp4';
import LikeIcon from './assets/LikeIcon.jsx';
import CommmentIcon from './assets/CommmentIcon.jsx';
import ShareIcon from './assets/ShareIcon.jsx';



import './App.css';


import { Link } from 'react-router-dom';





export default function VideoPage() {

    return(<>
        <div className="min-h-screen bg-gray-100 w-full space-y-0.5">
            <Bar/>
            <div></div>
                <div className='flex justify-between'>
                    <div className="w-1/5 bg-white p-4 shadow-md h-screen   sticky top-0 hidden md:block shadow-black ">
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
                    <div className='justify-center h-screen w-full items-center px-72'>
                        <div>
                            <div className=''>
                                <div className=' h-screen  p-5 flex flex-col space-y-2'>
                                   <div className='bg-white w-full h-11/12 rounded-4xl '>
                                        <div>
                                            <div className="flex gap-2  p-5">
                                                <img src={ben10pf} className="w-10 h-10 bg-gray-300 rounded-full hover:bg-gray-400" />
                                                <div className='pt-2 flex gap-1'>
                                                    <p className="text-sm ">Ben 10 </p>
                                                    <p className="text-blue-600 text-sm hover:underline">Follow </p>
                                                </div>
                                            </div>    
                                            <div className='p-5'>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <video controls w-full>
                                                <source src={YOASOBI}/>
                                            </video>
                                        </div>
                                        <div className='p-5 gap-x-10 flex '>
                                            <div className='flex rounded-2xl hover:bg-gray-200 p-2'>
                                                <LikeIcon/>
                                                <p>Like</p>
                                            </div>
                                            <div className='flex rounded-2xl hover:bg-gray-200 p-2'>
                                                <CommmentIcon/>
                                                <p>Comment</p>
                                            </div>
                                            <div className='flex rounded-2xl hover:bg-gray-200 p-2'>
                                                <ShareIcon/>
                                                <p>Share</p>
                                            </div>
                                        </div>                                   
                                    </div>
                                    <div className='bg-white w-full h-11/12 rounded-4xl '>
                                        <div>
                                            <div className="flex gap-2  h-40 p-5">
                                                <img src={ben10pf} className="w-10 h-10 bg-gray-300 rounded-full hover:bg-gray-400" />
                                                <div className='pt-2 flex gap-1'>
                                                    <p className="text-sm ">Ben 10 </p>
                                                    <p className="text-blue-600 text-sm hover:underline">Follow </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <video controls w-full>
                                                <source src={YOASOBI}/>
                                            </video>
                                        </div>
                                        <div>
                                            <div>
                                                <LikeIcon/>
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