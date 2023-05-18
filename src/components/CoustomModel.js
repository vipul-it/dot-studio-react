import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

export default function CoustomModal() {
  const [showModal, setShowModal] = React.useState(false);

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
      zIndex: 999999,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  return (
    <>
      <button
        className="bg-dot-b text-white active:bg-dot-bp font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <MdOutlineEmail className="w-5 h-5" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" shadow-lg relative flex flex-col w-full bg-white rounded-lg  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-end  p-3 mr-4 ">
                  <button
                    className=" text-blue-400 background-transparent font-bold uppercase  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineCloseSquare className="w-6 h-6" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative  flex-auto">
                  <div>
                    <div className=" max-w-sm p-6 pt-1 bg-white border border-gray-200 rounded-lg shadow-lg ">
                      <div className="max-w-[400px] mx-auto ">
                        <h3 className="p-4 pl-0 text-lg font-semibold text-gray-700 capitalize">
                          Designing spaces with purpose. Contact us to get
                          started.
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
              focus:text-gray-700 focus:bg-white focus:border-dot-b focus:outline-none"
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
              focus:text-gray-700 focus:bg-white focus:border-dot-b focus:outline-none"
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
              focus:text-gray-700 focus:bg-white focus:border-dot-bp focus:outline-none"
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
                          <div className="form-group form-check text-center mb-6 xs:flex">
                            <input
                              type="checkbox"
                              className="form-check-input  h-4 w-4 border  rounded-sm bg-white checked:bg-dot-bs checked:border-dot-b focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
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
            bg-dot-b
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-dot-bs hover:shadow-lg
            focus:bg-dot-b focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-dot-bp active:shadow-lg
            transition
            duration-150
            ease-in-out"
                          >
                            Send
                          </button>
                          <ToastContainer className="z-50" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
