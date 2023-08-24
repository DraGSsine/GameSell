"use client"
import ProfileNav from '@/components/profile/ProfileNav';
import SideBar from '@/components/profile/SideBar';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-[#262626]">
      <div className="h-full w-[100%] -mx-36 overflow-hidden">
        <ProfileNav />
        <div className="flex h-full w-full">
          <SideBar />
          <div className="overflow-auto w-full px-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

