import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: " 9 rue daniel sorano Toulouse",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "Imanebentaibi19@gmil.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+33675868692",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2 bg-soft-white">
      <div
        className="content p-2 md:p-8 lg:p-12 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-center">
          <div>
<div className="my-8.75 flex flex-row justify-center items-center gap-6 flex-wrap">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
