/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import { images } from "../../assets";
import authHttpRequest from "../../services/Auth.services";
import useAuthProvider from "./../../hooks/useAuthProvider";
function Profile() {
  const { user } = useAuthProvider();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user?.user_id) {
      async function loadUserInfo() {
        try {
          const data = await authHttpRequest.getUserInfo(user?.user_id);
          console.log(data);
          setUserData(data);
        } catch (error) {
          console.log(error);
        }
      }
      loadUserInfo();
    }
  }, [user?.user_id]);
  console.log(userData);
  return (
    <section className="bg-white rounded-3xl max-w-6xl mx-auto my-10 shadow py-10">
      <div className="flex justify-between items-center">
        <div className="w-[30%]">
          <img
            className="block mx-auto h-[200px] rounded-full object-cover w-[200px]"
            src={images.man}
            alt=""
          />
        </div>

        <div className="w-[70%] space-y-3">
          {/* details */}
          <h1 className="text-4xl font-semibold">{userData?.username}</h1>

          <h4 className="text-xl  font-semibold text-[var(--text-color)]">
            Email : {userData?.email}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Profile;
