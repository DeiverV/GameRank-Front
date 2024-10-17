import { Navbar } from "../../components/navbar/Navbar";
export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-gameRanks_primary min-h-screen">
      <Navbar />
      <div className="mx-[5%] lg:mx-[10%] py-5">{children}</div>
    </section>
  );
}
