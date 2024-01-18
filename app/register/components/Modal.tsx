import React from "react";
import { useRegister } from "../RegisterContext";
import { Button } from "@mui/material";

interface modalProps {
  fn: () => void;
}

export default function Modal({ fn }: modalProps) {
  const {
    setShowModal,
    firstInput,
    setFirstInput,
    secondInput,
    setSecondInput,
    thiredInput,
    setThiredInput,
    fouthInput,
    sendOTP,
    setFouthInput,
  }: any = useRegister();
  return (
    <>
      <>
        <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
          <div className="relative  w-1/2 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Email verification </h3>
                <button
                  className="p-1  ml-auto bg-white border-0 text-black  rounded-full  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex flex-col justify-center items-center">
                <div> Your code was sent to you via uom email</div>
                <div
                  className="flex justify-center space-x-3 mt-10"
                  data-hs-pin-input
                >
                  <input
                    type="text"
                    value={firstInput}
                    maxLength={1}
                    onChange={(e) => setFirstInput(e.target.value)}
                    className="block h-10 w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    data-hs-pin-input-item
                  />
                  <input
                    type="text"
                    value={secondInput}
                    maxLength={1}
                    onChange={(e) => setSecondInput(e.target.value)}
                    className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    data-hs-pin-input-item
                  />
                  <input
                    type="text"
                    value={thiredInput}
                    maxLength={1}
                    onChange={(e) => setThiredInput(e.target.value)}
                    className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    data-hs-pin-input-item
                  />
                  <input
                    type="text"
                    value={fouthInput}
                    onChange={(e) => setFouthInput(e.target.value)}
                    className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    data-hs-pin-input-item
                    maxLength={1}
                  />
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-5 bg-black">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => sendOTP()}
                >
                  Resend
                </Button>
                <Button variant="outlined" color="success" onClick={() => fn()}>
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
