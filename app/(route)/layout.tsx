import AccessToken from "@/components/AccessToken";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AccessToken>
      <div className="pb-[70px] md:pl-[100px] md:pb-0">
        <main className="container main">{children}</main>
      </div>
    </AccessToken>
  );
}
