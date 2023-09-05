'use client'

import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <div className="pb-[70px] md:pl-[100px] md:pb-0">
      <main className="container main">{children}</main>
    </div>
  );
}
