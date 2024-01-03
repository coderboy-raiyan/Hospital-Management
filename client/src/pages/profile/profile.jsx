/* eslint-disable no-inner-declarations */
import { images } from "../../assets";
import useAuthProvider from "./../../hooks/useAuthProvider";
function Profile() {
  const { user } = useAuthProvider();

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
          <h1 className="text-4xl font-semibold">{user?.username}</h1>

          <h4 className="text-xl  font-semibold text-[var(--text-color)]">
            Email : {user?.email}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Profile;
