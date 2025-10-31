import person from "../../assets/images/person2.png";
import vd from "../../assets/vds/portfolio.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-10 lg:-bottom-16 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-14 lg:p-12 md:p-10 sm:p-8 p-5`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* 🧍‍♂️ Text side */}
        <div className="flex-1 text-gray-700 max-md:text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Welcome to My ePortfolio
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            This space will grow and evolve over time, just like my experiences.
            I hope it gives a clear and inspiring picture of my path, my values,
            and my ambitions. Thank you for visiting my ePortfolio!
          </p>
        </div>

        {/* 📱 Video Reel side */}
        <div className="flex-1 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[280px] border border-gray-300 bg-black">
            <video
              src={vd}
              className="w-full h-full object-cover"
              loop
              playsInline
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
