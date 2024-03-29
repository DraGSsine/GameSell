"use client"
import Link from "next/link";
import { FacebookIcon, GoogleIcon } from "../../../../public/icons/Icons";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify';
import axios from "axios";
import EmailSentPage from "@/components/EmailSentPage";

// export const metadata = {
//   title: 'GameSell|login',
//   description: 'Generated by create next app',
// }
const Login = () => {
  const [_, setCookie] = useCookies()
  const [email, setEmail] = useState<String>()
  const [password, setPassword] = useState<String>()
  const [loading, setLoading] = useState<boolean>(false)
  const [emailVerified, setEmailVerified] = useState<boolean>(true)
  const router = useRouter()


  const HandleLogIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, { email, password });
      setCookie("access-token", data.token, { path: '/' })
      setCookie("userId", data.id, { path: '/' })
      setEmailVerified(true)
      toast.success('You loged in')
      router.replace('/')
      setLoading(false)
    } catch (error: any) {
      console.error(error)
      if (error?.response?.status == 401) {
        setEmailVerified(false)
        toast.warn(error?.response?.data || 'Sory,Pleas try later')
      } else {
        toast.error(error?.response?.data)
      }
      setLoading(false)
    }
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-full">
        <div className="relative flex flex-col justify-center mx-auto max-w-[525px] overflow-hidden h-screen sm:h-[80vh] rounded-lg bg-white md:py-16 px-10 sm:px-12 md:px-[60px]">
          {
            !emailVerified
              ?
              <EmailSentPage />
              :
              <div>
                <div className="w-full flex flex-col items-start mb-10">
                  <h1 className="text-2xl font-semibold tracking-wide text-secondary-color mb-2">Sign In</h1>
                  <p className="text-content-color">Please sign in to your account.</p>
                </div>
                <form action='/auth/login' method="POST" onSubmit={HandleLogIn}>
                  <div className="mb-6">
                    <input
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      type="text"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      type="password"
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-10">
                    {
                      loading ?
                        <button disabled className=" bordder-primary w-full cursor-pointer rounded-md border bg-primary-color  py-3 px-5 text-base  transition hover:bg-opacity-90 text-white focus:ring-4 font-medium mr-2 text-center">
                          <span>
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Loading...
                          </span>
                        </button>
                        :
                        <button className=" bordder-primary w-full cursor-pointer rounded-md border bg-primary-color  py-3 px-5 text-base text-white font-medium mr-2 text-center">
                          <span>
                            Sign in
                          </span>
                        </button>
                    }
                  </div>
                </form>
                <div className=" text-center">
                  <p className="mb-6 text-base text-[#adadad]">Connect With</p>
                  <ul className="-mx-2 mb-12 flex justify-between">
                    <li className="w-full px-2 cursor-pointer">
                      <a className="flex h-11 items-center justify-center rounded-md bg-white border-2 border-gray-300 hover:bg-opacity-90">
                        <GoogleIcon width="30" height="30" />
                        <span className=" font-semibold ml-3 text-gray-400">Google</span>
                      </a>
                    </li>
                    <li className="w-full px-2 cursor-pointer">
                      <a className="flex h-11 items-center justify-center rounded-md bg-white border-2 border-gray-300 hover:bg-opacity-90">
                        <FacebookIcon width="30" height="30" />
                        <span className=" font-semibold ml-3 text-gray-400">Facebook</span>
                      </a>
                    </li>
                  </ul>
                  <Link href='/auth/reset_password' className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline cursor-pointer">
                    Forget Password?
                  </Link>
                  <p className="text-base text-[#adadad]">
                    Not a member yet?
                    <Link href="/auth/register">
                      <span className=" cursor-pointer text-primary-color hover:underline">
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
};
export default Login;