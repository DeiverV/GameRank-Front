"use client";
import { Navbar } from "@/src/components";
import { withSecurity } from "./security";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-gameRanks_primary min-h-screen relative pb-16 md:pb-4">
      <Navbar />
      <div className="mx-[5%] lg:mx-[15%] xl:mx-[22%] py-5">{children}</div>
    </section>
  );
}

export default withSecurity(AdminLayout);
