import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7cgacnl",
        "template_8r2ifzm",
        form.current,
        "E0BKhxqmpZg0rpQx9"
      )
      .then(
        (result) => {
          console.log(result.text);
          showToast();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function showToast() {
    toast("Message send", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      
    });
  }

  return (
    <div  className=" lg:pt-0 lg:pr-10 lg:pb-0 lg:pl-10 xs:pt-9 xs:pr-2 xs:pb-9 xs:pl-2 max-w-[1000px] my-0 mx-auto">
      <div className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <div className="max-w-[400px] mx-auto ">
          <h3 className="p-4 pl-0 text-lg font-semibold text-gray-700 capitalize">
            Designing spaces with purpose. Contact us to get started.
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#0398DA] focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
                name="client_name"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#0398DA] focus:outline-none"
                id="exampleInput8"
                placeholder="Phone"
                name="client_phone"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
                name="client_email"
                required
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="
              form-control
              block}
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
                name="client_message"
                required
              ></textarea>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#0398DA] checked:border-[#0398DA] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87"
                checked
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="exampleCheck87"
              >
                Send me a copy of this message
              </label>
            </div>
            <button
              type="submit"
              value="Send"
              className="
            w-full
            px-6
            py-2.5
            bg-[#0398DA]
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-500 hover:shadow-lg
            focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-700 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              Send
            </button>
            {/* <ToastContainer className="z-50" /> */}
          </form>
        </div>
      </div>
    </div>
  );

};

export default ContactUs;
