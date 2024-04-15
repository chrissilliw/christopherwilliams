import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      {/* CONTAINER */}
      <div className="w-full flex py-4 gap-32" id="kontakt">
        <div className="w-2/3 flex flex-col">
          <h3 className=" text-4xl font-lato font-semibold">Hör gärna av er</h3>
        </div>
        <div className="w-1/3 flex flex-col">
          <h3 className="text-2xl font-lato font-semibold">Information</h3>
          <div className="mt-8 flex flex-col gap-3">
            <p>Christopher Williams</p>
            <div className="flex items-center gap-2">
              <IoMdMail />
              <p>hej@christopherwilliams.se</p>
            </div>
            {/* <p>+46 76 23 56 274</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
