"use client";

import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <main className="min-h-screen w-full">
      <h1 className="text-4xl font-bold text-center">Spotifile</h1>
      <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>client-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{session?.user?.name}</p>
        <button onClick={() => signOut({callbackUrl: '/signin'})}>Sign out</button>
      {/* Profile or Login Screen */}
    </main>
  );
}
