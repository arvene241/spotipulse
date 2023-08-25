'use client'

import { useSession } from "next-auth/react";
import Profile from "@/components/Profile";
import { useAppDispatch } from "@/libs/hooks";
import { setCredentials } from "@/libs/features/authSlice";

export default function Home() {
  const { data: session } = useSession({
    required: true,
  });

  const dispatch = useAppDispatch();
  dispatch(setCredentials({ accessToken: session?.accessToken, user: session?.user }));

  return (
    <div className="pb-[70px] md:pl-[100px] md:pb-0">
      {session?.accessToken && <Profile />}
    </div>
  );
}
