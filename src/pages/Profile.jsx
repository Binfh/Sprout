import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, [navigate]);

  if (!userInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#81b341]">
      <Header />
      <div className="relative top-[162px] mb-[150px] max-md:pt-[100px] min-h-screen flex items-center justify-center">
        <div className="absolute z-10 bg-white/30 backdrop-blur-md shadow-lg rounded-2xl p-8 w-[400px]">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            User Profile
          </h1>
          <div className="flex justify-center mb-6">
            <img
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg mt-3"
              src="/src/assets/background/james-person-1.jpg"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="border-b pb-3">
              <p className="text-gray-500 text-sm">
                Username
              </p>
              <p className="font-semibold text-lg">
                {userInfo.username}
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold text-lg">
                {userInfo.email}
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-semibold text-lg">
                {userInfo.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
