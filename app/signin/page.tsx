"use client";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center gap-8">
      <h1 className="font-black text-5xl">Spotipulse</h1>
      <button
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
        className="font-bold rounded-full hover:bg-offGreen bg-green py-3 px-8 uppercase tracking-widest"
      >
        Log in to Spotify
      </button>
    </section>
  );
};

export default SignIn;
