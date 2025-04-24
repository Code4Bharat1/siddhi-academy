import { TbPhoneCall, TbMail } from "react-icons/tb";
import { PiBuildingsBold } from "react-icons/pi";

export default function ContactCards() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10  md:mt-20 md:mb-10   ">
      <div className="grid grid-cols-2 md:grid-cols-2 divide-y-0 md:divide-y-0 md:divide-x-2 divide-black gap-8 md:mb-30">
        {/* Left Side (Addresses) */}
        <div className="flex flex-col gap-10 pr-0 md:pr-6">
          {/* Address Block 1 */}
          <div className="flex items-start gap-4">
            <PiBuildingsBold className="text-7xl md:text-[50px]" />
            <p className="text-xs md:text-lg">
              Yogiraj Apartment, Shop No. 4, Kishan Nagar 3, Wagle Estate, Thane West <br />
              400604
            </p>
          </div>
          <hr />
          {/* Address Block 2 */}
          <div className="flex items-start gap-4">
            <PiBuildingsBold className="text-7xl md:text-[50px]" />
            <p className="text-xs md:text-lg">
              Yogiraj Apartment, Shop No. 4, Kishan Nagar 3, Wagle Estate, Thane West <br />
              400604
            </p>
          </div>
        </div>

        {/* Right Side (Contact Info) */}
        <div className="flex flex-col gap-10 md:gap-10 pt-1 md:pt-0 pl-0 md:pl-6 text-sm md:text-lg">
          {/* Contact Block 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <TbPhoneCall className="text-3xl md:text-[34px]" />
              <p className="font-semibold">+91 7208131213</p>
            </div>
            <div className="flex items-center gap-4">
              <TbMail className="text-3xl md:text-[34px] " />
              <p className="text-[10px] md:text-lg">siddhiacademy385@gmail.com</p>
            </div>
          </div>
          <hr />
          {/* Contact Block 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <TbPhoneCall className="text-3xl md:text-[34px]" />
              <p className="font-semibold text-sm md:text-lg">+91 9967363009</p>
            </div>
            <div className="flex items-center gap-4">
              <TbMail className="text-3xl md:text-[34px]" />
              <p className="text-[10px] md:text-lg">siddhiacademy385@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    


      {/* Google Map */}
      <div className="w-full flex justify-center my-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6724511380475!2d72.94608007510699!3d19.18995504975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b907f9041423%3A0xc309ef06bfa98d28!2sSiddhi%20Academy!5e0!3m2!1sen!2sin!4v1713436322355!5m2!1sen!2sin"
    className="md:min-w-7xl w-full sm:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
}
