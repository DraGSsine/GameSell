"use client";
import { updateProfilePassword, updateProfileEmail } from "@/redux/features/profile-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { ProfileState } from "@/types/types";
import React, { useEffect, useReducer, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// Reducer function

export default function Page() {
  const [ShowEditEmail, setShowEditEmail] = useState<boolean>(false);
  const [ShowEditPassword, setShowEditPassword] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("yassineouchen@outlook.com");
  const [newEmail, setNewEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [ConfiremNewPassword, setConfiremNewPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<Boolean>(false);
  const [cookie]= useCookies()

  const token = cookie['access-token']
  const { res, error, loading } = useSelector<RootState>(
    (state) => state.updateProfileReducer
  ) as ProfileState;
    console.log(res,error)
  const updateEmail = () => {
    dispatch(updateProfileEmail({ newEmail,token }));
  };
  const updatePassword = () => {
    dispatch(updateProfilePassword({ currentPassword, newPassword,token }));
  };

  const handdlePasswordValidation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (newPassword !== ConfiremNewPassword) {
      setPasswordMatch(false)
    } else {
      setPasswordMatch(true)
    }
  }

  return (
    <div className="m-10 pt-4 flex flex-col gap-12">
      <div>
        <h1 className="font-semibold text-white text-lg mb-2">Email</h1>
        {ShowEditEmail ? (
          <div>
            <div className=" select-none mt-5">
              <span className=" text-[#FFFFFF]">Current email</span>
              <div className=" text-[#B6B6B6] border w-[260px] py-1 px-4 rounded-full my-1 flex items-center h-[40px] bg-[#353535]">
                {email}
              </div>
            </div>
            <div className=" mt-5">
              <span className=" text-[#FFFFFF]">New email</span>
              <div className=" text-[#FFFFFF] border border-green-600 w-[260px] py-1 px-4 rounded-full my-1 bg-[#353535] h-[40px]">
                <input
                  onChange={(e) => setNewEmail(e.target.value)}
                  autoFocus
                  type="email"
                  className=" w-full h-full bg-inherit outline-none"
                />
              </div>
            </div>
            <div className=" my-4">
              <button
                onClick={() => setShowEditEmail(false)}
                className="bg-[#737373] mr-5 text-white my-2 rounded-full text-xs w-[130px] text-[13px] font-semibold  p-[12px] h-[38px]"
              >
                Cancel
              </button>
              {loading ? (
                <button
                  disabled
                  className="  bg-primary-color text-white my-2 rounded-full text-xs w-[130px] text-[13px] font-semibold  p-[12px] h-[38px]"
                >
                  <span>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </span>
                </button>
              ) : (
                <button
                  onClick={updateEmail}
                  className="  bg-primary-color text-white my-2 rounded-full text-xs w-[130px] text-[13px] font-semibold  p-[12px] h-[38px]"
                >
                  <span>Register</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-200 my-2">{email}</p>
            <button
              onClick={() => setShowEditEmail(!ShowEditEmail)}
              className="bg-primary-color text-white px-8 py-1 rounded-full"
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <div>
        <h1 className="font-semibold text-white text-lg mb-2">Password</h1>
        {ShowEditPassword ? (
          <div>
            <div className=" select-none mt-5">
              <span className=" text-[#FFFFFF]">Current Password</span>
              <div className=" text-[#FFFFFF] border border-green-600 w-[200px] py-1 px-4 rounded-full my-1 bg-[#353535] h-[40px]">
                <input
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoFocus
                  type="password"
                  className=" w-full h-full bg-inherit outline-none"
                />
              </div>{" "}
            </div>
            <div className=" mt-5">
              <span className=" text-[#FFFFFF]">New Password</span>
              <div className=" text-[#FFFFFF] border border-green-600 w-[200px] py-1 px-4 rounded-full my-1 bg-[#353535] h-[40px]">
                <input
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  className=" w-full h-full bg-inherit outline-none"
                />
              </div>
            </div>
            <div className=" mt-5">
              <span className=" text-[#FFFFFF]">Confirme Password</span>
              <div className={` text-[#FFFFFF] border ${passwordMatch ? 'border-green-600' : 'border-red-600'} w-[200px] py-1 px-4 rounded-full my-1 bg-[#353535] h-[40px]`}>
                <input
                  onChange={(e) => setConfiremNewPassword(e.target.value)}
                  onKeyUp={(e) => handdlePasswordValidation(e)}
                  type="password"
                  className=" w-full h-full bg-inherit outline-none"
                />
              </div>
            </div>
            <div className=" my-4 space-x-4">
              <button
                onClick={() => setShowEditPassword(false)}
                className="bg-[#737373] text-white my-2 rounded-full text-xs w-[130px] text-[13px] font-semibold  p-[12px] h-[38px]"
              >
                Cancel
              </button>
              <button
                disabled={passwordMatch ? false : true}
                onClick={updatePassword}
                className={`bg-primary-color ${!passwordMatch&&'opacity-50'} text-white my-2 rounded-full text-xs w-[130px] text-[13px] font-semibold p-[12px] h-[38px]`}>

                Change Password
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                dispatch({ type: "CHANGE_PASSWORD" }),
                  setShowEditPassword(!ShowEditPassword);
              }}
              className="bg-primary-color text-white px-8 py-1 rounded-full"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
