"use client";

import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/libs/hooks";
import { setCredentials } from "@/libs/features/authSlice";

const AccessToken = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const dispatch = useAppDispatch();
  dispatch(
    setCredentials({ accessToken: session?.accessToken, user: session?.user })
  );

  return <>{session?.accessToken && children}</>;
};

export default AccessToken;
