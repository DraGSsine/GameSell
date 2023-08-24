"use client";
import React, { useState, useEffect, FormEvent, useRef } from "react";
import { EmailSentIcon } from "../../public/icons/Icons";
import { OtpTypes } from "@/types/types";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function EmailSentPage() {
    const [cookies] = useCookies(['userId']);
    const [canResend, setCanResend] = useState(true);
    const [timeLeft, setTimeLeft] = useState(30); // 30 seconds
    const [OTP, setOTP] = useState<OtpTypes>({
        firstDigit: "",
        secondDigit: "",
        thirdDigit: "",
        fourthDigit: "",
    });

    const router = useRouter()
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        let countdownInterval: NodeJS.Timeout | undefined;

        if (!canResend) {
            countdownInterval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            setCanResend(true);
        }

        return () => {
            clearInterval(countdownInterval);
        };
    }, [canResend, timeLeft]);

    const handleResendClick = async () => {
        setCanResend(false);
        setTimeLeft(30);
        inputRefs.current[0]?.focus();
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}verification/resend`, {
                headers: {
                    Authorization: `Bearer ${cookies.userId}`
                }
            });
            toast.success(response.data.message);
        } catch (error) {
            // Handle the error
            console.error(error);
        }
    };

    const handleVerifyCode = async () => {
        const OTPcode = Object.values(OTP).join('');

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}verification/verify-otp`, { OTPcode }, {
                headers: {
                    Authorization: `Bearer ${cookies.userId}`
                }
            });
            toast.success(response.data.message);
            router.push('/auth/login')
        } catch (error: any) {
            toast.error(error?.response?.data);
            console.error(error.response);
        }
    };


    const handleInputChange = (e: FormEvent<HTMLInputElement>, index: number) => {
        const element = e.target as HTMLInputElement;
        const inputValue = element.value;
        const firstDigit = inputValue.charAt(0);

        // Update the input value to only contain the first digit
        element.value = firstDigit;

        if (firstDigit && inputRefs.current[index + 1]) {
            // Move to the next input if a digit is entered
            inputRefs.current[index + 1]?.focus();
        } else if (!firstDigit && inputRefs.current[index - 1]) {
            // Handle Backspace functionality and move to the previous input
            inputRefs?.current[index - 1]?.focus();
        }
    };


    return (
        <div className="relative flex h-screen sm:h-[70vh] flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
            <div className="flex flex-col justify-center items-center">
                <h2 className="mb-8 text-4xl md:text-[42px] font-bold text-zinc-700">
                    Email Verification
                </h2>
                <EmailSentIcon height='143' width='292' />
                <div className="max-w-xl text-center mt-6">
                    <p className="mb-6 text-base md:text-lg text-zinc-500">
                        We have sent you a verification code to your email address.
                    </p>
                    <div>
                        <div className="flex gap-2 max-w-full items-center justify-center">
                            <input
                                onChange={(e) => setOTP({ ...OTP, firstDigit: e.target.value })}
                                type="number"
                                className="text-1xl text-center h-9 w-9 pt-1 outline-none border-2 rounded-lg border-primary-color"
                                onInput={(e) => handleInputChange(e, 0)}
                                ref={(ref) => (inputRefs.current[0] = ref)}
                            />
                            <input
                                onChange={(e) =>
                                    setOTP({ ...OTP, secondDigit: e.target.value })
                                }
                                type="number"
                                className="text-1xl text-center h-9 w-9 pt-1 outline-none border-2 rounded-lg border-primary-color"
                                onInput={(e) => handleInputChange(e, 1)}
                                ref={(ref) => (inputRefs.current[1] = ref)}
                            />
                            <input
                                onChange={(e) => setOTP({ ...OTP, thirdDigit: e.target.value })}
                                type="number"
                                className="text-1xl text-center h-9 w-9 pt-1 outline-none border-2 rounded-lg border-primary-color"
                                onInput={(e) => handleInputChange(e, 2)}
                                ref={(ref) => (inputRefs.current[2] = ref)}
                            />
                            <input
                                onChange={(e) =>
                                    setOTP({ ...OTP, fourthDigit: e.target.value })
                                }
                                type="number"
                                className="text-1xl text-center h-9 w-9 pt-1 outline-none border-2 rounded-lg border-primary-color"
                                onInput={(e) => handleInputChange(e, 3)}
                                ref={(ref) => (inputRefs.current[3] = ref)}
                            />
                        </div>
                        <span className="block text-sm mt-5">
                            {canResend ? (
                                <span className="text-zinc-600">
                                    Didn't receive the code?{" "}
                                    <strong
                                        onClick={handleResendClick}
                                        className="text-primary-color cursor-pointer"
                                    >
                                        Resend
                                    </strong>
                                </span>
                            ) : (
                                <span className="text-zinc-600">
                                    Please wait... {timeLeft} seconds
                                </span>
                            )}
                        </span>
                        <button
                            className={`mt-3 inline-block rounded-3xl bg-primary-color px-10 py-2 font-medium text-white shadow-md shadow-primary-color/20 ${canResend && "hover:bg-primary-hard-color"
                                }`}
                            onClick={handleVerifyCode}
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailSentPage;
