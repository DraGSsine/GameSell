"use client"
import Loading from '@/components/loading/Loading';
import EmailReseted from '@/components/verification/EmailReseted';
import InvalidLink from '@/components/verification/InvalidLink';
import ValidLink from '@/components/verification/ValidLink';
import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function UpdateEmail({ params }: { params: { user_token: string } }) {
  const [isLinkValid, setIsLinkValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const { user_token } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}verification/update/update_email/${user_token}`
        );
        setIsLinkValid(true);
      } catch (error) {
        setIsLinkValid(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user_token]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-screen w-screen md:px-5 lg:px-10 xl:px-14">
      <nav className="h-[15vh] flex items-center">
        <Image src={"/Store-Logo.png"} width={150} height={150} alt="logo" />
      </nav>
      {isLinkValid ? (
        <EmailReseted/>
      ) : (
        <InvalidLink />
      )}
    </div>
  );
}

export default UpdateEmail;
