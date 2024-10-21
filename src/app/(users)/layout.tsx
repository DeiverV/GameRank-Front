import { Navbar } from "../../components/navbar/Navbar";
export default function UsersLayout({
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
