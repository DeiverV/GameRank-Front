export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-screen bg-gradient-to-r from-gameRanks_primary to-gameRanks_secondary relative">
      {children}

      <div className="absolute right-8 bottom-8 flex items-center gap-4 select-none">
        <h2 className="text-xl md:text-2xl text-gameRanks_primary lg:text-white">
          GameRanks
        </h2>
        <img
          src="/appLogo.png"
          alt="appLogo"
          className="object-cover w-12 lg:w-16"
        />
      </div>
    </section>
  );
}
