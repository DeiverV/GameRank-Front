export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-screen grid place-items-center">
      {children}
    </section>
  );
}
