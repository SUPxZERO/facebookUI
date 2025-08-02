import './App.css';
import { Link } from 'react-router-dom';



export default function App() {
 console.log("Hello")
  return (
   
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center gap-4 items-center w-full max-w-6xl px-6">

          {/* Left Side - Facebook Text */}
          <div className="flex flex-col space-y-4 max-w-md">
            <h1 className="text-blue-600 text-6xl font-bold">facebook</h1>
            <p className="text-2xl hidden md:block">
              Connect with friends and the world <br />
              around you on Facebook.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link to="/HomePage"  className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 px-25">
                
                  Login
              </Link>
                <p className="text-blue-600 text-sm text-center hover:underline cursor-pointer">
                  Forgot password?
                </p>
                <hr />
                <button className="bg-green-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-green-700 w-fit mx-auto">
                  Create new account
                </button>
              </div>
            </div>

            <p className="text-center mt-4 text-sm">
              <span className="font-bold cursor-pointer hover:underline">
                Create a Page
              </span>{' '}
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-4 py-6 text-xs text-gray-500 text-center space-y-2 border-t">
        {/* Language Row */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="hover:underline cursor-pointer">English (US)</span>
          <span className="hover:underline cursor-pointer">ភាសាខ្មែរ</span>
          <span className="hover:underline cursor-pointer">Français (France)</span>
          <span className="hover:underline cursor-pointer">Tiếng Việt</span>
          <span className="hover:underline cursor-pointer">中文(简体)</span>
          <span className="hover:underline cursor-pointer">ภาษาไทย</span>
          <span className="hover:underline cursor-pointer">한국어</span>
          <span className="hover:underline cursor-pointer">日本語</span>
          <span className="hover:underline cursor-pointer">Español</span>
          <span className="hover:underline cursor-pointer">Português (Brasil)</span>
          <span className="hover:underline cursor-pointer">Deutsch</span>
          <button className="border px-2 rounded-sm">+</button>
        </div>

        <hr className="my-2" />

        {/* Link Row */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Sign Up', 'Log In', 'Messenger', 'Facebook Lite', 'Video', 'Meta Pay',
            'Meta Store', 'Meta Quest', 'Ray-Ban Meta', 'Meta AI', 'Meta AI more content',
            'Instagram', 'Threads', 'Voting Information Center', 'Privacy Policy',
            'Privacy Center', 'About', 'Create ad', 'Create Page', 'Developers', 'Careers',
            'Cookies', 'Ad choices', 'Terms', 'Help', 'Contact Uploading & Non-Users'
          ].map((link) => (
            <span key={link} className="hover:underline cursor-pointer whitespace-nowrap">
              {link}
            </span>
          ))}
        </div>

        <p className="mt-3">&copy; 2025</p>
      </div>
        </div>
  
  );
}
